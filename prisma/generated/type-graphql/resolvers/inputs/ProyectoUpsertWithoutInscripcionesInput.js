"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoUpsertWithoutInscripcionesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoCreateWithoutInscripcionesInput_1 = require("../inputs/ProyectoCreateWithoutInscripcionesInput");
const ProyectoUpdateWithoutInscripcionesInput_1 = require("../inputs/ProyectoUpdateWithoutInscripcionesInput");
let ProyectoUpsertWithoutInscripcionesInput = class ProyectoUpsertWithoutInscripcionesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoUpdateWithoutInscripcionesInput_1.ProyectoUpdateWithoutInscripcionesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoUpdateWithoutInscripcionesInput_1.ProyectoUpdateWithoutInscripcionesInput)
], ProyectoUpsertWithoutInscripcionesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateWithoutInscripcionesInput_1.ProyectoCreateWithoutInscripcionesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoCreateWithoutInscripcionesInput_1.ProyectoCreateWithoutInscripcionesInput)
], ProyectoUpsertWithoutInscripcionesInput.prototype, "create", void 0);
ProyectoUpsertWithoutInscripcionesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoUpsertWithoutInscripcionesInput", {
        isAbstract: true
    })
], ProyectoUpsertWithoutInscripcionesInput);
exports.ProyectoUpsertWithoutInscripcionesInput = ProyectoUpsertWithoutInscripcionesInput;
