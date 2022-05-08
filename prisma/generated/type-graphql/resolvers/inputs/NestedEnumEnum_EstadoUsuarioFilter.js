"use strict";
var NestedEnumEnum_EstadoUsuarioFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_EstadoUsuarioFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_EstadoUsuario_1 = require("../../enums/Enum_EstadoUsuario");
let NestedEnumEnum_EstadoUsuarioFilter = NestedEnumEnum_EstadoUsuarioFilter_1 = class NestedEnumEnum_EstadoUsuarioFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_EstadoUsuario_1.Enum_EstadoUsuario, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEnum_EstadoUsuarioFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_EstadoUsuario_1.Enum_EstadoUsuario], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_EstadoUsuarioFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_EstadoUsuario_1.Enum_EstadoUsuario], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_EstadoUsuarioFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_EstadoUsuarioFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_EstadoUsuarioFilter)
], NestedEnumEnum_EstadoUsuarioFilter.prototype, "not", void 0);
NestedEnumEnum_EstadoUsuarioFilter = NestedEnumEnum_EstadoUsuarioFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEnum_EstadoUsuarioFilter", {
        isAbstract: true
    })
], NestedEnumEnum_EstadoUsuarioFilter);
exports.NestedEnumEnum_EstadoUsuarioFilter = NestedEnumEnum_EstadoUsuarioFilter;
