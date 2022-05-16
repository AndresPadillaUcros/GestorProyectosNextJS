"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionCreateWithoutEstudianteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoCreateNestedOneWithoutInscripcionesInput_1 = require("../inputs/ProyectoCreateNestedOneWithoutInscripcionesInput");
const Enum_EstadoInscripcion_1 = require("../../enums/Enum_EstadoInscripcion");
let InscripcionCreateWithoutEstudianteInput = class InscripcionCreateWithoutEstudianteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionCreateWithoutEstudianteInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_EstadoInscripcion_1.Enum_EstadoInscripcion, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionCreateWithoutEstudianteInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], InscripcionCreateWithoutEstudianteInput.prototype, "fechaIngreso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], InscripcionCreateWithoutEstudianteInput.prototype, "fechaEgreso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateNestedOneWithoutInscripcionesInput_1.ProyectoCreateNestedOneWithoutInscripcionesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoCreateNestedOneWithoutInscripcionesInput_1.ProyectoCreateNestedOneWithoutInscripcionesInput)
], InscripcionCreateWithoutEstudianteInput.prototype, "proyecto", void 0);
InscripcionCreateWithoutEstudianteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InscripcionCreateWithoutEstudianteInput", {
        isAbstract: true
    })
], InscripcionCreateWithoutEstudianteInput);
exports.InscripcionCreateWithoutEstudianteInput = InscripcionCreateWithoutEstudianteInput;
