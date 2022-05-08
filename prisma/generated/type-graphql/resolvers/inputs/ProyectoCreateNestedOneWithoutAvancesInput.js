"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoCreateNestedOneWithoutAvancesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoCreateOrConnectWithoutAvancesInput_1 = require("../inputs/ProyectoCreateOrConnectWithoutAvancesInput");
const ProyectoCreateWithoutAvancesInput_1 = require("../inputs/ProyectoCreateWithoutAvancesInput");
const ProyectoWhereUniqueInput_1 = require("../inputs/ProyectoWhereUniqueInput");
let ProyectoCreateNestedOneWithoutAvancesInput = class ProyectoCreateNestedOneWithoutAvancesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateWithoutAvancesInput_1.ProyectoCreateWithoutAvancesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoCreateWithoutAvancesInput_1.ProyectoCreateWithoutAvancesInput)
], ProyectoCreateNestedOneWithoutAvancesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateOrConnectWithoutAvancesInput_1.ProyectoCreateOrConnectWithoutAvancesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoCreateOrConnectWithoutAvancesInput_1.ProyectoCreateOrConnectWithoutAvancesInput)
], ProyectoCreateNestedOneWithoutAvancesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput)
], ProyectoCreateNestedOneWithoutAvancesInput.prototype, "connect", void 0);
ProyectoCreateNestedOneWithoutAvancesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoCreateNestedOneWithoutAvancesInput", {
        isAbstract: true
    })
], ProyectoCreateNestedOneWithoutAvancesInput);
exports.ProyectoCreateNestedOneWithoutAvancesInput = ProyectoCreateNestedOneWithoutAvancesInput;
