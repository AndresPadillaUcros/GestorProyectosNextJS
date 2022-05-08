"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoCreateNestedOneWithoutInscripcionesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoCreateOrConnectWithoutInscripcionesInput_1 = require("../inputs/ProyectoCreateOrConnectWithoutInscripcionesInput");
const ProyectoCreateWithoutInscripcionesInput_1 = require("../inputs/ProyectoCreateWithoutInscripcionesInput");
const ProyectoWhereUniqueInput_1 = require("../inputs/ProyectoWhereUniqueInput");
let ProyectoCreateNestedOneWithoutInscripcionesInput = class ProyectoCreateNestedOneWithoutInscripcionesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateWithoutInscripcionesInput_1.ProyectoCreateWithoutInscripcionesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoCreateWithoutInscripcionesInput_1.ProyectoCreateWithoutInscripcionesInput)
], ProyectoCreateNestedOneWithoutInscripcionesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateOrConnectWithoutInscripcionesInput_1.ProyectoCreateOrConnectWithoutInscripcionesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoCreateOrConnectWithoutInscripcionesInput_1.ProyectoCreateOrConnectWithoutInscripcionesInput)
], ProyectoCreateNestedOneWithoutInscripcionesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput)
], ProyectoCreateNestedOneWithoutInscripcionesInput.prototype, "connect", void 0);
ProyectoCreateNestedOneWithoutInscripcionesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoCreateNestedOneWithoutInscripcionesInput", {
        isAbstract: true
    })
], ProyectoCreateNestedOneWithoutInscripcionesInput);
exports.ProyectoCreateNestedOneWithoutInscripcionesInput = ProyectoCreateNestedOneWithoutInscripcionesInput;
