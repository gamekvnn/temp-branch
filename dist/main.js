/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/platform-fastify");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var SchedulerService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SchedulerService = void 0;
const common_1 = __webpack_require__(1);
const common_2 = __webpack_require__(6);
let SchedulerService = SchedulerService_1 = class SchedulerService {
    constructor(logger) {
        this.logger = logger;
        this.logger.setContext(SchedulerService_1.name);
    }
    run() {
        const jobs = [];
        if (jobs.length === 0) {
            this.logger.warn('No jobs found');
            return;
        }
        this.logger.log('--- Scheduler started ---');
    }
};
exports.SchedulerService = SchedulerService;
exports.SchedulerService = SchedulerService = SchedulerService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof common_2.Logger !== "undefined" && common_2.Logger) === "function" ? _a : Object])
], SchedulerService);


/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(7), exports);
__exportStar(__webpack_require__(19), exports);
__exportStar(__webpack_require__(23), exports);
__exportStar(__webpack_require__(26), exports);
__exportStar(__webpack_require__(32), exports);
__exportStar(__webpack_require__(36), exports);
__exportStar(__webpack_require__(41), exports);
__exportStar(__webpack_require__(7), exports);
__exportStar(__webpack_require__(42), exports);
__exportStar(__webpack_require__(12), exports);
__exportStar(__webpack_require__(45), exports);


/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(8), exports);
__exportStar(__webpack_require__(9), exports);
__exportStar(__webpack_require__(10), exports);
__exportStar(__webpack_require__(11), exports);


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Public = void 0;
const common_1 = __webpack_require__(1);
const Public = () => (0, common_1.SetMetadata)('isPublic', true);
exports.Public = Public;


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReqUser = void 0;
const common_1 = __webpack_require__(1);
exports.ReqUser = (0, common_1.createParamDecorator)((_data, context) => {
    const request = context.switchToHttp().getRequest();
    return request.user;
});


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Roles = void 0;
const common_1 = __webpack_require__(1);
const Roles = (...roles) => (0, common_1.SetMetadata)('roles', roles);
exports.Roles = Roles;


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UUIDParam = exports.Auth = void 0;
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(4);
const enums_1 = __webpack_require__(12);
const auth_user_interceptor_1 = __webpack_require__(18);
const roles_decorator_1 = __webpack_require__(10);
function Auth(role = enums_1.RoleEnum.USER) {
    return (0, common_1.applyDecorators)((0, roles_decorator_1.Roles)(role, enums_1.RoleEnum.ADMIN), (0, swagger_1.ApiBearerAuth)(), (0, common_1.UseInterceptors)(auth_user_interceptor_1.AuthUserInterceptor), (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Unauthorized' }));
}
exports.Auth = Auth;
function UUIDParam(property, ...pipes) {
    return (0, common_1.Param)(property, new common_1.ParseUUIDPipe({ version: '4' }), ...pipes);
}
exports.UUIDParam = UUIDParam;


/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(13), exports);
__exportStar(__webpack_require__(14), exports);
__exportStar(__webpack_require__(15), exports);
__exportStar(__webpack_require__(16), exports);
__exportStar(__webpack_require__(17), exports);


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TimeEnum = void 0;
var TimeEnum;
(function (TimeEnum) {
    TimeEnum[TimeEnum["ONE_SECOND"] = 1000] = "ONE_SECOND";
    TimeEnum[TimeEnum["ONE_MINUTE"] = 60000] = "ONE_MINUTE";
})(TimeEnum || (exports.TimeEnum = TimeEnum = {}));


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoleEnum = void 0;
var RoleEnum;
(function (RoleEnum) {
    RoleEnum["USER"] = "USER";
    RoleEnum["MOD"] = "MOD";
    RoleEnum["ADMIN"] = "ADMIN";
    RoleEnum["SUPER_ADMIN"] = "SUPER_ADMIN";
})(RoleEnum || (exports.RoleEnum = RoleEnum = {}));


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SortByEnum = void 0;
var SortByEnum;
(function (SortByEnum) {
    SortByEnum["CREATED_AT"] = "createdAt";
})(SortByEnum || (exports.SortByEnum = SortByEnum = {}));


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderByEnum = void 0;
var OrderByEnum;
(function (OrderByEnum) {
    OrderByEnum["ASC"] = "asc";
    OrderByEnum["DESC"] = "desc";
})(OrderByEnum || (exports.OrderByEnum = OrderByEnum = {}));


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeployStatusEnum = void 0;
var DeployStatusEnum;
(function (DeployStatusEnum) {
    DeployStatusEnum["PENDING"] = "pending";
    DeployStatusEnum["COMPLETED"] = "completed";
    DeployStatusEnum["FAILED"] = "failed";
    DeployStatusEnum["EXPIRED"] = "expired";
})(DeployStatusEnum || (exports.DeployStatusEnum = DeployStatusEnum = {}));


/***/ }),
/* 18 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthUserInterceptor = void 0;
const common_1 = __webpack_require__(1);
let AuthUserInterceptor = class AuthUserInterceptor {
    intercept(_context, next) {
        return next.handle();
    }
};
exports.AuthUserInterceptor = AuthUserInterceptor;
exports.AuthUserInterceptor = AuthUserInterceptor = __decorate([
    (0, common_1.Injectable)()
], AuthUserInterceptor);


/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(20), exports);
__exportStar(__webpack_require__(21), exports);


/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExceptionsFilter = void 0;
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
let ExceptionsFilter = class ExceptionsFilter extends core_1.BaseExceptionFilter {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger();
    }
    catch(exception) {
        let args;
        const status = this.getHttpStatus(exception);
        if (status === common_1.HttpStatus.INTERNAL_SERVER_ERROR) {
            if (exception instanceof Error) {
                this.logger.error(`${exception.message}: ${args}`, exception.stack);
            }
            else {
                this.logger.error('UnhandledException', exception);
            }
        }
    }
    getHttpStatus(exception) {
        return exception instanceof common_1.HttpException ? exception.getStatus() : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
    }
};
exports.ExceptionsFilter = ExceptionsFilter;
exports.ExceptionsFilter = ExceptionsFilter = __decorate([
    (0, common_1.Catch)()
], ExceptionsFilter);


/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpExceptionFilter = void 0;
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const lodash_1 = __importDefault(__webpack_require__(22));
let HttpExceptionFilter = class HttpExceptionFilter {
    constructor(reflector) {
        this.reflector = reflector;
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const statusCode = exception.getStatus();
        const r = exception.getResponse();
        const validationErrors = r.message;
        this.validationFilter(validationErrors);
        response.status(statusCode).json(r);
    }
    validationFilter(validationErrors) {
        for (const validationError of validationErrors) {
            const children = validationError.children;
            if (children && !lodash_1.default.isEmpty(children)) {
                this.validationFilter(children);
                return;
            }
            delete validationError.children;
            const constraints = validationError.constraints;
            if (!constraints) {
                return;
            }
            for (const [constraintKey, constraint] of Object.entries(constraints)) {
                if (!constraint) {
                    constraints[constraintKey] = `error.fields.${lodash_1.default.snakeCase(constraintKey)}`;
                }
            }
        }
    }
};
exports.HttpExceptionFilter = HttpExceptionFilter;
exports.HttpExceptionFilter = HttpExceptionFilter = __decorate([
    (0, common_1.Catch)(common_1.UnprocessableEntityException),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object])
], HttpExceptionFilter);


/***/ }),
/* 22 */
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(24), exports);


/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggerMiddleware = void 0;
const common_1 = __webpack_require__(1);
const nanoid_1 = __webpack_require__(25);
const providers_1 = __webpack_require__(26);
let LoggerMiddleware = class LoggerMiddleware {
    constructor(logger) {
        this.logger = logger;
        this.passUrl = ['/health', '/graphql', '/stream/wallets'];
    }
    use(req, res, next) {
        var _a, _b;
        if (this.passUrl.includes(req.originalUrl)) {
            return next();
        }
        req.id = req.headers['X-Request-Id'] || (0, nanoid_1.nanoid)();
        res.setHeader('X-Request-Id', req.id);
        const user = ((_a = req.user) === null || _a === void 0 ? void 0 : _a.userId) || '';
        const ip = ((_b = req.headers) === null || _b === void 0 ? void 0 : _b['x-forwarded-for']) ? req.headers['x-forwarded-for'] : req.ip;
        this.logger.log(`${req.method} ${req.originalUrl} - ${ip === null || ip === void 0 ? void 0 : ip.replace('::ffff:', '')} ${user}`);
        return next();
    }
};
exports.LoggerMiddleware = LoggerMiddleware;
exports.LoggerMiddleware = LoggerMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof providers_1.Logger !== "undefined" && providers_1.Logger) === "function" ? _a : Object])
], LoggerMiddleware);


/***/ }),
/* 25 */
/***/ ((module) => {

module.exports = require("nanoid");

/***/ }),
/* 26 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(27), exports);
__exportStar(__webpack_require__(29), exports);
__exportStar(__webpack_require__(30), exports);
__exportStar(__webpack_require__(31), exports);


/***/ }),
/* 27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigService = void 0;
const common_1 = __webpack_require__(1);
const config_1 = __webpack_require__(28);
let ConfigService = class ConfigService extends config_1.ConfigService {
    get(path) {
        const value = super.get(path, { infer: true });
        if (value === undefined) {
            throw new Error(`NotFoundConfig: ${path}`);
        }
        return value;
    }
};
exports.ConfigService = ConfigService;
exports.ConfigService = ConfigService = __decorate([
    (0, common_1.Injectable)()
], ConfigService);


/***/ }),
/* 28 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 29 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Logger = void 0;
const common_1 = __webpack_require__(1);
const request_context_service_1 = __webpack_require__(30);
let Logger = class Logger extends common_1.ConsoleLogger {
    constructor(req, context) {
        super(context);
        this.req = req;
        this.isProduction = process.env.NODE_ENV === 'production';
        this.options = {
            logLevels: ['log', 'error', 'warn', 'debug', 'verbose'],
            timestamp: !this.isProduction,
        };
    }
    get reqContext() {
        var _a;
        return ((_a = this.req.context) === null || _a === void 0 ? void 0 : _a.id) || '';
    }
    log(message, ...optionalParams) {
        super.log(message, ...this.parseContext(optionalParams));
    }
    warn(message, ...optionalParams) {
        super.warn(message, ...this.parseContext(optionalParams));
    }
    error(message, ...optionalParams) {
        let textMessage = message;
        if (message instanceof Error) {
            textMessage = message.stack;
        }
        else {
            console.log(message);
        }
        super.error(textMessage, ...this.parseContext(optionalParams));
    }
    getTimestamp() {
        return super.getTimestamp();
    }
    parseContext(params) {
        if (this.reqContext) {
            let context = this.reqContext;
            if (this.context) {
                context += `] [${this.context}`;
            }
            params.push(context);
        }
        return params;
    }
};
exports.Logger = Logger;
exports.Logger = Logger = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.TRANSIENT }),
    __metadata("design:paramtypes", [typeof (_a = typeof request_context_service_1.RequestContext !== "undefined" && request_context_service_1.RequestContext) === "function" ? _a : Object, String])
], Logger);


/***/ }),
/* 30 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RequestContext = void 0;
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
let RequestContext = class RequestContext {
    constructor(context) {
        this.context = context;
    }
};
exports.RequestContext = RequestContext;
exports.RequestContext = RequestContext = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [Object])
], RequestContext);


/***/ }),
/* 31 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UtilService = void 0;
const common_1 = __webpack_require__(1);
let UtilService = class UtilService {
    template(templateData, param, delimiter = '\n') {
        let output = '';
        for (let i = 0; i < param.length; i += 1) {
            output += templateData[i] + param[i];
        }
        output += templateData[param.length];
        const lines = output.split(/(?:\r\n|\n|\r)/);
        return lines
            .map((text) => text.replace(/^\s+/gm, ''))
            .join(delimiter)
            .trim();
    }
    pre(templateData, ...param) {
        return this.template(templateData, param, '\n');
    }
    line(templateData, ...param) {
        return this.template(templateData, param, ' ');
    }
    isKeyOfSchema(key, schema) {
        return typeof key === 'string' && key in schema;
    }
    removeUndefined(argv) {
        return Object.fromEntries(Object.entries(argv).filter(([, value]) => value !== undefined));
    }
};
exports.UtilService = UtilService;
exports.UtilService = UtilService = __decorate([
    (0, common_1.Injectable)()
], UtilService);


/***/ }),
/* 32 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(33), exports);
__exportStar(__webpack_require__(34), exports);


/***/ }),
/* 33 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParseFile = void 0;
const common_1 = __webpack_require__(1);
let ParseFile = class ParseFile {
    transform(files, _metadata) {
        if (files === undefined || files === null) {
            throw new common_1.BadRequestException('file_expected');
        }
        if (Array.isArray(files) && files.length === 0) {
            throw new common_1.BadRequestException('file_expected');
        }
        return files;
    }
};
exports.ParseFile = ParseFile;
exports.ParseFile = ParseFile = __decorate([
    (0, common_1.Injectable)()
], ParseFile);


/***/ }),
/* 34 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParseObjectId = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(35);
let ParseObjectId = class ParseObjectId {
    transform(id, _metadata) {
        if (!mongoose_1.Types.ObjectId.isValid(id)) {
            throw new common_1.BadRequestException('invalid_id');
        }
        return new mongoose_1.Types.ObjectId(id);
    }
};
exports.ParseObjectId = ParseObjectId;
exports.ParseObjectId = ParseObjectId = __decorate([
    (0, common_1.Injectable)()
], ParseObjectId);


/***/ }),
/* 35 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 36 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(37), exports);
__exportStar(__webpack_require__(40), exports);


/***/ }),
/* 37 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaginationDto = void 0;
const swagger_1 = __webpack_require__(4);
const class_transformer_1 = __webpack_require__(38);
const class_validator_1 = __webpack_require__(39);
class PaginationDto {
    constructor(init) {
        this.page = 1;
        this.limit = 100;
        Object.assign(this, init);
    }
}
exports.PaginationDto = PaginationDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    (0, swagger_1.ApiPropertyOptional)({
        minimum: 1,
        default: 1,
    }),
    __metadata("design:type", Number)
], PaginationDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        default: 100,
        type: Number,
        maximum: 100,
        minimum: 0,
    }),
    (0, class_validator_1.Max)(100),
    (0, class_validator_1.IsPositive)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], PaginationDto.prototype, "limit", void 0);


/***/ }),
/* 38 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 39 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 40 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ListDto = void 0;
const swagger_1 = __webpack_require__(4);
class ListDto {
}
exports.ListDto = ListDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], ListDto.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ListDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], ListDto.prototype, "nextPage", void 0);


/***/ }),
/* 41 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommonModule = void 0;
const common_1 = __webpack_require__(1);
const providers = __importStar(__webpack_require__(26));
let CommonModule = class CommonModule {
};
exports.CommonModule = CommonModule;
exports.CommonModule = CommonModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: Object.values(providers),
        exports: Object.values(providers),
    })
], CommonModule);


/***/ }),
/* 42 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(43), exports);
__exportStar(__webpack_require__(44), exports);


/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 45 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(46), exports);
__exportStar(__webpack_require__(47), exports);
__exportStar(__webpack_require__(48), exports);
__exportStar(__webpack_require__(49), exports);


/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsBoolTransformer = void 0;
const common_1 = __webpack_require__(1);
const class_validator_1 = __webpack_require__(39);
const class_transformer_1 = __webpack_require__(38);
const IsBoolTransformer = () => {
    return (0, common_1.applyDecorators)((0, class_validator_1.IsBoolean)(), (0, class_transformer_1.Transform)(({ value }) => value === '1' || value === 'true' || value === true));
};
exports.IsBoolTransformer = IsBoolTransformer;


/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArrayTransform = void 0;
const common_1 = __webpack_require__(1);
const class_validator_1 = __webpack_require__(39);
const class_transformer_1 = __webpack_require__(38);
const ArrayTransform = () => {
    return (0, common_1.applyDecorators)((0, class_transformer_1.Transform)(({ value }) => {
        if ((0, class_validator_1.isString)(value)) {
            return [value];
        }
        return value;
    }));
};
exports.ArrayTransform = ArrayTransform;


/***/ }),
/* 48 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ObjectIdsTransformer = void 0;
const common_1 = __webpack_require__(1);
const lodash_1 = __importDefault(__webpack_require__(22));
const class_transformer_1 = __webpack_require__(38);
const mongoose_1 = __webpack_require__(35);
const ObjectIdsTransformer = () => {
    return (0, common_1.applyDecorators)((0, class_transformer_1.Transform)(({ value }) => {
        if (lodash_1.default.isArray(value)) {
            return value.map((teamId) => new mongoose_1.Types.ObjectId(teamId));
        }
        return new mongoose_1.Types.ObjectId(value);
    }));
};
exports.ObjectIdsTransformer = ObjectIdsTransformer;


/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ObjectIdTransformer = void 0;
const common_1 = __webpack_require__(1);
const class_transformer_1 = __webpack_require__(38);
const mongoose_1 = __webpack_require__(35);
const ObjectIdTransformer = () => {
    return (0, common_1.applyDecorators)((0, class_transformer_1.Transform)(({ value }) => {
        return new mongoose_1.Types.ObjectId(value);
    }));
};
exports.ObjectIdTransformer = ObjectIdTransformer;


/***/ }),
/* 50 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.middleware = void 0;
const helmet_1 = __importDefault(__webpack_require__(51));
function middleware(app) {
    const isProduction = process.env.NODE_ENV === 'production';
    app.use((0, helmet_1.default)({ contentSecurityPolicy: isProduction ? undefined : false }));
    return app;
}
exports.middleware = middleware;


/***/ }),
/* 51 */
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),
/* 52 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(1);
const router_module_1 = __webpack_require__(53);
const base_1 = __webpack_require__(136);
const auth_module_1 = __webpack_require__(85);
const scheduler_module_1 = __webpack_require__(155);
const common_2 = __webpack_require__(6);
const sse_module_1 = __webpack_require__(156);
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(common_2.LoggerMiddleware)
            .forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            common_2.CommonModule,
            base_1.BaseModule,
            auth_module_1.AuthModule,
            sse_module_1.SSEModule,
            scheduler_module_1.SchedulerModule,
            router_module_1.RouterModule.forRoot(),
        ],
    })
], AppModule);


/***/ }),
/* 53 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RouterModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RouterModule = void 0;
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const routes_tenant_module_1 = __webpack_require__(54);
const routes_user_module_1 = __webpack_require__(72);
const routes_public_module_1 = __webpack_require__(135);
let RouterModule = RouterModule_1 = class RouterModule {
    static forRoot() {
        const imports = [];
        imports.push(routes_public_module_1.RoutesPublicModule, routes_tenant_module_1.RoutesTenantModule, routes_user_module_1.RoutesUserModule, core_1.RouterModule.register([
            {
                path: '/',
                module: routes_public_module_1.RoutesPublicModule,
            },
            {
                path: '/tenant-app',
                module: routes_tenant_module_1.RoutesTenantModule,
            },
            {
                path: '/landlord-app',
                module: routes_user_module_1.RoutesUserModule,
            },
        ]));
        return {
            module: RouterModule_1,
            providers: [],
            exports: [],
            controllers: [],
            imports,
        };
    }
};
exports.RouterModule = RouterModule;
exports.RouterModule = RouterModule = RouterModule_1 = __decorate([
    (0, common_1.Module)({})
], RouterModule);


/***/ }),
/* 54 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoutesTenantModule = void 0;
const common_1 = __webpack_require__(1);
const user_1 = __webpack_require__(55);
let RoutesTenantModule = class RoutesTenantModule {
};
exports.RoutesTenantModule = RoutesTenantModule;
exports.RoutesTenantModule = RoutesTenantModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        imports: [
            user_1.UserModule,
        ],
    })
], RoutesTenantModule);


/***/ }),
/* 55 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(56), exports);


/***/ }),
/* 56 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const common_1 = __webpack_require__(1);
const user_service_1 = __webpack_require__(57);
const user_repository_module_1 = __webpack_require__(71);
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_repository_module_1.UserRepositoryModule,
        ],
        providers: [user_service_1.UserService],
        exports: [user_service_1.UserService],
    })
], UserModule);


/***/ }),
/* 57 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const common_1 = __webpack_require__(1);
const user_repository_1 = __webpack_require__(58);
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async findById(id) {
        return this.userRepository.findOneById(id);
    }
    async findByPhoneNumber(phoneNumber) {
        return this.userRepository.findOneByPhoneNumber(phoneNumber);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof user_repository_1.UserRepository !== "undefined" && user_repository_1.UserRepository) === "function" ? _a : Object])
], UserService);


/***/ }),
/* 58 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRepository = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(35);
const entities_1 = __webpack_require__(59);
const database_decorator_1 = __webpack_require__(68);
const database_mongo_object_id_repository_abstract_1 = __webpack_require__(69);
let UserRepository = class UserRepository extends database_mongo_object_id_repository_abstract_1.DatabaseMongoObjectIdRepositoryAbstract {
    constructor(userModel) {
        super(userModel);
        this.userModel = userModel;
    }
    async createMany(_data, _options) {
        throw new Error('Method not implemented.');
    }
    async findOneByPhoneNumber(phoneNumber) {
        return this.userModel.findOne({ phoneNumber }).exec();
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, database_decorator_1.DatabaseModel)(entities_1.UserEntity.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], UserRepository);


/***/ }),
/* 59 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(60), exports);


/***/ }),
/* 60 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSchema = exports.UserEntity = void 0;
const mongoose_1 = __webpack_require__(61);
const entities_1 = __webpack_require__(62);
let UserEntity = class UserEntity extends entities_1.DatabaseMongoObjectIdEntityAbstract {
};
exports.UserEntity = UserEntity;
__decorate([
    (0, mongoose_1.Prop)({
        unique: true,
        trim: true,
        required: true,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "phoneNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "firstName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "lastName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
exports.UserEntity = UserEntity = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, versionKey: false, collection: 'users' })
], UserEntity);
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(UserEntity);
exports.UserSchema.set('toJSON', {
    virtuals: true,
});


/***/ }),
/* 61 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 62 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(63), exports);
__exportStar(__webpack_require__(67), exports);


/***/ }),
/* 63 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseMongoObjectIdEntityAbstract = void 0;
const mongoose_1 = __webpack_require__(61);
const mongoose_2 = __webpack_require__(35);
const database_base_entity_abstract_1 = __webpack_require__(64);
const database_constant_1 = __webpack_require__(65);
const database_function_constant_1 = __webpack_require__(66);
class DatabaseMongoObjectIdEntityAbstract extends database_base_entity_abstract_1.DatabaseBaseEntityAbstract {
}
exports.DatabaseMongoObjectIdEntityAbstract = DatabaseMongoObjectIdEntityAbstract;
_c = database_constant_1.DATABASE_DELETED_AT_FIELD_NAME, _e = database_constant_1.DATABASE_CREATED_AT_FIELD_NAME, _g = database_constant_1.DATABASE_UPDATED_AT_FIELD_NAME;
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        default: database_function_constant_1.DatabaseDefaultObjectId,
    }),
    __metadata("design:type", typeof (_a = typeof mongoose_2.Types !== "undefined" && mongoose_2.Types.ObjectId) === "function" ? _a : Object)
], DatabaseMongoObjectIdEntityAbstract.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        index: true,
        type: Date,
    }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], DatabaseMongoObjectIdEntityAbstract.prototype, _c, void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        index: true,
        type: Date,
    }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], DatabaseMongoObjectIdEntityAbstract.prototype, _e, void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        index: true,
        type: Date,
    }),
    __metadata("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], DatabaseMongoObjectIdEntityAbstract.prototype, _g, void 0);


/***/ }),
/* 64 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseBaseEntityAbstract = void 0;
const database_constant_1 = __webpack_require__(65);
class DatabaseBaseEntityAbstract {
}
exports.DatabaseBaseEntityAbstract = DatabaseBaseEntityAbstract;


/***/ }),
/* 65 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DATABASE_CREATED_AT_FIELD_NAME = exports.DATABASE_UPDATED_AT_FIELD_NAME = exports.DATABASE_DELETED_AT_FIELD_NAME = exports.DATABASE_CONNECTION_NAME = void 0;
exports.DATABASE_CONNECTION_NAME = 'PrimaryConnectionDatabase';
exports.DATABASE_DELETED_AT_FIELD_NAME = 'deletedAt';
exports.DATABASE_UPDATED_AT_FIELD_NAME = 'updatedAt';
exports.DATABASE_CREATED_AT_FIELD_NAME = 'createdAt';


/***/ }),
/* 66 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseDefaultObjectId = exports.DatabaseDefaultUUID = void 0;
const mongoose_1 = __webpack_require__(35);
const nanoid_1 = __webpack_require__(25);
exports.DatabaseDefaultUUID = nanoid_1.nanoid;
const DatabaseDefaultObjectId = () => new mongoose_1.Types.ObjectId();
exports.DatabaseDefaultObjectId = DatabaseDefaultObjectId;


/***/ }),
/* 67 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseMongoUUIDEntityAbstract = void 0;
const mongoose_1 = __webpack_require__(61);
const database_base_entity_abstract_1 = __webpack_require__(64);
const database_constant_1 = __webpack_require__(65);
const database_function_constant_1 = __webpack_require__(66);
class DatabaseMongoUUIDEntityAbstract extends database_base_entity_abstract_1.DatabaseBaseEntityAbstract {
}
exports.DatabaseMongoUUIDEntityAbstract = DatabaseMongoUUIDEntityAbstract;
_b = database_constant_1.DATABASE_DELETED_AT_FIELD_NAME, _d = database_constant_1.DATABASE_CREATED_AT_FIELD_NAME, _f = database_constant_1.DATABASE_UPDATED_AT_FIELD_NAME;
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        default: database_function_constant_1.DatabaseDefaultUUID,
    }),
    __metadata("design:type", String)
], DatabaseMongoUUIDEntityAbstract.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        index: true,
        type: Date,
    }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], DatabaseMongoUUIDEntityAbstract.prototype, _b, void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        index: true,
        type: Date,
    }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], DatabaseMongoUUIDEntityAbstract.prototype, _d, void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        index: true,
        type: Date,
    }),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], DatabaseMongoUUIDEntityAbstract.prototype, _f, void 0);


/***/ }),
/* 68 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseEntity = exports.DatabaseModel = exports.DatabaseConnection = void 0;
const mongoose_1 = __webpack_require__(61);
const database_constant_1 = __webpack_require__(65);
function DatabaseConnection(connectionName) {
    return (0, mongoose_1.InjectConnection)(connectionName);
}
exports.DatabaseConnection = DatabaseConnection;
function DatabaseModel(entity, connectionName) {
    return (0, mongoose_1.InjectModel)(entity, connectionName);
}
exports.DatabaseModel = DatabaseModel;
function DatabaseEntity(options) {
    return (0, mongoose_1.Schema)({
        ...options,
        versionKey: false,
        timestamps: {
            createdAt: database_constant_1.DATABASE_CREATED_AT_FIELD_NAME,
            updatedAt: database_constant_1.DATABASE_UPDATED_AT_FIELD_NAME,
        },
    });
}
exports.DatabaseEntity = DatabaseEntity;


/***/ }),
/* 69 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseMongoObjectIdRepositoryAbstract = void 0;
const mongoose_1 = __webpack_require__(35);
const database_base_repository_abstract_1 = __webpack_require__(70);
const database_constant_1 = __webpack_require__(65);
class DatabaseMongoObjectIdRepositoryAbstract extends database_base_repository_abstract_1.DatabaseBaseRepositoryAbstract {
    constructor(repository, options) {
        super();
        this._repository = repository;
        this._joinOnFind = options || [];
    }
    async findAll(find = {}, options) {
        const findAll = this._repository.find(find);
        if (options === null || options === void 0 ? void 0 : options.withDeleted) {
            void findAll.or([
                {
                    [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: false },
                },
                {
                    [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: true },
                },
            ]);
        }
        else {
            void findAll.where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME).exists(false);
        }
        if (options === null || options === void 0 ? void 0 : options.select) {
            void findAll.select(options.select);
        }
        if (options === null || options === void 0 ? void 0 : options.paging) {
            void findAll.limit(options.paging.limit).skip(options.paging.offset);
        }
        if (options === null || options === void 0 ? void 0 : options.order) {
            void findAll.sort(options.order);
        }
        if (options === null || options === void 0 ? void 0 : options.join) {
            void findAll.populate(typeof options.join === 'boolean'
                ? this._joinOnFind
                : (options.join));
        }
        if (options === null || options === void 0 ? void 0 : options.session) {
            void findAll.session(options.session);
        }
        return findAll.lean();
    }
    async findAllDistinct(fieldDistinct, find, options) {
        const findAll = this._repository.distinct(fieldDistinct, find);
        if (options === null || options === void 0 ? void 0 : options.withDeleted) {
            void findAll.or([
                {
                    [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: false },
                },
                {
                    [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: true },
                },
            ]);
        }
        else {
            void findAll.where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME).exists(false);
        }
        if (options === null || options === void 0 ? void 0 : options.select) {
            void findAll.select(options.select);
        }
        if (options === null || options === void 0 ? void 0 : options.paging) {
            void findAll.limit(options.paging.limit).skip(options.paging.offset);
        }
        if (options === null || options === void 0 ? void 0 : options.order) {
            void findAll.sort(options.order);
        }
        if (options === null || options === void 0 ? void 0 : options.join) {
            void findAll.populate(typeof options.join === 'boolean'
                ? this._joinOnFind
                : (options.join));
        }
        if (options === null || options === void 0 ? void 0 : options.session) {
            void findAll.session(options.session);
        }
        return findAll.lean();
    }
    async findOne(find, options) {
        const findOne = this._repository.findOne(find);
        if (options === null || options === void 0 ? void 0 : options.withDeleted) {
            void findOne.or([
                {
                    [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: false },
                },
                {
                    [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: true },
                },
            ]);
        }
        else {
            void findOne.where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME).exists(false);
        }
        if (options === null || options === void 0 ? void 0 : options.select) {
            void findOne.select(options.select);
        }
        if (options === null || options === void 0 ? void 0 : options.join) {
            void findOne.populate(typeof options.join === 'boolean'
                ? this._joinOnFind
                : (options.join));
        }
        if (options === null || options === void 0 ? void 0 : options.session) {
            void findOne.session(options.session);
        }
        if (options === null || options === void 0 ? void 0 : options.order) {
            void findOne.sort(options.order);
        }
        return findOne.exec();
    }
    async findOneById(_id, options) {
        const findOne = this._repository.findById(new mongoose_1.Types.ObjectId(_id));
        if (options === null || options === void 0 ? void 0 : options.withDeleted) {
            void findOne.or([
                {
                    [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: false },
                },
                {
                    [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: true },
                },
            ]);
        }
        else {
            void findOne.where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME).exists(false);
        }
        if (options === null || options === void 0 ? void 0 : options.select) {
            void findOne.select(options.select);
        }
        if (options === null || options === void 0 ? void 0 : options.join) {
            void findOne.populate(typeof options.join === 'boolean'
                ? this._joinOnFind
                : (options.join));
        }
        if (options === null || options === void 0 ? void 0 : options.session) {
            void findOne.session(options.session);
        }
        if (options === null || options === void 0 ? void 0 : options.order) {
            void findOne.sort(options.order);
        }
        return findOne.exec();
    }
    async findOneAndLock(find, options) {
        const findOne = this._repository.findOneAndUpdate(find, {
            new: true,
            useFindAndModify: false,
        });
        if (options === null || options === void 0 ? void 0 : options.withDeleted) {
            void findOne.or([
                {
                    [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: false },
                },
                {
                    [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: true },
                },
            ]);
        }
        else {
            void findOne.where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME).exists(false);
        }
        if (options === null || options === void 0 ? void 0 : options.select) {
            void findOne.select(options.select);
        }
        if (options === null || options === void 0 ? void 0 : options.join) {
            void findOne.populate(typeof options.join === 'boolean'
                ? this._joinOnFind
                : (options.join));
        }
        if (options === null || options === void 0 ? void 0 : options.session) {
            void findOne.session(options.session);
        }
        if (options === null || options === void 0 ? void 0 : options.order) {
            void findOne.sort(options.order);
        }
        return findOne.exec();
    }
    async findOneByIdAndLock(_id, options) {
        const findOne = this._repository.findByIdAndUpdate(new mongoose_1.Types.ObjectId(_id), {
            new: true,
            useFindAndModify: false,
        });
        if (options === null || options === void 0 ? void 0 : options.withDeleted) {
            void findOne.or([
                {
                    [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: false },
                },
                {
                    [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: true },
                },
            ]);
        }
        else {
            void findOne.where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME).exists(false);
        }
        if (options === null || options === void 0 ? void 0 : options.select) {
            void findOne.select(options.select);
        }
        if (options === null || options === void 0 ? void 0 : options.join) {
            void findOne.populate(typeof options.join === 'boolean'
                ? this._joinOnFind
                : (options.join));
        }
        if (options === null || options === void 0 ? void 0 : options.session) {
            void findOne.session(options.session);
        }
        if (options === null || options === void 0 ? void 0 : options.order) {
            void findOne.sort(options.order);
        }
        return findOne.exec();
    }
    async getTotal(find = {}, options) {
        const count = this._repository.countDocuments(find);
        if (options === null || options === void 0 ? void 0 : options.withDeleted) {
            void count.or([
                {
                    [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: false },
                },
                {
                    [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: true },
                },
            ]);
        }
        else {
            void count.where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME).exists(false);
        }
        if (options === null || options === void 0 ? void 0 : options.session) {
            void count.session(options.session);
        }
        if (options === null || options === void 0 ? void 0 : options.join) {
            void count.populate(typeof options.join === 'boolean'
                ? this._joinOnFind
                : (options.join));
        }
        return count;
    }
    async exists(find, options) {
        var _a;
        if (options === null || options === void 0 ? void 0 : options.excludeId) {
            find = {
                ...find,
                _id: {
                    $nin: (_a = options === null || options === void 0 ? void 0 : options.excludeId.map((val) => new mongoose_1.Types.ObjectId(val))) !== null && _a !== void 0 ? _a : [],
                },
            };
        }
        const exist = this._repository.exists(find);
        if (options === null || options === void 0 ? void 0 : options.withDeleted) {
            void exist.or([
                {
                    [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: false },
                },
                {
                    [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: true },
                },
            ]);
        }
        else {
            void exist.where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME).exists(false);
        }
        if (options === null || options === void 0 ? void 0 : options.session) {
            void exist.session(options.session);
        }
        if (options === null || options === void 0 ? void 0 : options.join) {
            void exist.populate(typeof options.join === 'boolean'
                ? this._joinOnFind
                : (options.join));
        }
        const result = await exist;
        return result ? true : false;
    }
    async create(data, options) {
        const dataCreate = data;
        if (options === null || options === void 0 ? void 0 : options._id) {
            dataCreate['_id'] = new mongoose_1.Types.ObjectId(options === null || options === void 0 ? void 0 : options._id);
        }
        const created = await this._repository.create([dataCreate], {
            session: options ? options.session : undefined,
        });
        return created[0];
    }
    async save(repository, options) {
        return repository.save(options);
    }
    async delete(repository, options) {
        return repository.deleteOne(options);
    }
    async softDelete(repository, options) {
        repository.deletedAt = new Date();
        return repository.save(options);
    }
    async restore(repository, options) {
        repository.deletedAt = undefined;
        return repository.save(options);
    }
    async deleteManyByIds(_id, options) {
        const del = this._repository.deleteMany({
            _id: {
                $in: _id.map((val) => new mongoose_1.Types.ObjectId(val)),
            },
        });
        if (options === null || options === void 0 ? void 0 : options.session) {
            void del.session(options.session);
        }
        if (options === null || options === void 0 ? void 0 : options.join) {
            void del.populate(typeof options.join === 'boolean'
                ? this._joinOnFind
                : (options.join));
        }
        try {
            await del;
            return true;
        }
        catch (err) {
            throw err;
        }
    }
    async deleteMany(find, options) {
        const del = this._repository.deleteMany(find);
        if (options === null || options === void 0 ? void 0 : options.session) {
            void del.session(options.session);
        }
        if (options === null || options === void 0 ? void 0 : options.join) {
            void del.populate(typeof options.join === 'boolean'
                ? this._joinOnFind
                : (options.join));
        }
        try {
            await del;
            return true;
        }
        catch (err) {
            throw err;
        }
    }
    async softDeleteManyByIds(_id, options) {
        const softDel = this._repository
            .updateMany({
            _id: {
                $in: _id.map((val) => new mongoose_1.Types.ObjectId(val)),
            },
        }, {
            $set: {
                deletedAt: new Date(),
            },
        })
            .where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME)
            .exists(false);
        if (options === null || options === void 0 ? void 0 : options.session) {
            void softDel.session(options.session);
        }
        if (options === null || options === void 0 ? void 0 : options.join) {
            void softDel.populate(typeof options.join === 'boolean'
                ? this._joinOnFind
                : (options.join));
        }
        try {
            await softDel;
            return true;
        }
        catch (err) {
            throw err;
        }
    }
    async softDeleteMany(find, options) {
        const softDel = this._repository
            .updateMany(find, {
            $set: {
                deletedAt: new Date(),
            },
        })
            .where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME)
            .exists(false);
        if (options === null || options === void 0 ? void 0 : options.session) {
            void softDel.session(options.session);
        }
        if (options === null || options === void 0 ? void 0 : options.join) {
            void softDel.populate(typeof options.join === 'boolean'
                ? this._joinOnFind
                : (options.join));
        }
        try {
            await softDel;
            return true;
        }
        catch (err) {
            throw err;
        }
    }
    async restoreManyByIds(_id, options) {
        const rest = this._repository
            .updateMany({
            _id: {
                $in: _id.map((val) => new mongoose_1.Types.ObjectId(val)),
            },
        }, {
            $set: {
                deletedAt: undefined,
            },
        })
            .where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME)
            .exists(true);
        if (options === null || options === void 0 ? void 0 : options.session) {
            void rest.session(options.session);
        }
        if (options === null || options === void 0 ? void 0 : options.join) {
            void rest.populate(typeof options.join === 'boolean'
                ? this._joinOnFind
                : (options.join));
        }
        try {
            await rest;
            return true;
        }
        catch (err) {
            throw err;
        }
    }
    async restoreMany(find, options) {
        const rest = this._repository
            .updateMany(find, {
            $set: {
                deletedAt: undefined,
            },
        })
            .where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME)
            .exists(true);
        if (options === null || options === void 0 ? void 0 : options.session) {
            void rest.session(options.session);
        }
        if (options === null || options === void 0 ? void 0 : options.join) {
            void rest.populate(typeof options.join === 'boolean'
                ? this._joinOnFind
                : (options.join));
        }
        try {
            await rest;
            return true;
        }
        catch (err) {
            throw err;
        }
    }
    async updateMany(find, data, options) {
        const update = this._repository
            .updateMany(find, {
            $set: data,
        })
            .where(database_constant_1.DATABASE_DELETED_AT_FIELD_NAME)
            .exists(false);
        if (options === null || options === void 0 ? void 0 : options.session) {
            void update.session(options.session);
        }
        if (options === null || options === void 0 ? void 0 : options.join) {
            void update.populate(typeof options.join === 'boolean'
                ? this._joinOnFind
                : (options.join));
        }
        try {
            await update;
            return true;
        }
        catch (err) {
            throw err;
        }
    }
    async raw(rawOperation, options) {
        if (!Array.isArray(rawOperation)) {
            throw new Error('Must in array');
        }
        const pipeline = rawOperation;
        if (options === null || options === void 0 ? void 0 : options.withDeleted) {
            pipeline.push({
                $match: {
                    $or: [
                        {
                            [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: {
                                $exists: false,
                            },
                        },
                        {
                            [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: true },
                        },
                    ],
                },
            });
        }
        else {
            pipeline.push({
                $match: {
                    [database_constant_1.DATABASE_DELETED_AT_FIELD_NAME]: { $exists: false },
                },
            });
        }
        const aggregate = this._repository.aggregate(pipeline);
        if (options === null || options === void 0 ? void 0 : options.session) {
            void aggregate.session(options === null || options === void 0 ? void 0 : options.session);
        }
        return aggregate;
    }
    async model() {
        return this._repository;
    }
}
exports.DatabaseMongoObjectIdRepositoryAbstract = DatabaseMongoObjectIdRepositoryAbstract;


/***/ }),
/* 70 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseBaseRepositoryAbstract = void 0;
class DatabaseBaseRepositoryAbstract {
}
exports.DatabaseBaseRepositoryAbstract = DatabaseBaseRepositoryAbstract;


/***/ }),
/* 71 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRepositoryModule = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(61);
const entities_1 = __webpack_require__(59);
const user_repository_1 = __webpack_require__(58);
let UserRepositoryModule = class UserRepositoryModule {
};
exports.UserRepositoryModule = UserRepositoryModule;
exports.UserRepositoryModule = UserRepositoryModule = __decorate([
    (0, common_1.Module)({
        providers: [user_repository_1.UserRepository],
        exports: [user_repository_1.UserRepository],
        controllers: [],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: entities_1.UserEntity.name,
                    schema: entities_1.UserSchema,
                },
            ]),
        ],
    })
], UserRepositoryModule);


/***/ }),
/* 72 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoutesUserModule = void 0;
const common_1 = __webpack_require__(1);
const user_1 = __webpack_require__(55);
const user_user_controller_1 = __webpack_require__(73);
const auth_user_controller_1 = __webpack_require__(80);
const auth_module_1 = __webpack_require__(85);
const auth_user_guard_1 = __webpack_require__(76);
const room_user_controller_1 = __webpack_require__(86);
const room_1 = __webpack_require__(105);
const session_user_controller_1 = __webpack_require__(110);
const session_1 = __webpack_require__(121);
const tenant_user_controller_1 = __webpack_require__(123);
const tenant_1 = __webpack_require__(127);
const property_1 = __webpack_require__(130);
const property_user_controller_1 = __webpack_require__(132);
let RoutesUserModule = class RoutesUserModule {
};
exports.RoutesUserModule = RoutesUserModule;
exports.RoutesUserModule = RoutesUserModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            auth_user_controller_1.AuthUserController,
            user_user_controller_1.UserUserController,
            room_user_controller_1.RoomUserController,
            session_user_controller_1.SessionUserController,
            tenant_user_controller_1.TenantUserController,
            property_user_controller_1.PropertyUserController,
        ],
        providers: [auth_user_guard_1.AuthUserGuard],
        imports: [user_1.UserModule, auth_module_1.AuthModule, room_1.RoomModule, session_1.SessionModule, tenant_1.TenantModule, property_1.PropertyModule],
    })
], RoutesUserModule);


/***/ }),
/* 73 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserUserController = void 0;
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(4);
const my_profile_presenter_1 = __webpack_require__(74);
const user_service_1 = __webpack_require__(57);
const common_2 = __webpack_require__(6);
const payload_interface_1 = __webpack_require__(75);
const auth_user_guard_1 = __webpack_require__(76);
let UserUserController = class UserUserController {
    constructor(userService) {
        this.userService = userService;
    }
    async getMyProfile(user) {
        const foundUser = await this.userService.findById(user.userId);
        if (!foundUser) {
            throw new common_1.NotFoundException('User not found');
        }
        return new my_profile_presenter_1.MyProfilePresenter({
            _id: foundUser._id.toString(),
            phoneNumber: foundUser.phoneNumber,
        });
    }
};
exports.UserUserController = UserUserController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_user_guard_1.AuthUserGuard),
    (0, common_1.Get)('/me'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOkResponse)({
        description: 'Get my profile',
        type: my_profile_presenter_1.MyProfilePresenter,
    }),
    __param(0, (0, common_2.ReqUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof payload_interface_1.Payload !== "undefined" && payload_interface_1.Payload) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], UserUserController.prototype, "getMyProfile", null);
exports.UserUserController = UserUserController = __decorate([
    (0, swagger_1.ApiTags)('modules.user.users'),
    (0, common_1.Controller)({
        version: '1',
        path: '/users',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], UserUserController);


/***/ }),
/* 74 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MyProfilePresenter = void 0;
const swagger_1 = __webpack_require__(4);
class MyProfilePresenter {
    constructor(partial) {
        Object.assign(this, partial);
    }
}
exports.MyProfilePresenter = MyProfilePresenter;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], MyProfilePresenter.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], MyProfilePresenter.prototype, "phoneNumber", void 0);


/***/ }),
/* 75 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 76 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthUserGuard = void 0;
const common_1 = __webpack_require__(1);
const jwt_1 = __webpack_require__(77);
const constants_1 = __webpack_require__(78);
const user_types_enum_1 = __webpack_require__(79);
let AuthUserGuard = class AuthUserGuard {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new common_1.UnauthorizedException();
        }
        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: constants_1.jwtConstants.secret,
            });
            if (payload.type !== user_types_enum_1.UserTypesEnum.USER) {
                throw new Error('Invalid user type');
            }
            request.user = payload;
        }
        catch {
            throw new common_1.UnauthorizedException();
        }
        return true;
    }
    extractTokenFromHeader(request) {
        var _a, _b;
        const [type, token] = (_b = (_a = request.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')) !== null && _b !== void 0 ? _b : [];
        return type === 'Bearer' ? token : undefined;
    }
};
exports.AuthUserGuard = AuthUserGuard;
exports.AuthUserGuard = AuthUserGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object])
], AuthUserGuard);


/***/ }),
/* 77 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 78 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.jwtConstants = void 0;
exports.jwtConstants = {
    secret: '0v6pJe591G0Xo3msjNqOzxle81uqm3Ra',
};


/***/ }),
/* 79 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserTypesEnum = void 0;
var UserTypesEnum;
(function (UserTypesEnum) {
    UserTypesEnum["USER"] = "user";
    UserTypesEnum["TENANT"] = "tenant";
})(UserTypesEnum || (exports.UserTypesEnum = UserTypesEnum = {}));


/***/ }),
/* 80 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthUserController = void 0;
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(4);
const auth_service_1 = __webpack_require__(81);
const logged_in_presenter_1 = __webpack_require__(82);
const login_user_dto_1 = __webpack_require__(83);
const user_types_enum_1 = __webpack_require__(79);
const checked_user_presenter_1 = __webpack_require__(84);
const auth_user_guard_1 = __webpack_require__(76);
const user_service_1 = __webpack_require__(57);
let AuthUserController = class AuthUserController {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    async login(loginUserDto) {
        const foundUser = await this.userService.findByPhoneNumber(loginUserDto.phoneNumber);
        if (!foundUser) {
            throw new common_1.NotFoundException('User not found');
        }
        const { accessToken } = await this.authService.generateToken({
            userId: foundUser._id.toString(),
            type: user_types_enum_1.UserTypesEnum.USER,
        });
        return new logged_in_presenter_1.LoggedInPresenter({
            accessToken,
        });
    }
    checkUser() {
        return new checked_user_presenter_1.CheckedUserPresenter({
            success: true,
        });
    }
};
exports.AuthUserController = AuthUserController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('/login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOkResponse)({
        description: 'User logged in successfully',
        type: logged_in_presenter_1.LoggedInPresenter,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof login_user_dto_1.LoginUserDto !== "undefined" && login_user_dto_1.LoginUserDto) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], AuthUserController.prototype, "login", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('/check'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(auth_user_guard_1.AuthUserGuard),
    (0, swagger_1.ApiOkResponse)({
        description: 'Checked user successfully',
        type: checked_user_presenter_1.CheckedUserPresenter,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_e = typeof checked_user_presenter_1.CheckedUserPresenter !== "undefined" && checked_user_presenter_1.CheckedUserPresenter) === "function" ? _e : Object)
], AuthUserController.prototype, "checkUser", null);
exports.AuthUserController = AuthUserController = __decorate([
    (0, swagger_1.ApiTags)('modules.auth.user'),
    (0, common_1.Controller)({
        version: '1',
        path: '/auth',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object, typeof (_b = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _b : Object])
], AuthUserController);


/***/ }),
/* 81 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(1);
const jwt_1 = __webpack_require__(77);
let AuthService = class AuthService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async generateToken({ userId, type }, options) {
        const payload = { userId, type };
        return {
            accessToken: await this.jwtService.signAsync(payload, options),
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object])
], AuthService);


/***/ }),
/* 82 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggedInPresenter = void 0;
const swagger_1 = __webpack_require__(4);
class LoggedInPresenter {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.LoggedInPresenter = LoggedInPresenter;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
    }),
    __metadata("design:type", String)
], LoggedInPresenter.prototype, "accessToken", void 0);


/***/ }),
/* 83 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginUserDto = void 0;
const swagger_1 = __webpack_require__(4);
const class_validator_1 = __webpack_require__(39);
class LoginUserDto {
}
exports.LoginUserDto = LoginUserDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsPhoneNumber)(),
    __metadata("design:type", String)
], LoginUserDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginUserDto.prototype, "password", void 0);


/***/ }),
/* 84 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CheckedUserPresenter = void 0;
const swagger_1 = __webpack_require__(4);
class CheckedUserPresenter {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.CheckedUserPresenter = CheckedUserPresenter;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], CheckedUserPresenter.prototype, "success", void 0);


/***/ }),
/* 85 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(1);
const jwt_1 = __webpack_require__(77);
const auth_service_1 = __webpack_require__(81);
const constants_1 = __webpack_require__(78);
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                global: true,
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: '1y' },
            }),
        ],
        providers: [auth_service_1.AuthService],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);


/***/ }),
/* 86 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoomUserController = void 0;
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(4);
const room_service_1 = __webpack_require__(87);
const get_rooms_presenter_1 = __webpack_require__(95);
const create_rooms_dto_1 = __webpack_require__(96);
const edit_room_dto_1 = __webpack_require__(97);
const get_rooms_dto_1 = __webpack_require__(98);
const create_room_presenter_1 = __webpack_require__(99);
const create_room_dto_1 = __webpack_require__(100);
const auth_user_guard_1 = __webpack_require__(76);
const common_2 = __webpack_require__(6);
const payload_interface_1 = __webpack_require__(75);
const property_service_1 = __webpack_require__(101);
let RoomUserController = class RoomUserController {
    constructor(roomService, propertyService) {
        this.roomService = roomService;
        this.propertyService = propertyService;
    }
    async getRooms(getRoomsDto, user) {
        const property = await this.propertyService.findByUserId(getRoomsDto.propertyId, user.userId);
        if (!property) {
            throw new common_1.NotFoundException('User not own property or property not found');
        }
        const foundRooms = await this.roomService.getAllByPropertyId(property._id);
        if (!foundRooms) {
            throw new common_1.NotFoundException('Rooms not found');
        }
        return new get_rooms_presenter_1.GetRoomsPresenter({
            success: true,
            rooms: foundRooms,
        });
    }
    async createRooms(createRoomsDto, user) {
        const { roomAmount, floorAmount, roomPrice, area, roomType } = createRoomsDto;
        const property = await this.propertyService.findByUserId(createRoomsDto.propertyId, user.userId);
        if (!property) {
            throw new common_1.NotFoundException('Rooms could not be created because this user have no property');
        }
        const created = await this.roomService.createRooms(roomAmount, floorAmount, roomPrice, property._id.toString(), area, roomType);
        if (!created) {
            throw new common_1.NotFoundException('Rooms could not be created');
        }
        return { success: true };
    }
    async createRoom(createRoomDto, user) {
        const property = await this.propertyService.findByUserId(createRoomDto.propertyId, user.userId);
        if (!property) {
            throw new common_1.NotFoundException('Rooms could not be created because this user has no property');
        }
        const createdRoom = await this.roomService.createRoom(createRoomDto, property._id.toString());
        if (!createdRoom) {
            throw new common_1.NotFoundException('Room could not be created');
        }
        return new create_room_presenter_1.CreateRoomPresenter({
            success: true,
        });
    }
    async editRoom(id, editRoomDto) {
        const updatedRoom = await this.roomService.editRoom(id, editRoomDto);
        if (!updatedRoom) {
            throw new common_1.NotFoundException('Room could not be updated');
        }
        return { success: true };
    }
};
exports.RoomUserController = RoomUserController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('/'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(auth_user_guard_1.AuthUserGuard),
    (0, swagger_1.ApiOkResponse)({
        description: 'Get rooms successfully',
        type: get_rooms_presenter_1.GetRoomsPresenter,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_2.ReqUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof get_rooms_dto_1.GetRoomDto !== "undefined" && get_rooms_dto_1.GetRoomDto) === "function" ? _c : Object, typeof (_d = typeof payload_interface_1.Payload !== "undefined" && payload_interface_1.Payload) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], RoomUserController.prototype, "getRooms", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('/creates'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(auth_user_guard_1.AuthUserGuard),
    (0, swagger_1.ApiOkResponse)({
        description: 'Rooms created successfully',
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_2.ReqUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof create_rooms_dto_1.CreateRoomsDto !== "undefined" && create_rooms_dto_1.CreateRoomsDto) === "function" ? _f : Object, typeof (_g = typeof payload_interface_1.Payload !== "undefined" && payload_interface_1.Payload) === "function" ? _g : Object]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], RoomUserController.prototype, "createRooms", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('/create'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.UseGuards)(auth_user_guard_1.AuthUserGuard),
    (0, swagger_1.ApiOkResponse)({
        description: 'Room created successfully',
        type: create_room_presenter_1.CreateRoomPresenter,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_2.ReqUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof create_room_dto_1.CreateRoomDto !== "undefined" && create_room_dto_1.CreateRoomDto) === "function" ? _j : Object, typeof (_k = typeof payload_interface_1.Payload !== "undefined" && payload_interface_1.Payload) === "function" ? _k : Object]),
    __metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], RoomUserController.prototype, "createRoom", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Put)('/edit/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(auth_user_guard_1.AuthUserGuard),
    (0, swagger_1.ApiOkResponse)({
        description: 'Room updated successfully',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_m = typeof edit_room_dto_1.EditRoomDto !== "undefined" && edit_room_dto_1.EditRoomDto) === "function" ? _m : Object]),
    __metadata("design:returntype", typeof (_o = typeof Promise !== "undefined" && Promise) === "function" ? _o : Object)
], RoomUserController.prototype, "editRoom", null);
exports.RoomUserController = RoomUserController = __decorate([
    (0, swagger_1.ApiTags)('modules.room'),
    (0, common_1.Controller)({
        version: '1',
        path: '/rooms',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof room_service_1.RoomService !== "undefined" && room_service_1.RoomService) === "function" ? _a : Object, typeof (_b = typeof property_service_1.PropertyService !== "undefined" && property_service_1.PropertyService) === "function" ? _b : Object])
], RoomUserController);


/***/ }),
/* 87 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoomService = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(35);
const session_service_1 = __webpack_require__(88);
const entities_1 = __webpack_require__(92);
const room_repository_1 = __webpack_require__(94);
let RoomService = class RoomService {
    constructor(roomRepository, sessionService) {
        this.roomRepository = roomRepository;
        this.sessionService = sessionService;
    }
    async findById(id) {
        return this.roomRepository.findOneById(id);
    }
    async getAllByPropertyId(propertyId) {
        const rooms = await this.roomRepository.findAll({
            propertyId: propertyId,
        });
        if (!rooms) {
            return null;
        }
        for (const room of rooms) {
            const session = await this.sessionService.findByRoomId(room._id.toString());
            if (session) {
                room.session = session;
            }
        }
        return rooms;
    }
    async createRooms(roomAmount, floorAmount, roomPrice, propertyId, area, roomType) {
        try {
            for (let floor = 1; floor <= floorAmount; floor++) {
                for (let room = 1; room <= roomAmount; room++) {
                    const roomNumber = `${floor}${String(room).padStart(2, '0')}`;
                    const newRoom = new entities_1.RoomEntity();
                    newRoom.roomNumber = roomNumber;
                    newRoom.price = roomPrice;
                    newRoom.propertyId = new mongoose_1.Types.ObjectId(propertyId);
                    newRoom.type = roomType;
                    newRoom.floor = floor;
                    newRoom.area = area;
                    const createdRoom = await this.roomRepository.create(newRoom);
                    if (!createdRoom) {
                        throw new Error('Failed to create room');
                    }
                }
            }
            return true;
        }
        catch (error) {
            console.error('Error creating rooms:', error);
            return false;
        }
    }
    async createRoom(createRoomDto, propertyId) {
        try {
            const { roomNumber, price, type, floor, area, bathroomQuantity, bedQuantity, bedroomQuantity, kitchenQuantity, livingRoomQuantity, haveBalcony, } = createRoomDto;
            const newRoom = new entities_1.RoomEntity();
            newRoom.propertyId = new mongoose_1.Types.ObjectId(propertyId);
            newRoom.roomNumber = roomNumber;
            newRoom.price = price;
            newRoom.propertyId = new mongoose_1.Types.ObjectId(propertyId);
            newRoom.type = type;
            newRoom.floor = floor;
            newRoom.area = area;
            newRoom.bathroomQuantity = bathroomQuantity;
            newRoom.bedQuantity = bedQuantity;
            newRoom.bedroomQuantity = bedroomQuantity;
            newRoom.kitchenQuantity = kitchenQuantity;
            newRoom.livingRoomQuantity = livingRoomQuantity;
            newRoom.haveBalcony = haveBalcony;
            await this.roomRepository.create(newRoom);
            return true;
        }
        catch (error) {
            console.error('Error creating room:', error);
            return false;
        }
    }
    async editRoom(id, updateData) {
        const result = await this.roomRepository.roomModel.updateOne({ _id: new mongoose_1.Types.ObjectId(id) }, { $set: updateData });
        if (result.matchedCount === 0) {
            throw new common_1.NotFoundException('Room not found');
        }
        return true;
    }
};
exports.RoomService = RoomService;
exports.RoomService = RoomService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof room_repository_1.RoomRepository !== "undefined" && room_repository_1.RoomRepository) === "function" ? _a : Object, typeof (_b = typeof session_service_1.SessionService !== "undefined" && session_service_1.SessionService) === "function" ? _b : Object])
], RoomService);


/***/ }),
/* 88 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SessionService = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(35);
const entities_1 = __webpack_require__(89);
const session_repository_1 = __webpack_require__(91);
let SessionService = class SessionService {
    constructor(sessionRepository) {
        this.sessionRepository = sessionRepository;
    }
    async findById(id) {
        return this.sessionRepository.findOneById(id);
    }
    async createSession(createSessionDto) {
        const session = new entities_1.SessionEntity();
        session.roomId = new mongoose_1.Types.ObjectId(createSessionDto.roomId);
        session.propertyId = new mongoose_1.Types.ObjectId(createSessionDto.propertyId);
        session.depositAmount = createSessionDto.depositAmount;
        session.tennantId = new mongoose_1.Types.ObjectId(createSessionDto.tenantId);
        session.startDate = new Date(createSessionDto.startDate);
        session.terminationDate = createSessionDto.terminationDate
            ? new Date(createSessionDto.terminationDate)
            : undefined;
        session.status = createSessionDto.status;
        return this.sessionRepository.create(session);
    }
    async findByRoomId(roomId) {
        return this.sessionRepository.findOne({
            roomId: new mongoose_1.Types.ObjectId(roomId),
        });
    }
    async updateSessionStatus(sessionId, newStatus) {
        try {
            const session = await this.sessionRepository.findByIdAndUpdate(sessionId, { $set: { status: newStatus } }, { new: true });
            if (!session) {
                throw new common_1.NotFoundException('Session not found or update failed');
            }
            return true;
        }
        catch (error) {
            console.error('Error updating session status:', error);
            return false;
        }
    }
};
exports.SessionService = SessionService;
exports.SessionService = SessionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof session_repository_1.SessionRepository !== "undefined" && session_repository_1.SessionRepository) === "function" ? _a : Object])
], SessionService);


/***/ }),
/* 89 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(90), exports);


/***/ }),
/* 90 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SessionSchema = exports.SessionEntity = exports.SessionStatusEnum = void 0;
const mongoose_1 = __webpack_require__(61);
const mongoose_2 = __webpack_require__(35);
const entities_1 = __webpack_require__(62);
var SessionStatusEnum;
(function (SessionStatusEnum) {
    SessionStatusEnum["ACTIVE"] = "active";
    SessionStatusEnum["TERMINATED"] = "terminated";
    SessionStatusEnum["CANCELLED"] = "cancelled";
})(SessionStatusEnum || (exports.SessionStatusEnum = SessionStatusEnum = {}));
let SessionEntity = class SessionEntity extends entities_1.DatabaseMongoObjectIdEntityAbstract {
};
exports.SessionEntity = SessionEntity;
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
    }),
    __metadata("design:type", typeof (_a = typeof mongoose_2.Types !== "undefined" && mongoose_2.Types.ObjectId) === "function" ? _a : Object)
], SessionEntity.prototype, "roomId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
    }),
    __metadata("design:type", typeof (_b = typeof mongoose_2.Types !== "undefined" && mongoose_2.Types.ObjectId) === "function" ? _b : Object)
], SessionEntity.prototype, "propertyId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
    }),
    __metadata("design:type", Number)
], SessionEntity.prototype, "depositAmount", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
    }),
    __metadata("design:type", typeof (_c = typeof mongoose_2.Types !== "undefined" && mongoose_2.Types.ObjectId) === "function" ? _c : Object)
], SessionEntity.prototype, "tennantId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Date,
    }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], SessionEntity.prototype, "startDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Date,
    }),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], SessionEntity.prototype, "terminationDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: SessionStatusEnum,
    }),
    __metadata("design:type", String)
], SessionEntity.prototype, "status", void 0);
exports.SessionEntity = SessionEntity = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, versionKey: false, collection: 'sessions' })
], SessionEntity);
exports.SessionSchema = mongoose_1.SchemaFactory.createForClass(SessionEntity);
exports.SessionSchema.set('toJSON', {
    virtuals: true,
});


/***/ }),
/* 91 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SessionRepository = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(35);
const entities_1 = __webpack_require__(89);
const database_mongo_object_id_repository_abstract_1 = __webpack_require__(69);
const database_decorator_1 = __webpack_require__(68);
let SessionRepository = class SessionRepository extends database_mongo_object_id_repository_abstract_1.DatabaseMongoObjectIdRepositoryAbstract {
    constructor(sessionModel) {
        super(sessionModel);
        this.sessionModel = sessionModel;
    }
    async createMany(_data, _options) {
        throw new Error('Method not implemented.');
    }
    async findByIdAndUpdate(sessionId, update, options) {
        try {
            if (!mongoose_1.Types.ObjectId.isValid(sessionId)) {
                throw new Error('Invalid session ID');
            }
            const updatedSession = await this.sessionModel.findByIdAndUpdate(sessionId, update, options);
            return updatedSession;
        }
        catch (error) {
            console.error('Error updating session:', error);
            return null;
        }
    }
};
exports.SessionRepository = SessionRepository;
exports.SessionRepository = SessionRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, database_decorator_1.DatabaseModel)(entities_1.SessionEntity.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], SessionRepository);


/***/ }),
/* 92 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(93), exports);


/***/ }),
/* 93 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoomSchema = exports.RoomEntity = exports.RoomTypesEnum = void 0;
const mongoose_1 = __webpack_require__(61);
const mongoose_2 = __webpack_require__(35);
const entities_1 = __webpack_require__(62);
const entities_2 = __webpack_require__(89);
var RoomTypesEnum;
(function (RoomTypesEnum) {
    RoomTypesEnum["STUDIO"] = "STUDIO";
    RoomTypesEnum["APARTMENT"] = "APARTMENT";
    RoomTypesEnum["HOUSE"] = "HOUSE";
})(RoomTypesEnum || (exports.RoomTypesEnum = RoomTypesEnum = {}));
let RoomEntity = class RoomEntity extends entities_1.DatabaseMongoObjectIdEntityAbstract {
};
exports.RoomEntity = RoomEntity;
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], RoomEntity.prototype, "roomNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], RoomEntity.prototype, "roomName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
    }),
    __metadata("design:type", Number)
], RoomEntity.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
    }),
    __metadata("design:type", typeof (_a = typeof mongoose_2.Types !== "undefined" && mongoose_2.Types.ObjectId) === "function" ? _a : Object)
], RoomEntity.prototype, "propertyId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: RoomTypesEnum,
    }),
    __metadata("design:type", String)
], RoomEntity.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
    }),
    __metadata("design:type", Number)
], RoomEntity.prototype, "floor", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
    }),
    __metadata("design:type", Number)
], RoomEntity.prototype, "area", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
    }),
    __metadata("design:type", Number)
], RoomEntity.prototype, "bedQuantity", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
    }),
    __metadata("design:type", Number)
], RoomEntity.prototype, "bathroomQuantity", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
    }),
    __metadata("design:type", Number)
], RoomEntity.prototype, "bedroomQuantity", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
    }),
    __metadata("design:type", Number)
], RoomEntity.prototype, "livingRoomQuantity", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
    }),
    __metadata("design:type", Number)
], RoomEntity.prototype, "kitchenQuantity", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], RoomEntity.prototype, "haveBalcony", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: entities_2.SessionEntity,
    }),
    __metadata("design:type", typeof (_b = typeof entities_2.SessionEntity !== "undefined" && entities_2.SessionEntity) === "function" ? _b : Object)
], RoomEntity.prototype, "session", void 0);
exports.RoomEntity = RoomEntity = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, versionKey: false, collection: 'rooms' })
], RoomEntity);
exports.RoomSchema = mongoose_1.SchemaFactory.createForClass(RoomEntity);
exports.RoomSchema.set('toJSON', {
    virtuals: true,
});


/***/ }),
/* 94 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoomRepository = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(35);
const entities_1 = __webpack_require__(92);
const database_mongo_object_id_repository_abstract_1 = __webpack_require__(69);
const database_decorator_1 = __webpack_require__(68);
let RoomRepository = class RoomRepository extends database_mongo_object_id_repository_abstract_1.DatabaseMongoObjectIdRepositoryAbstract {
    constructor(roomModel) {
        super(roomModel);
        this.roomModel = roomModel;
    }
    async createMany(_data, _options) {
        throw new Error('Method not implemented.');
    }
};
exports.RoomRepository = RoomRepository;
exports.RoomRepository = RoomRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, database_decorator_1.DatabaseModel)(entities_1.RoomEntity.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], RoomRepository);


/***/ }),
/* 95 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetRoomsPresenter = void 0;
const swagger_1 = __webpack_require__(4);
const entities_1 = __webpack_require__(92);
class GetRoomsPresenter {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.GetRoomsPresenter = GetRoomsPresenter;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], GetRoomsPresenter.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [entities_1.RoomEntity],
    }),
    __metadata("design:type", Array)
], GetRoomsPresenter.prototype, "rooms", void 0);


/***/ }),
/* 96 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateRoomsDto = void 0;
const swagger_1 = __webpack_require__(4);
const class_validator_1 = __webpack_require__(39);
const entities_1 = __webpack_require__(92);
class CreateRoomsDto {
}
exports.CreateRoomsDto = CreateRoomsDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateRoomsDto.prototype, "roomAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateRoomsDto.prototype, "floorAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateRoomsDto.prototype, "roomPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateRoomsDto.prototype, "electricPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRoomsDto.prototype, "propertyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateRoomsDto.prototype, "waterPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateRoomsDto.prototype, "area", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEnum)(entities_1.RoomTypesEnum),
    __metadata("design:type", typeof (_a = typeof entities_1.RoomTypesEnum !== "undefined" && entities_1.RoomTypesEnum) === "function" ? _a : Object)
], CreateRoomsDto.prototype, "roomType", void 0);


/***/ }),
/* 97 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EditRoomDto = void 0;
const swagger_1 = __webpack_require__(4);
const class_validator_1 = __webpack_require__(39);
const entities_1 = __webpack_require__(92);
class EditRoomDto {
}
exports.EditRoomDto = EditRoomDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditRoomDto.prototype, "roomName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], EditRoomDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], EditRoomDto.prototype, "area", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEnum)(entities_1.RoomTypesEnum),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_a = typeof entities_1.RoomTypesEnum !== "undefined" && entities_1.RoomTypesEnum) === "function" ? _a : Object)
], EditRoomDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], EditRoomDto.prototype, "floor", void 0);


/***/ }),
/* 98 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetRoomDto = void 0;
const swagger_1 = __webpack_require__(4);
const class_validator_1 = __webpack_require__(39);
class GetRoomDto {
}
exports.GetRoomDto = GetRoomDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetRoomDto.prototype, "propertyId", void 0);


/***/ }),
/* 99 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateRoomPresenter = void 0;
const swagger_1 = __webpack_require__(4);
class CreateRoomPresenter {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.CreateRoomPresenter = CreateRoomPresenter;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], CreateRoomPresenter.prototype, "success", void 0);


/***/ }),
/* 100 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateRoomDto = void 0;
const swagger_1 = __webpack_require__(4);
const class_validator_1 = __webpack_require__(39);
const entities_1 = __webpack_require__(92);
class CreateRoomDto {
}
exports.CreateRoomDto = CreateRoomDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRoomDto.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRoomDto.prototype, "roomName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateRoomDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRoomDto.prototype, "propertyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEnum)(entities_1.RoomTypesEnum),
    __metadata("design:type", typeof (_a = typeof entities_1.RoomTypesEnum !== "undefined" && entities_1.RoomTypesEnum) === "function" ? _a : Object)
], CreateRoomDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateRoomDto.prototype, "floor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateRoomDto.prototype, "area", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateRoomDto.prototype, "bedQuantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateRoomDto.prototype, "bathroomQuantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateRoomDto.prototype, "bedroomQuantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateRoomDto.prototype, "livingRoomQuantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateRoomDto.prototype, "kitchenQuantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateRoomDto.prototype, "haveBalcony", void 0);


/***/ }),
/* 101 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PropertyService = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(35);
const property_repository_1 = __webpack_require__(102);
let PropertyService = class PropertyService {
    constructor(propertyRepository) {
        this.propertyRepository = propertyRepository;
    }
    async findById(id) {
        return this.propertyRepository.findOneById(id);
    }
    async findByUserId(id, userId) {
        return this.propertyRepository.findByUserId(new mongoose_1.Types.ObjectId(id), new mongoose_1.Types.ObjectId(userId));
    }
    async getPropertiesByUserId(userId) {
        const properties = await this.propertyRepository.findAllByUserId(userId);
        return properties;
    }
    async editProperty(propertyId, userId, updateData) {
        const property = await this.findByUserId(propertyId, userId);
        if (!property) {
            throw new common_1.NotFoundException('Property could not be update because it not belong to your');
        }
        const result = await this.propertyRepository.updateById(propertyId, updateData);
        return result;
    }
};
exports.PropertyService = PropertyService;
exports.PropertyService = PropertyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof property_repository_1.PropertyRepository !== "undefined" && property_repository_1.PropertyRepository) === "function" ? _a : Object])
], PropertyService);


/***/ }),
/* 102 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PropertyRepository = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(35);
const entities_1 = __webpack_require__(103);
const database_mongo_object_id_repository_abstract_1 = __webpack_require__(69);
const database_decorator_1 = __webpack_require__(68);
let PropertyRepository = class PropertyRepository extends database_mongo_object_id_repository_abstract_1.DatabaseMongoObjectIdRepositoryAbstract {
    constructor(propertyModel) {
        super(propertyModel);
        this.propertyModel = propertyModel;
    }
    async createMany(_data, _options) {
        throw new Error('Method not implemented.');
    }
    async findByUserId(id, userId) {
        const property = this.propertyModel
            .findOne({ _id: id, createdById: userId })
            .exec();
        return property;
    }
    async findAllByUserId(userId) {
        const properties = await this.findAll({
            createdById: new mongoose_1.Types.ObjectId(userId),
        });
        return properties;
    }
    async updateById(id, updateData) {
        const result = await this.propertyModel.updateOne({ _id: new mongoose_1.Types.ObjectId(id) }, { $set: updateData });
        if (result.matchedCount === 0) {
            throw new common_1.NotFoundException('Room not found');
        }
        return true;
    }
};
exports.PropertyRepository = PropertyRepository;
exports.PropertyRepository = PropertyRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, database_decorator_1.DatabaseModel)(entities_1.PropertyEntity.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], PropertyRepository);


/***/ }),
/* 103 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(104), exports);


/***/ }),
/* 104 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PropertySchema = exports.PropertyEntity = exports.PaymentStyleEnum = exports.PaymentOptionEnum = exports.UtilityPaymentStyleEnum = exports.PropertyBillIssueTypesEnum = void 0;
const mongoose_1 = __webpack_require__(61);
const mongoose_2 = __webpack_require__(35);
const entities_1 = __webpack_require__(62);
var PropertyBillIssueTypesEnum;
(function (PropertyBillIssueTypesEnum) {
    PropertyBillIssueTypesEnum["MONTHLY"] = "monthly";
    PropertyBillIssueTypesEnum["BI_MONTHLY"] = "bi_monthly";
    PropertyBillIssueTypesEnum["QUARTERLY"] = "quarterly";
    PropertyBillIssueTypesEnum["SEMI_ANNUALLY"] = "semi_annually";
    PropertyBillIssueTypesEnum["ANNUALLY"] = "annually";
})(PropertyBillIssueTypesEnum || (exports.PropertyBillIssueTypesEnum = PropertyBillIssueTypesEnum = {}));
var UtilityPaymentStyleEnum;
(function (UtilityPaymentStyleEnum) {
    UtilityPaymentStyleEnum["FIXED_PER_PERSON"] = "fixed_per_person";
    UtilityPaymentStyleEnum["PER_KWH"] = "per_kwh";
})(UtilityPaymentStyleEnum || (exports.UtilityPaymentStyleEnum = UtilityPaymentStyleEnum = {}));
var PaymentOptionEnum;
(function (PaymentOptionEnum) {
    PaymentOptionEnum["MONTH_END"] = "month_end";
    PaymentOptionEnum["FULL_MONTH"] = "full_month";
})(PaymentOptionEnum || (exports.PaymentOptionEnum = PaymentOptionEnum = {}));
var PaymentStyleEnum;
(function (PaymentStyleEnum) {
    PaymentStyleEnum["BEFORE"] = "before";
    PaymentStyleEnum["AFTER"] = "after";
})(PaymentStyleEnum || (exports.PaymentStyleEnum = PaymentStyleEnum = {}));
let PropertyEntity = class PropertyEntity extends entities_1.DatabaseMongoObjectIdEntityAbstract {
};
exports.PropertyEntity = PropertyEntity;
__decorate([
    (0, mongoose_1.Prop)({
        trim: true,
    }),
    __metadata("design:type", String)
], PropertyEntity.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
    }),
    __metadata("design:type", typeof (_a = typeof mongoose_2.Types !== "undefined" && mongoose_2.Types.ObjectId) === "function" ? _a : Object)
], PropertyEntity.prototype, "createdById", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], PropertyEntity.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
    }),
    __metadata("design:type", Number)
], PropertyEntity.prototype, "roomQuantity", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
    }),
    __metadata("design:type", Number)
], PropertyEntity.prototype, "floors", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
    }),
    __metadata("design:type", Number)
], PropertyEntity.prototype, "latitude", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
    }),
    __metadata("design:type", Number)
], PropertyEntity.prototype, "longitude", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
    }),
    __metadata("design:type", Number)
], PropertyEntity.prototype, "area", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
    }),
    __metadata("design:type", Number)
], PropertyEntity.prototype, "rentalPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: PropertyBillIssueTypesEnum,
    }),
    __metadata("design:type", String)
], PropertyEntity.prototype, "billIssueType", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
    }),
    __metadata("design:type", Number)
], PropertyEntity.prototype, "billIssueAtDay", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
    }),
    __metadata("design:type", Number)
], PropertyEntity.prototype, "waterPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
    }),
    __metadata("design:type", Number)
], PropertyEntity.prototype, "electricPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: UtilityPaymentStyleEnum,
    }),
    __metadata("design:type", String)
], PropertyEntity.prototype, "waterPaymentStyle", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: PaymentOptionEnum,
    }),
    __metadata("design:type", String)
], PropertyEntity.prototype, "paymentOption", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: PaymentStyleEnum,
    }),
    __metadata("design:type", String)
], PropertyEntity.prototype, "paymentStyle", void 0);
exports.PropertyEntity = PropertyEntity = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, versionKey: false, collection: 'properties' })
], PropertyEntity);
exports.PropertySchema = mongoose_1.SchemaFactory.createForClass(PropertyEntity);
exports.PropertySchema.set('toJSON', {
    virtuals: true,
});


/***/ }),
/* 105 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(106), exports);


/***/ }),
/* 106 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoomModule = void 0;
const common_1 = __webpack_require__(1);
const session_repository_module_1 = __webpack_require__(107);
const session_service_1 = __webpack_require__(88);
const property_service_1 = __webpack_require__(101);
const property_repository_module_1 = __webpack_require__(108);
const room_service_1 = __webpack_require__(87);
const room_repository_module_1 = __webpack_require__(109);
let RoomModule = class RoomModule {
};
exports.RoomModule = RoomModule;
exports.RoomModule = RoomModule = __decorate([
    (0, common_1.Module)({
        imports: [
            room_repository_module_1.RoomRepositoryModule,
            session_repository_module_1.SessionRepositoryModule,
            property_repository_module_1.PropertyRepositoryModule,
        ],
        providers: [room_service_1.RoomService, session_service_1.SessionService, property_service_1.PropertyService],
        exports: [room_service_1.RoomService],
    })
], RoomModule);


/***/ }),
/* 107 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SessionRepositoryModule = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(61);
const entities_1 = __webpack_require__(89);
const session_repository_1 = __webpack_require__(91);
let SessionRepositoryModule = class SessionRepositoryModule {
};
exports.SessionRepositoryModule = SessionRepositoryModule;
exports.SessionRepositoryModule = SessionRepositoryModule = __decorate([
    (0, common_1.Module)({
        providers: [session_repository_1.SessionRepository],
        exports: [session_repository_1.SessionRepository],
        controllers: [],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: entities_1.SessionEntity.name,
                    schema: entities_1.SessionSchema,
                },
            ]),
        ],
    })
], SessionRepositoryModule);


/***/ }),
/* 108 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PropertyRepositoryModule = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(61);
const entities_1 = __webpack_require__(103);
const property_repository_1 = __webpack_require__(102);
let PropertyRepositoryModule = class PropertyRepositoryModule {
};
exports.PropertyRepositoryModule = PropertyRepositoryModule;
exports.PropertyRepositoryModule = PropertyRepositoryModule = __decorate([
    (0, common_1.Module)({
        providers: [property_repository_1.PropertyRepository],
        exports: [property_repository_1.PropertyRepository],
        controllers: [],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: entities_1.PropertyEntity.name,
                    schema: entities_1.PropertySchema,
                },
            ]),
        ],
    })
], PropertyRepositoryModule);


/***/ }),
/* 109 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoomRepositoryModule = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(61);
const entities_1 = __webpack_require__(92);
const room_repository_1 = __webpack_require__(94);
let RoomRepositoryModule = class RoomRepositoryModule {
};
exports.RoomRepositoryModule = RoomRepositoryModule;
exports.RoomRepositoryModule = RoomRepositoryModule = __decorate([
    (0, common_1.Module)({
        providers: [room_repository_1.RoomRepository],
        exports: [room_repository_1.RoomRepository],
        controllers: [],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: entities_1.RoomEntity.name,
                    schema: entities_1.RoomSchema,
                },
            ]),
        ],
    })
], RoomRepositoryModule);


/***/ }),
/* 110 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SessionUserController = void 0;
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(4);
const mongoose_1 = __webpack_require__(35);
const session_service_1 = __webpack_require__(88);
const create_session_presenter_1 = __webpack_require__(111);
const create_session_dto_1 = __webpack_require__(112);
const get_session_by_room_id_dto_1 = __webpack_require__(113);
const update_session_status_dto_1 = __webpack_require__(114);
const auth_user_guard_1 = __webpack_require__(76);
const tenant_service_1 = __webpack_require__(115);
const common_2 = __webpack_require__(6);
const property_service_1 = __webpack_require__(101);
const payload_interface_1 = __webpack_require__(75);
let SessionUserController = class SessionUserController {
    constructor(sessionService, tenantService, propertyService) {
        this.sessionService = sessionService;
        this.tenantService = tenantService;
        this.propertyService = propertyService;
    }
    async createSession(createSessionDto, user) {
        if (!mongoose_1.Types.ObjectId.isValid(createSessionDto.tenantId)) {
            const tenant = await this.tenantService.createTempTenant({
                phoneNumber: createSessionDto.tenantId.toString(),
            });
            createSessionDto.tenantId = tenant._id.toString();
        }
        else {
            let tenant = await this.tenantService.findById(createSessionDto.tenantId.toString());
            if (!tenant) {
                tenant = await this.tenantService.createTempTenant({
                    phoneNumber: createSessionDto.tenantId.toString(),
                });
            }
            createSessionDto.tenantId = tenant._id.toString();
        }
        const property = await this.propertyService.findByUserId(createSessionDto.propertyId, user.userId);
        if (!property) {
            throw new common_1.NotFoundException('Session could not be created because this user have no property');
        }
        const createdSession = await this.sessionService.createSession(createSessionDto);
        if (!createdSession) {
            throw new common_1.NotFoundException('Session could not be created');
        }
        return new create_session_presenter_1.CreateSessionPresenter({
            success: true,
        });
    }
    async getSessionByRoomId(roomId) {
        const foundSession = await this.sessionService.findByRoomId(roomId);
        if (!foundSession) {
            throw new common_1.NotFoundException('Session not found');
        }
        return new get_session_by_room_id_dto_1.GetSessionByRoomIdPresenter({
            success: true,
            session: foundSession,
        });
    }
    async updateSessionStatus(id, updateSessionStatusDto) {
        const updatedSession = await this.sessionService.updateSessionStatus(id, updateSessionStatusDto.status);
        if (!updatedSession) {
            throw new common_1.NotFoundException('Session not found or update failed');
        }
        return;
    }
};
exports.SessionUserController = SessionUserController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('/'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(auth_user_guard_1.AuthUserGuard),
    (0, swagger_1.ApiOkResponse)({
        description: 'Session created successfully',
        type: create_session_presenter_1.CreateSessionPresenter,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_2.ReqUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof create_session_dto_1.CreateSessionDto !== "undefined" && create_session_dto_1.CreateSessionDto) === "function" ? _d : Object, typeof (_e = typeof payload_interface_1.Payload !== "undefined" && payload_interface_1.Payload) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], SessionUserController.prototype, "createSession", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('/roomId/:roomId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(auth_user_guard_1.AuthUserGuard),
    (0, swagger_1.ApiOkResponse)({
        description: 'Get session by room ID successfully',
        type: get_session_by_room_id_dto_1.GetSessionByRoomIdPresenter,
    }),
    __param(0, (0, common_1.Param)('roomId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], SessionUserController.prototype, "getSessionByRoomId", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Patch)('/:id/status'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(auth_user_guard_1.AuthUserGuard),
    (0, swagger_1.ApiOkResponse)({ description: 'Session status updated successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_h = typeof update_session_status_dto_1.UpdateSessionStatusDto !== "undefined" && update_session_status_dto_1.UpdateSessionStatusDto) === "function" ? _h : Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], SessionUserController.prototype, "updateSessionStatus", null);
exports.SessionUserController = SessionUserController = __decorate([
    (0, swagger_1.ApiTags)('modules.session'),
    (0, common_1.Controller)({
        version: '1',
        path: '/session',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof session_service_1.SessionService !== "undefined" && session_service_1.SessionService) === "function" ? _a : Object, typeof (_b = typeof tenant_service_1.TenantService !== "undefined" && tenant_service_1.TenantService) === "function" ? _b : Object, typeof (_c = typeof property_service_1.PropertyService !== "undefined" && property_service_1.PropertyService) === "function" ? _c : Object])
], SessionUserController);


/***/ }),
/* 111 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateSessionPresenter = void 0;
const swagger_1 = __webpack_require__(4);
class CreateSessionPresenter {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.CreateSessionPresenter = CreateSessionPresenter;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], CreateSessionPresenter.prototype, "success", void 0);


/***/ }),
/* 112 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateSessionDto = void 0;
const swagger_1 = __webpack_require__(4);
const class_validator_1 = __webpack_require__(39);
const entities_1 = __webpack_require__(89);
class CreateSessionDto {
}
exports.CreateSessionDto = CreateSessionDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '60b6a0c3f5d3b34130f8c5c7',
        description: 'The room ID',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSessionDto.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 500, description: 'The deposit amount' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateSessionDto.prototype, "depositAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '60b6a0c3f5d3b34130f8c5c8',
        description: 'The property ID',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSessionDto.prototype, "propertyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '60b6a0c3f5d3b34130f8c5c9',
        description: 'The tenant ID',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSessionDto.prototype, "tenantId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2023-01-01',
        description: 'The start date of the session',
    }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CreateSessionDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2023-12-31',
        description: 'The termination date of the session',
        required: false,
    }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], CreateSessionDto.prototype, "terminationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: entities_1.SessionStatusEnum.ACTIVE,
        description: 'The status of the session',
    }),
    (0, class_validator_1.IsEnum)(entities_1.SessionStatusEnum),
    __metadata("design:type", typeof (_c = typeof entities_1.SessionStatusEnum !== "undefined" && entities_1.SessionStatusEnum) === "function" ? _c : Object)
], CreateSessionDto.prototype, "status", void 0);


/***/ }),
/* 113 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetSessionByRoomIdPresenter = void 0;
const swagger_1 = __webpack_require__(4);
const entities_1 = __webpack_require__(89);
class GetSessionByRoomIdPresenter {
    constructor(partial) {
        Object.assign(this, partial);
    }
}
exports.GetSessionByRoomIdPresenter = GetSessionByRoomIdPresenter;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], GetSessionByRoomIdPresenter.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: entities_1.SessionEntity,
    }),
    __metadata("design:type", typeof (_a = typeof entities_1.SessionEntity !== "undefined" && entities_1.SessionEntity) === "function" ? _a : Object)
], GetSessionByRoomIdPresenter.prototype, "session", void 0);


/***/ }),
/* 114 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateSessionStatusDto = void 0;
const swagger_1 = __webpack_require__(4);
class UpdateSessionStatusDto {
}
exports.UpdateSessionStatusDto = UpdateSessionStatusDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateSessionStatusDto.prototype, "status", void 0);


/***/ }),
/* 115 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TenantService = void 0;
const common_1 = __webpack_require__(1);
const lodash_1 = __importDefault(__webpack_require__(22));
const bcrypt_1 = __importDefault(__webpack_require__(116));
const uuid_1 = __webpack_require__(117);
const entities_1 = __webpack_require__(118);
const tenant_repository_1 = __webpack_require__(120);
const encryptPassword = async (password) => bcrypt_1.default.hash(password, 10);
let TenantService = class TenantService {
    constructor(tenantRepository) {
        this.tenantRepository = tenantRepository;
    }
    async findById(id) {
        return this.tenantRepository.findOneById(id);
    }
    async createTempTenant(createTenantDto) {
        const tenant = new entities_1.TenantEntity();
        tenant.firstName = '';
        tenant.lastName = '';
        tenant.phoneNumber = createTenantDto.phoneNumber;
        tenant.password = '';
        return this.tenantRepository.create(tenant);
    }
    async create(registerDto) {
        const oldUser = await this.tenantRepository.findOne({
            phoneNumber: registerDto.phoneNumber,
        });
        if (!lodash_1.default.isEmpty(oldUser)) {
            throw new common_1.BadRequestException('phone_does_exist', 'Phone does exist');
        }
        const user = await this.tenantRepository.create({
            ...registerDto,
            password: await encryptPassword(registerDto.password ? registerDto.password : ''),
        });
        return user;
    }
    async registerWithPhoneNumber(phoneNumber) {
        return this.tenantRepository.create({
            phoneNumber,
            password: await encryptPassword((0, uuid_1.v4)()),
        });
    }
    async getAll() {
        const rooms = await this.tenantRepository.findAll();
        if (!rooms) {
            return null;
        }
        return rooms;
    }
    async updateNewPassword(userId, password) {
        return this.tenantRepository.tenantModel.updateOne({ _id: userId }, {
            password: await encryptPassword(password),
        });
    }
    async findByPhoneNumber(phoneNumber) {
        return this.tenantRepository.findOneByPhoneNumber(phoneNumber);
    }
};
exports.TenantService = TenantService;
exports.TenantService = TenantService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof tenant_repository_1.TenantRepository !== "undefined" && tenant_repository_1.TenantRepository) === "function" ? _a : Object])
], TenantService);


/***/ }),
/* 116 */
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),
/* 117 */
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),
/* 118 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(119), exports);


/***/ }),
/* 119 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TenantSchema = exports.TenantEntity = void 0;
const mongoose_1 = __webpack_require__(61);
const entities_1 = __webpack_require__(62);
let TenantEntity = class TenantEntity extends entities_1.DatabaseMongoObjectIdEntityAbstract {
};
exports.TenantEntity = TenantEntity;
__decorate([
    (0, mongoose_1.Prop)({
        trim: true,
    }),
    __metadata("design:type", String)
], TenantEntity.prototype, "firstName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        trim: true,
    }),
    __metadata("design:type", String)
], TenantEntity.prototype, "lastName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], TenantEntity.prototype, "phoneNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], TenantEntity.prototype, "password", void 0);
exports.TenantEntity = TenantEntity = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, versionKey: false, collection: 'tenants' })
], TenantEntity);
exports.TenantSchema = mongoose_1.SchemaFactory.createForClass(TenantEntity);
exports.TenantSchema.set('toJSON', {
    virtuals: true,
});


/***/ }),
/* 120 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TenantRepository = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(35);
const entities_1 = __webpack_require__(118);
const database_mongo_object_id_repository_abstract_1 = __webpack_require__(69);
const database_decorator_1 = __webpack_require__(68);
let TenantRepository = class TenantRepository extends database_mongo_object_id_repository_abstract_1.DatabaseMongoObjectIdRepositoryAbstract {
    constructor(tenantModel) {
        super(tenantModel);
        this.tenantModel = tenantModel;
    }
    async createMany(_data, _options) {
        throw new Error('Method not implemented.');
    }
    async findOneByPhoneNumber(phoneNumber) {
        return this.tenantModel.findOne({ phoneNumber }).exec();
    }
};
exports.TenantRepository = TenantRepository;
exports.TenantRepository = TenantRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, database_decorator_1.DatabaseModel)(entities_1.TenantEntity.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], TenantRepository);


/***/ }),
/* 121 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(122), exports);


/***/ }),
/* 122 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SessionModule = void 0;
const common_1 = __webpack_require__(1);
const property_service_1 = __webpack_require__(101);
const property_repository_module_1 = __webpack_require__(108);
const session_service_1 = __webpack_require__(88);
const session_repository_module_1 = __webpack_require__(107);
let SessionModule = class SessionModule {
};
exports.SessionModule = SessionModule;
exports.SessionModule = SessionModule = __decorate([
    (0, common_1.Module)({
        imports: [session_repository_module_1.SessionRepositoryModule, property_repository_module_1.PropertyRepositoryModule],
        providers: [session_service_1.SessionService, property_service_1.PropertyService],
        exports: [session_service_1.SessionService],
    })
], SessionModule);


/***/ }),
/* 123 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TenantUserController = void 0;
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(4);
const tenant_service_1 = __webpack_require__(115);
const create_tenant_dto_1 = __webpack_require__(124);
const get_tenants_presenter_1 = __webpack_require__(125);
const created_tenant_presenter_1 = __webpack_require__(126);
const auth_user_guard_1 = __webpack_require__(76);
let TenantUserController = class TenantUserController {
    constructor(tenantService) {
        this.tenantService = tenantService;
    }
    async createTenant(createTenantDto) {
        const createdTenant = await this.tenantService.createTempTenant(createTenantDto);
        if (!createdTenant) {
            throw new common_1.NotFoundException('Session could not be created');
        }
        return new created_tenant_presenter_1.CreatedTenantPresenter({
            success: true,
        });
    }
    async getTenants() {
        const foundTenant = await this.tenantService.getAll();
        if (!foundTenant) {
            throw new common_1.NotFoundException('tenants not found');
        }
        return new get_tenants_presenter_1.GotTenantsPresenter({
            success: true,
            tenants: foundTenant,
        });
    }
};
exports.TenantUserController = TenantUserController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('/'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(auth_user_guard_1.AuthUserGuard),
    (0, swagger_1.ApiOkResponse)({
        description: 'Tenant created successfully',
        type: created_tenant_presenter_1.CreatedTenantPresenter,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_tenant_dto_1.CreateTenantDto !== "undefined" && create_tenant_dto_1.CreateTenantDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], TenantUserController.prototype, "createTenant", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('/'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(auth_user_guard_1.AuthUserGuard),
    (0, swagger_1.ApiOkResponse)({
        description: 'Get tenants successfully',
        type: get_tenants_presenter_1.GotTenantsPresenter,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], TenantUserController.prototype, "getTenants", null);
exports.TenantUserController = TenantUserController = __decorate([
    (0, swagger_1.ApiTags)('modules.tenant'),
    (0, common_1.Controller)({
        version: '1',
        path: '/tenant',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof tenant_service_1.TenantService !== "undefined" && tenant_service_1.TenantService) === "function" ? _a : Object])
], TenantUserController);


/***/ }),
/* 124 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateTenantDto = void 0;
const swagger_1 = __webpack_require__(4);
const class_validator_1 = __webpack_require__(39);
class CreateTenantDto {
}
exports.CreateTenantDto = CreateTenantDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'firstName',
        example: 'Khoa',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTenantDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'lastName',
        example: 'Pham',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTenantDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Phone number of the tenant',
        example: '1234567890',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTenantDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'password',
        example: '1234567890',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTenantDto.prototype, "password", void 0);


/***/ }),
/* 125 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GotTenantsPresenter = void 0;
const swagger_1 = __webpack_require__(4);
const entities_1 = __webpack_require__(118);
class GotTenantsPresenter {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.GotTenantsPresenter = GotTenantsPresenter;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], GotTenantsPresenter.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [entities_1.TenantEntity],
    }),
    __metadata("design:type", Array)
], GotTenantsPresenter.prototype, "tenants", void 0);


/***/ }),
/* 126 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreatedTenantPresenter = void 0;
const swagger_1 = __webpack_require__(4);
class CreatedTenantPresenter {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.CreatedTenantPresenter = CreatedTenantPresenter;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], CreatedTenantPresenter.prototype, "success", void 0);


/***/ }),
/* 127 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(128), exports);


/***/ }),
/* 128 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TenantModule = void 0;
const common_1 = __webpack_require__(1);
const tenant_service_1 = __webpack_require__(115);
const tenant_repository_module_1 = __webpack_require__(129);
let TenantModule = class TenantModule {
};
exports.TenantModule = TenantModule;
exports.TenantModule = TenantModule = __decorate([
    (0, common_1.Module)({
        imports: [
            tenant_repository_module_1.TenantRepositoryModule,
        ],
        providers: [tenant_service_1.TenantService],
        exports: [tenant_service_1.TenantService],
    })
], TenantModule);


/***/ }),
/* 129 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TenantRepositoryModule = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(61);
const entities_1 = __webpack_require__(118);
const tenant_repository_1 = __webpack_require__(120);
let TenantRepositoryModule = class TenantRepositoryModule {
};
exports.TenantRepositoryModule = TenantRepositoryModule;
exports.TenantRepositoryModule = TenantRepositoryModule = __decorate([
    (0, common_1.Module)({
        providers: [tenant_repository_1.TenantRepository],
        exports: [tenant_repository_1.TenantRepository],
        controllers: [],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: entities_1.TenantEntity.name,
                    schema: entities_1.TenantSchema,
                },
            ]),
        ],
    })
], TenantRepositoryModule);


/***/ }),
/* 130 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(131), exports);


/***/ }),
/* 131 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PropertyModule = void 0;
const common_1 = __webpack_require__(1);
const property_service_1 = __webpack_require__(101);
const property_repository_module_1 = __webpack_require__(108);
let PropertyModule = class PropertyModule {
};
exports.PropertyModule = PropertyModule;
exports.PropertyModule = PropertyModule = __decorate([
    (0, common_1.Module)({
        imports: [
            property_repository_module_1.PropertyRepositoryModule,
        ],
        providers: [property_service_1.PropertyService],
        exports: [property_service_1.PropertyService],
    })
], PropertyModule);


/***/ }),
/* 132 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PropertyUserController = void 0;
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(4);
const get_properties_presenter_1 = __webpack_require__(133);
const edit_property_dto_1 = __webpack_require__(134);
const auth_user_guard_1 = __webpack_require__(76);
const common_2 = __webpack_require__(6);
const payload_interface_1 = __webpack_require__(75);
const property_service_1 = __webpack_require__(101);
let PropertyUserController = class PropertyUserController {
    constructor(propertyService) {
        this.propertyService = propertyService;
    }
    async getProperties(user) {
        const foundProperties = await this.propertyService.getPropertiesByUserId(user.userId);
        if (!foundProperties) {
            throw new common_1.NotFoundException('Properties not found');
        }
        console.log(foundProperties);
        return new get_properties_presenter_1.GotProrpertiesPresenter({
            success: true,
            properties: foundProperties,
        });
    }
    async editProperty(id, editPropertyDto, user) {
        const updatedRoom = await this.propertyService.editProperty(id, user.userId, editPropertyDto);
        if (!updatedRoom) {
            throw new common_1.NotFoundException('Room could not be updated');
        }
        return { success: true };
    }
};
exports.PropertyUserController = PropertyUserController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('/'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(auth_user_guard_1.AuthUserGuard),
    (0, swagger_1.ApiOkResponse)({
        description: 'Get properties by user successfully',
        type: get_properties_presenter_1.GotProrpertiesPresenter,
    }),
    __param(0, (0, common_2.ReqUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof payload_interface_1.Payload !== "undefined" && payload_interface_1.Payload) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], PropertyUserController.prototype, "getProperties", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Put)('/edit/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(auth_user_guard_1.AuthUserGuard),
    (0, swagger_1.ApiOkResponse)({
        description: 'Property updated successfully',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_2.ReqUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof edit_property_dto_1.EditPropertyDto !== "undefined" && edit_property_dto_1.EditPropertyDto) === "function" ? _d : Object, typeof (_e = typeof payload_interface_1.Payload !== "undefined" && payload_interface_1.Payload) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], PropertyUserController.prototype, "editProperty", null);
exports.PropertyUserController = PropertyUserController = __decorate([
    (0, swagger_1.ApiTags)('modules.properties'),
    (0, common_1.Controller)({
        version: '1',
        path: '/properties',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof property_service_1.PropertyService !== "undefined" && property_service_1.PropertyService) === "function" ? _a : Object])
], PropertyUserController);


/***/ }),
/* 133 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GotProrpertiesPresenter = void 0;
const swagger_1 = __webpack_require__(4);
const entities_1 = __webpack_require__(103);
class GotProrpertiesPresenter {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.GotProrpertiesPresenter = GotProrpertiesPresenter;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], GotProrpertiesPresenter.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [entities_1.PropertyEntity],
    }),
    __metadata("design:type", Array)
], GotProrpertiesPresenter.prototype, "properties", void 0);


/***/ }),
/* 134 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EditPropertyDto = void 0;
const swagger_1 = __webpack_require__(4);
const entities_1 = __webpack_require__(103);
class EditPropertyDto {
}
exports.EditPropertyDto = EditPropertyDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 'Modern Apartment' }),
    __metadata("design:type", String)
], EditPropertyDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 'Studio' }),
    __metadata("design:type", String)
], EditPropertyDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 2 }),
    __metadata("design:type", Number)
], EditPropertyDto.prototype, "roomQuantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 1 }),
    __metadata("design:type", Number)
], EditPropertyDto.prototype, "floors", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 12.345678 }),
    __metadata("design:type", Number)
], EditPropertyDto.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: -98.765432 }),
    __metadata("design:type", Number)
], EditPropertyDto.prototype, "longitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 1000 }),
    __metadata("design:type", Number)
], EditPropertyDto.prototype, "area", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 1500 }),
    __metadata("design:type", Number)
], EditPropertyDto.prototype, "rentalPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: entities_1.PropertyBillIssueTypesEnum,
        required: false,
        example: entities_1.PropertyBillIssueTypesEnum.MONTHLY,
    }),
    __metadata("design:type", String)
], EditPropertyDto.prototype, "billIssueType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, example: 15 }),
    __metadata("design:type", Number)
], EditPropertyDto.prototype, "billIssueAtDay", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 5 }),
    __metadata("design:type", Number)
], EditPropertyDto.prototype, "waterPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 0.1 }),
    __metadata("design:type", Number)
], EditPropertyDto.prototype, "electricPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: entities_1.UtilityPaymentStyleEnum,
        required: false,
        example: entities_1.UtilityPaymentStyleEnum.PER_KWH,
    }),
    __metadata("design:type", typeof (_a = typeof entities_1.UtilityPaymentStyleEnum !== "undefined" && entities_1.UtilityPaymentStyleEnum) === "function" ? _a : Object)
], EditPropertyDto.prototype, "waterPaymentStyle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: entities_1.PaymentOptionEnum,
        required: false,
        example: entities_1.PaymentOptionEnum.MONTH_END,
    }),
    __metadata("design:type", typeof (_b = typeof entities_1.PaymentOptionEnum !== "undefined" && entities_1.PaymentOptionEnum) === "function" ? _b : Object)
], EditPropertyDto.prototype, "paymentOption", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: entities_1.PaymentStyleEnum,
        required: false,
        example: entities_1.PaymentStyleEnum.BEFORE,
    }),
    __metadata("design:type", typeof (_c = typeof entities_1.PaymentStyleEnum !== "undefined" && entities_1.PaymentStyleEnum) === "function" ? _c : Object)
], EditPropertyDto.prototype, "paymentStyle", void 0);


/***/ }),
/* 135 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoutesPublicModule = void 0;
const common_1 = __webpack_require__(1);
const user_1 = __webpack_require__(55);
const user_user_controller_1 = __webpack_require__(73);
let RoutesPublicModule = class RoutesPublicModule {
};
exports.RoutesPublicModule = RoutesPublicModule;
exports.RoutesPublicModule = RoutesPublicModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            user_user_controller_1.UserUserController,
        ],
        imports: [
            user_1.UserModule,
        ],
    })
], RoutesPublicModule);


/***/ }),
/* 136 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(137), exports);


/***/ }),
/* 137 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseModule = void 0;
const axios_1 = __webpack_require__(138);
const common_1 = __webpack_require__(1);
const ioredis_1 = __webpack_require__(139);
const terminus_1 = __webpack_require__(140);
const config_1 = __webpack_require__(28);
const event_emitter_1 = __webpack_require__(141);
const schedule_1 = __webpack_require__(142);
const mongoose_1 = __webpack_require__(61);
const controllers = __importStar(__webpack_require__(143));
const database_options_module_1 = __webpack_require__(145);
const database_options_service_1 = __webpack_require__(146);
const config_2 = __webpack_require__(149);
const common_2 = __webpack_require__(6);
let BaseModule = class BaseModule {
};
exports.BaseModule = BaseModule;
exports.BaseModule = BaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            terminus_1.TerminusModule,
            axios_1.HttpModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [config_2.configuration],
            }),
            ioredis_1.RedisModule.forRootAsync({
                useFactory: (configService) => ({
                    type: 'single',
                    url: `redis://${configService.get('redis.host')}:${configService.get('redis.port')}`,
                }),
                inject: [common_2.ConfigService],
            }),
            event_emitter_1.EventEmitterModule.forRoot(),
            schedule_1.ScheduleModule.forRoot(),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [database_options_module_1.DatabaseOptionsModule],
                useFactory: (databaseOptionService) => {
                    return databaseOptionService.createOptions();
                },
                inject: [database_options_service_1.DatabaseOptionsService],
            }),
        ],
        controllers: Object.values(controllers),
    })
], BaseModule);


/***/ }),
/* 138 */
/***/ ((module) => {

module.exports = require("@nestjs/axios");

/***/ }),
/* 139 */
/***/ ((module) => {

module.exports = require("@nestjs-modules/ioredis");

/***/ }),
/* 140 */
/***/ ((module) => {

module.exports = require("@nestjs/terminus");

/***/ }),
/* 141 */
/***/ ((module) => {

module.exports = require("@nestjs/event-emitter");

/***/ }),
/* 142 */
/***/ ((module) => {

module.exports = require("@nestjs/schedule");

/***/ }),
/* 143 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(144), exports);


/***/ }),
/* 144 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HealthController = void 0;
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(4);
const terminus_1 = __webpack_require__(140);
const common_2 = __webpack_require__(6);
let HealthController = class HealthController {
    constructor(health, http) {
        this.health = health;
        this.http = http;
    }
    async check() {
        const result = await this.health.check([
            async () => this.http.pingCheck('dns', 'https://1.1.1.1'),
        ]);
        return result;
    }
};
exports.HealthController = HealthController;
__decorate([
    (0, common_2.Public)(),
    (0, common_1.Get)(),
    (0, terminus_1.HealthCheck)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], HealthController.prototype, "check", null);
exports.HealthController = HealthController = __decorate([
    (0, swagger_1.ApiTags)('health'),
    (0, common_1.Controller)({
        path: 'health',
        version: common_1.VERSION_NEUTRAL,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof terminus_1.HealthCheckService !== "undefined" && terminus_1.HealthCheckService) === "function" ? _a : Object, typeof (_b = typeof terminus_1.HttpHealthIndicator !== "undefined" && terminus_1.HttpHealthIndicator) === "function" ? _b : Object])
], HealthController);


/***/ }),
/* 145 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseOptionsModule = void 0;
const common_1 = __webpack_require__(1);
const database_options_service_1 = __webpack_require__(146);
let DatabaseOptionsModule = class DatabaseOptionsModule {
};
exports.DatabaseOptionsModule = DatabaseOptionsModule;
exports.DatabaseOptionsModule = DatabaseOptionsModule = __decorate([
    (0, common_1.Module)({
        providers: [database_options_service_1.DatabaseOptionsService],
        exports: [database_options_service_1.DatabaseOptionsService],
        imports: [],
        controllers: [],
    })
], DatabaseOptionsModule);


/***/ }),
/* 146 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseOptionsService = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __importDefault(__webpack_require__(35));
const common_2 = __webpack_require__(6);
const app_env_enum_1 = __webpack_require__(147);
const connection_names_enum_1 = __webpack_require__(148);
let DatabaseOptionsService = class DatabaseOptionsService {
    constructor(configService) {
        this.configService = configService;
    }
    createOptions(name = connection_names_enum_1.ConnectionNamesEnum.MONGODB) {
        const env = this.configService.get('env');
        const host = this.configService.get(`${name}.host`);
        const database = this.configService.get(`${name}.database`);
        const user = this.configService.get(`${name}.user`);
        const password = this.configService.get(`${name}.password`);
        const debug = this.configService.get(`${name}.debug`);
        const options = this.configService.get(`${name}.options`)
            ? `?${this.configService.get(`${name}.options`)}`
            : '';
        let uri = `${host}`;
        if (database) {
            uri = `${uri}/${database}${options}`;
        }
        if (env !== app_env_enum_1.AppEnvironmentEnum.PRODUCTION) {
            mongoose_1.default.set('debug', !!debug);
        }
        const mongooseOptions = {
            uri,
            serverSelectionTimeoutMS: 5000,
            autoCreate: false,
            autoIndex: false,
        };
        if (user && password) {
            mongooseOptions.auth = {
                username: user,
                password: password,
            };
        }
        return mongooseOptions;
    }
};
exports.DatabaseOptionsService = DatabaseOptionsService;
exports.DatabaseOptionsService = DatabaseOptionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof common_2.ConfigService !== "undefined" && common_2.ConfigService) === "function" ? _a : Object])
], DatabaseOptionsService);


/***/ }),
/* 147 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppEnvironmentEnum = void 0;
var AppEnvironmentEnum;
(function (AppEnvironmentEnum) {
    AppEnvironmentEnum["PRODUCTION"] = "production";
    AppEnvironmentEnum["STAGING"] = "staging";
    AppEnvironmentEnum["DEVELOPMENT"] = "development";
})(AppEnvironmentEnum || (exports.AppEnvironmentEnum = AppEnvironmentEnum = {}));


/***/ }),
/* 148 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConnectionNamesEnum = void 0;
var ConnectionNamesEnum;
(function (ConnectionNamesEnum) {
    ConnectionNamesEnum["MONGODB"] = "mongodb";
})(ConnectionNamesEnum || (exports.ConnectionNamesEnum = ConnectionNamesEnum = {}));


/***/ }),
/* 149 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(150), exports);
__exportStar(__webpack_require__(151), exports);


/***/ }),
/* 150 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 151 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.configuration = void 0;
const development_1 = __webpack_require__(152);
const production_1 = __webpack_require__(153);
const util = {
    isObject(value) {
        return value !== null && typeof value === 'object' && !Array.isArray(value);
    },
    merge(target, source) {
        for (const key of Object.keys(source)) {
            const targetValue = target[key];
            const sourceValue = source[key];
            if (this.isObject(targetValue) && this.isObject(sourceValue)) {
                Object.assign(sourceValue, this.merge(targetValue, sourceValue));
            }
        }
        return { ...target, ...source };
    },
};
const configuration = async () => {
    const { config } = await Promise.resolve().then(() => __importStar(__webpack_require__(154)));
    const nodeEnv = process.env.NODE_ENV || 'development';
    switch (nodeEnv) {
        case 'development':
            return util.merge(config, development_1.config);
        case 'production':
            return util.merge(config, production_1.config);
        default:
            return util.merge(config, development_1.config);
    }
};
exports.configuration = configuration;


/***/ }),
/* 152 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.config = void 0;
const schedule_1 = __webpack_require__(142);
exports.config = {
    port: process.env.PORT || 4000,
    env: 'development',
    cronJobTime: {
        cheaterChecker: process.env.CRON_JOB_TIME_CHEATER_CHECKER || schedule_1.CronExpression.EVERY_30_MINUTES,
    },
};


/***/ }),
/* 153 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.config = void 0;
const schedule_1 = __webpack_require__(142);
exports.config = {
    port: process.env.PORT || 80,
    env: 'production',
    cronJobTime: {
        cheaterChecker: process.env.CRON_JOB_TIME_CHEATER_CHECKER || schedule_1.CronExpression.EVERY_30_MINUTES,
    },
};


/***/ }),
/* 154 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.config = void 0;
exports.config = {
    port: 4000,
    isDebuggingOtp: process.env.IS_DEBUGGING_OTP || false,
    isDebugging: process.env.IS_DEBUGGING || false,
    jwtSecret: process.env.JWT_SECRET,
    encryptionKey: process.env.ENCRYPTION_KEY,
    walletEncryptionKey: process.env.WALLET_ENCRYPTION_KEY,
    mongodb: {
        user: process.env.MONGODB_USER,
        password: process.env.MONGODB_PASSWORD,
        database: process.env.MONGODB_DATABASE,
        host: process.env.MONGODB_HOST,
        port: process.env.MONGODB_PORT,
        debug: process.env.MONGODB_DEBUG || false,
        options: process.env.MONGODB_OPTIONS || '',
    },
    redis: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
    },
    app: {
        version: process.env.APP_VERSION || '1.0.0',
    },
    isHapplyHour: process.env.IS_HAPPY_HOUR || false,
};


/***/ }),
/* 155 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SchedulerModule = void 0;
const common_1 = __webpack_require__(1);
const scheduler_service_1 = __webpack_require__(5);
let SchedulerModule = class SchedulerModule {
};
exports.SchedulerModule = SchedulerModule;
exports.SchedulerModule = SchedulerModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [
            scheduler_service_1.SchedulerService,
        ],
        exports: [],
    })
], SchedulerModule);


/***/ }),
/* 156 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SSEModule = void 0;
const common_1 = __webpack_require__(1);
const axios_1 = __webpack_require__(138);
const sse_controller_1 = __webpack_require__(157);
let SSEModule = class SSEModule {
};
exports.SSEModule = SSEModule;
exports.SSEModule = SSEModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
        ],
        controllers: [sse_controller_1.SSEController],
    })
], SSEModule);


/***/ }),
/* 157 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SSEController = void 0;
const common_1 = __webpack_require__(1);
const event_emitter_1 = __webpack_require__(141);
const rxjs_1 = __webpack_require__(158);
const event_names_enum_1 = __webpack_require__(159);
let SSEController = class SSEController {
    constructor(emitter) {
        this.emitter = emitter;
    }
    proxy() {
        return (0, rxjs_1.fromEvent)(this.emitter, event_names_enum_1.EventNamesEnum.DEPLOY_UPDATED);
    }
};
exports.SSEController = SSEController;
__decorate([
    (0, common_1.Sse)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], SSEController.prototype, "proxy", null);
exports.SSEController = SSEController = __decorate([
    (0, common_1.Controller)('sse'),
    __metadata("design:paramtypes", [typeof (_a = typeof event_emitter_1.EventEmitter2 !== "undefined" && event_emitter_1.EventEmitter2) === "function" ? _a : Object])
], SSEController);


/***/ }),
/* 158 */
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),
/* 159 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventNamesEnum = void 0;
var EventNamesEnum;
(function (EventNamesEnum) {
    EventNamesEnum["DEPLOY_UPDATED"] = "deploy.updated";
})(EventNamesEnum || (exports.EventNamesEnum = EventNamesEnum = {}));


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const platform_fastify_1 = __webpack_require__(3);
const swagger_1 = __webpack_require__(4);
const scheduler_service_1 = __webpack_require__(5);
const app_middleware_1 = __webpack_require__(50);
const app_module_1 = __webpack_require__(52);
const common_2 = __webpack_require__(6);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter());
    app.useBodyParser('json', {
        bodyLimit: 10485760,
    });
    app.enableVersioning({
        type: common_1.VersioningType.URI,
        defaultVersion: '1',
    });
    app.enableCors({
        origin: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
    });
    app.useLogger(await app.resolve(common_2.Logger));
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
    }));
    (0, app_middleware_1.middleware)(app);
    const schedulerService = await app.resolve(scheduler_service_1.SchedulerService);
    try {
        schedulerService.run();
    }
    catch (error) {
        common_1.Logger.error(error, 'Scheduler');
    }
    const options = new swagger_1.DocumentBuilder()
        .setTitle('API Documentation')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('docs', app, document);
    await app.listen(process.env.PORT || 4001, '0.0.0.0');
    return app.getUrl();
}
(async () => {
    try {
        const url = await bootstrap();
        common_1.Logger.log(url, 'Bootstrap');
    }
    catch (error) {
        common_1.Logger.error(error, 'Bootstrap');
    }
})();

})();

/******/ })()
;