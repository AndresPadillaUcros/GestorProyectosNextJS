"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivosEspecificosGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ObjetivosEspecificosCountAggregate_1 = require("../outputs/ObjetivosEspecificosCountAggregate");
const ObjetivosEspecificosMaxAggregate_1 = require("../outputs/ObjetivosEspecificosMaxAggregate");
const ObjetivosEspecificosMinAggregate_1 = require("../outputs/ObjetivosEspecificosMinAggregate");
let ObjetivosEspecificosGroupBy = class ObjetivosEspecificosGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ObjetivosEspecificosGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ObjetivosEspecificosGroupBy.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ObjetivosEspecificosGroupBy.prototype, "proyectoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosCountAggregate_1.ObjetivosEspecificosCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosCountAggregate_1.ObjetivosEspecificosCountAggregate)
], ObjetivosEspecificosGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosMinAggregate_1.ObjetivosEspecificosMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosMinAggregate_1.ObjetivosEspecificosMinAggregate)
], ObjetivosEspecificosGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosMaxAggregate_1.ObjetivosEspecificosMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosMaxAggregate_1.ObjetivosEspecificosMaxAggregate)
], ObjetivosEspecificosGroupBy.prototype, "_max", void 0);
ObjetivosEspecificosGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ObjetivosEspecificosGroupBy", {
        isAbstract: true
    })
], ObjetivosEspecificosGroupBy);
exports.ObjetivosEspecificosGroupBy = ObjetivosEspecificosGroupBy;
