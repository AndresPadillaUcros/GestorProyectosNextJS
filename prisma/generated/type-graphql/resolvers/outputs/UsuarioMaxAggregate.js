"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_EstadoUsuario_1 = require("../../enums/Enum_EstadoUsuario");
const Enum_Rol_1 = require("../../enums/Enum_Rol");
let UsuarioMaxAggregate = class UsuarioMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioMaxAggregate.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioMaxAggregate.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioMaxAggregate.prototype, "apellido", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioMaxAggregate.prototype, "identificacion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Rol_1.Enum_Rol, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioMaxAggregate.prototype, "rol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_EstadoUsuario_1.Enum_EstadoUsuario, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioMaxAggregate.prototype, "estado", void 0);
UsuarioMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("UsuarioMaxAggregate", {
        isAbstract: true
    })
], UsuarioMaxAggregate);
exports.UsuarioMaxAggregate = UsuarioMaxAggregate;
