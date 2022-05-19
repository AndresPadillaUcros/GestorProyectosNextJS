"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutProyectosLideradosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutProyectosLideradosInput_1 = require("../inputs/UserCreateOrConnectWithoutProyectosLideradosInput");
const UserCreateWithoutProyectosLideradosInput_1 = require("../inputs/UserCreateWithoutProyectosLideradosInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutProyectosLideradosInput = class UserCreateNestedOneWithoutProyectosLideradosInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutProyectosLideradosInput_1.UserCreateWithoutProyectosLideradosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutProyectosLideradosInput_1.UserCreateWithoutProyectosLideradosInput)
], UserCreateNestedOneWithoutProyectosLideradosInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutProyectosLideradosInput_1.UserCreateOrConnectWithoutProyectosLideradosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutProyectosLideradosInput_1.UserCreateOrConnectWithoutProyectosLideradosInput)
], UserCreateNestedOneWithoutProyectosLideradosInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutProyectosLideradosInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutProyectosLideradosInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutProyectosLideradosInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutProyectosLideradosInput);
exports.UserCreateNestedOneWithoutProyectosLideradosInput = UserCreateNestedOneWithoutProyectosLideradosInput;
