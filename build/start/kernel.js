"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Server"));
Server_1.default.middleware.register([
    'Adonis/Core/BodyParserMiddleware',
    'App/Middleware/SilentAuth',
]);
Server_1.default.middleware.registerNamed({
    auth: 'App/Middleware/Auth',
});
//# sourceMappingURL=kernel.js.map