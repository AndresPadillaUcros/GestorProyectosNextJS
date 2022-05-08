"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioUpsertWithoutInscripcionesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioCreateWithoutInscripcionesInput_1 = require("../inputs/UsuarioCreateWithoutInscripcionesInput");
const UsuarioUpdateWithoutInscripcionesInput_1 = require("../inputs/UsuarioUpdateWithoutInscripcionesInput");
let UsuarioUpsertWithoutInscripcionesInput = class UsuarioUpsertWithoutInscripcionesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioUpdateWithoutInscripcionesInput_1.UsuarioUpdateWithoutInscripcionesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioUpdateWithoutInscripcionesInput_1.UsuarioUpdateWithoutInscripcionesInput)
], UsuarioUpsertWithoutInscripcionesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutInscripcionesInput_1.UsuarioCreateWithoutInscripcionesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioCreateWithoutInscripcionesInput_1.UsuarioCreateWithoutInscripcionesInput)
], UsuarioUpsertWithoutInscripcionesInput.prototype, "create", void 0);
UsuarioUpsertWithoutInscripcionesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioUpsertWithoutInscripcionesInput", {
        isAbstract: true
    })
], UsuarioUpsertWithoutInscripcionesInput);
exports.UsuarioUpsertWithoutInscripcionesInput = UsuarioUpsertWithoutInscripcionesInput;
