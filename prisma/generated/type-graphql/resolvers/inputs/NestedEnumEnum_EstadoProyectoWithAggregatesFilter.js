"use strict";
var NestedEnumEnum_EstadoProyectoWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_EstadoProyectoWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_EstadoProyectoFilter_1 = require("../inputs/NestedEnumEnum_EstadoProyectoFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_EstadoProyecto_1 = require("../../enums/Enum_EstadoProyecto");
let NestedEnumEnum_EstadoProyectoWithAggregatesFilter = NestedEnumEnum_EstadoProyectoWithAggregatesFilter_1 = class NestedEnumEnum_EstadoProyectoWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_EstadoProyecto_1.Enum_EstadoProyecto, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEnum_EstadoProyectoWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_EstadoProyecto_1.Enum_EstadoProyecto], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_EstadoProyectoWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_EstadoProyecto_1.Enum_EstadoProyecto], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_EstadoProyectoWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_EstadoProyectoWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_EstadoProyectoWithAggregatesFilter)
], NestedEnumEnum_EstadoProyectoWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumEnum_EstadoProyectoWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_EstadoProyectoFilter_1.NestedEnumEnum_EstadoProyectoFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_EstadoProyectoFilter_1.NestedEnumEnum_EstadoProyectoFilter)
], NestedEnumEnum_EstadoProyectoWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_EstadoProyectoFilter_1.NestedEnumEnum_EstadoProyectoFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_EstadoProyectoFilter_1.NestedEnumEnum_EstadoProyectoFilter)
], NestedEnumEnum_EstadoProyectoWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumEnum_EstadoProyectoWithAggregatesFilter = NestedEnumEnum_EstadoProyectoWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEnum_EstadoProyectoWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumEnum_EstadoProyectoWithAggregatesFilter);
exports.NestedEnumEnum_EstadoProyectoWithAggregatesFilter = NestedEnumEnum_EstadoProyectoWithAggregatesFilter;
