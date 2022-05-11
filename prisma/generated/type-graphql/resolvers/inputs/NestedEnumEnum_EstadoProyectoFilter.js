"use strict";
var NestedEnumEnum_EstadoProyectoFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_EstadoProyectoFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_EstadoProyecto_1 = require("../../enums/Enum_EstadoProyecto");
let NestedEnumEnum_EstadoProyectoFilter = NestedEnumEnum_EstadoProyectoFilter_1 = class NestedEnumEnum_EstadoProyectoFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_EstadoProyecto_1.Enum_EstadoProyecto, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEnum_EstadoProyectoFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_EstadoProyecto_1.Enum_EstadoProyecto], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_EstadoProyectoFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_EstadoProyecto_1.Enum_EstadoProyecto], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_EstadoProyectoFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_EstadoProyectoFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_EstadoProyectoFilter)
], NestedEnumEnum_EstadoProyectoFilter.prototype, "not", void 0);
NestedEnumEnum_EstadoProyectoFilter = NestedEnumEnum_EstadoProyectoFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEnum_EstadoProyectoFilter", {
        isAbstract: true
    })
], NestedEnumEnum_EstadoProyectoFilter);
exports.NestedEnumEnum_EstadoProyectoFilter = NestedEnumEnum_EstadoProyectoFilter;
