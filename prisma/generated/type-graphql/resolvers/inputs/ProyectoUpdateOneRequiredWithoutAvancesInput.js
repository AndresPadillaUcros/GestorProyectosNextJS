"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoUpdateOneRequiredWithoutAvancesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoCreateOrConnectWithoutAvancesInput_1 = require("../inputs/ProyectoCreateOrConnectWithoutAvancesInput");
const ProyectoCreateWithoutAvancesInput_1 = require("../inputs/ProyectoCreateWithoutAvancesInput");
const ProyectoUpdateWithoutAvancesInput_1 = require("../inputs/ProyectoUpdateWithoutAvancesInput");
const ProyectoUpsertWithoutAvancesInput_1 = require("../inputs/ProyectoUpsertWithoutAvancesInput");
const ProyectoWhereUniqueInput_1 = require("../inputs/ProyectoWhereUniqueInput");
let ProyectoUpdateOneRequiredWithoutAvancesInput = class ProyectoUpdateOneRequiredWithoutAvancesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateWithoutAvancesInput_1.ProyectoCreateWithoutAvancesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoCreateWithoutAvancesInput_1.ProyectoCreateWithoutAvancesInput)
], ProyectoUpdateOneRequiredWithoutAvancesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateOrConnectWithoutAvancesInput_1.ProyectoCreateOrConnectWithoutAvancesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoCreateOrConnectWithoutAvancesInput_1.ProyectoCreateOrConnectWithoutAvancesInput)
], ProyectoUpdateOneRequiredWithoutAvancesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoUpsertWithoutAvancesInput_1.ProyectoUpsertWithoutAvancesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoUpsertWithoutAvancesInput_1.ProyectoUpsertWithoutAvancesInput)
], ProyectoUpdateOneRequiredWithoutAvancesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput)
], ProyectoUpdateOneRequiredWithoutAvancesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoUpdateWithoutAvancesInput_1.ProyectoUpdateWithoutAvancesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoUpdateWithoutAvancesInput_1.ProyectoUpdateWithoutAvancesInput)
], ProyectoUpdateOneRequiredWithoutAvancesInput.prototype, "update", void 0);
ProyectoUpdateOneRequiredWithoutAvancesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoUpdateOneRequiredWithoutAvancesInput", {
        isAbstract: true
    })
], ProyectoUpdateOneRequiredWithoutAvancesInput);
exports.ProyectoUpdateOneRequiredWithoutAvancesInput = ProyectoUpdateOneRequiredWithoutAvancesInput;
