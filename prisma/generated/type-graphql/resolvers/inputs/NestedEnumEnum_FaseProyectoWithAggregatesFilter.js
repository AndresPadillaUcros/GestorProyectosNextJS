"use strict";
var NestedEnumEnum_FaseProyectoWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_FaseProyectoWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_FaseProyectoFilter_1 = require("../inputs/NestedEnumEnum_FaseProyectoFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_FaseProyecto_1 = require("../../enums/Enum_FaseProyecto");
let NestedEnumEnum_FaseProyectoWithAggregatesFilter = NestedEnumEnum_FaseProyectoWithAggregatesFilter_1 = class NestedEnumEnum_FaseProyectoWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_FaseProyecto_1.Enum_FaseProyecto, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEnum_FaseProyectoWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_FaseProyecto_1.Enum_FaseProyecto], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_FaseProyectoWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_FaseProyecto_1.Enum_FaseProyecto], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_FaseProyectoWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_FaseProyectoWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_FaseProyectoWithAggregatesFilter)
], NestedEnumEnum_FaseProyectoWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumEnum_FaseProyectoWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_FaseProyectoFilter_1.NestedEnumEnum_FaseProyectoFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_FaseProyectoFilter_1.NestedEnumEnum_FaseProyectoFilter)
], NestedEnumEnum_FaseProyectoWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_FaseProyectoFilter_1.NestedEnumEnum_FaseProyectoFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_FaseProyectoFilter_1.NestedEnumEnum_FaseProyectoFilter)
], NestedEnumEnum_FaseProyectoWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumEnum_FaseProyectoWithAggregatesFilter = NestedEnumEnum_FaseProyectoWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEnum_FaseProyectoWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumEnum_FaseProyectoWithAggregatesFilter);
exports.NestedEnumEnum_FaseProyectoWithAggregatesFilter = NestedEnumEnum_FaseProyectoWithAggregatesFilter;
