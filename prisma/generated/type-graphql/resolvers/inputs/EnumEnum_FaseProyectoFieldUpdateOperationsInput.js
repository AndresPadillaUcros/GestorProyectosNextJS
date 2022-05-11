"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_FaseProyectoFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_FaseProyecto_1 = require("../../enums/Enum_FaseProyecto");
let EnumEnum_FaseProyectoFieldUpdateOperationsInput = class EnumEnum_FaseProyectoFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_FaseProyecto_1.Enum_FaseProyecto, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_FaseProyectoFieldUpdateOperationsInput.prototype, "set", void 0);
EnumEnum_FaseProyectoFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_FaseProyectoFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumEnum_FaseProyectoFieldUpdateOperationsInput);
exports.EnumEnum_FaseProyectoFieldUpdateOperationsInput = EnumEnum_FaseProyectoFieldUpdateOperationsInput;
