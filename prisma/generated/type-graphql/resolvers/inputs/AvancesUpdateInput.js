"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvancesUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ProyectoUpdateOneRequiredWithoutAvancesInput_1 = require("../inputs/ProyectoUpdateOneRequiredWithoutAvancesInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UsuarioUpdateOneRequiredWithoutAvancesInput_1 = require("../inputs/UsuarioUpdateOneRequiredWithoutAvancesInput");
let AvancesUpdateInput = class AvancesUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AvancesUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], AvancesUpdateInput.prototype, "fecha", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AvancesUpdateInput.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], AvancesUpdateInput.prototype, "observaciones", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoUpdateOneRequiredWithoutAvancesInput_1.ProyectoUpdateOneRequiredWithoutAvancesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoUpdateOneRequiredWithoutAvancesInput_1.ProyectoUpdateOneRequiredWithoutAvancesInput)
], AvancesUpdateInput.prototype, "proyecto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioUpdateOneRequiredWithoutAvancesInput_1.UsuarioUpdateOneRequiredWithoutAvancesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioUpdateOneRequiredWithoutAvancesInput_1.UsuarioUpdateOneRequiredWithoutAvancesInput)
], AvancesUpdateInput.prototype, "creadoPor", void 0);
AvancesUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvancesUpdateInput", {
        isAbstract: true
    })
], AvancesUpdateInput);
exports.AvancesUpdateInput = AvancesUpdateInput;
