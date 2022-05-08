"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_EstadoUsuarioFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_EstadoUsuarioFilter_1 = require("../inputs/NestedEnumEnum_EstadoUsuarioFilter");
const Enum_EstadoUsuario_1 = require("../../enums/Enum_EstadoUsuario");
let EnumEnum_EstadoUsuarioFilter = class EnumEnum_EstadoUsuarioFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_EstadoUsuario_1.Enum_EstadoUsuario, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_EstadoUsuarioFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_EstadoUsuario_1.Enum_EstadoUsuario], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_EstadoUsuarioFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_EstadoUsuario_1.Enum_EstadoUsuario], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_EstadoUsuarioFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_EstadoUsuarioFilter_1.NestedEnumEnum_EstadoUsuarioFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_EstadoUsuarioFilter_1.NestedEnumEnum_EstadoUsuarioFilter)
], EnumEnum_EstadoUsuarioFilter.prototype, "not", void 0);
EnumEnum_EstadoUsuarioFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_EstadoUsuarioFilter", {
        isAbstract: true
    })
], EnumEnum_EstadoUsuarioFilter);
exports.EnumEnum_EstadoUsuarioFilter = EnumEnum_EstadoUsuarioFilter;
