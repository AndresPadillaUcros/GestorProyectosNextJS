"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_EstadoProyectoWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_EstadoProyectoFilter_1 = require("../inputs/NestedEnumEnum_EstadoProyectoFilter");
const NestedEnumEnum_EstadoProyectoWithAggregatesFilter_1 = require("../inputs/NestedEnumEnum_EstadoProyectoWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_EstadoProyecto_1 = require("../../enums/Enum_EstadoProyecto");
let EnumEnum_EstadoProyectoWithAggregatesFilter = class EnumEnum_EstadoProyectoWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_EstadoProyecto_1.Enum_EstadoProyecto, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_EstadoProyectoWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_EstadoProyecto_1.Enum_EstadoProyecto], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_EstadoProyectoWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_EstadoProyecto_1.Enum_EstadoProyecto], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_EstadoProyectoWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_EstadoProyectoWithAggregatesFilter_1.NestedEnumEnum_EstadoProyectoWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_EstadoProyectoWithAggregatesFilter_1.NestedEnumEnum_EstadoProyectoWithAggregatesFilter)
], EnumEnum_EstadoProyectoWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumEnum_EstadoProyectoWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_EstadoProyectoFilter_1.NestedEnumEnum_EstadoProyectoFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_EstadoProyectoFilter_1.NestedEnumEnum_EstadoProyectoFilter)
], EnumEnum_EstadoProyectoWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_EstadoProyectoFilter_1.NestedEnumEnum_EstadoProyectoFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_EstadoProyectoFilter_1.NestedEnumEnum_EstadoProyectoFilter)
], EnumEnum_EstadoProyectoWithAggregatesFilter.prototype, "_max", void 0);
EnumEnum_EstadoProyectoWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_EstadoProyectoWithAggregatesFilter", {
        isAbstract: true
    })
], EnumEnum_EstadoProyectoWithAggregatesFilter);
exports.EnumEnum_EstadoProyectoWithAggregatesFilter = EnumEnum_EstadoProyectoWithAggregatesFilter;
