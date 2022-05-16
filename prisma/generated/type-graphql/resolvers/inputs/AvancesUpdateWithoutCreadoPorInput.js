"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvancesUpdateWithoutCreadoPorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ProyectoUpdateOneRequiredWithoutAvancesInput_1 = require("../inputs/ProyectoUpdateOneRequiredWithoutAvancesInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let AvancesUpdateWithoutCreadoPorInput = class AvancesUpdateWithoutCreadoPorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AvancesUpdateWithoutCreadoPorInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], AvancesUpdateWithoutCreadoPorInput.prototype, "fecha", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AvancesUpdateWithoutCreadoPorInput.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], AvancesUpdateWithoutCreadoPorInput.prototype, "observaciones", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoUpdateOneRequiredWithoutAvancesInput_1.ProyectoUpdateOneRequiredWithoutAvancesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoUpdateOneRequiredWithoutAvancesInput_1.ProyectoUpdateOneRequiredWithoutAvancesInput)
], AvancesUpdateWithoutCreadoPorInput.prototype, "proyecto", void 0);
AvancesUpdateWithoutCreadoPorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvancesUpdateWithoutCreadoPorInput", {
        isAbstract: true
    })
], AvancesUpdateWithoutCreadoPorInput);
exports.AvancesUpdateWithoutCreadoPorInput = AvancesUpdateWithoutCreadoPorInput;
