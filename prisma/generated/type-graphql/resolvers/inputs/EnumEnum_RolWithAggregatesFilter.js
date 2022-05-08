"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_RolWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_RolFilter_1 = require("../inputs/NestedEnumEnum_RolFilter");
const NestedEnumEnum_RolWithAggregatesFilter_1 = require("../inputs/NestedEnumEnum_RolWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_Rol_1 = require("../../enums/Enum_Rol");
let EnumEnum_RolWithAggregatesFilter = class EnumEnum_RolWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Rol_1.Enum_Rol, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_RolWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Rol_1.Enum_Rol], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_RolWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Rol_1.Enum_Rol], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_RolWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_RolWithAggregatesFilter_1.NestedEnumEnum_RolWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_RolWithAggregatesFilter_1.NestedEnumEnum_RolWithAggregatesFilter)
], EnumEnum_RolWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumEnum_RolWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_RolFilter_1.NestedEnumEnum_RolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_RolFilter_1.NestedEnumEnum_RolFilter)
], EnumEnum_RolWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_RolFilter_1.NestedEnumEnum_RolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_RolFilter_1.NestedEnumEnum_RolFilter)
], EnumEnum_RolWithAggregatesFilter.prototype, "_max", void 0);
EnumEnum_RolWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_RolWithAggregatesFilter", {
        isAbstract: true
    })
], EnumEnum_RolWithAggregatesFilter);
exports.EnumEnum_RolWithAggregatesFilter = EnumEnum_RolWithAggregatesFilter;
