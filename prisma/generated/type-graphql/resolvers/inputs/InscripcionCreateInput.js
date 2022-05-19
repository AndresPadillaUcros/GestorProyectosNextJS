"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoCreateNestedOneWithoutInscripcionesInput_1 = require("../inputs/ProyectoCreateNestedOneWithoutInscripcionesInput");
const UserCreateNestedOneWithoutInscripcionesInput_1 = require("../inputs/UserCreateNestedOneWithoutInscripcionesInput");
const Enum_EstadoInscripcion_1 = require("../../enums/Enum_EstadoInscripcion");
let InscripcionCreateInput = class InscripcionCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_EstadoInscripcion_1.Enum_EstadoInscripcion, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionCreateInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], InscripcionCreateInput.prototype, "fechaIngreso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], InscripcionCreateInput.prototype, "fechaEgreso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateNestedOneWithoutInscripcionesInput_1.ProyectoCreateNestedOneWithoutInscripcionesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoCreateNestedOneWithoutInscripcionesInput_1.ProyectoCreateNestedOneWithoutInscripcionesInput)
], InscripcionCreateInput.prototype, "proyecto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutInscripcionesInput_1.UserCreateNestedOneWithoutInscripcionesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutInscripcionesInput_1.UserCreateNestedOneWithoutInscripcionesInput)
], InscripcionCreateInput.prototype, "estudiante", void 0);
InscripcionCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InscripcionCreateInput", {
        isAbstract: true
    })
], InscripcionCreateInput);
exports.InscripcionCreateInput = InscripcionCreateInput;
