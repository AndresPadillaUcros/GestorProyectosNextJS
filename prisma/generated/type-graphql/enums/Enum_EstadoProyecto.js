"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum_EstadoProyecto = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Enum_EstadoProyecto;
(function (Enum_EstadoProyecto) {
    Enum_EstadoProyecto["Activo"] = "Activo";
    Enum_EstadoProyecto["Inactivo"] = "Inactivo";
})(Enum_EstadoProyecto = exports.Enum_EstadoProyecto || (exports.Enum_EstadoProyecto = {}));
TypeGraphQL.registerEnumType(Enum_EstadoProyecto, {
    name: "Enum_EstadoProyecto",
    description: undefined,
});
