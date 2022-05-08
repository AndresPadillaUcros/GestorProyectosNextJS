"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_RolFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_RolFilter_1 = require("../inputs/NestedEnumEnum_RolFilter");
const Enum_Rol_1 = require("../../enums/Enum_Rol");
let EnumEnum_RolFilter = class EnumEnum_RolFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Rol_1.Enum_Rol, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_RolFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Rol_1.Enum_Rol], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_RolFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Rol_1.Enum_Rol], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_RolFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_RolFilter_1.NestedEnumEnum_RolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_RolFilter_1.NestedEnumEnum_RolFilter)
], EnumEnum_RolFilter.prototype, "not", void 0);
EnumEnum_RolFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_RolFilter", {
        isAbstract: true
    })
], EnumEnum_RolFilter);
exports.EnumEnum_RolFilter = EnumEnum_RolFilter;
