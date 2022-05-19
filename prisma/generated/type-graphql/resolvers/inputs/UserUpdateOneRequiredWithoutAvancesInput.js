"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutAvancesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutAvancesInput_1 = require("../inputs/UserCreateOrConnectWithoutAvancesInput");
const UserCreateWithoutAvancesInput_1 = require("../inputs/UserCreateWithoutAvancesInput");
const UserUpdateWithoutAvancesInput_1 = require("../inputs/UserUpdateWithoutAvancesInput");
const UserUpsertWithoutAvancesInput_1 = require("../inputs/UserUpsertWithoutAvancesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutAvancesInput = class UserUpdateOneRequiredWithoutAvancesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutAvancesInput_1.UserCreateWithoutAvancesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutAvancesInput_1.UserCreateWithoutAvancesInput)
], UserUpdateOneRequiredWithoutAvancesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAvancesInput_1.UserCreateOrConnectWithoutAvancesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutAvancesInput_1.UserCreateOrConnectWithoutAvancesInput)
], UserUpdateOneRequiredWithoutAvancesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutAvancesInput_1.UserUpsertWithoutAvancesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutAvancesInput_1.UserUpsertWithoutAvancesInput)
], UserUpdateOneRequiredWithoutAvancesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutAvancesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutAvancesInput_1.UserUpdateWithoutAvancesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutAvancesInput_1.UserUpdateWithoutAvancesInput)
], UserUpdateOneRequiredWithoutAvancesInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutAvancesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutAvancesInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutAvancesInput);
exports.UserUpdateOneRequiredWithoutAvancesInput = UserUpdateOneRequiredWithoutAvancesInput;
