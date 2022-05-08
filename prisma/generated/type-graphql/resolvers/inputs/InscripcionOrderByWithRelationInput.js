"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoOrderByWithRelationInput_1 = require("../inputs/ProyectoOrderByWithRelationInput");
const UsuarioOrderByWithRelationInput_1 = require("../inputs/UsuarioOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let InscripcionOrderByWithRelationInput = class InscripcionOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionOrderByWithRelationInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionOrderByWithRelationInput.prototype, "fechaIngreso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionOrderByWithRelationInput.prototype, "fechaEgreso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoOrderByWithRelationInput_1.ProyectoOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoOrderByWithRelationInput_1.ProyectoOrderByWithRelationInput)
], InscripcionOrderByWithRelationInput.prototype, "proyecto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionOrderByWithRelationInput.prototype, "proyectoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioOrderByWithRelationInput_1.UsuarioOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioOrderByWithRelationInput_1.UsuarioOrderByWithRelationInput)
], InscripcionOrderByWithRelationInput.prototype, "estudiante", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionOrderByWithRelationInput.prototype, "usuarioId", void 0);
InscripcionOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InscripcionOrderByWithRelationInput", {
        isAbstract: true
    })
], InscripcionOrderByWithRelationInput);
exports.InscripcionOrderByWithRelationInput = InscripcionOrderByWithRelationInput;
