"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioCountAggregate_1 = require("../outputs/UsuarioCountAggregate");
const UsuarioMaxAggregate_1 = require("../outputs/UsuarioMaxAggregate");
const UsuarioMinAggregate_1 = require("../outputs/UsuarioMinAggregate");
const Enum_EstadoUsuario_1 = require("../../enums/Enum_EstadoUsuario");
const Enum_Rol_1 = require("../../enums/Enum_Rol");
let UsuarioGroupBy = class UsuarioGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioGroupBy.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioGroupBy.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioGroupBy.prototype, "apellido", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioGroupBy.prototype, "identificacion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Rol_1.Enum_Rol, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioGroupBy.prototype, "rol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_EstadoUsuario_1.Enum_EstadoUsuario, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioGroupBy.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCountAggregate_1.UsuarioCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioCountAggregate_1.UsuarioCountAggregate)
], UsuarioGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioMinAggregate_1.UsuarioMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioMinAggregate_1.UsuarioMinAggregate)
], UsuarioGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioMaxAggregate_1.UsuarioMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioMaxAggregate_1.UsuarioMaxAggregate)
], UsuarioGroupBy.prototype, "_max", void 0);
UsuarioGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("UsuarioGroupBy", {
        isAbstract: true
    })
], UsuarioGroupBy);
exports.UsuarioGroupBy = UsuarioGroupBy;
