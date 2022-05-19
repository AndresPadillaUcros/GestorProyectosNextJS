"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionCreateWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutInscripcionesInput_1 = require("../inputs/UserCreateNestedOneWithoutInscripcionesInput");
const Enum_EstadoInscripcion_1 = require("../../enums/Enum_EstadoInscripcion");
let InscripcionCreateWithoutProyectoInput = class InscripcionCreateWithoutProyectoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionCreateWithoutProyectoInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_EstadoInscripcion_1.Enum_EstadoInscripcion, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionCreateWithoutProyectoInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], InscripcionCreateWithoutProyectoInput.prototype, "fechaIngreso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], InscripcionCreateWithoutProyectoInput.prototype, "fechaEgreso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutInscripcionesInput_1.UserCreateNestedOneWithoutInscripcionesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutInscripcionesInput_1.UserCreateNestedOneWithoutInscripcionesInput)
], InscripcionCreateWithoutProyectoInput.prototype, "estudiante", void 0);
InscripcionCreateWithoutProyectoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InscripcionCreateWithoutProyectoInput", {
        isAbstract: true
    })
], InscripcionCreateWithoutProyectoInput);
exports.InscripcionCreateWithoutProyectoInput = InscripcionCreateWithoutProyectoInput;
