"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioCreateOrConnectWithoutAvancesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioCreateWithoutAvancesInput_1 = require("../inputs/UsuarioCreateWithoutAvancesInput");
const UsuarioWhereUniqueInput_1 = require("../inputs/UsuarioWhereUniqueInput");
let UsuarioCreateOrConnectWithoutAvancesInput = class UsuarioCreateOrConnectWithoutAvancesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], UsuarioCreateOrConnectWithoutAvancesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutAvancesInput_1.UsuarioCreateWithoutAvancesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioCreateWithoutAvancesInput_1.UsuarioCreateWithoutAvancesInput)
], UsuarioCreateOrConnectWithoutAvancesInput.prototype, "create", void 0);
UsuarioCreateOrConnectWithoutAvancesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioCreateOrConnectWithoutAvancesInput", {
        isAbstract: true
    })
], UsuarioCreateOrConnectWithoutAvancesInput);
exports.UsuarioCreateOrConnectWithoutAvancesInput = UsuarioCreateOrConnectWithoutAvancesInput;
