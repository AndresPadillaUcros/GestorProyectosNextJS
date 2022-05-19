"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutInscripcionesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutInscripcionesInput_1 = require("../inputs/UserCreateWithoutInscripcionesInput");
const UserUpdateWithoutInscripcionesInput_1 = require("../inputs/UserUpdateWithoutInscripcionesInput");
let UserUpsertWithoutInscripcionesInput = class UserUpsertWithoutInscripcionesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutInscripcionesInput_1.UserUpdateWithoutInscripcionesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutInscripcionesInput_1.UserUpdateWithoutInscripcionesInput)
], UserUpsertWithoutInscripcionesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutInscripcionesInput_1.UserCreateWithoutInscripcionesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutInscripcionesInput_1.UserCreateWithoutInscripcionesInput)
], UserUpsertWithoutInscripcionesInput.prototype, "create", void 0);
UserUpsertWithoutInscripcionesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutInscripcionesInput", {
        isAbstract: true
    })
], UserUpsertWithoutInscripcionesInput);
exports.UserUpsertWithoutInscripcionesInput = UserUpsertWithoutInscripcionesInput;
