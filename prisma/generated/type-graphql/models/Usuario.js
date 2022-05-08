"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_EstadoUsuario_1 = require("../enums/Enum_EstadoUsuario");
const Enum_Rol_1 = require("../enums/Enum_Rol");
const UsuarioCount_1 = require("../resolvers/outputs/UsuarioCount");
let Usuario = class Usuario {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Usuario.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Usuario.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Usuario.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Usuario.prototype, "apellido", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Usuario.prototype, "identificacion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Rol_1.Enum_Rol, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Usuario.prototype, "rol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_EstadoUsuario_1.Enum_EstadoUsuario, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Usuario.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCount_1.UsuarioCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioCount_1.UsuarioCount)
], Usuario.prototype, "_count", void 0);
Usuario = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Usuario", {
        isAbstract: true
    })
], Usuario);
exports.Usuario = Usuario;
