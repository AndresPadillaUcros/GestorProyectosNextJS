"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvancesOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoOrderByWithRelationInput_1 = require("../inputs/ProyectoOrderByWithRelationInput");
const UsuarioOrderByWithRelationInput_1 = require("../inputs/UsuarioOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AvancesOrderByWithRelationInput = class AvancesOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesOrderByWithRelationInput.prototype, "fecha", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesOrderByWithRelationInput.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesOrderByWithRelationInput.prototype, "observaciones", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoOrderByWithRelationInput_1.ProyectoOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoOrderByWithRelationInput_1.ProyectoOrderByWithRelationInput)
], AvancesOrderByWithRelationInput.prototype, "proyecto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesOrderByWithRelationInput.prototype, "proyectoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioOrderByWithRelationInput_1.UsuarioOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioOrderByWithRelationInput_1.UsuarioOrderByWithRelationInput)
], AvancesOrderByWithRelationInput.prototype, "creadoPor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesOrderByWithRelationInput.prototype, "usuarioId", void 0);
AvancesOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvancesOrderByWithRelationInput", {
        isAbstract: true
    })
], AvancesOrderByWithRelationInput);
exports.AvancesOrderByWithRelationInput = AvancesOrderByWithRelationInput;
