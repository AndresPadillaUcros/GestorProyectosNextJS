"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProyectoAvgAggregate = class ProyectoAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProyectoAvgAggregate.prototype, "presupuesto", void 0);
ProyectoAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProyectoAvgAggregate", {
        isAbstract: true
    })
], ProyectoAvgAggregate);
exports.ProyectoAvgAggregate = ProyectoAvgAggregate;
