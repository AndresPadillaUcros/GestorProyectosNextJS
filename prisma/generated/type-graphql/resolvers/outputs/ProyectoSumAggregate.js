"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProyectoSumAggregate = class ProyectoSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProyectoSumAggregate.prototype, "presupuesto", void 0);
ProyectoSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProyectoSumAggregate", {
        isAbstract: true
    })
], ProyectoSumAggregate);
exports.ProyectoSumAggregate = ProyectoSumAggregate;
