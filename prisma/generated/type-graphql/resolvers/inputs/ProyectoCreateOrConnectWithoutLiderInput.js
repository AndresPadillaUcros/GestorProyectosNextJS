"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoCreateOrConnectWithoutLiderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoCreateWithoutLiderInput_1 = require("../inputs/ProyectoCreateWithoutLiderInput");
const ProyectoWhereUniqueInput_1 = require("../inputs/ProyectoWhereUniqueInput");
let ProyectoCreateOrConnectWithoutLiderInput = class ProyectoCreateOrConnectWithoutLiderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput)
], ProyectoCreateOrConnectWithoutLiderInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateWithoutLiderInput_1.ProyectoCreateWithoutLiderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoCreateWithoutLiderInput_1.ProyectoCreateWithoutLiderInput)
], ProyectoCreateOrConnectWithoutLiderInput.prototype, "create", void 0);
ProyectoCreateOrConnectWithoutLiderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoCreateOrConnectWithoutLiderInput", {
        isAbstract: true
    })
], ProyectoCreateOrConnectWithoutLiderInput);
exports.ProyectoCreateOrConnectWithoutLiderInput = ProyectoCreateOrConnectWithoutLiderInput;
