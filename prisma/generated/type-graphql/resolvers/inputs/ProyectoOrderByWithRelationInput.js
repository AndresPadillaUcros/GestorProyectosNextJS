"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesOrderByRelationAggregateInput_1 = require("../inputs/AvancesOrderByRelationAggregateInput");
const InscripcionOrderByRelationAggregateInput_1 = require("../inputs/InscripcionOrderByRelationAggregateInput");
const ObjetivosEspecificosOrderByRelationAggregateInput_1 = require("../inputs/ObjetivosEspecificosOrderByRelationAggregateInput");
const UsuarioOrderByWithRelationInput_1 = require("../inputs/UsuarioOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ProyectoOrderByWithRelationInput = class ProyectoOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoOrderByWithRelationInput.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoOrderByWithRelationInput.prototype, "presupuesto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoOrderByWithRelationInput.prototype, "fechaInicio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoOrderByWithRelationInput.prototype, "fechaFin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoOrderByWithRelationInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoOrderByWithRelationInput.prototype, "fase", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoOrderByWithRelationInput.prototype, "objetivoGeneral", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioOrderByWithRelationInput_1.UsuarioOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioOrderByWithRelationInput_1.UsuarioOrderByWithRelationInput)
], ProyectoOrderByWithRelationInput.prototype, "lider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoOrderByWithRelationInput.prototype, "usuarioId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesOrderByRelationAggregateInput_1.AvancesOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvancesOrderByRelationAggregateInput_1.AvancesOrderByRelationAggregateInput)
], ProyectoOrderByWithRelationInput.prototype, "avances", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionOrderByRelationAggregateInput_1.InscripcionOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionOrderByRelationAggregateInput_1.InscripcionOrderByRelationAggregateInput)
], ProyectoOrderByWithRelationInput.prototype, "inscripciones", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosOrderByRelationAggregateInput_1.ObjetivosEspecificosOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosOrderByRelationAggregateInput_1.ObjetivosEspecificosOrderByRelationAggregateInput)
], ProyectoOrderByWithRelationInput.prototype, "objetivosEspecificos", void 0);
ProyectoOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoOrderByWithRelationInput", {
        isAbstract: true
    })
], ProyectoOrderByWithRelationInput);
exports.ProyectoOrderByWithRelationInput = ProyectoOrderByWithRelationInput;
