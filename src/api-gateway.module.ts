import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthModule } from './auth/auth.module';
import { TransactionController } from './controllers/transaction.controller';
import { PaymentMethodController } from './controllers/payment-method.controller';
import { ProxyService } from './services/proxy.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from './utils/response.interceptor';
import { AuthController } from './controllers/auth.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ClientsModule.registerAsync([
      {
        name: 'TRANSACTION_SERVICE',
        useFactory: (configService: ConfigService) => {
          const rabbitMqUrl = configService.get('RABBIT_MQ_URI');
          if (!rabbitMqUrl) {
            throw new Error('RabbitMQ URL is not defined');
          }
          return {
            transport: Transport.RMQ,
            options: {
              urls: [rabbitMqUrl],
              queue: 'transaction_queue',
              queueOptions: {
                durable: true,
              },
            },
          };
        },
        inject: [ConfigService],
      },
      {
        name: 'PAYMENT_SERVICE',
        useFactory: (configService: ConfigService) => {
          const rabbitMqUrl = configService.get('RABBIT_MQ_URI');
          if (!rabbitMqUrl) {
            throw new Error('RabbitMQ URL is not defined');
          }
          return {
            transport: Transport.RMQ,
            options: {
              urls: [rabbitMqUrl],
              queue: 'payment_queue',
              queueOptions: {
                durable: true,
              },
            },
          };
        },
        inject: [ConfigService],
      },
    ]),
    AuthModule,
  ],
  controllers: [TransactionController, PaymentMethodController],
  providers: [
    ProxyService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class ApiGatewayModule {}
