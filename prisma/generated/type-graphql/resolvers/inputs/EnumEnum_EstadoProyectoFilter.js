"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_EstadoProyectoFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_EstadoProyectoFilter_1 = require("../inputs/NestedEnumEnum_EstadoProyectoFilter");
const Enum_EstadoProyecto_1 = require("../../enums/Enum_EstadoProyecto");
let EnumEnum_EstadoProyectoFilter = class EnumEnum_EstadoProyectoFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_EstadoProyecto_1.Enum_EstadoProyecto, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_EstadoProyectoFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_EstadoProyecto_1.Enum_EstadoProyecto], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_EstadoProyectoFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_EstadoProyecto_1.Enum_EstadoProyecto], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_EstadoProyectoFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_EstadoProyectoFilter_1.NestedEnumEnum_EstadoProyectoFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_EstadoProyectoFilter_1.NestedEnumEnum_EstadoProyectoFilter)
], EnumEnum_EstadoProyectoFilter.prototype, "not", void 0);
EnumEnum_EstadoProyectoFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_EstadoProyectoFilter", {
        isAbstract: true
    })
], EnumEnum_EstadoProyectoFilter);
exports.EnumEnum_EstadoProyectoFilter = EnumEnum_EstadoProyectoFilter;
