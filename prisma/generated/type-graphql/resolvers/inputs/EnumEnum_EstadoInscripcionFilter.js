"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_EstadoInscripcionFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_EstadoInscripcionFilter_1 = require("../inputs/NestedEnumEnum_EstadoInscripcionFilter");
const Enum_EstadoInscripcion_1 = require("../../enums/Enum_EstadoInscripcion");
let EnumEnum_EstadoInscripcionFilter = class EnumEnum_EstadoInscripcionFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_EstadoInscripcion_1.Enum_EstadoInscripcion, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_EstadoInscripcionFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_EstadoInscripcion_1.Enum_EstadoInscripcion], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_EstadoInscripcionFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_EstadoInscripcion_1.Enum_EstadoInscripcion], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_EstadoInscripcionFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_EstadoInscripcionFilter_1.NestedEnumEnum_EstadoInscripcionFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_EstadoInscripcionFilter_1.NestedEnumEnum_EstadoInscripcionFilter)
], EnumEnum_EstadoInscripcionFilter.prototype, "not", void 0);
EnumEnum_EstadoInscripcionFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_EstadoInscripcionFilter", {
        isAbstract: true
    })
], EnumEnum_EstadoInscripcionFilter);
exports.EnumEnum_EstadoInscripcionFilter = EnumEnum_EstadoInscripcionFilter;
