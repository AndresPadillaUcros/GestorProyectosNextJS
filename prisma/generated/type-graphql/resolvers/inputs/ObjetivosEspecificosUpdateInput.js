"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivosEspecificosUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoUpdateOneRequiredWithoutObjetivosEspecificosInput_1 = require("../inputs/ProyectoUpdateOneRequiredWithoutObjetivosEspecificosInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ObjetivosEspecificosUpdateInput = class ObjetivosEspecificosUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ObjetivosEspecificosUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ObjetivosEspecificosUpdateInput.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoUpdateOneRequiredWithoutObjetivosEspecificosInput_1.ProyectoUpdateOneRequiredWithoutObjetivosEspecificosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoUpdateOneRequiredWithoutObjetivosEspecificosInput_1.ProyectoUpdateOneRequiredWithoutObjetivosEspecificosInput)
], ObjetivosEspecificosUpdateInput.prototype, "proyecto", void 0);
ObjetivosEspecificosUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ObjetivosEspecificosUpdateInput", {
        isAbstract: true
    })
], ObjetivosEspecificosUpdateInput);
exports.ObjetivosEspecificosUpdateInput = ObjetivosEspecificosUpdateInput;
