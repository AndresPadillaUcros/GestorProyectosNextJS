"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_RolFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_Rol_1 = require("../../enums/Enum_Rol");
let EnumEnum_RolFieldUpdateOperationsInput = class EnumEnum_RolFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Rol_1.Enum_Rol, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_RolFieldUpdateOperationsInput.prototype, "set", void 0);
EnumEnum_RolFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_RolFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumEnum_RolFieldUpdateOperationsInput);
exports.EnumEnum_RolFieldUpdateOperationsInput = EnumEnum_RolFieldUpdateOperationsInput;
