"use strict";
var ProyectoScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeNullableWithAggregatesFilter_1 = require("../inputs/DateTimeNullableWithAggregatesFilter");
const EnumEnum_EstadoProyectoWithAggregatesFilter_1 = require("../inputs/EnumEnum_EstadoProyectoWithAggregatesFilter");
const EnumEnum_FaseProyectoWithAggregatesFilter_1 = require("../inputs/EnumEnum_FaseProyectoWithAggregatesFilter");
const StringNullableWithAggregatesFilter_1 = require("../inputs/StringNullableWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let ProyectoScalarWhereWithAggregatesInput = ProyectoScalarWhereWithAggregatesInput_1 = class ProyectoScalarWhereWithAggregatesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProyectoScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProyectoScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProyectoScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProyectoScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProyectoScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProyectoScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], ProyectoScalarWhereWithAggregatesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], ProyectoScalarWhereWithAggregatesInput.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], ProyectoScalarWhereWithAggregatesInput.prototype, "presupuesto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter)
], ProyectoScalarWhereWithAggregatesInput.prototype, "fechaInicio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter)
], ProyectoScalarWhereWithAggregatesInput.prototype, "fechaFin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_EstadoProyectoWithAggregatesFilter_1.EnumEnum_EstadoProyectoWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_EstadoProyectoWithAggregatesFilter_1.EnumEnum_EstadoProyectoWithAggregatesFilter)
], ProyectoScalarWhereWithAggregatesInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_FaseProyectoWithAggregatesFilter_1.EnumEnum_FaseProyectoWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_FaseProyectoWithAggregatesFilter_1.EnumEnum_FaseProyectoWithAggregatesFilter)
], ProyectoScalarWhereWithAggregatesInput.prototype, "fase", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], ProyectoScalarWhereWithAggregatesInput.prototype, "objetivoGeneral", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], ProyectoScalarWhereWithAggregatesInput.prototype, "UserId", void 0);
ProyectoScalarWhereWithAggregatesInput = ProyectoScalarWhereWithAggregatesInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoScalarWhereWithAggregatesInput", {
        isAbstract: true
    })
], ProyectoScalarWhereWithAggregatesInput);
exports.ProyectoScalarWhereWithAggregatesInput = ProyectoScalarWhereWithAggregatesInput;
