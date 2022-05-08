"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum_Rol = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Enum_Rol;
(function (Enum_Rol) {
    Enum_Rol["Estudiante"] = "Estudiante";
    Enum_Rol["Lider"] = "Lider";
    Enum_Rol["Administrador"] = "Administrador";
})(Enum_Rol = exports.Enum_Rol || (exports.Enum_Rol = {}));
TypeGraphQL.registerEnumType(Enum_Rol, {
    name: "Enum_Rol",
    description: undefined,
});
