"use strict";
var NestedEnumEnum_EstadoInscripcionFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_EstadoInscripcionFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_EstadoInscripcion_1 = require("../../enums/Enum_EstadoInscripcion");
let NestedEnumEnum_EstadoInscripcionFilter = NestedEnumEnum_EstadoInscripcionFilter_1 = class NestedEnumEnum_EstadoInscripcionFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_EstadoInscripcion_1.Enum_EstadoInscripcion, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEnum_EstadoInscripcionFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_EstadoInscripcion_1.Enum_EstadoInscripcion], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_EstadoInscripcionFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_EstadoInscripcion_1.Enum_EstadoInscripcion], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_EstadoInscripcionFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_EstadoInscripcionFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_EstadoInscripcionFilter)
], NestedEnumEnum_EstadoInscripcionFilter.prototype, "not", void 0);
NestedEnumEnum_EstadoInscripcionFilter = NestedEnumEnum_EstadoInscripcionFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEnum_EstadoInscripcionFilter", {
        isAbstract: true
    })
], NestedEnumEnum_EstadoInscripcionFilter);
exports.NestedEnumEnum_EstadoInscripcionFilter = NestedEnumEnum_EstadoInscripcionFilter;
