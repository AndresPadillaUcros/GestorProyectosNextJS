"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inscripcion = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_EstadoInscripcion_1 = require("../enums/Enum_EstadoInscripcion");
let Inscripcion = class Inscripcion {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Inscripcion.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_EstadoInscripcion_1.Enum_EstadoInscripcion, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Inscripcion.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Inscripcion.prototype, "fechaIngreso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Inscripcion.prototype, "fechaEgreso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Inscripcion.prototype, "proyectoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Inscripcion.prototype, "usuarioId", void 0);
Inscripcion = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Inscripcion", {
        isAbstract: true
    })
], Inscripcion);
exports.Inscripcion = Inscripcion;
