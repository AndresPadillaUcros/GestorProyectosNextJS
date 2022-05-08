"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioCreateWithoutProyectosLideradosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesCreateNestedManyWithoutCreadoPorInput_1 = require("../inputs/AvancesCreateNestedManyWithoutCreadoPorInput");
const InscripcionCreateNestedManyWithoutEstudianteInput_1 = require("../inputs/InscripcionCreateNestedManyWithoutEstudianteInput");
const Enum_EstadoUsuario_1 = require("../../enums/Enum_EstadoUsuario");
const Enum_Rol_1 = require("../../enums/Enum_Rol");
let UsuarioCreateWithoutProyectosLideradosInput = class UsuarioCreateWithoutProyectosLideradosInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioCreateWithoutProyectosLideradosInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioCreateWithoutProyectosLideradosInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioCreateWithoutProyectosLideradosInput.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioCreateWithoutProyectosLideradosInput.prototype, "apellido", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioCreateWithoutProyectosLideradosInput.prototype, "identificacion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Rol_1.Enum_Rol, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioCreateWithoutProyectosLideradosInput.prototype, "rol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_EstadoUsuario_1.Enum_EstadoUsuario, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioCreateWithoutProyectosLideradosInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesCreateNestedManyWithoutCreadoPorInput_1.AvancesCreateNestedManyWithoutCreadoPorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvancesCreateNestedManyWithoutCreadoPorInput_1.AvancesCreateNestedManyWithoutCreadoPorInput)
], UsuarioCreateWithoutProyectosLideradosInput.prototype, "avances", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionCreateNestedManyWithoutEstudianteInput_1.InscripcionCreateNestedManyWithoutEstudianteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionCreateNestedManyWithoutEstudianteInput_1.InscripcionCreateNestedManyWithoutEstudianteInput)
], UsuarioCreateWithoutProyectosLideradosInput.prototype, "inscripciones", void 0);
UsuarioCreateWithoutProyectosLideradosInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioCreateWithoutProyectosLideradosInput", {
        isAbstract: true
    })
], UsuarioCreateWithoutProyectosLideradosInput);
exports.UsuarioCreateWithoutProyectosLideradosInput = UsuarioCreateWithoutProyectosLideradosInput;
