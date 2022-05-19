"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutInscripcionesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutInscripcionesInput_1 = require("../inputs/UserCreateWithoutInscripcionesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutInscripcionesInput = class UserCreateOrConnectWithoutInscripcionesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutInscripcionesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutInscripcionesInput_1.UserCreateWithoutInscripcionesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutInscripcionesInput_1.UserCreateWithoutInscripcionesInput)
], UserCreateOrConnectWithoutInscripcionesInput.prototype, "create", void 0);
UserCreateOrConnectWithoutInscripcionesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutInscripcionesInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutInscripcionesInput);
exports.UserCreateOrConnectWithoutInscripcionesInput = UserCreateOrConnectWithoutInscripcionesInput;
