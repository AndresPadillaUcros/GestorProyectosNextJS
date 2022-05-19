"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutAvancesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutAvancesInput_1 = require("../inputs/UserCreateWithoutAvancesInput");
const UserUpdateWithoutAvancesInput_1 = require("../inputs/UserUpdateWithoutAvancesInput");
let UserUpsertWithoutAvancesInput = class UserUpsertWithoutAvancesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutAvancesInput_1.UserUpdateWithoutAvancesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutAvancesInput_1.UserUpdateWithoutAvancesInput)
], UserUpsertWithoutAvancesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutAvancesInput_1.UserCreateWithoutAvancesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutAvancesInput_1.UserCreateWithoutAvancesInput)
], UserUpsertWithoutAvancesInput.prototype, "create", void 0);
UserUpsertWithoutAvancesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutAvancesInput", {
        isAbstract: true
    })
], UserUpsertWithoutAvancesInput);
exports.UserUpsertWithoutAvancesInput = UserUpsertWithoutAvancesInput;
