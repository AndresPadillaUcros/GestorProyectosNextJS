"use strict";
var NestedEnumEnum_EstadoUsuarioWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_EstadoUsuarioWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_EstadoUsuarioFilter_1 = require("../inputs/NestedEnumEnum_EstadoUsuarioFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_EstadoUsuario_1 = require("../../enums/Enum_EstadoUsuario");
let NestedEnumEnum_EstadoUsuarioWithAggregatesFilter = NestedEnumEnum_EstadoUsuarioWithAggregatesFilter_1 = class NestedEnumEnum_EstadoUsuarioWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_EstadoUsuario_1.Enum_EstadoUsuario, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEnum_EstadoUsuarioWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_EstadoUsuario_1.Enum_EstadoUsuario], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_EstadoUsuarioWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_EstadoUsuario_1.Enum_EstadoUsuario], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_EstadoUsuarioWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_EstadoUsuarioWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_EstadoUsuarioWithAggregatesFilter)
], NestedEnumEnum_EstadoUsuarioWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumEnum_EstadoUsuarioWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_EstadoUsuarioFilter_1.NestedEnumEnum_EstadoUsuarioFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_EstadoUsuarioFilter_1.NestedEnumEnum_EstadoUsuarioFilter)
], NestedEnumEnum_EstadoUsuarioWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_EstadoUsuarioFilter_1.NestedEnumEnum_EstadoUsuarioFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_EstadoUsuarioFilter_1.NestedEnumEnum_EstadoUsuarioFilter)
], NestedEnumEnum_EstadoUsuarioWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumEnum_EstadoUsuarioWithAggregatesFilter = NestedEnumEnum_EstadoUsuarioWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEnum_EstadoUsuarioWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumEnum_EstadoUsuarioWithAggregatesFilter);
exports.NestedEnumEnum_EstadoUsuarioWithAggregatesFilter = NestedEnumEnum_EstadoUsuarioWithAggregatesFilter;
