"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoCreateWithoutAvancesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InscripcionCreateNestedManyWithoutProyectoInput_1 = require("../inputs/InscripcionCreateNestedManyWithoutProyectoInput");
const ProyectoCreateobjetivosEspecificosInput_1 = require("../inputs/ProyectoCreateobjetivosEspecificosInput");
const UsuarioCreateNestedOneWithoutProyectosLideradosInput_1 = require("../inputs/UsuarioCreateNestedOneWithoutProyectosLideradosInput");
const Enum_EstadoProyecto_1 = require("../../enums/Enum_EstadoProyecto");
const Enum_FaseProyecto_1 = require("../../enums/Enum_FaseProyecto");
let ProyectoCreateWithoutAvancesInput = class ProyectoCreateWithoutAvancesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoCreateWithoutAvancesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoCreateWithoutAvancesInput.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProyectoCreateWithoutAvancesInput.prototype, "presupuesto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ProyectoCreateWithoutAvancesInput.prototype, "fechaInicio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProyectoCreateWithoutAvancesInput.prototype, "fechaFin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_EstadoProyecto_1.Enum_EstadoProyecto, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoCreateWithoutAvancesInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_FaseProyecto_1.Enum_FaseProyecto, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoCreateWithoutAvancesInput.prototype, "fase", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoCreateWithoutAvancesInput.prototype, "objetivoGeneral", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateobjetivosEspecificosInput_1.ProyectoCreateobjetivosEspecificosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoCreateobjetivosEspecificosInput_1.ProyectoCreateobjetivosEspecificosInput)
], ProyectoCreateWithoutAvancesInput.prototype, "objetivosEspecificos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateNestedOneWithoutProyectosLideradosInput_1.UsuarioCreateNestedOneWithoutProyectosLideradosInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioCreateNestedOneWithoutProyectosLideradosInput_1.UsuarioCreateNestedOneWithoutProyectosLideradosInput)
], ProyectoCreateWithoutAvancesInput.prototype, "lider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionCreateNestedManyWithoutProyectoInput_1.InscripcionCreateNestedManyWithoutProyectoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionCreateNestedManyWithoutProyectoInput_1.InscripcionCreateNestedManyWithoutProyectoInput)
], ProyectoCreateWithoutAvancesInput.prototype, "inscripciones", void 0);
ProyectoCreateWithoutAvancesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoCreateWithoutAvancesInput", {
        isAbstract: true
    })
], ProyectoCreateWithoutAvancesInput);
exports.ProyectoCreateWithoutAvancesInput = ProyectoCreateWithoutAvancesInput;
