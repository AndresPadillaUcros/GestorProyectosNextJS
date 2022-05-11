"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoCreateWithoutLiderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesCreateNestedManyWithoutProyectoInput_1 = require("../inputs/AvancesCreateNestedManyWithoutProyectoInput");
const InscripcionCreateNestedManyWithoutProyectoInput_1 = require("../inputs/InscripcionCreateNestedManyWithoutProyectoInput");
const ObjetivosEspecificosCreateNestedManyWithoutProyectoInput_1 = require("../inputs/ObjetivosEspecificosCreateNestedManyWithoutProyectoInput");
const Enum_EstadoProyecto_1 = require("../../enums/Enum_EstadoProyecto");
const Enum_FaseProyecto_1 = require("../../enums/Enum_FaseProyecto");
let ProyectoCreateWithoutLiderInput = class ProyectoCreateWithoutLiderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoCreateWithoutLiderInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoCreateWithoutLiderInput.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProyectoCreateWithoutLiderInput.prototype, "presupuesto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ProyectoCreateWithoutLiderInput.prototype, "fechaInicio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProyectoCreateWithoutLiderInput.prototype, "fechaFin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_EstadoProyecto_1.Enum_EstadoProyecto, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoCreateWithoutLiderInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_FaseProyecto_1.Enum_FaseProyecto, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoCreateWithoutLiderInput.prototype, "fase", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoCreateWithoutLiderInput.prototype, "objetivoGeneral", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosCreateNestedManyWithoutProyectoInput_1.ObjetivosEspecificosCreateNestedManyWithoutProyectoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosCreateNestedManyWithoutProyectoInput_1.ObjetivosEspecificosCreateNestedManyWithoutProyectoInput)
], ProyectoCreateWithoutLiderInput.prototype, "objetivosEspecificos", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesCreateNestedManyWithoutProyectoInput_1.AvancesCreateNestedManyWithoutProyectoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvancesCreateNestedManyWithoutProyectoInput_1.AvancesCreateNestedManyWithoutProyectoInput)
], ProyectoCreateWithoutLiderInput.prototype, "avances", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionCreateNestedManyWithoutProyectoInput_1.InscripcionCreateNestedManyWithoutProyectoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionCreateNestedManyWithoutProyectoInput_1.InscripcionCreateNestedManyWithoutProyectoInput)
], ProyectoCreateWithoutLiderInput.prototype, "inscripciones", void 0);
ProyectoCreateWithoutLiderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoCreateWithoutLiderInput", {
        isAbstract: true
    })
], ProyectoCreateWithoutLiderInput);
exports.ProyectoCreateWithoutLiderInput = ProyectoCreateWithoutLiderInput;
