"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionUpdateWithoutEstudianteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumEnum_EstadoInscripcionFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_EstadoInscripcionFieldUpdateOperationsInput");
const ProyectoUpdateOneRequiredWithoutInscripcionesInput_1 = require("../inputs/ProyectoUpdateOneRequiredWithoutInscripcionesInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let InscripcionUpdateWithoutEstudianteInput = class InscripcionUpdateWithoutEstudianteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], InscripcionUpdateWithoutEstudianteInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_EstadoInscripcionFieldUpdateOperationsInput_1.EnumEnum_EstadoInscripcionFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_EstadoInscripcionFieldUpdateOperationsInput_1.EnumEnum_EstadoInscripcionFieldUpdateOperationsInput)
], InscripcionUpdateWithoutEstudianteInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], InscripcionUpdateWithoutEstudianteInput.prototype, "fechaIngreso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], InscripcionUpdateWithoutEstudianteInput.prototype, "fechaEgreso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoUpdateOneRequiredWithoutInscripcionesInput_1.ProyectoUpdateOneRequiredWithoutInscripcionesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoUpdateOneRequiredWithoutInscripcionesInput_1.ProyectoUpdateOneRequiredWithoutInscripcionesInput)
], InscripcionUpdateWithoutEstudianteInput.prototype, "proyecto", void 0);
InscripcionUpdateWithoutEstudianteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InscripcionUpdateWithoutEstudianteInput", {
        isAbstract: true
    })
], InscripcionUpdateWithoutEstudianteInput);
exports.InscripcionUpdateWithoutEstudianteInput = InscripcionUpdateWithoutEstudianteInput;
