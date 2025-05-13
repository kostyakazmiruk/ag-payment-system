"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.envConfig = null;
        this.envConfig = {};
        this.envConfig.port = process.env.API_GATEWAY_PORT;
        this.envConfig.rabbitMQ = process.env.RABBIT_MQ_URI;
        this.envConfig.jwtSecret = process.env.JWT_SECRET;
        // this.envConfig.tokenService = {
        //   options: {
        //     port: process.env.TOKEN_SERVICE_PORT,
        //     host: process.env.TOKEN_SERVICE_HOST,
        //   },
        //   transport: Transport.TCP,
        // };
        // this.envConfig.userService = {
        //   options: {
        //     port: process.env.USER_SERVICE_PORT,
        //     host: process.env.USER_SERVICE_HOST,
        //   },
        //   transport: Transport.TCP,
        // };
        // this.envConfig.taskService = {
        //   options: {
        //     port: process.env.TASK_SERVICE_PORT,
        //     host: process.env.TASK_SERVICE_HOST,
        //   },
        //   transport: Transport.TCP,
        // };
        // this.envConfig.permissionService = {
        //   options: {
        //     port: process.env.PERMISSION_SERVICE_PORT,
        //     host: process.env.PERMISSION_SERVICE_HOST,
        //   },
        //   transport: Transport.TCP,
        // };
    }
    ConfigService.prototype.get = function (key) {
        return this.envConfig[key];
    };
    return ConfigService;
}());
exports.ConfigService = ConfigService;
