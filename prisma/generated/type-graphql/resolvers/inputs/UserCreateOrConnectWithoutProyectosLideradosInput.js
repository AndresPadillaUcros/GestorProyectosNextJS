"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutProyectosLideradosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutProyectosLideradosInput_1 = require("../inputs/UserCreateWithoutProyectosLideradosInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutProyectosLideradosInput = class UserCreateOrConnectWithoutProyectosLideradosInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutProyectosLideradosInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutProyectosLideradosInput_1.UserCreateWithoutProyectosLideradosInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutProyectosLideradosInput_1.UserCreateWithoutProyectosLideradosInput)
], UserCreateOrConnectWithoutProyectosLideradosInput.prototype, "create", void 0);
UserCreateOrConnectWithoutProyectosLideradosInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutProyectosLideradosInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutProyectosLideradosInput);
exports.UserCreateOrConnectWithoutProyectosLideradosInput = UserCreateOrConnectWithoutProyectosLideradosInput;
