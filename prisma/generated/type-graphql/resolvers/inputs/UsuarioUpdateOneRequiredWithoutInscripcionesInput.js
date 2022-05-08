"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioUpdateOneRequiredWithoutInscripcionesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioCreateOrConnectWithoutInscripcionesInput_1 = require("../inputs/UsuarioCreateOrConnectWithoutInscripcionesInput");
const UsuarioCreateWithoutInscripcionesInput_1 = require("../inputs/UsuarioCreateWithoutInscripcionesInput");
const UsuarioUpdateWithoutInscripcionesInput_1 = require("../inputs/UsuarioUpdateWithoutInscripcionesInput");
const UsuarioUpsertWithoutInscripcionesInput_1 = require("../inputs/UsuarioUpsertWithoutInscripcionesInput");
const UsuarioWhereUniqueInput_1 = require("../inputs/UsuarioWhereUniqueInput");
let UsuarioUpdateOneRequiredWithoutInscripcionesInput = class UsuarioUpdateOneRequiredWithoutInscripcionesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutInscripcionesInput_1.UsuarioCreateWithoutInscripcionesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioCreateWithoutInscripcionesInput_1.UsuarioCreateWithoutInscripcionesInput)
], UsuarioUpdateOneRequiredWithoutInscripcionesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateOrConnectWithoutInscripcionesInput_1.UsuarioCreateOrConnectWithoutInscripcionesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioCreateOrConnectWithoutInscripcionesInput_1.UsuarioCreateOrConnectWithoutInscripcionesInput)
], UsuarioUpdateOneRequiredWithoutInscripcionesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioUpsertWithoutInscripcionesInput_1.UsuarioUpsertWithoutInscripcionesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioUpsertWithoutInscripcionesInput_1.UsuarioUpsertWithoutInscripcionesInput)
], UsuarioUpdateOneRequiredWithoutInscripcionesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], UsuarioUpdateOneRequiredWithoutInscripcionesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioUpdateWithoutInscripcionesInput_1.UsuarioUpdateWithoutInscripcionesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioUpdateWithoutInscripcionesInput_1.UsuarioUpdateWithoutInscripcionesInput)
], UsuarioUpdateOneRequiredWithoutInscripcionesInput.prototype, "update", void 0);
UsuarioUpdateOneRequiredWithoutInscripcionesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioUpdateOneRequiredWithoutInscripcionesInput", {
        isAbstract: true
    })
], UsuarioUpdateOneRequiredWithoutInscripcionesInput);
exports.UsuarioUpdateOneRequiredWithoutInscripcionesInput = UsuarioUpdateOneRequiredWithoutInscripcionesInput;
