"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InscripcionCountAggregate_1 = require("../outputs/InscripcionCountAggregate");
const InscripcionMaxAggregate_1 = require("../outputs/InscripcionMaxAggregate");
const InscripcionMinAggregate_1 = require("../outputs/InscripcionMinAggregate");
const Enum_EstadoInscripcion_1 = require("../../enums/Enum_EstadoInscripcion");
let InscripcionGroupBy = class InscripcionGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_EstadoInscripcion_1.Enum_EstadoInscripcion, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionGroupBy.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], InscripcionGroupBy.prototype, "fechaIngreso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], InscripcionGroupBy.prototype, "fechaEgreso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionGroupBy.prototype, "proyectoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionGroupBy.prototype, "usuarioId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionCountAggregate_1.InscripcionCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionCountAggregate_1.InscripcionCountAggregate)
], InscripcionGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionMinAggregate_1.InscripcionMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionMinAggregate_1.InscripcionMinAggregate)
], InscripcionGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionMaxAggregate_1.InscripcionMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionMaxAggregate_1.InscripcionMaxAggregate)
], InscripcionGroupBy.prototype, "_max", void 0);
InscripcionGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("InscripcionGroupBy", {
        isAbstract: true
    })
], InscripcionGroupBy);
exports.InscripcionGroupBy = InscripcionGroupBy;
