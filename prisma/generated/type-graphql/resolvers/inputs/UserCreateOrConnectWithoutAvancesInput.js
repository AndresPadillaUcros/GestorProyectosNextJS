"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutAvancesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutAvancesInput_1 = require("../inputs/UserCreateWithoutAvancesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutAvancesInput = class UserCreateOrConnectWithoutAvancesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutAvancesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutAvancesInput_1.UserCreateWithoutAvancesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutAvancesInput_1.UserCreateWithoutAvancesInput)
], UserCreateOrConnectWithoutAvancesInput.prototype, "create", void 0);
UserCreateOrConnectWithoutAvancesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutAvancesInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutAvancesInput);
exports.UserCreateOrConnectWithoutAvancesInput = UserCreateOrConnectWithoutAvancesInput;
