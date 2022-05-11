"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivosEspecificosUpdateWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ObjetivosEspecificosUpdateWithoutProyectoInput = class ObjetivosEspecificosUpdateWithoutProyectoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ObjetivosEspecificosUpdateWithoutProyectoInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ObjetivosEspecificosUpdateWithoutProyectoInput.prototype, "descripcion", void 0);
ObjetivosEspecificosUpdateWithoutProyectoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ObjetivosEspecificosUpdateWithoutProyectoInput", {
        isAbstract: true
    })
], ObjetivosEspecificosUpdateWithoutProyectoInput);
exports.ObjetivosEspecificosUpdateWithoutProyectoInput = ObjetivosEspecificosUpdateWithoutProyectoInput;
