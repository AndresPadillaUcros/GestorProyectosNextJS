"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioCreateOrConnectWithoutProyectosLideradosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioCreateWithoutProyectosLideradosInput_1 = require("../inputs/UsuarioCreateWithoutProyectosLideradosInput");
const UsuarioWhereUniqueInput_1 = require("../inputs/UsuarioWhereUniqueInput");
let UsuarioCreateOrConnectWithoutProyectosLideradosInput = class UsuarioCreateOrConnectWithoutProyectosLideradosInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], UsuarioCreateOrConnectWithoutProyectosLideradosInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutProyectosLideradosInput_1.UsuarioCreateWithoutProyectosLideradosInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioCreateWithoutProyectosLideradosInput_1.UsuarioCreateWithoutProyectosLideradosInput)
], UsuarioCreateOrConnectWithoutProyectosLideradosInput.prototype, "create", void 0);
UsuarioCreateOrConnectWithoutProyectosLideradosInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioCreateOrConnectWithoutProyectosLideradosInput", {
        isAbstract: true
    })
], UsuarioCreateOrConnectWithoutProyectosLideradosInput);
exports.UsuarioCreateOrConnectWithoutProyectosLideradosInput = UsuarioCreateOrConnectWithoutProyectosLideradosInput;
