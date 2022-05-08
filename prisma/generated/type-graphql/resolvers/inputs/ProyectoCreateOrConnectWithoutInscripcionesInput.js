"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoCreateOrConnectWithoutInscripcionesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoCreateWithoutInscripcionesInput_1 = require("../inputs/ProyectoCreateWithoutInscripcionesInput");
const ProyectoWhereUniqueInput_1 = require("../inputs/ProyectoWhereUniqueInput");
let ProyectoCreateOrConnectWithoutInscripcionesInput = class ProyectoCreateOrConnectWithoutInscripcionesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput)
], ProyectoCreateOrConnectWithoutInscripcionesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateWithoutInscripcionesInput_1.ProyectoCreateWithoutInscripcionesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoCreateWithoutInscripcionesInput_1.ProyectoCreateWithoutInscripcionesInput)
], ProyectoCreateOrConnectWithoutInscripcionesInput.prototype, "create", void 0);
ProyectoCreateOrConnectWithoutInscripcionesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoCreateOrConnectWithoutInscripcionesInput", {
        isAbstract: true
    })
], ProyectoCreateOrConnectWithoutInscripcionesInput);
exports.ProyectoCreateOrConnectWithoutInscripcionesInput = ProyectoCreateOrConnectWithoutInscripcionesInput;
