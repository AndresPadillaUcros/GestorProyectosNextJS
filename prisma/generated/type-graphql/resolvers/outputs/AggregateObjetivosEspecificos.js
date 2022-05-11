"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateObjetivosEspecificos = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ObjetivosEspecificosCountAggregate_1 = require("../outputs/ObjetivosEspecificosCountAggregate");
const ObjetivosEspecificosMaxAggregate_1 = require("../outputs/ObjetivosEspecificosMaxAggregate");
const ObjetivosEspecificosMinAggregate_1 = require("../outputs/ObjetivosEspecificosMinAggregate");
let AggregateObjetivosEspecificos = class AggregateObjetivosEspecificos {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosCountAggregate_1.ObjetivosEspecificosCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosCountAggregate_1.ObjetivosEspecificosCountAggregate)
], AggregateObjetivosEspecificos.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosMinAggregate_1.ObjetivosEspecificosMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosMinAggregate_1.ObjetivosEspecificosMinAggregate)
], AggregateObjetivosEspecificos.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosMaxAggregate_1.ObjetivosEspecificosMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosMaxAggregate_1.ObjetivosEspecificosMaxAggregate)
], AggregateObjetivosEspecificos.prototype, "_max", void 0);
AggregateObjetivosEspecificos = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateObjetivosEspecificos", {
        isAbstract: true
    })
], AggregateObjetivosEspecificos);
exports.AggregateObjetivosEspecificos = AggregateObjetivosEspecificos;
