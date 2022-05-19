"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutProyectosLideradosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutProyectosLideradosInput_1 = require("../inputs/UserCreateOrConnectWithoutProyectosLideradosInput");
const UserCreateWithoutProyectosLideradosInput_1 = require("../inputs/UserCreateWithoutProyectosLideradosInput");
const UserUpdateWithoutProyectosLideradosInput_1 = require("../inputs/UserUpdateWithoutProyectosLideradosInput");
const UserUpsertWithoutProyectosLideradosInput_1 = require("../inputs/UserUpsertWithoutProyectosLideradosInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutProyectosLideradosInput = class UserUpdateOneRequiredWithoutProyectosLideradosInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutProyectosLideradosInput_1.UserCreateWithoutProyectosLideradosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutProyectosLideradosInput_1.UserCreateWithoutProyectosLideradosInput)
], UserUpdateOneRequiredWithoutProyectosLideradosInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutProyectosLideradosInput_1.UserCreateOrConnectWithoutProyectosLideradosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutProyectosLideradosInput_1.UserCreateOrConnectWithoutProyectosLideradosInput)
], UserUpdateOneRequiredWithoutProyectosLideradosInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutProyectosLideradosInput_1.UserUpsertWithoutProyectosLideradosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutProyectosLideradosInput_1.UserUpsertWithoutProyectosLideradosInput)
], UserUpdateOneRequiredWithoutProyectosLideradosInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutProyectosLideradosInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutProyectosLideradosInput_1.UserUpdateWithoutProyectosLideradosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutProyectosLideradosInput_1.UserUpdateWithoutProyectosLideradosInput)
], UserUpdateOneRequiredWithoutProyectosLideradosInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutProyectosLideradosInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutProyectosLideradosInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutProyectosLideradosInput);
exports.UserUpdateOneRequiredWithoutProyectosLideradosInput = UserUpdateOneRequiredWithoutProyectosLideradosInput;
