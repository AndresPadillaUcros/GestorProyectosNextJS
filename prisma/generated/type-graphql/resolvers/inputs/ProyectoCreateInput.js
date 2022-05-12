"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesCreateNestedManyWithoutProyectoInput_1 = require("../inputs/AvancesCreateNestedManyWithoutProyectoInput");
const InscripcionCreateNestedManyWithoutProyectoInput_1 = require("../inputs/InscripcionCreateNestedManyWithoutProyectoInput");
const ObjetivosEspecificosCreateNestedManyWithoutProyectoInput_1 = require("../inputs/ObjetivosEspecificosCreateNestedManyWithoutProyectoInput");
const UsuarioCreateNestedOneWithoutProyectosLideradosInput_1 = require("../inputs/UsuarioCreateNestedOneWithoutProyectosLideradosInput");
const Enum_EstadoProyecto_1 = require("../../enums/Enum_EstadoProyecto");
const Enum_FaseProyecto_1 = require("../../enums/Enum_FaseProyecto");
let ProyectoCreateInput = class ProyectoCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoCreateInput.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoCreateInput.prototype, "presupuesto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ProyectoCreateInput.prototype, "fechaInicio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProyectoCreateInput.prototype, "fechaFin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_EstadoProyecto_1.Enum_EstadoProyecto, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoCreateInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_FaseProyecto_1.Enum_FaseProyecto, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoCreateInput.prototype, "fase", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoCreateInput.prototype, "objetivoGeneral", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateNestedOneWithoutProyectosLideradosInput_1.UsuarioCreateNestedOneWithoutProyectosLideradosInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioCreateNestedOneWithoutProyectosLideradosInput_1.UsuarioCreateNestedOneWithoutProyectosLideradosInput)
], ProyectoCreateInput.prototype, "lider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesCreateNestedManyWithoutProyectoInput_1.AvancesCreateNestedManyWithoutProyectoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvancesCreateNestedManyWithoutProyectoInput_1.AvancesCreateNestedManyWithoutProyectoInput)
], ProyectoCreateInput.prototype, "avances", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionCreateNestedManyWithoutProyectoInput_1.InscripcionCreateNestedManyWithoutProyectoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionCreateNestedManyWithoutProyectoInput_1.InscripcionCreateNestedManyWithoutProyectoInput)
], ProyectoCreateInput.prototype, "inscripciones", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosCreateNestedManyWithoutProyectoInput_1.ObjetivosEspecificosCreateNestedManyWithoutProyectoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosCreateNestedManyWithoutProyectoInput_1.ObjetivosEspecificosCreateNestedManyWithoutProyectoInput)
], ProyectoCreateInput.prototype, "objetivosEspecificos", void 0);
ProyectoCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoCreateInput", {
        isAbstract: true
    })
], ProyectoCreateInput);
exports.ProyectoCreateInput = ProyectoCreateInput;
