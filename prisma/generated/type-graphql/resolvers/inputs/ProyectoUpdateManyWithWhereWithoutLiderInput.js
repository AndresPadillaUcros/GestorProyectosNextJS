"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoUpdateManyWithWhereWithoutLiderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoScalarWhereInput_1 = require("../inputs/ProyectoScalarWhereInput");
const ProyectoUpdateManyMutationInput_1 = require("../inputs/ProyectoUpdateManyMutationInput");
let ProyectoUpdateManyWithWhereWithoutLiderInput = class ProyectoUpdateManyWithWhereWithoutLiderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoScalarWhereInput_1.ProyectoScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoScalarWhereInput_1.ProyectoScalarWhereInput)
], ProyectoUpdateManyWithWhereWithoutLiderInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoUpdateManyMutationInput_1.ProyectoUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoUpdateManyMutationInput_1.ProyectoUpdateManyMutationInput)
], ProyectoUpdateManyWithWhereWithoutLiderInput.prototype, "data", void 0);
ProyectoUpdateManyWithWhereWithoutLiderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoUpdateManyWithWhereWithoutLiderInput", {
        isAbstract: true
    })
], ProyectoUpdateManyWithWhereWithoutLiderInput);
exports.ProyectoUpdateManyWithWhereWithoutLiderInput = ProyectoUpdateManyWithWhereWithoutLiderInput;
