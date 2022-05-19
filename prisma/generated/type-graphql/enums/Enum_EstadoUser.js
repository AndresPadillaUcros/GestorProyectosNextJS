"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum_EstadoUser = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Enum_EstadoUser;
(function (Enum_EstadoUser) {
    Enum_EstadoUser["Pendiente"] = "Pendiente";
    Enum_EstadoUser["Autorizado"] = "Autorizado";
    Enum_EstadoUser["NoAutorizado"] = "NoAutorizado";
})(Enum_EstadoUser = exports.Enum_EstadoUser || (exports.Enum_EstadoUser = {}));
TypeGraphQL.registerEnumType(Enum_EstadoUser, {
    name: "Enum_EstadoUser",
    description: undefined,
});
