"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoUpsertWithoutObjetivosEspecificosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoCreateWithoutObjetivosEspecificosInput_1 = require("../inputs/ProyectoCreateWithoutObjetivosEspecificosInput");
const ProyectoUpdateWithoutObjetivosEspecificosInput_1 = require("../inputs/ProyectoUpdateWithoutObjetivosEspecificosInput");
let ProyectoUpsertWithoutObjetivosEspecificosInput = class ProyectoUpsertWithoutObjetivosEspecificosInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoUpdateWithoutObjetivosEspecificosInput_1.ProyectoUpdateWithoutObjetivosEspecificosInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoUpdateWithoutObjetivosEspecificosInput_1.ProyectoUpdateWithoutObjetivosEspecificosInput)
], ProyectoUpsertWithoutObjetivosEspecificosInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateWithoutObjetivosEspecificosInput_1.ProyectoCreateWithoutObjetivosEspecificosInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoCreateWithoutObjetivosEspecificosInput_1.ProyectoCreateWithoutObjetivosEspecificosInput)
], ProyectoUpsertWithoutObjetivosEspecificosInput.prototype, "create", void 0);
ProyectoUpsertWithoutObjetivosEspecificosInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoUpsertWithoutObjetivosEspecificosInput", {
        isAbstract: true
    })
], ProyectoUpsertWithoutObjetivosEspecificosInput);
exports.ProyectoUpsertWithoutObjetivosEspecificosInput = ProyectoUpsertWithoutObjetivosEspecificosInput;
