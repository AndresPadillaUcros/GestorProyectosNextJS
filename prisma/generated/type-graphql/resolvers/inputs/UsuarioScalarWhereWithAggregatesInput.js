"use strict";
var UsuarioScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumEnum_EstadoUsuarioWithAggregatesFilter_1 = require("../inputs/EnumEnum_EstadoUsuarioWithAggregatesFilter");
const EnumEnum_RolWithAggregatesFilter_1 = require("../inputs/EnumEnum_RolWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let UsuarioScalarWhereWithAggregatesInput = UsuarioScalarWhereWithAggregatesInput_1 = class UsuarioScalarWhereWithAggregatesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsuarioScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UsuarioScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsuarioScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UsuarioScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsuarioScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UsuarioScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], UsuarioScalarWhereWithAggregatesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], UsuarioScalarWhereWithAggregatesInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], UsuarioScalarWhereWithAggregatesInput.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], UsuarioScalarWhereWithAggregatesInput.prototype, "apellido", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], UsuarioScalarWhereWithAggregatesInput.prototype, "identificacion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_RolWithAggregatesFilter_1.EnumEnum_RolWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_RolWithAggregatesFilter_1.EnumEnum_RolWithAggregatesFilter)
], UsuarioScalarWhereWithAggregatesInput.prototype, "rol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumEnum_EstadoUsuarioWithAggregatesFilter_1.EnumEnum_EstadoUsuarioWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumEnum_EstadoUsuarioWithAggregatesFilter_1.EnumEnum_EstadoUsuarioWithAggregatesFilter)
], UsuarioScalarWhereWithAggregatesInput.prototype, "estado", void 0);
UsuarioScalarWhereWithAggregatesInput = UsuarioScalarWhereWithAggregatesInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioScalarWhereWithAggregatesInput", {
        isAbstract: true
    })
], UsuarioScalarWhereWithAggregatesInput);
exports.UsuarioScalarWhereWithAggregatesInput = UsuarioScalarWhereWithAggregatesInput;
