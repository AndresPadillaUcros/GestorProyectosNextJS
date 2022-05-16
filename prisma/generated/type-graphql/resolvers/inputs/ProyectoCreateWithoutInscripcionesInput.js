"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoCreateWithoutInscripcionesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesCreateNestedManyWithoutProyectoInput_1 = require("../inputs/AvancesCreateNestedManyWithoutProyectoInput");
const ObjetivosEspecificosCreateNestedManyWithoutProyectoInput_1 = require("../inputs/ObjetivosEspecificosCreateNestedManyWithoutProyectoInput");
const UsuarioCreateNestedOneWithoutProyectosLideradosInput_1 = require("../inputs/UsuarioCreateNestedOneWithoutProyectosLideradosInput");
const Enum_EstadoProyecto_1 = require("../../enums/Enum_EstadoProyecto");
const Enum_FaseProyecto_1 = require("../../enums/Enum_FaseProyecto");
let ProyectoCreateWithoutInscripcionesInput = class ProyectoCreateWithoutInscripcionesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoCreateWithoutInscripcionesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoCreateWithoutInscripcionesInput.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoCreateWithoutInscripcionesInput.prototype, "presupuesto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProyectoCreateWithoutInscripcionesInput.prototype, "fechaInicio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProyectoCreateWithoutInscripcionesInput.prototype, "fechaFin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_EstadoProyecto_1.Enum_EstadoProyecto, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoCreateWithoutInscripcionesInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_FaseProyecto_1.Enum_FaseProyecto, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoCreateWithoutInscripcionesInput.prototype, "fase", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoCreateWithoutInscripcionesInput.prototype, "objetivoGeneral", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateNestedOneWithoutProyectosLideradosInput_1.UsuarioCreateNestedOneWithoutProyectosLideradosInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioCreateNestedOneWithoutProyectosLideradosInput_1.UsuarioCreateNestedOneWithoutProyectosLideradosInput)
], ProyectoCreateWithoutInscripcionesInput.prototype, "lider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesCreateNestedManyWithoutProyectoInput_1.AvancesCreateNestedManyWithoutProyectoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvancesCreateNestedManyWithoutProyectoInput_1.AvancesCreateNestedManyWithoutProyectoInput)
], ProyectoCreateWithoutInscripcionesInput.prototype, "avances", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosCreateNestedManyWithoutProyectoInput_1.ObjetivosEspecificosCreateNestedManyWithoutProyectoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosCreateNestedManyWithoutProyectoInput_1.ObjetivosEspecificosCreateNestedManyWithoutProyectoInput)
], ProyectoCreateWithoutInscripcionesInput.prototype, "objetivosEspecificos", void 0);
ProyectoCreateWithoutInscripcionesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoCreateWithoutInscripcionesInput", {
        isAbstract: true
    })
], ProyectoCreateWithoutInscripcionesInput);
exports.ProyectoCreateWithoutInscripcionesInput = ProyectoCreateWithoutInscripcionesInput;
