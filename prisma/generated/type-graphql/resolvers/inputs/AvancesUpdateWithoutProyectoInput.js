"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvancesUpdateWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UsuarioUpdateOneRequiredWithoutAvancesInput_1 = require("../inputs/UsuarioUpdateOneRequiredWithoutAvancesInput");
let AvancesUpdateWithoutProyectoInput = class AvancesUpdateWithoutProyectoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AvancesUpdateWithoutProyectoInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], AvancesUpdateWithoutProyectoInput.prototype, "fecha", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AvancesUpdateWithoutProyectoInput.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AvancesUpdateWithoutProyectoInput.prototype, "observaciones", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioUpdateOneRequiredWithoutAvancesInput_1.UsuarioUpdateOneRequiredWithoutAvancesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioUpdateOneRequiredWithoutAvancesInput_1.UsuarioUpdateOneRequiredWithoutAvancesInput)
], AvancesUpdateWithoutProyectoInput.prototype, "creadoPor", void 0);
AvancesUpdateWithoutProyectoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvancesUpdateWithoutProyectoInput", {
        isAbstract: true
    })
], AvancesUpdateWithoutProyectoInput);
exports.AvancesUpdateWithoutProyectoInput = AvancesUpdateWithoutProyectoInput;
