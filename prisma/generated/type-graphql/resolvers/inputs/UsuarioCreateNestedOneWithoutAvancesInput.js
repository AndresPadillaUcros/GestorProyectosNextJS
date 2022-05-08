"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioCreateNestedOneWithoutAvancesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioCreateOrConnectWithoutAvancesInput_1 = require("../inputs/UsuarioCreateOrConnectWithoutAvancesInput");
const UsuarioCreateWithoutAvancesInput_1 = require("../inputs/UsuarioCreateWithoutAvancesInput");
const UsuarioWhereUniqueInput_1 = require("../inputs/UsuarioWhereUniqueInput");
let UsuarioCreateNestedOneWithoutAvancesInput = class UsuarioCreateNestedOneWithoutAvancesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutAvancesInput_1.UsuarioCreateWithoutAvancesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioCreateWithoutAvancesInput_1.UsuarioCreateWithoutAvancesInput)
], UsuarioCreateNestedOneWithoutAvancesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateOrConnectWithoutAvancesInput_1.UsuarioCreateOrConnectWithoutAvancesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioCreateOrConnectWithoutAvancesInput_1.UsuarioCreateOrConnectWithoutAvancesInput)
], UsuarioCreateNestedOneWithoutAvancesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], UsuarioCreateNestedOneWithoutAvancesInput.prototype, "connect", void 0);
UsuarioCreateNestedOneWithoutAvancesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioCreateNestedOneWithoutAvancesInput", {
        isAbstract: true
    })
], UsuarioCreateNestedOneWithoutAvancesInput);
exports.UsuarioCreateNestedOneWithoutAvancesInput = UsuarioCreateNestedOneWithoutAvancesInput;
