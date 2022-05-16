"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum_EstadoInscripcion = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Enum_EstadoInscripcion;
(function (Enum_EstadoInscripcion) {
    Enum_EstadoInscripcion["Aceptado"] = "Aceptado";
    Enum_EstadoInscripcion["Rechazado"] = "Rechazado";
    Enum_EstadoInscripcion["Pendiente"] = "Pendiente";
})(Enum_EstadoInscripcion = exports.Enum_EstadoInscripcion || (exports.Enum_EstadoInscripcion = {}));
TypeGraphQL.registerEnumType(Enum_EstadoInscripcion, {
    name: "Enum_EstadoInscripcion",
    description: undefined,
});
