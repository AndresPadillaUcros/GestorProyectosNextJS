"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoCreateManyLiderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProyectoCreateManyLiderInput = class ProyectoCreateManyLiderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoCreateManyLiderInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoCreateManyLiderInput.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProyectoCreateManyLiderInput.prototype, "presupuesto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ProyectoCreateManyLiderInput.prototype, "fechaInicio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProyectoCreateManyLiderInput.prototype, "fechaFin", void 0);
ProyectoCreateManyLiderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoCreateManyLiderInput", {
        isAbstract: true
    })
], ProyectoCreateManyLiderInput);
exports.ProyectoCreateManyLiderInput = ProyectoCreateManyLiderInput;
