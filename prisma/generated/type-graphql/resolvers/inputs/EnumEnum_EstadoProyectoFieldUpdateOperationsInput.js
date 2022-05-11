"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_EstadoProyectoFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_EstadoProyecto_1 = require("../../enums/Enum_EstadoProyecto");
let EnumEnum_EstadoProyectoFieldUpdateOperationsInput = class EnumEnum_EstadoProyectoFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_EstadoProyecto_1.Enum_EstadoProyecto, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_EstadoProyectoFieldUpdateOperationsInput.prototype, "set", void 0);
EnumEnum_EstadoProyectoFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_EstadoProyectoFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumEnum_EstadoProyectoFieldUpdateOperationsInput);
exports.EnumEnum_EstadoProyectoFieldUpdateOperationsInput = EnumEnum_EstadoProyectoFieldUpdateOperationsInput;
