"use strict";
var UsuarioWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesListRelationFilter_1 = require("../inputs/AvancesListRelationFilter");
const EnumEnum_EstadoUsuarioFilter_1 = require("../inputs/EnumEnum_EstadoUsuarioFilter");
const EnumEnum_RolFilter_1 = require("../inputs/EnumEnum_RolFilter");
const InscripcionListRelationFilter_1 = require("../inputs/InscripcionListRelationFilter");
const ProyectoListRelationFilter_1 = require("../inputs/ProyectoListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let UsuarioWhereInput = UsuarioWhereInput_1 = class UsuarioWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsuarioWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UsuarioWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsuarioWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UsuarioWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsuarioWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UsuarioWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UsuarioWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UsuarioWhereInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UsuarioWhereInput.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UsuarioWhereInput.prototype, "apellido", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UsuarioWhereInput.prototype, "identificacion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_RolFilter_1.EnumEnum_RolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_RolFilter_1.EnumEnum_RolFilter)
], UsuarioWhereInput.prototype, "rol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_EstadoUsuarioFilter_1.EnumEnum_EstadoUsuarioFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_EstadoUsuarioFilter_1.EnumEnum_EstadoUsuarioFilter)
], UsuarioWhereInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoListRelationFilter_1.ProyectoListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoListRelationFilter_1.ProyectoListRelationFilter)
], UsuarioWhereInput.prototype, "proyectosLiderados", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesListRelationFilter_1.AvancesListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvancesListRelationFilter_1.AvancesListRelationFilter)
], UsuarioWhereInput.prototype, "avances", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionListRelationFilter_1.InscripcionListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionListRelationFilter_1.InscripcionListRelationFilter)
], UsuarioWhereInput.prototype, "inscripciones", void 0);
UsuarioWhereInput = UsuarioWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioWhereInput", {
        isAbstract: true
    })
], UsuarioWhereInput);
exports.UsuarioWhereInput = UsuarioWhereInput;
