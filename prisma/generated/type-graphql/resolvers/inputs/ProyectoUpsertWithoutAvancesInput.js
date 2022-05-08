"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoUpsertWithoutAvancesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoCreateWithoutAvancesInput_1 = require("../inputs/ProyectoCreateWithoutAvancesInput");
const ProyectoUpdateWithoutAvancesInput_1 = require("../inputs/ProyectoUpdateWithoutAvancesInput");
let ProyectoUpsertWithoutAvancesInput = class ProyectoUpsertWithoutAvancesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoUpdateWithoutAvancesInput_1.ProyectoUpdateWithoutAvancesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoUpdateWithoutAvancesInput_1.ProyectoUpdateWithoutAvancesInput)
], ProyectoUpsertWithoutAvancesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateWithoutAvancesInput_1.ProyectoCreateWithoutAvancesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoCreateWithoutAvancesInput_1.ProyectoCreateWithoutAvancesInput)
], ProyectoUpsertWithoutAvancesInput.prototype, "create", void 0);
ProyectoUpsertWithoutAvancesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoUpsertWithoutAvancesInput", {
        isAbstract: true
    })
], ProyectoUpsertWithoutAvancesInput);
exports.ProyectoUpsertWithoutAvancesInput = ProyectoUpsertWithoutAvancesInput;
