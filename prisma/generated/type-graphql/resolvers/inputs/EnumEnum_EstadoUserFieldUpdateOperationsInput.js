"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_EstadoUserFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_EstadoUser_1 = require("../../enums/Enum_EstadoUser");
let EnumEnum_EstadoUserFieldUpdateOperationsInput = class EnumEnum_EstadoUserFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_EstadoUser_1.Enum_EstadoUser, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_EstadoUserFieldUpdateOperationsInput.prototype, "set", void 0);
EnumEnum_EstadoUserFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_EstadoUserFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumEnum_EstadoUserFieldUpdateOperationsInput);
exports.EnumEnum_EstadoUserFieldUpdateOperationsInput = EnumEnum_EstadoUserFieldUpdateOperationsInput;
