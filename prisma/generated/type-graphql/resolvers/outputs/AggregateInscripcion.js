"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateInscripcion = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InscripcionCountAggregate_1 = require("../outputs/InscripcionCountAggregate");
const InscripcionMaxAggregate_1 = require("../outputs/InscripcionMaxAggregate");
const InscripcionMinAggregate_1 = require("../outputs/InscripcionMinAggregate");
let AggregateInscripcion = class AggregateInscripcion {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionCountAggregate_1.InscripcionCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionCountAggregate_1.InscripcionCountAggregate)
], AggregateInscripcion.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionMinAggregate_1.InscripcionMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionMinAggregate_1.InscripcionMinAggregate)
], AggregateInscripcion.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionMaxAggregate_1.InscripcionMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionMaxAggregate_1.InscripcionMaxAggregate)
], AggregateInscripcion.prototype, "_max", void 0);
AggregateInscripcion = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateInscripcion", {
        isAbstract: true
    })
], AggregateInscripcion);
exports.AggregateInscripcion = AggregateInscripcion;
