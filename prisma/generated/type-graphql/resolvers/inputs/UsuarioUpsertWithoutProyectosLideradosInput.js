"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioUpsertWithoutProyectosLideradosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioCreateWithoutProyectosLideradosInput_1 = require("../inputs/UsuarioCreateWithoutProyectosLideradosInput");
const UsuarioUpdateWithoutProyectosLideradosInput_1 = require("../inputs/UsuarioUpdateWithoutProyectosLideradosInput");
let UsuarioUpsertWithoutProyectosLideradosInput = class UsuarioUpsertWithoutProyectosLideradosInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioUpdateWithoutProyectosLideradosInput_1.UsuarioUpdateWithoutProyectosLideradosInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioUpdateWithoutProyectosLideradosInput_1.UsuarioUpdateWithoutProyectosLideradosInput)
], UsuarioUpsertWithoutProyectosLideradosInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutProyectosLideradosInput_1.UsuarioCreateWithoutProyectosLideradosInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioCreateWithoutProyectosLideradosInput_1.UsuarioCreateWithoutProyectosLideradosInput)
], UsuarioUpsertWithoutProyectosLideradosInput.prototype, "create", void 0);
UsuarioUpsertWithoutProyectosLideradosInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioUpsertWithoutProyectosLideradosInput", {
        isAbstract: true
    })
], UsuarioUpsertWithoutProyectosLideradosInput);
exports.UsuarioUpsertWithoutProyectosLideradosInput = UsuarioUpsertWithoutProyectosLideradosInput;
