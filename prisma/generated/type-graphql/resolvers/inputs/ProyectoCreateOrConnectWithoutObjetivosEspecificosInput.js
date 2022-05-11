"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoCreateOrConnectWithoutObjetivosEspecificosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoCreateWithoutObjetivosEspecificosInput_1 = require("../inputs/ProyectoCreateWithoutObjetivosEspecificosInput");
const ProyectoWhereUniqueInput_1 = require("../inputs/ProyectoWhereUniqueInput");
let ProyectoCreateOrConnectWithoutObjetivosEspecificosInput = class ProyectoCreateOrConnectWithoutObjetivosEspecificosInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput)
], ProyectoCreateOrConnectWithoutObjetivosEspecificosInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateWithoutObjetivosEspecificosInput_1.ProyectoCreateWithoutObjetivosEspecificosInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoCreateWithoutObjetivosEspecificosInput_1.ProyectoCreateWithoutObjetivosEspecificosInput)
], ProyectoCreateOrConnectWithoutObjetivosEspecificosInput.prototype, "create", void 0);
ProyectoCreateOrConnectWithoutObjetivosEspecificosInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoCreateOrConnectWithoutObjetivosEspecificosInput", {
        isAbstract: true
    })
], ProyectoCreateOrConnectWithoutObjetivosEspecificosInput);
exports.ProyectoCreateOrConnectWithoutObjetivosEspecificosInput = ProyectoCreateOrConnectWithoutObjetivosEspecificosInput;
