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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePaymentMethodDto = exports.PaymentMethodType = void 0;
var class_validator_1 = require("class-validator");
var swagger_1 = require("@nestjs/swagger");
var PaymentMethodType;
(function (PaymentMethodType) {
    PaymentMethodType["CREDIT_CARD"] = "CREDIT_CARD";
    PaymentMethodType["BANK_ACCOUNT"] = "BANK_ACCOUNT";
})(PaymentMethodType || (exports.PaymentMethodType = PaymentMethodType = {}));
var CreatePaymentMethodDto = function () {
    var _a;
    var _type_decorators;
    var _type_initializers = [];
    var _type_extraInitializers = [];
    var _cardNumber_decorators;
    var _cardNumber_initializers = [];
    var _cardNumber_extraInitializers = [];
    var _expiryMonth_decorators;
    var _expiryMonth_initializers = [];
    var _expiryMonth_extraInitializers = [];
    var _expiryYear_decorators;
    var _expiryYear_initializers = [];
    var _expiryYear_extraInitializers = [];
    var _cardholderName_decorators;
    var _cardholderName_initializers = [];
    var _cardholderName_extraInitializers = [];
    var _bankName_decorators;
    var _bankName_initializers = [];
    var _bankName_extraInitializers = [];
    var _accountNumber_decorators;
    var _accountNumber_initializers = [];
    var _accountNumber_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreatePaymentMethodDto() {
                this.type = __runInitializers(this, _type_initializers, void 0);
                this.cardNumber = (__runInitializers(this, _type_extraInitializers), __runInitializers(this, _cardNumber_initializers, void 0));
                this.expiryMonth = (__runInitializers(this, _cardNumber_extraInitializers), __runInitializers(this, _expiryMonth_initializers, void 0));
                this.expiryYear = (__runInitializers(this, _expiryMonth_extraInitializers), __runInitializers(this, _expiryYear_initializers, void 0));
                this.cardholderName = (__runInitializers(this, _expiryYear_extraInitializers), __runInitializers(this, _cardholderName_initializers, void 0));
                this.bankName = (__runInitializers(this, _cardholderName_extraInitializers), __runInitializers(this, _bankName_initializers, void 0));
                this.accountNumber = (__runInitializers(this, _bankName_extraInitializers), __runInitializers(this, _accountNumber_initializers, void 0));
                __runInitializers(this, _accountNumber_extraInitializers);
            }
            return CreatePaymentMethodDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _type_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Type of payment method',
                    enum: PaymentMethodType,
                    example: 'CREDIT_CARD',
                }), (0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsEnum)(PaymentMethodType)];
            _cardNumber_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Credit card number',
                    example: '4111111111111111',
                    required: false,
                }), (0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)()];
            _expiryMonth_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Card expiry month (1-12)',
                    minimum: 1,
                    maximum: 12,
                    example: 12,
                    required: false,
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsNumber)(), (0, class_validator_1.Min)(1), (0, class_validator_1.Max)(12)];
            _expiryYear_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Card expiry year',
                    example: 2025,
                    required: false,
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsNumber)()];
            _cardholderName_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Name of the cardholder',
                    example: 'John Doe',
                    required: false,
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _bankName_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Bank name (for bank accounts)',
                    example: 'Chase Bank',
                    required: false,
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _accountNumber_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Bank account number',
                    example: '1234567890',
                    required: false,
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: function (obj) { return "type" in obj; }, get: function (obj) { return obj.type; }, set: function (obj, value) { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
            __esDecorate(null, null, _cardNumber_decorators, { kind: "field", name: "cardNumber", static: false, private: false, access: { has: function (obj) { return "cardNumber" in obj; }, get: function (obj) { return obj.cardNumber; }, set: function (obj, value) { obj.cardNumber = value; } }, metadata: _metadata }, _cardNumber_initializers, _cardNumber_extraInitializers);
            __esDecorate(null, null, _expiryMonth_decorators, { kind: "field", name: "expiryMonth", static: false, private: false, access: { has: function (obj) { return "expiryMonth" in obj; }, get: function (obj) { return obj.expiryMonth; }, set: function (obj, value) { obj.expiryMonth = value; } }, metadata: _metadata }, _expiryMonth_initializers, _expiryMonth_extraInitializers);
            __esDecorate(null, null, _expiryYear_decorators, { kind: "field", name: "expiryYear", static: false, private: false, access: { has: function (obj) { return "expiryYear" in obj; }, get: function (obj) { return obj.expiryYear; }, set: function (obj, value) { obj.expiryYear = value; } }, metadata: _metadata }, _expiryYear_initializers, _expiryYear_extraInitializers);
            __esDecorate(null, null, _cardholderName_decorators, { kind: "field", name: "cardholderName", static: false, private: false, access: { has: function (obj) { return "cardholderName" in obj; }, get: function (obj) { return obj.cardholderName; }, set: function (obj, value) { obj.cardholderName = value; } }, metadata: _metadata }, _cardholderName_initializers, _cardholderName_extraInitializers);
            __esDecorate(null, null, _bankName_decorators, { kind: "field", name: "bankName", static: false, private: false, access: { has: function (obj) { return "bankName" in obj; }, get: function (obj) { return obj.bankName; }, set: function (obj, value) { obj.bankName = value; } }, metadata: _metadata }, _bankName_initializers, _bankName_extraInitializers);
            __esDecorate(null, null, _accountNumber_decorators, { kind: "field", name: "accountNumber", static: false, private: false, access: { has: function (obj) { return "accountNumber" in obj; }, get: function (obj) { return obj.accountNumber; }, set: function (obj, value) { obj.accountNumber = value; } }, metadata: _metadata }, _accountNumber_initializers, _accountNumber_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreatePaymentMethodDto = CreatePaymentMethodDto;
