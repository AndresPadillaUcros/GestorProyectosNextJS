"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutInscripcionesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutInscripcionesInput_1 = require("../inputs/UserCreateOrConnectWithoutInscripcionesInput");
const UserCreateWithoutInscripcionesInput_1 = require("../inputs/UserCreateWithoutInscripcionesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutInscripcionesInput = class UserCreateNestedOneWithoutInscripcionesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutInscripcionesInput_1.UserCreateWithoutInscripcionesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutInscripcionesInput_1.UserCreateWithoutInscripcionesInput)
], UserCreateNestedOneWithoutInscripcionesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutInscripcionesInput_1.UserCreateOrConnectWithoutInscripcionesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutInscripcionesInput_1.UserCreateOrConnectWithoutInscripcionesInput)
], UserCreateNestedOneWithoutInscripcionesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutInscripcionesInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutInscripcionesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutInscripcionesInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutInscripcionesInput);
exports.UserCreateNestedOneWithoutInscripcionesInput = UserCreateNestedOneWithoutInscripcionesInput;
