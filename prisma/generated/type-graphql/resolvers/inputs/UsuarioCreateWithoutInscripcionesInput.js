"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioCreateWithoutInscripcionesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesCreateNestedManyWithoutCreadoPorInput_1 = require("../inputs/AvancesCreateNestedManyWithoutCreadoPorInput");
const ProyectoCreateNestedManyWithoutLiderInput_1 = require("../inputs/ProyectoCreateNestedManyWithoutLiderInput");
const Enum_EstadoUsuario_1 = require("../../enums/Enum_EstadoUsuario");
const Enum_Rol_1 = require("../../enums/Enum_Rol");
let UsuarioCreateWithoutInscripcionesInput = class UsuarioCreateWithoutInscripcionesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioCreateWithoutInscripcionesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioCreateWithoutInscripcionesInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioCreateWithoutInscripcionesInput.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioCreateWithoutInscripcionesInput.prototype, "apellido", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioCreateWithoutInscripcionesInput.prototype, "identificacion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Rol_1.Enum_Rol, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioCreateWithoutInscripcionesInput.prototype, "rol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_EstadoUsuario_1.Enum_EstadoUsuario, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioCreateWithoutInscripcionesInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateNestedManyWithoutLiderInput_1.ProyectoCreateNestedManyWithoutLiderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoCreateNestedManyWithoutLiderInput_1.ProyectoCreateNestedManyWithoutLiderInput)
], UsuarioCreateWithoutInscripcionesInput.prototype, "proyectosLiderados", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesCreateNestedManyWithoutCreadoPorInput_1.AvancesCreateNestedManyWithoutCreadoPorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvancesCreateNestedManyWithoutCreadoPorInput_1.AvancesCreateNestedManyWithoutCreadoPorInput)
], UsuarioCreateWithoutInscripcionesInput.prototype, "avances", void 0);
UsuarioCreateWithoutInscripcionesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioCreateWithoutInscripcionesInput", {
        isAbstract: true
    })
], UsuarioCreateWithoutInscripcionesInput);
exports.UsuarioCreateWithoutInscripcionesInput = UsuarioCreateWithoutInscripcionesInput;
