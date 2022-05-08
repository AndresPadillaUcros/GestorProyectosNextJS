"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoCreateWithoutInscripcionesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesCreateNestedManyWithoutProyectoInput_1 = require("../inputs/AvancesCreateNestedManyWithoutProyectoInput");
const UsuarioCreateNestedOneWithoutProyectosLideradosInput_1 = require("../inputs/UsuarioCreateNestedOneWithoutProyectosLideradosInput");
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
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProyectoCreateWithoutInscripcionesInput.prototype, "presupuesto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
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
ProyectoCreateWithoutInscripcionesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoCreateWithoutInscripcionesInput", {
        isAbstract: true
    })
], ProyectoCreateWithoutInscripcionesInput);
exports.ProyectoCreateWithoutInscripcionesInput = ProyectoCreateWithoutInscripcionesInput;
