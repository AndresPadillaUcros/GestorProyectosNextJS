"use strict";
var AvancesWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvancesWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const ProyectoRelationFilter_1 = require("../inputs/ProyectoRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UsuarioRelationFilter_1 = require("../inputs/UsuarioRelationFilter");
let AvancesWhereInput = AvancesWhereInput_1 = class AvancesWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvancesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvancesWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvancesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvancesWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvancesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvancesWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AvancesWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AvancesWhereInput.prototype, "fecha", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AvancesWhereInput.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AvancesWhereInput.prototype, "observaciones", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoRelationFilter_1.ProyectoRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoRelationFilter_1.ProyectoRelationFilter)
], AvancesWhereInput.prototype, "proyecto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AvancesWhereInput.prototype, "proyectoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioRelationFilter_1.UsuarioRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioRelationFilter_1.UsuarioRelationFilter)
], AvancesWhereInput.prototype, "creadoPor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AvancesWhereInput.prototype, "usuarioId", void 0);
AvancesWhereInput = AvancesWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("AvancesWhereInput", {
        isAbstract: true
    })
], AvancesWhereInput);
exports.AvancesWhereInput = AvancesWhereInput;
