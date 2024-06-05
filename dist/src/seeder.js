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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SeederModule = void 0;
const common_1 = __webpack_require__(1);
const seeder_service_1 = __webpack_require__(6);
const common_2 = __webpack_require__(8);
const base_1 = __webpack_require__(81);
const user_repository_module_1 = __webpack_require__(100);
const key_value_1 = __webpack_require__(101);
const property_repository_module_1 = __webpack_require__(104);
const room_repository_module_1 = __webpack_require__(105);
const session_repository_module_1 = __webpack_require__(106);
const tenant_repository_module_1 = __webpack_require__(107);
let SeederModule = class SeederModule {
    configure(consumer) {
        consumer.apply(common_2.LoggerMiddleware).forRoutes('*');
    }
};
exports.SeederModule = SeederModule;
exports.SeederModule = SeederModule = __decorate([
    (0, common_1.Module)({
        imports: [
            common_2.CommonModule,
            base_1.BaseModule,
            user_repository_module_1.UserRepositoryModule,
            property_repository_module_1.PropertyRepositoryModule,
            room_repository_module_1.RoomRepositoryModule,
            session_repository_module_1.SessionRepositoryModule,
            tenant_repository_module_1.TenantRepositoryModule,
            key_value_1.KeyValueModule,
        ],
        providers: [seeder_service_1.SeederService],
    })
], SeederModule);


/***/ }),
/* 6 */
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
var SeederService_1;
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SeederService = void 0;
const common_1 = __webpack_require__(1);
const faker_1 = __webpack_require__(7);
const common_2 = __webpack_require__(8);
const key_value_service_1 = __webpack_require__(52);
const user_repository_1 = __webpack_require__(66);
const property_repository_1 = __webpack_require__(69);
const room_repository_1 = __webpack_require__(72);
const session_repository_1 = __webpack_require__(75);
const property_entity_1 = __webpack_require__(71);
const session_entity_1 = __webpack_require__(77);
const entities_1 = __webpack_require__(73);
const tenant_repository_1 = __webpack_require__(78);
let SeederService = SeederService_1 = class SeederService {
    constructor(logger, keyValueService, userRepository, propertyRepository, roomRepository, sessionRepository, tenantRepository) {
        this.logger = logger;
        this.keyValueService = keyValueService;
        this.userRepository = userRepository;
        this.propertyRepository = propertyRepository;
        this.roomRepository = roomRepository;
        this.sessionRepository = sessionRepository;
        this.tenantRepository = tenantRepository;
        this.logger.setContext(SeederService_1.name);
        this.currentSeedVersion = '';
    }
    async run() {
        this.logger.log('Seeding data');
        await this.updateVersion('1.0.3');
        switch (this.currentSeedVersion) {
            case '1.0.0':
                await this.seedVersion1();
                break;
            case '1.0.1':
                this.seedVersion1_0_1();
                break;
            case '1.0.2':
                await this.seedVersion102();
                break;
            case '1.0.3':
                await this.seedVersion103();
                break;
            default:
                this.logger.log('No seed data');
                break;
        }
    }
    async updateVersion(version) {
        await this.keyValueService.setValueByKey('seed_version', version);
        this.currentSeedVersion = version;
    }
    async seedVersion1() {
        this.logger.log('Seeding version 1.0.0');
        await this.userRepository.create({
            phoneNumber: faker_1.faker.phone.number(),
            firstName: faker_1.faker.person.firstName(),
            lastName: faker_1.faker.person.lastName(),
        });
        await this.updateVersion('1.0.1');
    }
    async seedVersion102() {
        this.logger.log('Seeding version 1.0.1');
        const user = {
            phoneNumber: faker_1.faker.phone.number(),
            firstName: faker_1.faker.person.firstName(),
            lastName: faker_1.faker.person.lastName(),
        };
        const createdUser = await this.userRepository.create(user);
        const property = {
            name: faker_1.faker.location.buildingNumber(),
            type: faker_1.faker.location.city(),
            createdById: createdUser._id,
            roomQuantity: 6,
            floors: faker_1.faker.number.int({ min: 1, max: 10 }),
            latitude: faker_1.faker.location.latitude(),
            longitude: faker_1.faker.location.longitude(),
            area: faker_1.faker.number.int({ min: 1, max: 10 }),
            rentalPrice: faker_1.faker.number.float({
                min: 10000000,
                max: 10000000,
                multipleOf: 1000000,
            }),
            billIssueType: faker_1.faker.helpers.enumValue(property_entity_1.PropertyBillIssueTypesEnum),
            billIssueAtDay: faker_1.faker.number.int({ min: 1, max: 28 }),
        };
        const createdProperty = await this.propertyRepository.create(property);
        const roomPromises = Array.from({
            length: createdProperty.roomQuantity,
        }).map(async (_, index) => {
            const roomNumber = (index + 1).toString();
            return this.roomRepository.create({
                roomNumber,
                price: Math.floor(Math.random() * (5000 - 1000) + 1000),
                propertyId: createdProperty._id,
                type: faker_1.faker.helpers.enumValue(entities_1.RoomTypesEnum),
                floor: Math.floor(Math.random() * createdProperty.floors) + 1,
                area: Math.floor(Math.random() * (100 - 10) + 10),
                bedQuantity: Math.floor(Math.random() * (4 - 1) + 1),
                bathroomQuantity: Math.floor(Math.random() * (3 - 1) + 1),
                bedroomQuantity: Math.floor(Math.random() * (2 - 1) + 1),
                livingRoomQuantity: Math.floor(Math.random() * 2),
                kitchenQuantity: Math.floor(Math.random() * (2 - 1) + 1),
                haveBalcony: Math.random() < 0.5,
            });
        });
        const rooms = await Promise.all(roomPromises);
        const sessionPromises = rooms.map(async (room) => {
            const createdTenant = await this.tenantRepository.create({
                firstName: faker_1.faker.person.firstName(),
                lastName: faker_1.faker.person.lastName(),
                phoneNumber: faker_1.faker.phone.number(),
                password: faker_1.faker.internet.password(),
            });
            return this.sessionRepository.create({
                roomId: room._id,
                propertyId: createdTenant._id,
                depositAmount: faker_1.faker.datatype.number({ min: 1000000, max: 5000000 }),
                tennantId: createdUser._id,
                startDate: new Date(),
                status: faker_1.faker.helpers.enumValue(session_entity_1.SessionStatusEnum),
            });
        });
        await Promise.all(sessionPromises);
        await this.updateVersion('1.0.2');
    }
    async seedVersion103() {
        this.logger.log('Seeding version 1.0.2');
        const user = {
            phoneNumber: faker_1.faker.phone.number(),
            firstName: faker_1.faker.person.firstName(),
            lastName: faker_1.faker.person.lastName(),
        };
        const createdUser = await this.userRepository.create(user);
        const property = {
            name: faker_1.faker.location.buildingNumber(),
            type: faker_1.faker.location.city(),
            createdById: createdUser._id,
            roomQuantity: 6,
            floors: faker_1.faker.number.int({ min: 1, max: 10 }),
            latitude: faker_1.faker.location.latitude(),
            longitude: faker_1.faker.location.longitude(),
            area: faker_1.faker.number.int({ min: 1, max: 10 }),
            rentalPrice: faker_1.faker.number.float({
                min: 10000000,
                max: 10000000,
                multipleOf: 1000000,
            }),
            billIssueType: faker_1.faker.helpers.enumValue(property_entity_1.PropertyBillIssueTypesEnum),
            billIssueAtDay: faker_1.faker.number.int({ min: 1, max: 28 }),
        };
        const createdProperty = await this.propertyRepository.create(property);
        const roomPromises = Array.from({
            length: createdProperty.roomQuantity,
        }).map(async (_, index) => {
            return this.roomRepository.create({
                roomNumber: index + 1,
                price: Math.floor(Math.random() * (5000 - 1000) + 1000),
                propertyId: createdProperty._id,
                type: faker_1.faker.helpers.enumValue(entities_1.RoomTypesEnum),
                floor: Math.floor(Math.random() * createdProperty.floors) + 1,
                area: Math.floor(Math.random() * (100 - 10) + 10),
                bedQuantity: Math.floor(Math.random() * (4 - 1) + 1),
                bathroomQuantity: Math.floor(Math.random() * (3 - 1) + 1),
                bedroomQuantity: Math.floor(Math.random() * (2 - 1) + 1),
                livingRoomQuantity: Math.floor(Math.random() * 2),
                kitchenQuantity: Math.floor(Math.random() * (2 - 1) + 1),
                haveBalcony: Math.random() < 0.5,
            });
        });
        const rooms = await Promise.all(roomPromises);
        const sessionPromises = rooms.map(async (room) => {
            const createdTenant = await this.tenantRepository.create({
                firstName: faker_1.faker.person.firstName(),
                lastName: faker_1.faker.person.lastName(),
                phoneNumber: faker_1.faker.phone.number(),
                password: faker_1.faker.internet.password(),
            });
            return this.sessionRepository.create({
                roomId: room._id,
                propertyId: room.propertyId,
                depositAmount: faker_1.faker.datatype.number({ min: 1000000, max: 5000000 }),
                tennantId: createdTenant._id,
                startDate: new Date(),
                status: faker_1.faker.helpers.enumValue(session_entity_1.SessionStatusEnum),
            });
        });
        await Promise.all(sessionPromises);
        await this.updateVersion('1.0.3');
    }
    seedVersion1_0_1() {
        this.logger.log('Seeding version 1.0.3');
    }
};
exports.SeederService = SeederService;
exports.SeederService = SeederService = SeederService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof common_2.Logger !== "undefined" && common_2.Logger) === "function" ? _a : Object, typeof (_b = typeof key_value_service_1.KeyValueService !== "undefined" && key_value_service_1.KeyValueService) === "function" ? _b : Object, typeof (_c = typeof user_repository_1.UserRepository !== "undefined" && user_repository_1.UserRepository) === "function" ? _c : Object, typeof (_d = typeof property_repository_1.PropertyRepository !== "undefined" && property_repository_1.PropertyRepository) === "function" ? _d : Object, typeof (_e = typeof room_repository_1.RoomRepository !== "undefined" && room_repository_1.RoomRepository) === "function" ? _e : Object, typeof (_f = typeof session_repository_1.SessionRepository !== "undefined" && session_repository_1.SessionRepository) === "function" ? _f : Object, typeof (_g = typeof tenant_repository_1.TenantRepository !== "undefined" && tenant_repository_1.TenantRepository) === "function" ? _g : Object])
], SeederService);


/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("@faker-js/faker");

/***/ }),
/* 8 */
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
__exportStar(__webpack_require__(9), exports);
__exportStar(__webpack_require__(21), exports);
__exportStar(__webpack_require__(25), exports);
__exportStar(__webpack_require__(28), exports);
__exportStar(__webpack_require__(34), exports);
__exportStar(__webpack_require__(38), exports);
__exportStar(__webpack_require__(43), exports);
__exportStar(__webpack_require__(9), exports);
__exportStar(__webpack_require__(44), exports);
__exportStar(__webpack_require__(14), exports);
__exportStar(__webpack_require__(47), exports);


/***/ }),
/* 9 */
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
__exportStar(__webpack_require__(10), exports);
__exportStar(__webpack_require__(11), exports);
__exportStar(__webpack_require__(12), exports);
__exportStar(__webpack_require__(13), exports);


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Public = void 0;
const common_1 = __webpack_require__(1);
const Public = () => (0, common_1.SetMetadata)('isPublic', true);
exports.Public = Public;


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReqUser = void 0;
const common_1 = __webpack_require__(1);
exports.ReqUser = (0, common_1.createParamDecorator)((_data, context) => {
    const request = context.switchToHttp().getRequest();
    return request.user;
});


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Roles = void 0;
const common_1 = __webpack_require__(1);
const Roles = (...roles) => (0, common_1.SetMetadata)('roles', roles);
exports.Roles = Roles;


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UUIDParam = exports.Auth = void 0;
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(4);
const enums_1 = __webpack_require__(14);
const auth_user_interceptor_1 = __webpack_require__(20);
const roles_decorator_1 = __webpack_require__(12);
function Auth(role = enums_1.RoleEnum.USER) {
    return (0, common_1.applyDecorators)((0, roles_decorator_1.Roles)(role, enums_1.RoleEnum.ADMIN), (0, swagger_1.ApiBearerAuth)(), (0, common_1.UseInterceptors)(auth_user_interceptor_1.AuthUserInterceptor), (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Unauthorized' }));
}
exports.Auth = Auth;
function UUIDParam(property, ...pipes) {
    return (0, common_1.Param)(property, new common_1.ParseUUIDPipe({ version: '4' }), ...pipes);
}
exports.UUIDParam = UUIDParam;


/***/ }),
/* 14 */
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
__exportStar(__webpack_require__(15), exports);
__exportStar(__webpack_require__(16), exports);
__exportStar(__webpack_require__(17), exports);
__exportStar(__webpack_require__(18), exports);
__exportStar(__webpack_require__(19), exports);


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TimeEnum = void 0;
var TimeEnum;
(function (TimeEnum) {
    TimeEnum[TimeEnum["ONE_SECOND"] = 1000] = "ONE_SECOND";
    TimeEnum[TimeEnum["ONE_MINUTE"] = 60000] = "ONE_MINUTE";
})(TimeEnum || (exports.TimeEnum = TimeEnum = {}));


/***/ }),
/* 16 */
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
/* 17 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SortByEnum = void 0;
var SortByEnum;
(function (SortByEnum) {
    SortByEnum["CREATED_AT"] = "createdAt";
})(SortByEnum || (exports.SortByEnum = SortByEnum = {}));


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderByEnum = void 0;
var OrderByEnum;
(function (OrderByEnum) {
    OrderByEnum["ASC"] = "asc";
    OrderByEnum["DESC"] = "desc";
})(OrderByEnum || (exports.OrderByEnum = OrderByEnum = {}));


/***/ }),
/* 19 */
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
/* 20 */
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
/* 21 */
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
__exportStar(__webpack_require__(22), exports);
__exportStar(__webpack_require__(23), exports);


/***/ }),
/* 22 */
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
/* 23 */
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
const lodash_1 = __importDefault(__webpack_require__(24));
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
/* 24 */
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),
/* 25 */
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
__exportStar(__webpack_require__(26), exports);


/***/ }),
/* 26 */
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
const nanoid_1 = __webpack_require__(27);
const providers_1 = __webpack_require__(28);
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
/* 27 */
/***/ ((module) => {

module.exports = require("nanoid");

/***/ }),
/* 28 */
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
__exportStar(__webpack_require__(29), exports);
__exportStar(__webpack_require__(31), exports);
__exportStar(__webpack_require__(32), exports);
__exportStar(__webpack_require__(33), exports);


/***/ }),
/* 29 */
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
const config_1 = __webpack_require__(30);
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
/* 30 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 31 */
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
const request_context_service_1 = __webpack_require__(32);
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
/* 32 */
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
/* 33 */
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
/* 34 */
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
__exportStar(__webpack_require__(35), exports);
__exportStar(__webpack_require__(36), exports);


/***/ }),
/* 35 */
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
/* 36 */
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
const mongoose_1 = __webpack_require__(37);
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
/* 37 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 38 */
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
__exportStar(__webpack_require__(39), exports);
__exportStar(__webpack_require__(42), exports);


/***/ }),
/* 39 */
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
const class_transformer_1 = __webpack_require__(40);
const class_validator_1 = __webpack_require__(41);
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
/* 40 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 41 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 42 */
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
/* 43 */
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
const providers = __importStar(__webpack_require__(28));
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
/* 44 */
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
__exportStar(__webpack_require__(45), exports);
__exportStar(__webpack_require__(46), exports);


/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 47 */
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
__exportStar(__webpack_require__(48), exports);
__exportStar(__webpack_require__(49), exports);
__exportStar(__webpack_require__(50), exports);
__exportStar(__webpack_require__(51), exports);


/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsBoolTransformer = void 0;
const common_1 = __webpack_require__(1);
const class_validator_1 = __webpack_require__(41);
const class_transformer_1 = __webpack_require__(40);
const IsBoolTransformer = () => {
    return (0, common_1.applyDecorators)((0, class_validator_1.IsBoolean)(), (0, class_transformer_1.Transform)(({ value }) => value === '1' || value === 'true' || value === true));
};
exports.IsBoolTransformer = IsBoolTransformer;


/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArrayTransform = void 0;
const common_1 = __webpack_require__(1);
const class_validator_1 = __webpack_require__(41);
const class_transformer_1 = __webpack_require__(40);
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
/* 50 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ObjectIdsTransformer = void 0;
const common_1 = __webpack_require__(1);
const lodash_1 = __importDefault(__webpack_require__(24));
const class_transformer_1 = __webpack_require__(40);
const mongoose_1 = __webpack_require__(37);
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
/* 51 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ObjectIdTransformer = void 0;
const common_1 = __webpack_require__(1);
const class_transformer_1 = __webpack_require__(40);
const mongoose_1 = __webpack_require__(37);
const ObjectIdTransformer = () => {
    return (0, common_1.applyDecorators)((0, class_transformer_1.Transform)(({ value }) => {
        return new mongoose_1.Types.ObjectId(value);
    }));
};
exports.ObjectIdTransformer = ObjectIdTransformer;


/***/ }),
/* 52 */
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
exports.KeyValueService = void 0;
const common_1 = __webpack_require__(1);
const key_value_repository_1 = __webpack_require__(53);
let KeyValueService = class KeyValueService {
    constructor(keyValueRepository) {
        this.keyValueRepository = keyValueRepository;
    }
    async findById(id) {
        return this.keyValueRepository.findOneById(id);
    }
    async getValueByKey(key) {
        return this.keyValueRepository.findOne({ key });
    }
    async setValueByKey(key, value) {
        const keyValue = await this.getValueByKey(key);
        if (!keyValue) {
            await this.keyValueRepository.create({ key, value });
        }
        const updated = await this.keyValueRepository.keyValueModel.updateOne({ key }, { value });
        return updated.acknowledged;
    }
};
exports.KeyValueService = KeyValueService;
exports.KeyValueService = KeyValueService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof key_value_repository_1.KeyValueRepository !== "undefined" && key_value_repository_1.KeyValueRepository) === "function" ? _a : Object])
], KeyValueService);


/***/ }),
/* 53 */
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
exports.KeyValueRepository = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(37);
const entities_1 = __webpack_require__(54);
const database_mongo_object_id_repository_abstract_1 = __webpack_require__(63);
const database_decorator_1 = __webpack_require__(65);
let KeyValueRepository = class KeyValueRepository extends database_mongo_object_id_repository_abstract_1.DatabaseMongoObjectIdRepositoryAbstract {
    constructor(keyValueModel) {
        super(keyValueModel);
        this.keyValueModel = keyValueModel;
    }
    async createMany(_data, _options) {
        throw new Error('Method not implemented.');
    }
};
exports.KeyValueRepository = KeyValueRepository;
exports.KeyValueRepository = KeyValueRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, database_decorator_1.DatabaseModel)(entities_1.KeyValueEntity.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], KeyValueRepository);


/***/ }),
/* 54 */
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
__exportStar(__webpack_require__(55), exports);


/***/ }),
/* 55 */
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
exports.KeyValueSchema = exports.KeyValueEntity = void 0;
const mongoose_1 = __webpack_require__(56);
const entities_1 = __webpack_require__(57);
let KeyValueEntity = class KeyValueEntity extends entities_1.DatabaseMongoObjectIdEntityAbstract {
};
exports.KeyValueEntity = KeyValueEntity;
__decorate([
    (0, mongoose_1.Prop)({
        unique: true,
        trim: true,
        required: true,
    }),
    __metadata("design:type", String)
], KeyValueEntity.prototype, "key", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
    }),
    __metadata("design:type", String)
], KeyValueEntity.prototype, "value", void 0);
exports.KeyValueEntity = KeyValueEntity = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, versionKey: false, collection: 'key_values' })
], KeyValueEntity);
exports.KeyValueSchema = mongoose_1.SchemaFactory.createForClass(KeyValueEntity);
exports.KeyValueSchema.set('toJSON', {
    virtuals: true,
});


/***/ }),
/* 56 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 57 */
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
__exportStar(__webpack_require__(58), exports);
__exportStar(__webpack_require__(62), exports);


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
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseMongoObjectIdEntityAbstract = void 0;
const mongoose_1 = __webpack_require__(56);
const mongoose_2 = __webpack_require__(37);
const database_base_entity_abstract_1 = __webpack_require__(59);
const database_constant_1 = __webpack_require__(60);
const database_function_constant_1 = __webpack_require__(61);
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
/* 59 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseBaseEntityAbstract = void 0;
const database_constant_1 = __webpack_require__(60);
class DatabaseBaseEntityAbstract {
}
exports.DatabaseBaseEntityAbstract = DatabaseBaseEntityAbstract;


/***/ }),
/* 60 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DATABASE_CREATED_AT_FIELD_NAME = exports.DATABASE_UPDATED_AT_FIELD_NAME = exports.DATABASE_DELETED_AT_FIELD_NAME = exports.DATABASE_CONNECTION_NAME = void 0;
exports.DATABASE_CONNECTION_NAME = 'PrimaryConnectionDatabase';
exports.DATABASE_DELETED_AT_FIELD_NAME = 'deletedAt';
exports.DATABASE_UPDATED_AT_FIELD_NAME = 'updatedAt';
exports.DATABASE_CREATED_AT_FIELD_NAME = 'createdAt';


/***/ }),
/* 61 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseDefaultObjectId = exports.DatabaseDefaultUUID = void 0;
const mongoose_1 = __webpack_require__(37);
const nanoid_1 = __webpack_require__(27);
exports.DatabaseDefaultUUID = nanoid_1.nanoid;
const DatabaseDefaultObjectId = () => new mongoose_1.Types.ObjectId();
exports.DatabaseDefaultObjectId = DatabaseDefaultObjectId;


/***/ }),
/* 62 */
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
const mongoose_1 = __webpack_require__(56);
const database_base_entity_abstract_1 = __webpack_require__(59);
const database_constant_1 = __webpack_require__(60);
const database_function_constant_1 = __webpack_require__(61);
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
/* 63 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseMongoObjectIdRepositoryAbstract = void 0;
const mongoose_1 = __webpack_require__(37);
const database_base_repository_abstract_1 = __webpack_require__(64);
const database_constant_1 = __webpack_require__(60);
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
/* 64 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseBaseRepositoryAbstract = void 0;
class DatabaseBaseRepositoryAbstract {
}
exports.DatabaseBaseRepositoryAbstract = DatabaseBaseRepositoryAbstract;


/***/ }),
/* 65 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseEntity = exports.DatabaseModel = exports.DatabaseConnection = void 0;
const mongoose_1 = __webpack_require__(56);
const database_constant_1 = __webpack_require__(60);
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
/* 66 */
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
const mongoose_1 = __webpack_require__(37);
const entities_1 = __webpack_require__(67);
const database_decorator_1 = __webpack_require__(65);
const database_mongo_object_id_repository_abstract_1 = __webpack_require__(63);
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
/* 67 */
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
__exportStar(__webpack_require__(68), exports);


/***/ }),
/* 68 */
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
const mongoose_1 = __webpack_require__(56);
const entities_1 = __webpack_require__(57);
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
/* 69 */
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
const mongoose_1 = __webpack_require__(37);
const entities_1 = __webpack_require__(70);
const database_mongo_object_id_repository_abstract_1 = __webpack_require__(63);
const database_decorator_1 = __webpack_require__(65);
let PropertyRepository = class PropertyRepository extends database_mongo_object_id_repository_abstract_1.DatabaseMongoObjectIdRepositoryAbstract {
    constructor(propertyModel) {
        super(propertyModel);
        this.propertyModel = propertyModel;
    }
    async createMany(_data, _options) {
        throw new Error('Method not implemented.');
    }
};
exports.PropertyRepository = PropertyRepository;
exports.PropertyRepository = PropertyRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, database_decorator_1.DatabaseModel)(entities_1.PropertyEntity.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], PropertyRepository);


/***/ }),
/* 70 */
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
__exportStar(__webpack_require__(71), exports);


/***/ }),
/* 71 */
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
exports.PropertySchema = exports.PropertyEntity = exports.PropertyBillIssueTypesEnum = void 0;
const mongoose_1 = __webpack_require__(56);
const mongoose_2 = __webpack_require__(37);
const entities_1 = __webpack_require__(57);
var PropertyBillIssueTypesEnum;
(function (PropertyBillIssueTypesEnum) {
    PropertyBillIssueTypesEnum["MONTHLY"] = "monthly";
    PropertyBillIssueTypesEnum["BI_MONTHLY"] = "bi_monthly";
    PropertyBillIssueTypesEnum["QUARTERLY"] = "quarterly";
    PropertyBillIssueTypesEnum["SEMI_ANNUALLY"] = "semi_annually";
    PropertyBillIssueTypesEnum["ANNUALLY"] = "annually";
})(PropertyBillIssueTypesEnum || (exports.PropertyBillIssueTypesEnum = PropertyBillIssueTypesEnum = {}));
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
exports.PropertyEntity = PropertyEntity = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, versionKey: false, collection: 'properties' })
], PropertyEntity);
exports.PropertySchema = mongoose_1.SchemaFactory.createForClass(PropertyEntity);
exports.PropertySchema.set('toJSON', {
    virtuals: true,
});


/***/ }),
/* 72 */
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
const mongoose_1 = __webpack_require__(37);
const entities_1 = __webpack_require__(73);
const database_mongo_object_id_repository_abstract_1 = __webpack_require__(63);
const database_decorator_1 = __webpack_require__(65);
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
/* 73 */
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
__exportStar(__webpack_require__(74), exports);


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoomSchema = exports.RoomEntity = exports.RoomTypesEnum = void 0;
const mongoose_1 = __webpack_require__(56);
const mongoose_2 = __webpack_require__(37);
const entities_1 = __webpack_require__(57);
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
    (0, mongoose_1.Prop)({
        type: Number,
    }),
    __metadata("design:type", Number)
], RoomEntity.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: 'PropertyEntity',
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
        type: mongoose_2.Types.ObjectId,
        ref: 'SessionEntity',
    }),
    __metadata("design:type", typeof (_b = typeof mongoose_2.Types !== "undefined" && mongoose_2.Types.ObjectId) === "function" ? _b : Object)
], RoomEntity.prototype, "currentSessionId", void 0);
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
exports.RoomEntity = RoomEntity = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, versionKey: false, collection: 'rooms' })
], RoomEntity);
exports.RoomSchema = mongoose_1.SchemaFactory.createForClass(RoomEntity);
exports.RoomSchema.set('toJSON', {
    virtuals: true,
});


/***/ }),
/* 75 */
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
const mongoose_1 = __webpack_require__(37);
const entities_1 = __webpack_require__(76);
const database_mongo_object_id_repository_abstract_1 = __webpack_require__(63);
const database_decorator_1 = __webpack_require__(65);
let SessionRepository = class SessionRepository extends database_mongo_object_id_repository_abstract_1.DatabaseMongoObjectIdRepositoryAbstract {
    constructor(sessionModel) {
        super(sessionModel);
        this.sessionModel = sessionModel;
    }
    async createMany(_data, _options) {
        throw new Error('Method not implemented.');
    }
};
exports.SessionRepository = SessionRepository;
exports.SessionRepository = SessionRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, database_decorator_1.DatabaseModel)(entities_1.SessionEntity.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], SessionRepository);


/***/ }),
/* 76 */
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
__exportStar(__webpack_require__(77), exports);


/***/ }),
/* 77 */
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
const mongoose_1 = __webpack_require__(56);
const mongoose_2 = __webpack_require__(37);
const entities_1 = __webpack_require__(57);
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
/* 78 */
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
const mongoose_1 = __webpack_require__(37);
const entities_1 = __webpack_require__(79);
const database_mongo_object_id_repository_abstract_1 = __webpack_require__(63);
const database_decorator_1 = __webpack_require__(65);
let TenantRepository = class TenantRepository extends database_mongo_object_id_repository_abstract_1.DatabaseMongoObjectIdRepositoryAbstract {
    constructor(tenantModel) {
        super(tenantModel);
        this.tenantModel = tenantModel;
    }
    async createMany(_data, _options) {
        throw new Error('Method not implemented.');
    }
};
exports.TenantRepository = TenantRepository;
exports.TenantRepository = TenantRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, database_decorator_1.DatabaseModel)(entities_1.TenantEntity.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], TenantRepository);


/***/ }),
/* 79 */
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
__exportStar(__webpack_require__(80), exports);


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TenantSchema = exports.TenantEntity = void 0;
const mongoose_1 = __webpack_require__(56);
const entities_1 = __webpack_require__(57);
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
/* 81 */
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
__exportStar(__webpack_require__(82), exports);


/***/ }),
/* 82 */
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
const axios_1 = __webpack_require__(83);
const common_1 = __webpack_require__(1);
const ioredis_1 = __webpack_require__(84);
const terminus_1 = __webpack_require__(85);
const config_1 = __webpack_require__(30);
const event_emitter_1 = __webpack_require__(86);
const schedule_1 = __webpack_require__(87);
const mongoose_1 = __webpack_require__(56);
const controllers = __importStar(__webpack_require__(88));
const database_options_module_1 = __webpack_require__(90);
const database_options_service_1 = __webpack_require__(91);
const config_2 = __webpack_require__(94);
const common_2 = __webpack_require__(8);
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
/* 83 */
/***/ ((module) => {

module.exports = require("@nestjs/axios");

/***/ }),
/* 84 */
/***/ ((module) => {

module.exports = require("@nestjs-modules/ioredis");

/***/ }),
/* 85 */
/***/ ((module) => {

module.exports = require("@nestjs/terminus");

/***/ }),
/* 86 */
/***/ ((module) => {

module.exports = require("@nestjs/event-emitter");

/***/ }),
/* 87 */
/***/ ((module) => {

module.exports = require("@nestjs/schedule");

/***/ }),
/* 88 */
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
__exportStar(__webpack_require__(89), exports);


/***/ }),
/* 89 */
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
const terminus_1 = __webpack_require__(85);
const common_2 = __webpack_require__(8);
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
/* 90 */
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
const database_options_service_1 = __webpack_require__(91);
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseOptionsService = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __importDefault(__webpack_require__(37));
const common_2 = __webpack_require__(8);
const app_env_enum_1 = __webpack_require__(92);
const connection_names_enum_1 = __webpack_require__(93);
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
/* 92 */
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
/* 93 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConnectionNamesEnum = void 0;
var ConnectionNamesEnum;
(function (ConnectionNamesEnum) {
    ConnectionNamesEnum["MONGODB"] = "mongodb";
})(ConnectionNamesEnum || (exports.ConnectionNamesEnum = ConnectionNamesEnum = {}));


/***/ }),
/* 94 */
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
__exportStar(__webpack_require__(95), exports);
__exportStar(__webpack_require__(96), exports);


/***/ }),
/* 95 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 96 */
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
const development_1 = __webpack_require__(97);
const production_1 = __webpack_require__(98);
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
    const { config } = await Promise.resolve().then(() => __importStar(__webpack_require__(99)));
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
/* 97 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.config = void 0;
const schedule_1 = __webpack_require__(87);
exports.config = {
    port: process.env.PORT || 4000,
    env: 'development',
    cronJobTime: {
        cheaterChecker: process.env.CRON_JOB_TIME_CHEATER_CHECKER || schedule_1.CronExpression.EVERY_30_MINUTES,
    },
};


/***/ }),
/* 98 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.config = void 0;
const schedule_1 = __webpack_require__(87);
exports.config = {
    port: process.env.PORT || 80,
    env: 'production',
    cronJobTime: {
        cheaterChecker: process.env.CRON_JOB_TIME_CHEATER_CHECKER || schedule_1.CronExpression.EVERY_30_MINUTES,
    },
};


/***/ }),
/* 99 */
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
/* 100 */
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
const mongoose_1 = __webpack_require__(56);
const entities_1 = __webpack_require__(67);
const user_repository_1 = __webpack_require__(66);
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
/* 101 */
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
__exportStar(__webpack_require__(102), exports);


/***/ }),
/* 102 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KeyValueModule = void 0;
const common_1 = __webpack_require__(1);
const key_value_service_1 = __webpack_require__(52);
const key_value_repository_module_1 = __webpack_require__(103);
let KeyValueModule = class KeyValueModule {
};
exports.KeyValueModule = KeyValueModule;
exports.KeyValueModule = KeyValueModule = __decorate([
    (0, common_1.Module)({
        imports: [
            key_value_repository_module_1.KeyValueRepositoryModule,
        ],
        providers: [key_value_service_1.KeyValueService],
        exports: [key_value_service_1.KeyValueService],
    })
], KeyValueModule);


/***/ }),
/* 103 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KeyValueRepositoryModule = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(56);
const entities_1 = __webpack_require__(54);
const key_value_repository_1 = __webpack_require__(53);
let KeyValueRepositoryModule = class KeyValueRepositoryModule {
};
exports.KeyValueRepositoryModule = KeyValueRepositoryModule;
exports.KeyValueRepositoryModule = KeyValueRepositoryModule = __decorate([
    (0, common_1.Module)({
        providers: [key_value_repository_1.KeyValueRepository],
        exports: [key_value_repository_1.KeyValueRepository],
        controllers: [],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: entities_1.KeyValueEntity.name,
                    schema: entities_1.KeyValueSchema,
                },
            ]),
        ],
    })
], KeyValueRepositoryModule);


/***/ }),
/* 104 */
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
const mongoose_1 = __webpack_require__(56);
const entities_1 = __webpack_require__(70);
const property_repository_1 = __webpack_require__(69);
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
/* 105 */
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
const mongoose_1 = __webpack_require__(56);
const entities_1 = __webpack_require__(73);
const room_repository_1 = __webpack_require__(72);
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
/* 106 */
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
const mongoose_1 = __webpack_require__(56);
const entities_1 = __webpack_require__(76);
const session_repository_1 = __webpack_require__(75);
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
/* 107 */
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
const mongoose_1 = __webpack_require__(56);
const entities_1 = __webpack_require__(79);
const tenant_repository_1 = __webpack_require__(78);
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
const seeder_module_1 = __webpack_require__(5);
const seeder_service_1 = __webpack_require__(6);
const common_2 = __webpack_require__(8);
async function bootstrap() {
    const app = await core_1.NestFactory.create(seeder_module_1.SeederModule, new platform_fastify_1.FastifyAdapter());
    app.useLogger(await app.resolve(common_2.Logger));
    const seederService = await app.resolve(seeder_service_1.SeederService);
    try {
        await seederService.run();
    }
    catch (error) {
        common_1.Logger.error(error, 'Seeder');
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