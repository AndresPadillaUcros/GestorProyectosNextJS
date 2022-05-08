"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_EstadoInscripcionFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_EstadoInscripcion_1 = require("../../enums/Enum_EstadoInscripcion");
let EnumEnum_EstadoInscripcionFieldUpdateOperationsInput = class EnumEnum_EstadoInscripcionFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_EstadoInscripcion_1.Enum_EstadoInscripcion, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_EstadoInscripcionFieldUpdateOperationsInput.prototype, "set", void 0);
EnumEnum_EstadoInscripcionFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_EstadoInscripcionFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumEnum_EstadoInscripcionFieldUpdateOperationsInput);
exports.EnumEnum_EstadoInscripcionFieldUpdateOperationsInput = EnumEnum_EstadoInscripcionFieldUpdateOperationsInput;
