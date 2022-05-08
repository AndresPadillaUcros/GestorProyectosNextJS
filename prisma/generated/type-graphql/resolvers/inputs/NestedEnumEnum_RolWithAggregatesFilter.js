"use strict";
var NestedEnumEnum_RolWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_RolWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_RolFilter_1 = require("../inputs/NestedEnumEnum_RolFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_Rol_1 = require("../../enums/Enum_Rol");
let NestedEnumEnum_RolWithAggregatesFilter = NestedEnumEnum_RolWithAggregatesFilter_1 = class NestedEnumEnum_RolWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Rol_1.Enum_Rol, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEnum_RolWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Rol_1.Enum_Rol], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_RolWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Rol_1.Enum_Rol], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_RolWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_RolWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_RolWithAggregatesFilter)
], NestedEnumEnum_RolWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumEnum_RolWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_RolFilter_1.NestedEnumEnum_RolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_RolFilter_1.NestedEnumEnum_RolFilter)
], NestedEnumEnum_RolWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_RolFilter_1.NestedEnumEnum_RolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_RolFilter_1.NestedEnumEnum_RolFilter)
], NestedEnumEnum_RolWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumEnum_RolWithAggregatesFilter = NestedEnumEnum_RolWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEnum_RolWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumEnum_RolWithAggregatesFilter);
exports.NestedEnumEnum_RolWithAggregatesFilter = NestedEnumEnum_RolWithAggregatesFilter;
