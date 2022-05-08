"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioUpdateOneRequiredWithoutProyectosLideradosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioCreateOrConnectWithoutProyectosLideradosInput_1 = require("../inputs/UsuarioCreateOrConnectWithoutProyectosLideradosInput");
const UsuarioCreateWithoutProyectosLideradosInput_1 = require("../inputs/UsuarioCreateWithoutProyectosLideradosInput");
const UsuarioUpdateWithoutProyectosLideradosInput_1 = require("../inputs/UsuarioUpdateWithoutProyectosLideradosInput");
const UsuarioUpsertWithoutProyectosLideradosInput_1 = require("../inputs/UsuarioUpsertWithoutProyectosLideradosInput");
const UsuarioWhereUniqueInput_1 = require("../inputs/UsuarioWhereUniqueInput");
let UsuarioUpdateOneRequiredWithoutProyectosLideradosInput = class UsuarioUpdateOneRequiredWithoutProyectosLideradosInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutProyectosLideradosInput_1.UsuarioCreateWithoutProyectosLideradosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioCreateWithoutProyectosLideradosInput_1.UsuarioCreateWithoutProyectosLideradosInput)
], UsuarioUpdateOneRequiredWithoutProyectosLideradosInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateOrConnectWithoutProyectosLideradosInput_1.UsuarioCreateOrConnectWithoutProyectosLideradosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioCreateOrConnectWithoutProyectosLideradosInput_1.UsuarioCreateOrConnectWithoutProyectosLideradosInput)
], UsuarioUpdateOneRequiredWithoutProyectosLideradosInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioUpsertWithoutProyectosLideradosInput_1.UsuarioUpsertWithoutProyectosLideradosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioUpsertWithoutProyectosLideradosInput_1.UsuarioUpsertWithoutProyectosLideradosInput)
], UsuarioUpdateOneRequiredWithoutProyectosLideradosInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], UsuarioUpdateOneRequiredWithoutProyectosLideradosInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioUpdateWithoutProyectosLideradosInput_1.UsuarioUpdateWithoutProyectosLideradosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioUpdateWithoutProyectosLideradosInput_1.UsuarioUpdateWithoutProyectosLideradosInput)
], UsuarioUpdateOneRequiredWithoutProyectosLideradosInput.prototype, "update", void 0);
UsuarioUpdateOneRequiredWithoutProyectosLideradosInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioUpdateOneRequiredWithoutProyectosLideradosInput", {
        isAbstract: true
    })
], UsuarioUpdateOneRequiredWithoutProyectosLideradosInput);
exports.UsuarioUpdateOneRequiredWithoutProyectosLideradosInput = UsuarioUpdateOneRequiredWithoutProyectosLideradosInput;
