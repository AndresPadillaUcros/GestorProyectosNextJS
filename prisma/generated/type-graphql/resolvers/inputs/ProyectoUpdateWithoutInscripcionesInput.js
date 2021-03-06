"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoUpdateWithoutInscripcionesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesUpdateManyWithoutProyectoInput_1 = require("../inputs/AvancesUpdateManyWithoutProyectoInput");
const EnumEnum_EstadoProyectoFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_EstadoProyectoFieldUpdateOperationsInput");
const EnumEnum_FaseProyectoFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_FaseProyectoFieldUpdateOperationsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ObjetivosEspecificosUpdateManyWithoutProyectoInput_1 = require("../inputs/ObjetivosEspecificosUpdateManyWithoutProyectoInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutProyectosLideradosInput_1 = require("../inputs/UserUpdateOneRequiredWithoutProyectosLideradosInput");
let ProyectoUpdateWithoutInscripcionesInput = class ProyectoUpdateWithoutInscripcionesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProyectoUpdateWithoutInscripcionesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProyectoUpdateWithoutInscripcionesInput.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProyectoUpdateWithoutInscripcionesInput.prototype, "presupuesto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], ProyectoUpdateWithoutInscripcionesInput.prototype, "fechaInicio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], ProyectoUpdateWithoutInscripcionesInput.prototype, "fechaFin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_EstadoProyectoFieldUpdateOperationsInput_1.EnumEnum_EstadoProyectoFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_EstadoProyectoFieldUpdateOperationsInput_1.EnumEnum_EstadoProyectoFieldUpdateOperationsInput)
], ProyectoUpdateWithoutInscripcionesInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_FaseProyectoFieldUpdateOperationsInput_1.EnumEnum_FaseProyectoFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_FaseProyectoFieldUpdateOperationsInput_1.EnumEnum_FaseProyectoFieldUpdateOperationsInput)
], ProyectoUpdateWithoutInscripcionesInput.prototype, "fase", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProyectoUpdateWithoutInscripcionesInput.prototype, "objetivoGeneral", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutProyectosLideradosInput_1.UserUpdateOneRequiredWithoutProyectosLideradosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutProyectosLideradosInput_1.UserUpdateOneRequiredWithoutProyectosLideradosInput)
], ProyectoUpdateWithoutInscripcionesInput.prototype, "lider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesUpdateManyWithoutProyectoInput_1.AvancesUpdateManyWithoutProyectoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvancesUpdateManyWithoutProyectoInput_1.AvancesUpdateManyWithoutProyectoInput)
], ProyectoUpdateWithoutInscripcionesInput.prototype, "avances", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosUpdateManyWithoutProyectoInput_1.ObjetivosEspecificosUpdateManyWithoutProyectoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosUpdateManyWithoutProyectoInput_1.ObjetivosEspecificosUpdateManyWithoutProyectoInput)
], ProyectoUpdateWithoutInscripcionesInput.prototype, "objetivosEspecificos", void 0);
ProyectoUpdateWithoutInscripcionesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoUpdateWithoutInscripcionesInput", {
        isAbstract: true
    })
], ProyectoUpdateWithoutInscripcionesInput);
exports.ProyectoUpdateWithoutInscripcionesInput = ProyectoUpdateWithoutInscripcionesInput;
