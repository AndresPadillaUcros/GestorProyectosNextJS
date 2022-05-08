"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_EstadoInscripcionWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_EstadoInscripcionFilter_1 = require("../inputs/NestedEnumEnum_EstadoInscripcionFilter");
const NestedEnumEnum_EstadoInscripcionWithAggregatesFilter_1 = require("../inputs/NestedEnumEnum_EstadoInscripcionWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_EstadoInscripcion_1 = require("../../enums/Enum_EstadoInscripcion");
let EnumEnum_EstadoInscripcionWithAggregatesFilter = class EnumEnum_EstadoInscripcionWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_EstadoInscripcion_1.Enum_EstadoInscripcion, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_EstadoInscripcionWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_EstadoInscripcion_1.Enum_EstadoInscripcion], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_EstadoInscripcionWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_EstadoInscripcion_1.Enum_EstadoInscripcion], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_EstadoInscripcionWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_EstadoInscripcionWithAggregatesFilter_1.NestedEnumEnum_EstadoInscripcionWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_EstadoInscripcionWithAggregatesFilter_1.NestedEnumEnum_EstadoInscripcionWithAggregatesFilter)
], EnumEnum_EstadoInscripcionWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumEnum_EstadoInscripcionWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_EstadoInscripcionFilter_1.NestedEnumEnum_EstadoInscripcionFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_EstadoInscripcionFilter_1.NestedEnumEnum_EstadoInscripcionFilter)
], EnumEnum_EstadoInscripcionWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_EstadoInscripcionFilter_1.NestedEnumEnum_EstadoInscripcionFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_EstadoInscripcionFilter_1.NestedEnumEnum_EstadoInscripcionFilter)
], EnumEnum_EstadoInscripcionWithAggregatesFilter.prototype, "_max", void 0);
EnumEnum_EstadoInscripcionWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_EstadoInscripcionWithAggregatesFilter", {
        isAbstract: true
    })
], EnumEnum_EstadoInscripcionWithAggregatesFilter);
exports.EnumEnum_EstadoInscripcionWithAggregatesFilter = EnumEnum_EstadoInscripcionWithAggregatesFilter;
