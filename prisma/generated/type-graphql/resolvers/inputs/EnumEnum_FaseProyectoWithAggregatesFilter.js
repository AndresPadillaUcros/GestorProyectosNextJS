"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_FaseProyectoWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_FaseProyectoFilter_1 = require("../inputs/NestedEnumEnum_FaseProyectoFilter");
const NestedEnumEnum_FaseProyectoWithAggregatesFilter_1 = require("../inputs/NestedEnumEnum_FaseProyectoWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_FaseProyecto_1 = require("../../enums/Enum_FaseProyecto");
let EnumEnum_FaseProyectoWithAggregatesFilter = class EnumEnum_FaseProyectoWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_FaseProyecto_1.Enum_FaseProyecto, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_FaseProyectoWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_FaseProyecto_1.Enum_FaseProyecto], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_FaseProyectoWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_FaseProyecto_1.Enum_FaseProyecto], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_FaseProyectoWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_FaseProyectoWithAggregatesFilter_1.NestedEnumEnum_FaseProyectoWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_FaseProyectoWithAggregatesFilter_1.NestedEnumEnum_FaseProyectoWithAggregatesFilter)
], EnumEnum_FaseProyectoWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumEnum_FaseProyectoWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_FaseProyectoFilter_1.NestedEnumEnum_FaseProyectoFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_FaseProyectoFilter_1.NestedEnumEnum_FaseProyectoFilter)
], EnumEnum_FaseProyectoWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_FaseProyectoFilter_1.NestedEnumEnum_FaseProyectoFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_FaseProyectoFilter_1.NestedEnumEnum_FaseProyectoFilter)
], EnumEnum_FaseProyectoWithAggregatesFilter.prototype, "_max", void 0);
EnumEnum_FaseProyectoWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_FaseProyectoWithAggregatesFilter", {
        isAbstract: true
    })
], EnumEnum_FaseProyectoWithAggregatesFilter);
exports.EnumEnum_FaseProyectoWithAggregatesFilter = EnumEnum_FaseProyectoWithAggregatesFilter;
