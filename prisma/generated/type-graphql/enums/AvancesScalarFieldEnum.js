"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvancesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var AvancesScalarFieldEnum;
(function (AvancesScalarFieldEnum) {
    AvancesScalarFieldEnum["id"] = "id";
    AvancesScalarFieldEnum["fecha"] = "fecha";
    AvancesScalarFieldEnum["descripcion"] = "descripcion";
    AvancesScalarFieldEnum["observaciones"] = "observaciones";
    AvancesScalarFieldEnum["proyectoId"] = "proyectoId";
    AvancesScalarFieldEnum["usuarioId"] = "usuarioId";
})(AvancesScalarFieldEnum = exports.AvancesScalarFieldEnum || (exports.AvancesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(AvancesScalarFieldEnum, {
    name: "AvancesScalarFieldEnum",
    description: undefined,
});
