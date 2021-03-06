"use strict";
var ProyectoWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesListRelationFilter_1 = require("../inputs/AvancesListRelationFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const EnumEnum_EstadoProyectoFilter_1 = require("../inputs/EnumEnum_EstadoProyectoFilter");
const EnumEnum_FaseProyectoFilter_1 = require("../inputs/EnumEnum_FaseProyectoFilter");
const InscripcionListRelationFilter_1 = require("../inputs/InscripcionListRelationFilter");
const ObjetivosEspecificosListRelationFilter_1 = require("../inputs/ObjetivosEspecificosListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let ProyectoWhereInput = ProyectoWhereInput_1 = class ProyectoWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProyectoWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProyectoWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProyectoWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProyectoWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProyectoWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProyectoWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProyectoWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProyectoWhereInput.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProyectoWhereInput.prototype, "presupuesto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], ProyectoWhereInput.prototype, "fechaInicio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], ProyectoWhereInput.prototype, "fechaFin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_EstadoProyectoFilter_1.EnumEnum_EstadoProyectoFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_EstadoProyectoFilter_1.EnumEnum_EstadoProyectoFilter)
], ProyectoWhereInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_FaseProyectoFilter_1.EnumEnum_FaseProyectoFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_FaseProyectoFilter_1.EnumEnum_FaseProyectoFilter)
], ProyectoWhereInput.prototype, "fase", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProyectoWhereInput.prototype, "objetivoGeneral", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], ProyectoWhereInput.prototype, "lider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProyectoWhereInput.prototype, "UserId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesListRelationFilter_1.AvancesListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvancesListRelationFilter_1.AvancesListRelationFilter)
], ProyectoWhereInput.prototype, "avances", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionListRelationFilter_1.InscripcionListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionListRelationFilter_1.InscripcionListRelationFilter)
], ProyectoWhereInput.prototype, "inscripciones", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosListRelationFilter_1.ObjetivosEspecificosListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosListRelationFilter_1.ObjetivosEspecificosListRelationFilter)
], ProyectoWhereInput.prototype, "objetivosEspecificos", void 0);
ProyectoWhereInput = ProyectoWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoWhereInput", {
        isAbstract: true
    })
], ProyectoWhereInput);
exports.ProyectoWhereInput = ProyectoWhereInput;
