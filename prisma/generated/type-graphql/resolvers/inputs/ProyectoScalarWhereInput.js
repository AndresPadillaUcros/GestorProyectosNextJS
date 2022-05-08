"use strict";
var ProyectoScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const FloatFilter_1 = require("../inputs/FloatFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let ProyectoScalarWhereInput = ProyectoScalarWhereInput_1 = class ProyectoScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProyectoScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProyectoScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProyectoScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProyectoScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProyectoScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProyectoScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProyectoScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProyectoScalarWhereInput.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFilter_1.FloatFilter)
], ProyectoScalarWhereInput.prototype, "presupuesto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ProyectoScalarWhereInput.prototype, "fechaInicio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], ProyectoScalarWhereInput.prototype, "fechaFin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProyectoScalarWhereInput.prototype, "usuarioId", void 0);
ProyectoScalarWhereInput = ProyectoScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoScalarWhereInput", {
        isAbstract: true
    })
], ProyectoScalarWhereInput);
exports.ProyectoScalarWhereInput = ProyectoScalarWhereInput;
