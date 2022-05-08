"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvancesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesCountAggregate_1 = require("../outputs/AvancesCountAggregate");
const AvancesMaxAggregate_1 = require("../outputs/AvancesMaxAggregate");
const AvancesMinAggregate_1 = require("../outputs/AvancesMinAggregate");
let AvancesGroupBy = class AvancesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AvancesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], AvancesGroupBy.prototype, "fecha", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AvancesGroupBy.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AvancesGroupBy.prototype, "observaciones", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AvancesGroupBy.prototype, "proyectoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AvancesGroupBy.prototype, "usuarioId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesCountAggregate_1.AvancesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvancesCountAggregate_1.AvancesCountAggregate)
], AvancesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesMinAggregate_1.AvancesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvancesMinAggregate_1.AvancesMinAggregate)
], AvancesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesMaxAggregate_1.AvancesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvancesMaxAggregate_1.AvancesMaxAggregate)
], AvancesGroupBy.prototype, "_max", void 0);
AvancesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AvancesGroupBy", {
        isAbstract: true
    })
], AvancesGroupBy);
exports.AvancesGroupBy = AvancesGroupBy;
