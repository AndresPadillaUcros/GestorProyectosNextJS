"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoUpdateOneRequiredWithoutObjetivosEspecificosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoCreateOrConnectWithoutObjetivosEspecificosInput_1 = require("../inputs/ProyectoCreateOrConnectWithoutObjetivosEspecificosInput");
const ProyectoCreateWithoutObjetivosEspecificosInput_1 = require("../inputs/ProyectoCreateWithoutObjetivosEspecificosInput");
const ProyectoUpdateWithoutObjetivosEspecificosInput_1 = require("../inputs/ProyectoUpdateWithoutObjetivosEspecificosInput");
const ProyectoUpsertWithoutObjetivosEspecificosInput_1 = require("../inputs/ProyectoUpsertWithoutObjetivosEspecificosInput");
const ProyectoWhereUniqueInput_1 = require("../inputs/ProyectoWhereUniqueInput");
let ProyectoUpdateOneRequiredWithoutObjetivosEspecificosInput = class ProyectoUpdateOneRequiredWithoutObjetivosEspecificosInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateWithoutObjetivosEspecificosInput_1.ProyectoCreateWithoutObjetivosEspecificosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoCreateWithoutObjetivosEspecificosInput_1.ProyectoCreateWithoutObjetivosEspecificosInput)
], ProyectoUpdateOneRequiredWithoutObjetivosEspecificosInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateOrConnectWithoutObjetivosEspecificosInput_1.ProyectoCreateOrConnectWithoutObjetivosEspecificosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoCreateOrConnectWithoutObjetivosEspecificosInput_1.ProyectoCreateOrConnectWithoutObjetivosEspecificosInput)
], ProyectoUpdateOneRequiredWithoutObjetivosEspecificosInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoUpsertWithoutObjetivosEspecificosInput_1.ProyectoUpsertWithoutObjetivosEspecificosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoUpsertWithoutObjetivosEspecificosInput_1.ProyectoUpsertWithoutObjetivosEspecificosInput)
], ProyectoUpdateOneRequiredWithoutObjetivosEspecificosInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput)
], ProyectoUpdateOneRequiredWithoutObjetivosEspecificosInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoUpdateWithoutObjetivosEspecificosInput_1.ProyectoUpdateWithoutObjetivosEspecificosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoUpdateWithoutObjetivosEspecificosInput_1.ProyectoUpdateWithoutObjetivosEspecificosInput)
], ProyectoUpdateOneRequiredWithoutObjetivosEspecificosInput.prototype, "update", void 0);
ProyectoUpdateOneRequiredWithoutObjetivosEspecificosInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoUpdateOneRequiredWithoutObjetivosEspecificosInput", {
        isAbstract: true
    })
], ProyectoUpdateOneRequiredWithoutObjetivosEspecificosInput);
exports.ProyectoUpdateOneRequiredWithoutObjetivosEspecificosInput = ProyectoUpdateOneRequiredWithoutObjetivosEspecificosInput;
