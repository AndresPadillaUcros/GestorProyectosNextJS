"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutInscripcionesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutInscripcionesInput_1 = require("../inputs/UserCreateOrConnectWithoutInscripcionesInput");
const UserCreateWithoutInscripcionesInput_1 = require("../inputs/UserCreateWithoutInscripcionesInput");
const UserUpdateWithoutInscripcionesInput_1 = require("../inputs/UserUpdateWithoutInscripcionesInput");
const UserUpsertWithoutInscripcionesInput_1 = require("../inputs/UserUpsertWithoutInscripcionesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutInscripcionesInput = class UserUpdateOneRequiredWithoutInscripcionesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutInscripcionesInput_1.UserCreateWithoutInscripcionesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutInscripcionesInput_1.UserCreateWithoutInscripcionesInput)
], UserUpdateOneRequiredWithoutInscripcionesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutInscripcionesInput_1.UserCreateOrConnectWithoutInscripcionesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutInscripcionesInput_1.UserCreateOrConnectWithoutInscripcionesInput)
], UserUpdateOneRequiredWithoutInscripcionesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutInscripcionesInput_1.UserUpsertWithoutInscripcionesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutInscripcionesInput_1.UserUpsertWithoutInscripcionesInput)
], UserUpdateOneRequiredWithoutInscripcionesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutInscripcionesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutInscripcionesInput_1.UserUpdateWithoutInscripcionesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutInscripcionesInput_1.UserUpdateWithoutInscripcionesInput)
], UserUpdateOneRequiredWithoutInscripcionesInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutInscripcionesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutInscripcionesInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutInscripcionesInput);
exports.UserUpdateOneRequiredWithoutInscripcionesInput = UserUpdateOneRequiredWithoutInscripcionesInput;
