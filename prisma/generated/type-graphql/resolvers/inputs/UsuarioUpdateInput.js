"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesUpdateManyWithoutCreadoPorInput_1 = require("../inputs/AvancesUpdateManyWithoutCreadoPorInput");
const EnumEnum_EstadoUsuarioFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_EstadoUsuarioFieldUpdateOperationsInput");
const EnumEnum_RolFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_RolFieldUpdateOperationsInput");
const InscripcionUpdateManyWithoutEstudianteInput_1 = require("../inputs/InscripcionUpdateManyWithoutEstudianteInput");
const ProyectoUpdateManyWithoutLiderInput_1 = require("../inputs/ProyectoUpdateManyWithoutLiderInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let UsuarioUpdateInput = class UsuarioUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsuarioUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsuarioUpdateInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsuarioUpdateInput.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsuarioUpdateInput.prototype, "apellido", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UsuarioUpdateInput.prototype, "identificacion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_RolFieldUpdateOperationsInput_1.EnumEnum_RolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_RolFieldUpdateOperationsInput_1.EnumEnum_RolFieldUpdateOperationsInput)
], UsuarioUpdateInput.prototype, "rol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_EstadoUsuarioFieldUpdateOperationsInput_1.EnumEnum_EstadoUsuarioFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_EstadoUsuarioFieldUpdateOperationsInput_1.EnumEnum_EstadoUsuarioFieldUpdateOperationsInput)
], UsuarioUpdateInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoUpdateManyWithoutLiderInput_1.ProyectoUpdateManyWithoutLiderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoUpdateManyWithoutLiderInput_1.ProyectoUpdateManyWithoutLiderInput)
], UsuarioUpdateInput.prototype, "proyectosLiderados", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesUpdateManyWithoutCreadoPorInput_1.AvancesUpdateManyWithoutCreadoPorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvancesUpdateManyWithoutCreadoPorInput_1.AvancesUpdateManyWithoutCreadoPorInput)
], UsuarioUpdateInput.prototype, "avances", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionUpdateManyWithoutEstudianteInput_1.InscripcionUpdateManyWithoutEstudianteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionUpdateManyWithoutEstudianteInput_1.InscripcionUpdateManyWithoutEstudianteInput)
], UsuarioUpdateInput.prototype, "inscripciones", void 0);
UsuarioUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioUpdateInput", {
        isAbstract: true
    })
], UsuarioUpdateInput);
exports.UsuarioUpdateInput = UsuarioUpdateInput;
