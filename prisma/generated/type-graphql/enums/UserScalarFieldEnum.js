"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var UserScalarFieldEnum;
(function (UserScalarFieldEnum) {
    UserScalarFieldEnum["id"] = "id";
    UserScalarFieldEnum["email"] = "email";
    UserScalarFieldEnum["emailVerified"] = "emailVerified";
    UserScalarFieldEnum["name"] = "name";
    UserScalarFieldEnum["apellido"] = "apellido";
    UserScalarFieldEnum["image"] = "image";
    UserScalarFieldEnum["identificacion"] = "identificacion";
    UserScalarFieldEnum["rol"] = "rol";
    UserScalarFieldEnum["estado"] = "estado";
})(UserScalarFieldEnum = exports.UserScalarFieldEnum || (exports.UserScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
    name: "UserScalarFieldEnum",
    description: undefined,
});
