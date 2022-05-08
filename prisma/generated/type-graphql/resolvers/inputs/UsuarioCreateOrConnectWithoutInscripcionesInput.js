"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioCreateOrConnectWithoutInscripcionesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioCreateWithoutInscripcionesInput_1 = require("../inputs/UsuarioCreateWithoutInscripcionesInput");
const UsuarioWhereUniqueInput_1 = require("../inputs/UsuarioWhereUniqueInput");
let UsuarioCreateOrConnectWithoutInscripcionesInput = class UsuarioCreateOrConnectWithoutInscripcionesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], UsuarioCreateOrConnectWithoutInscripcionesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutInscripcionesInput_1.UsuarioCreateWithoutInscripcionesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioCreateWithoutInscripcionesInput_1.UsuarioCreateWithoutInscripcionesInput)
], UsuarioCreateOrConnectWithoutInscripcionesInput.prototype, "create", void 0);
UsuarioCreateOrConnectWithoutInscripcionesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioCreateOrConnectWithoutInscripcionesInput", {
        isAbstract: true
    })
], UsuarioCreateOrConnectWithoutInscripcionesInput);
exports.UsuarioCreateOrConnectWithoutInscripcionesInput = UsuarioCreateOrConnectWithoutInscripcionesInput;
