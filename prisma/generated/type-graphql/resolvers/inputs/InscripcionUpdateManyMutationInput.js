"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumEnum_EstadoInscripcionFieldUpdateOperationsInput_1 = require("../inputs/EnumEnum_EstadoInscripcionFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let InscripcionUpdateManyMutationInput = class InscripcionUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], InscripcionUpdateManyMutationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_EstadoInscripcionFieldUpdateOperationsInput_1.EnumEnum_EstadoInscripcionFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_EstadoInscripcionFieldUpdateOperationsInput_1.EnumEnum_EstadoInscripcionFieldUpdateOperationsInput)
], InscripcionUpdateManyMutationInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], InscripcionUpdateManyMutationInput.prototype, "fechaIngreso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], InscripcionUpdateManyMutationInput.prototype, "fechaEgreso", void 0);
InscripcionUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InscripcionUpdateManyMutationInput", {
        isAbstract: true
    })
], InscripcionUpdateManyMutationInput);
exports.InscripcionUpdateManyMutationInput = InscripcionUpdateManyMutationInput;
