"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiGatewayModule = void 0;
var common_1 = require("@nestjs/common");
var config_1 = require("@nestjs/config");
var microservices_1 = require("@nestjs/microservices");
var auth_module_1 = require("./auth/auth.module");
var transaction_controller_1 = require("./controllers/transaction.controller");
var payment_method_controller_1 = require("./controllers/payment-method.controller");
var proxy_service_1 = require("./services/proxy.service");
var core_1 = require("@nestjs/core");
var response_interceptor_1 = require("./utils/response.interceptor");
var ApiGatewayModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            imports: [
                config_1.ConfigModule.forRoot({
                    isGlobal: true,
                    envFilePath: '.env',
                }),
                microservices_1.ClientsModule.registerAsync([
                    {
                        name: 'TRANSACTION_SERVICE',
                        useFactory: function (configService) { return ({
                            transport: microservices_1.Transport.RMQ,
                            options: {
                                urls: [configService.get('rabbitmq')],
                                queue: 'transaction_queue',
                                queueOptions: {
                                    durable: true,
                                },
                            },
                        }); },
                        inject: [config_1.ConfigService],
                    },
                    {
                        name: 'PAYMENT_SERVICE',
                        useFactory: function (configService) { return ({
                            transport: microservices_1.Transport.RMQ,
                            options: {
                                urls: [configService.get('rabbitmq')],
                                queue: 'payment_queue',
                                queueOptions: {
                                    durable: true,
                                },
                            },
                        }); },
                        inject: [config_1.ConfigService],
                    },
                ]),
                auth_module_1.AuthModule,
            ],
            controllers: [transaction_controller_1.TransactionController, payment_method_controller_1.PaymentMethodController],
            providers: [
                proxy_service_1.ProxyService,
                {
                    provide: core_1.APP_INTERCEPTOR,
                    useClass: response_interceptor_1.ResponseInterceptor,
                },
            ],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ApiGatewayModule = _classThis = /** @class */ (function () {
        function ApiGatewayModule_1() {
        }
        return ApiGatewayModule_1;
    }());
    __setFunctionName(_classThis, "ApiGatewayModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ApiGatewayModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ApiGatewayModule = _classThis;
}();
exports.ApiGatewayModule = ApiGatewayModule;
