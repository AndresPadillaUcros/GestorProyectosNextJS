"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutAvancesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutAvancesInput_1 = require("../inputs/UserCreateOrConnectWithoutAvancesInput");
const UserCreateWithoutAvancesInput_1 = require("../inputs/UserCreateWithoutAvancesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutAvancesInput = class UserCreateNestedOneWithoutAvancesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutAvancesInput_1.UserCreateWithoutAvancesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutAvancesInput_1.UserCreateWithoutAvancesInput)
], UserCreateNestedOneWithoutAvancesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAvancesInput_1.UserCreateOrConnectWithoutAvancesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutAvancesInput_1.UserCreateOrConnectWithoutAvancesInput)
], UserCreateNestedOneWithoutAvancesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutAvancesInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutAvancesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutAvancesInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutAvancesInput);
exports.UserCreateNestedOneWithoutAvancesInput = UserCreateNestedOneWithoutAvancesInput;
