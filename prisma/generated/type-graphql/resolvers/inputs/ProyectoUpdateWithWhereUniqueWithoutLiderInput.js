"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoUpdateWithWhereUniqueWithoutLiderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoUpdateWithoutLiderInput_1 = require("../inputs/ProyectoUpdateWithoutLiderInput");
const ProyectoWhereUniqueInput_1 = require("../inputs/ProyectoWhereUniqueInput");
let ProyectoUpdateWithWhereUniqueWithoutLiderInput = class ProyectoUpdateWithWhereUniqueWithoutLiderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput)
], ProyectoUpdateWithWhereUniqueWithoutLiderInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoUpdateWithoutLiderInput_1.ProyectoUpdateWithoutLiderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoUpdateWithoutLiderInput_1.ProyectoUpdateWithoutLiderInput)
], ProyectoUpdateWithWhereUniqueWithoutLiderInput.prototype, "data", void 0);
ProyectoUpdateWithWhereUniqueWithoutLiderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoUpdateWithWhereUniqueWithoutLiderInput", {
        isAbstract: true
    })
], ProyectoUpdateWithWhereUniqueWithoutLiderInput);
exports.ProyectoUpdateWithWhereUniqueWithoutLiderInput = ProyectoUpdateWithWhereUniqueWithoutLiderInput;
