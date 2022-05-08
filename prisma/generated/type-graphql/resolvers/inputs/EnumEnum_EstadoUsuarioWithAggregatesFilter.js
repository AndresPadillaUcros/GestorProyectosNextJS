"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_EstadoUsuarioWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_EstadoUsuarioFilter_1 = require("../inputs/NestedEnumEnum_EstadoUsuarioFilter");
const NestedEnumEnum_EstadoUsuarioWithAggregatesFilter_1 = require("../inputs/NestedEnumEnum_EstadoUsuarioWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_EstadoUsuario_1 = require("../../enums/Enum_EstadoUsuario");
let EnumEnum_EstadoUsuarioWithAggregatesFilter = class EnumEnum_EstadoUsuarioWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_EstadoUsuario_1.Enum_EstadoUsuario, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_EstadoUsuarioWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_EstadoUsuario_1.Enum_EstadoUsuario], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_EstadoUsuarioWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_EstadoUsuario_1.Enum_EstadoUsuario], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_EstadoUsuarioWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_EstadoUsuarioWithAggregatesFilter_1.NestedEnumEnum_EstadoUsuarioWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_EstadoUsuarioWithAggregatesFilter_1.NestedEnumEnum_EstadoUsuarioWithAggregatesFilter)
], EnumEnum_EstadoUsuarioWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumEnum_EstadoUsuarioWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_EstadoUsuarioFilter_1.NestedEnumEnum_EstadoUsuarioFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_EstadoUsuarioFilter_1.NestedEnumEnum_EstadoUsuarioFilter)
], EnumEnum_EstadoUsuarioWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_EstadoUsuarioFilter_1.NestedEnumEnum_EstadoUsuarioFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_EstadoUsuarioFilter_1.NestedEnumEnum_EstadoUsuarioFilter)
], EnumEnum_EstadoUsuarioWithAggregatesFilter.prototype, "_max", void 0);
EnumEnum_EstadoUsuarioWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_EstadoUsuarioWithAggregatesFilter", {
        isAbstract: true
    })
], EnumEnum_EstadoUsuarioWithAggregatesFilter);
exports.EnumEnum_EstadoUsuarioWithAggregatesFilter = EnumEnum_EstadoUsuarioWithAggregatesFilter;
