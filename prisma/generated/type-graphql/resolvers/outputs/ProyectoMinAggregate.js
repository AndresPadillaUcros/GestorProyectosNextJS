"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
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
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
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
