"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProyectoMaxAggregate = class ProyectoMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoMaxAggregate.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProyectoMaxAggregate.prototype, "presupuesto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProyectoMaxAggregate.prototype, "fechaInicio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProyectoMaxAggregate.prototype, "fechaFin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoMaxAggregate.prototype, "usuarioId", void 0);
ProyectoMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProyectoMaxAggregate", {
        isAbstract: true
    })
], ProyectoMaxAggregate);
exports.ProyectoMaxAggregate = ProyectoMaxAggregate;
