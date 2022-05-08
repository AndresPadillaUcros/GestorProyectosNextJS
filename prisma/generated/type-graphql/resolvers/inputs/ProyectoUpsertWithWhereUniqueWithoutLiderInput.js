"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoUpsertWithWhereUniqueWithoutLiderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoCreateWithoutLiderInput_1 = require("../inputs/ProyectoCreateWithoutLiderInput");
const ProyectoUpdateWithoutLiderInput_1 = require("../inputs/ProyectoUpdateWithoutLiderInput");
const ProyectoWhereUniqueInput_1 = require("../inputs/ProyectoWhereUniqueInput");
let ProyectoUpsertWithWhereUniqueWithoutLiderInput = class ProyectoUpsertWithWhereUniqueWithoutLiderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput)
], ProyectoUpsertWithWhereUniqueWithoutLiderInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoUpdateWithoutLiderInput_1.ProyectoUpdateWithoutLiderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoUpdateWithoutLiderInput_1.ProyectoUpdateWithoutLiderInput)
], ProyectoUpsertWithWhereUniqueWithoutLiderInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateWithoutLiderInput_1.ProyectoCreateWithoutLiderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoCreateWithoutLiderInput_1.ProyectoCreateWithoutLiderInput)
], ProyectoUpsertWithWhereUniqueWithoutLiderInput.prototype, "create", void 0);
ProyectoUpsertWithWhereUniqueWithoutLiderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoUpsertWithWhereUniqueWithoutLiderInput", {
        isAbstract: true
    })
], ProyectoUpsertWithWhereUniqueWithoutLiderInput);
exports.ProyectoUpsertWithWhereUniqueWithoutLiderInput = ProyectoUpsertWithWhereUniqueWithoutLiderInput;
