import { Controller, Post, Body } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private jwtService: JwtService) {}

  @ApiOperation({ summary: 'Login to get JWT token (for testing only)' })
  @ApiResponse({
    status: 200,
    description: 'JWT token',
    schema: {
      type: 'object',
      properties: {
        access_token: { type: 'string' },
      },
    },
  })
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    console.log('logindto', loginDto);
    // In a real app, you'd validate credentials
    // This is just for testing

    const payload = {
      sub: '123',
      username: loginDto.email,
      roles: ['user'],
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
