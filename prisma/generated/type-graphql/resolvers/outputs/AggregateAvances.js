"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAvances = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesCountAggregate_1 = require("../outputs/AvancesCountAggregate");
const AvancesMaxAggregate_1 = require("../outputs/AvancesMaxAggregate");
const AvancesMinAggregate_1 = require("../outputs/AvancesMinAggregate");
let AggregateAvances = class AggregateAvances {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesCountAggregate_1.AvancesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvancesCountAggregate_1.AvancesCountAggregate)
], AggregateAvances.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesMinAggregate_1.AvancesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvancesMinAggregate_1.AvancesMinAggregate)
], AggregateAvances.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesMaxAggregate_1.AvancesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvancesMaxAggregate_1.AvancesMaxAggregate)
], AggregateAvances.prototype, "_max", void 0);
AggregateAvances = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateAvances", {
        isAbstract: true
    })
], AggregateAvances);
exports.AggregateAvances = AggregateAvances;
