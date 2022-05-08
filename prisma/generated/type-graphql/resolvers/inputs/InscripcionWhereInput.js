"use strict";
var InscripcionWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumEnum_EstadoInscripcionFilter_1 = require("../inputs/EnumEnum_EstadoInscripcionFilter");
const ProyectoRelationFilter_1 = require("../inputs/ProyectoRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UsuarioRelationFilter_1 = require("../inputs/UsuarioRelationFilter");
let InscripcionWhereInput = InscripcionWhereInput_1 = class InscripcionWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], InscripcionWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_EstadoInscripcionFilter_1.EnumEnum_EstadoInscripcionFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_EstadoInscripcionFilter_1.EnumEnum_EstadoInscripcionFilter)
], InscripcionWhereInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], InscripcionWhereInput.prototype, "fechaIngreso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], InscripcionWhereInput.prototype, "fechaEgreso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoRelationFilter_1.ProyectoRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoRelationFilter_1.ProyectoRelationFilter)
], InscripcionWhereInput.prototype, "proyecto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], InscripcionWhereInput.prototype, "proyectoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioRelationFilter_1.UsuarioRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioRelationFilter_1.UsuarioRelationFilter)
], InscripcionWhereInput.prototype, "estudiante", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], InscripcionWhereInput.prototype, "usuarioId", void 0);
InscripcionWhereInput = InscripcionWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("InscripcionWhereInput", {
        isAbstract: true
    })
], InscripcionWhereInput);
exports.InscripcionWhereInput = InscripcionWhereInput;
