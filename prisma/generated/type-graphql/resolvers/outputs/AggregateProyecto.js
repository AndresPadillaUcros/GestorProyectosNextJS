"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProyecto = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoAvgAggregate_1 = require("../outputs/ProyectoAvgAggregate");
const ProyectoCountAggregate_1 = require("../outputs/ProyectoCountAggregate");
const ProyectoMaxAggregate_1 = require("../outputs/ProyectoMaxAggregate");
const ProyectoMinAggregate_1 = require("../outputs/ProyectoMinAggregate");
const ProyectoSumAggregate_1 = require("../outputs/ProyectoSumAggregate");
let AggregateProyecto = class AggregateProyecto {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCountAggregate_1.ProyectoCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoCountAggregate_1.ProyectoCountAggregate)
], AggregateProyecto.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoAvgAggregate_1.ProyectoAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoAvgAggregate_1.ProyectoAvgAggregate)
], AggregateProyecto.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoSumAggregate_1.ProyectoSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoSumAggregate_1.ProyectoSumAggregate)
], AggregateProyecto.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoMinAggregate_1.ProyectoMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoMinAggregate_1.ProyectoMinAggregate)
], AggregateProyecto.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoMaxAggregate_1.ProyectoMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoMaxAggregate_1.ProyectoMaxAggregate)
], AggregateProyecto.prototype, "_max", void 0);
AggregateProyecto = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateProyecto", {
        isAbstract: true
    })
], AggregateProyecto);
exports.AggregateProyecto = AggregateProyecto;
