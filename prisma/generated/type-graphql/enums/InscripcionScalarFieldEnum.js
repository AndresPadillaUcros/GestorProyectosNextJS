"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var InscripcionScalarFieldEnum;
(function (InscripcionScalarFieldEnum) {
    InscripcionScalarFieldEnum["id"] = "id";
    InscripcionScalarFieldEnum["estado"] = "estado";
    InscripcionScalarFieldEnum["fechaIngreso"] = "fechaIngreso";
    InscripcionScalarFieldEnum["fechaEgreso"] = "fechaEgreso";
    InscripcionScalarFieldEnum["proyectoId"] = "proyectoId";
    InscripcionScalarFieldEnum["usuarioId"] = "usuarioId";
})(InscripcionScalarFieldEnum = exports.InscripcionScalarFieldEnum || (exports.InscripcionScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(InscripcionScalarFieldEnum, {
    name: "InscripcionScalarFieldEnum",
    description: undefined,
});
