"use strict";
var InscripcionScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeWithAggregatesFilter_1 = require("../inputs/DateTimeWithAggregatesFilter");
const EnumEnum_EstadoInscripcionWithAggregatesFilter_1 = require("../inputs/EnumEnum_EstadoInscripcionWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let InscripcionScalarWhereWithAggregatesInput = InscripcionScalarWhereWithAggregatesInput_1 = class InscripcionScalarWhereWithAggregatesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], InscripcionScalarWhereWithAggregatesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_EstadoInscripcionWithAggregatesFilter_1.EnumEnum_EstadoInscripcionWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_EstadoInscripcionWithAggregatesFilter_1.EnumEnum_EstadoInscripcionWithAggregatesFilter)
], InscripcionScalarWhereWithAggregatesInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], InscripcionScalarWhereWithAggregatesInput.prototype, "fechaIngreso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], InscripcionScalarWhereWithAggregatesInput.prototype, "fechaEgreso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], InscripcionScalarWhereWithAggregatesInput.prototype, "proyectoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], InscripcionScalarWhereWithAggregatesInput.prototype, "usuarioId", void 0);
InscripcionScalarWhereWithAggregatesInput = InscripcionScalarWhereWithAggregatesInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("InscripcionScalarWhereWithAggregatesInput", {
        isAbstract: true
    })
], InscripcionScalarWhereWithAggregatesInput);
exports.InscripcionScalarWhereWithAggregatesInput = InscripcionScalarWhereWithAggregatesInput;
