"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum_EstadoUsuario = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Enum_EstadoUsuario;
(function (Enum_EstadoUsuario) {
    Enum_EstadoUsuario["Pendiente"] = "Pendiente";
    Enum_EstadoUsuario["Autorizado"] = "Autorizado";
    Enum_EstadoUsuario["NoAutorizado"] = "NoAutorizado";
})(Enum_EstadoUsuario = exports.Enum_EstadoUsuario || (exports.Enum_EstadoUsuario = {}));
TypeGraphQL.registerEnumType(Enum_EstadoUsuario, {
    name: "Enum_EstadoUsuario",
    description: undefined,
});
