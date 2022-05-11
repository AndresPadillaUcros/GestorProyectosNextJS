"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoCreateNestedOneWithoutObjetivosEspecificosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoCreateOrConnectWithoutObjetivosEspecificosInput_1 = require("../inputs/ProyectoCreateOrConnectWithoutObjetivosEspecificosInput");
const ProyectoCreateWithoutObjetivosEspecificosInput_1 = require("../inputs/ProyectoCreateWithoutObjetivosEspecificosInput");
const ProyectoWhereUniqueInput_1 = require("../inputs/ProyectoWhereUniqueInput");
let ProyectoCreateNestedOneWithoutObjetivosEspecificosInput = class ProyectoCreateNestedOneWithoutObjetivosEspecificosInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateWithoutObjetivosEspecificosInput_1.ProyectoCreateWithoutObjetivosEspecificosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoCreateWithoutObjetivosEspecificosInput_1.ProyectoCreateWithoutObjetivosEspecificosInput)
], ProyectoCreateNestedOneWithoutObjetivosEspecificosInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateOrConnectWithoutObjetivosEspecificosInput_1.ProyectoCreateOrConnectWithoutObjetivosEspecificosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoCreateOrConnectWithoutObjetivosEspecificosInput_1.ProyectoCreateOrConnectWithoutObjetivosEspecificosInput)
], ProyectoCreateNestedOneWithoutObjetivosEspecificosInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput)
], ProyectoCreateNestedOneWithoutObjetivosEspecificosInput.prototype, "connect", void 0);
ProyectoCreateNestedOneWithoutObjetivosEspecificosInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoCreateNestedOneWithoutObjetivosEspecificosInput", {
        isAbstract: true
    })
], ProyectoCreateNestedOneWithoutObjetivosEspecificosInput);
exports.ProyectoCreateNestedOneWithoutObjetivosEspecificosInput = ProyectoCreateNestedOneWithoutObjetivosEspecificosInput;
