"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ProyectoScalarFieldEnum;
(function (ProyectoScalarFieldEnum) {
    ProyectoScalarFieldEnum["id"] = "id";
    ProyectoScalarFieldEnum["nombre"] = "nombre";
    ProyectoScalarFieldEnum["presupuesto"] = "presupuesto";
    ProyectoScalarFieldEnum["fechaInicio"] = "fechaInicio";
    ProyectoScalarFieldEnum["fechaFin"] = "fechaFin";
    ProyectoScalarFieldEnum["estado"] = "estado";
    ProyectoScalarFieldEnum["fase"] = "fase";
    ProyectoScalarFieldEnum["usuarioId"] = "usuarioId";
})(ProyectoScalarFieldEnum = exports.ProyectoScalarFieldEnum || (exports.ProyectoScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ProyectoScalarFieldEnum, {
    name: "ProyectoScalarFieldEnum",
    description: undefined,
});
