"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioUpdateWithoutInscripcionesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesUpdateManyWithoutCreadoPorInput_1 = require("../inputs/AvancesUpdateManyWithoutCreadoPorInput");
const EnumEnum_EstadoUsuarioFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_EstadoUsuarioFieldUpdateOperationsInput");
const EnumEnum_RolFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_RolFieldUpdateOperationsInput");
const ProyectoUpdateManyWithoutLiderInput_1 = require("../inputs/ProyectoUpdateManyWithoutLiderInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let UsuarioUpdateWithoutInscripcionesInput = class UsuarioUpdateWithoutInscripcionesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsuarioUpdateWithoutInscripcionesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsuarioUpdateWithoutInscripcionesInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsuarioUpdateWithoutInscripcionesInput.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsuarioUpdateWithoutInscripcionesInput.prototype, "apellido", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsuarioUpdateWithoutInscripcionesInput.prototype, "identificacion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_RolFieldUpdateOperationsInput_1.EnumEnum_RolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_RolFieldUpdateOperationsInput_1.EnumEnum_RolFieldUpdateOperationsInput)
], UsuarioUpdateWithoutInscripcionesInput.prototype, "rol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_EstadoUsuarioFieldUpdateOperationsInput_1.EnumEnum_EstadoUsuarioFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_EstadoUsuarioFieldUpdateOperationsInput_1.EnumEnum_EstadoUsuarioFieldUpdateOperationsInput)
], UsuarioUpdateWithoutInscripcionesInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoUpdateManyWithoutLiderInput_1.ProyectoUpdateManyWithoutLiderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoUpdateManyWithoutLiderInput_1.ProyectoUpdateManyWithoutLiderInput)
], UsuarioUpdateWithoutInscripcionesInput.prototype, "proyectosLiderados", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesUpdateManyWithoutCreadoPorInput_1.AvancesUpdateManyWithoutCreadoPorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvancesUpdateManyWithoutCreadoPorInput_1.AvancesUpdateManyWithoutCreadoPorInput)
], UsuarioUpdateWithoutInscripcionesInput.prototype, "avances", void 0);
UsuarioUpdateWithoutInscripcionesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioUpdateWithoutInscripcionesInput", {
        isAbstract: true
    })
], UsuarioUpdateWithoutInscripcionesInput);
exports.UsuarioUpdateWithoutInscripcionesInput = UsuarioUpdateWithoutInscripcionesInput;
