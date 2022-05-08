"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_EstadoUsuarioFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_EstadoUsuario_1 = require("../../enums/Enum_EstadoUsuario");
let EnumEnum_EstadoUsuarioFieldUpdateOperationsInput = class EnumEnum_EstadoUsuarioFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_EstadoUsuario_1.Enum_EstadoUsuario, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_EstadoUsuarioFieldUpdateOperationsInput.prototype, "set", void 0);
EnumEnum_EstadoUsuarioFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_EstadoUsuarioFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumEnum_EstadoUsuarioFieldUpdateOperationsInput);
exports.EnumEnum_EstadoUsuarioFieldUpdateOperationsInput = EnumEnum_EstadoUsuarioFieldUpdateOperationsInput;
