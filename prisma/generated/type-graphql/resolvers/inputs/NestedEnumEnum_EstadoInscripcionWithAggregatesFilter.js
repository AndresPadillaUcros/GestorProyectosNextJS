"use strict";
var NestedEnumEnum_EstadoInscripcionWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_EstadoInscripcionWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_EstadoInscripcionFilter_1 = require("../inputs/NestedEnumEnum_EstadoInscripcionFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_EstadoInscripcion_1 = require("../../enums/Enum_EstadoInscripcion");
let NestedEnumEnum_EstadoInscripcionWithAggregatesFilter = NestedEnumEnum_EstadoInscripcionWithAggregatesFilter_1 = class NestedEnumEnum_EstadoInscripcionWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_EstadoInscripcion_1.Enum_EstadoInscripcion, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEnum_EstadoInscripcionWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_EstadoInscripcion_1.Enum_EstadoInscripcion], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_EstadoInscripcionWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_EstadoInscripcion_1.Enum_EstadoInscripcion], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_EstadoInscripcionWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_EstadoInscripcionWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_EstadoInscripcionWithAggregatesFilter)
], NestedEnumEnum_EstadoInscripcionWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumEnum_EstadoInscripcionWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_EstadoInscripcionFilter_1.NestedEnumEnum_EstadoInscripcionFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_EstadoInscripcionFilter_1.NestedEnumEnum_EstadoInscripcionFilter)
], NestedEnumEnum_EstadoInscripcionWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_EstadoInscripcionFilter_1.NestedEnumEnum_EstadoInscripcionFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_EstadoInscripcionFilter_1.NestedEnumEnum_EstadoInscripcionFilter)
], NestedEnumEnum_EstadoInscripcionWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumEnum_EstadoInscripcionWithAggregatesFilter = NestedEnumEnum_EstadoInscripcionWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEnum_EstadoInscripcionWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumEnum_EstadoInscripcionWithAggregatesFilter);
exports.NestedEnumEnum_EstadoInscripcionWithAggregatesFilter = NestedEnumEnum_EstadoInscripcionWithAggregatesFilter;
