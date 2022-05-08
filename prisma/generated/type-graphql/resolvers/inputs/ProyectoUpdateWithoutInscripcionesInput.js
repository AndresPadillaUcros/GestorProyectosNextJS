"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoUpdateWithoutInscripcionesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesUpdateManyWithoutProyectoInput_1 = require("../inputs/AvancesUpdateManyWithoutProyectoInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UsuarioUpdateOneRequiredWithoutProyectosLideradosInput_1 = require("../inputs/UsuarioUpdateOneRequiredWithoutProyectosLideradosInput");
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
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], ProyectoUpdateWithoutInscripcionesInput.prototype, "presupuesto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProyectoUpdateWithoutInscripcionesInput.prototype, "fechaInicio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], ProyectoUpdateWithoutInscripcionesInput.prototype, "fechaFin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioUpdateOneRequiredWithoutProyectosLideradosInput_1.UsuarioUpdateOneRequiredWithoutProyectosLideradosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioUpdateOneRequiredWithoutProyectosLideradosInput_1.UsuarioUpdateOneRequiredWithoutProyectosLideradosInput)
], ProyectoUpdateWithoutInscripcionesInput.prototype, "lider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesUpdateManyWithoutProyectoInput_1.AvancesUpdateManyWithoutProyectoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvancesUpdateManyWithoutProyectoInput_1.AvancesUpdateManyWithoutProyectoInput)
], ProyectoUpdateWithoutInscripcionesInput.prototype, "avances", void 0);
ProyectoUpdateWithoutInscripcionesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoUpdateWithoutInscripcionesInput", {
        isAbstract: true
    })
], ProyectoUpdateWithoutInscripcionesInput);
exports.ProyectoUpdateWithoutInscripcionesInput = ProyectoUpdateWithoutInscripcionesInput;
