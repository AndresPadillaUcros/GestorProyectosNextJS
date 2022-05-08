"use strict";
var ProyectoScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeNullableWithAggregatesFilter_1 = require("../inputs/DateTimeNullableWithAggregatesFilter");
const DateTimeWithAggregatesFilter_1 = require("../inputs/DateTimeWithAggregatesFilter");
const FloatWithAggregatesFilter_1 = require("../inputs/FloatWithAggregatesFilter");
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
    TypeGraphQL.Field(_type => FloatWithAggregatesFilter_1.FloatWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatWithAggregatesFilter_1.FloatWithAggregatesFilter)
], ProyectoScalarWhereWithAggregatesInput.prototype, "presupuesto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], ProyectoScalarWhereWithAggregatesInput.prototype, "fechaInicio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableWithAggregatesFilter_1.DateTimeNullableWithAggregatesFilter)
], ProyectoScalarWhereWithAggregatesInput.prototype, "fechaFin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], ProyectoScalarWhereWithAggregatesInput.prototype, "usuarioId", void 0);
ProyectoScalarWhereWithAggregatesInput = ProyectoScalarWhereWithAggregatesInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoScalarWhereWithAggregatesInput", {
        isAbstract: true
    })
], ProyectoScalarWhereWithAggregatesInput);
exports.ProyectoScalarWhereWithAggregatesInput = ProyectoScalarWhereWithAggregatesInput;
