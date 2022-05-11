"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivosEspecificosScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ObjetivosEspecificosScalarFieldEnum;
(function (ObjetivosEspecificosScalarFieldEnum) {
    ObjetivosEspecificosScalarFieldEnum["id"] = "id";
    ObjetivosEspecificosScalarFieldEnum["descripcion"] = "descripcion";
    ObjetivosEspecificosScalarFieldEnum["proyectoId"] = "proyectoId";
})(ObjetivosEspecificosScalarFieldEnum = exports.ObjetivosEspecificosScalarFieldEnum || (exports.ObjetivosEspecificosScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ObjetivosEspecificosScalarFieldEnum, {
    name: "ObjetivosEspecificosScalarFieldEnum",
    description: undefined,
});
