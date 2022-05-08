"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoUpdateOneRequiredWithoutInscripcionesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoCreateOrConnectWithoutInscripcionesInput_1 = require("../inputs/ProyectoCreateOrConnectWithoutInscripcionesInput");
const ProyectoCreateWithoutInscripcionesInput_1 = require("../inputs/ProyectoCreateWithoutInscripcionesInput");
const ProyectoUpdateWithoutInscripcionesInput_1 = require("../inputs/ProyectoUpdateWithoutInscripcionesInput");
const ProyectoUpsertWithoutInscripcionesInput_1 = require("../inputs/ProyectoUpsertWithoutInscripcionesInput");
const ProyectoWhereUniqueInput_1 = require("../inputs/ProyectoWhereUniqueInput");
let ProyectoUpdateOneRequiredWithoutInscripcionesInput = class ProyectoUpdateOneRequiredWithoutInscripcionesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateWithoutInscripcionesInput_1.ProyectoCreateWithoutInscripcionesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoCreateWithoutInscripcionesInput_1.ProyectoCreateWithoutInscripcionesInput)
], ProyectoUpdateOneRequiredWithoutInscripcionesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateOrConnectWithoutInscripcionesInput_1.ProyectoCreateOrConnectWithoutInscripcionesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoCreateOrConnectWithoutInscripcionesInput_1.ProyectoCreateOrConnectWithoutInscripcionesInput)
], ProyectoUpdateOneRequiredWithoutInscripcionesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoUpsertWithoutInscripcionesInput_1.ProyectoUpsertWithoutInscripcionesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoUpsertWithoutInscripcionesInput_1.ProyectoUpsertWithoutInscripcionesInput)
], ProyectoUpdateOneRequiredWithoutInscripcionesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput)
], ProyectoUpdateOneRequiredWithoutInscripcionesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoUpdateWithoutInscripcionesInput_1.ProyectoUpdateWithoutInscripcionesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoUpdateWithoutInscripcionesInput_1.ProyectoUpdateWithoutInscripcionesInput)
], ProyectoUpdateOneRequiredWithoutInscripcionesInput.prototype, "update", void 0);
ProyectoUpdateOneRequiredWithoutInscripcionesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoUpdateOneRequiredWithoutInscripcionesInput", {
        isAbstract: true
    })
], ProyectoUpdateOneRequiredWithoutInscripcionesInput);
exports.ProyectoUpdateOneRequiredWithoutInscripcionesInput = ProyectoUpdateOneRequiredWithoutInscripcionesInput;
