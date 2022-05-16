"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoUpdateWithoutObjetivosEspecificosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesUpdateManyWithoutProyectoInput_1 = require("../inputs/AvancesUpdateManyWithoutProyectoInput");
const EnumEnum_EstadoProyectoFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_EstadoProyectoFieldUpdateOperationsInput");
const EnumEnum_FaseProyectoFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_FaseProyectoFieldUpdateOperationsInput");
const InscripcionUpdateManyWithoutProyectoInput_1 = require("../inputs/InscripcionUpdateManyWithoutProyectoInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UsuarioUpdateOneRequiredWithoutProyectosLideradosInput_1 = require("../inputs/UsuarioUpdateOneRequiredWithoutProyectosLideradosInput");
let ProyectoUpdateWithoutObjetivosEspecificosInput = class ProyectoUpdateWithoutObjetivosEspecificosInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProyectoUpdateWithoutObjetivosEspecificosInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProyectoUpdateWithoutObjetivosEspecificosInput.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProyectoUpdateWithoutObjetivosEspecificosInput.prototype, "presupuesto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], ProyectoUpdateWithoutObjetivosEspecificosInput.prototype, "fechaInicio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], ProyectoUpdateWithoutObjetivosEspecificosInput.prototype, "fechaFin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_EstadoProyectoFieldUpdateOperationsInput_1.EnumEnum_EstadoProyectoFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_EstadoProyectoFieldUpdateOperationsInput_1.EnumEnum_EstadoProyectoFieldUpdateOperationsInput)
], ProyectoUpdateWithoutObjetivosEspecificosInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_FaseProyectoFieldUpdateOperationsInput_1.EnumEnum_FaseProyectoFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_FaseProyectoFieldUpdateOperationsInput_1.EnumEnum_FaseProyectoFieldUpdateOperationsInput)
], ProyectoUpdateWithoutObjetivosEspecificosInput.prototype, "fase", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProyectoUpdateWithoutObjetivosEspecificosInput.prototype, "objetivoGeneral", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioUpdateOneRequiredWithoutProyectosLideradosInput_1.UsuarioUpdateOneRequiredWithoutProyectosLideradosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioUpdateOneRequiredWithoutProyectosLideradosInput_1.UsuarioUpdateOneRequiredWithoutProyectosLideradosInput)
], ProyectoUpdateWithoutObjetivosEspecificosInput.prototype, "lider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesUpdateManyWithoutProyectoInput_1.AvancesUpdateManyWithoutProyectoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvancesUpdateManyWithoutProyectoInput_1.AvancesUpdateManyWithoutProyectoInput)
], ProyectoUpdateWithoutObjetivosEspecificosInput.prototype, "avances", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionUpdateManyWithoutProyectoInput_1.InscripcionUpdateManyWithoutProyectoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionUpdateManyWithoutProyectoInput_1.InscripcionUpdateManyWithoutProyectoInput)
], ProyectoUpdateWithoutObjetivosEspecificosInput.prototype, "inscripciones", void 0);
ProyectoUpdateWithoutObjetivosEspecificosInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoUpdateWithoutObjetivosEspecificosInput", {
        isAbstract: true
    })
], ProyectoUpdateWithoutObjetivosEspecificosInput);
exports.ProyectoUpdateWithoutObjetivosEspecificosInput = ProyectoUpdateWithoutObjetivosEspecificosInput;
