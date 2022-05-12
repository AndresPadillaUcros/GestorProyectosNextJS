"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_EstadoProyecto_1 = require("../../enums/Enum_EstadoProyecto");
const Enum_FaseProyecto_1 = require("../../enums/Enum_FaseProyecto");
let ProyectoMinAggregate = class ProyectoMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoMinAggregate.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoMinAggregate.prototype, "presupuesto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProyectoMinAggregate.prototype, "fechaInicio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProyectoMinAggregate.prototype, "fechaFin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_EstadoProyecto_1.Enum_EstadoProyecto, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoMinAggregate.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_FaseProyecto_1.Enum_FaseProyecto, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoMinAggregate.prototype, "fase", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoMinAggregate.prototype, "objetivoGeneral", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoMinAggregate.prototype, "usuarioId", void 0);
ProyectoMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProyectoMinAggregate", {
        isAbstract: true
    })
], ProyectoMinAggregate);
exports.ProyectoMinAggregate = ProyectoMinAggregate;
