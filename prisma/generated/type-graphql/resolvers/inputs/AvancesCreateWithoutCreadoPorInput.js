"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvancesCreateWithoutCreadoPorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoCreateNestedOneWithoutAvancesInput_1 = require("../inputs/ProyectoCreateNestedOneWithoutAvancesInput");
let AvancesCreateWithoutCreadoPorInput = class AvancesCreateWithoutCreadoPorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesCreateWithoutCreadoPorInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AvancesCreateWithoutCreadoPorInput.prototype, "fecha", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AvancesCreateWithoutCreadoPorInput.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesCreateWithoutCreadoPorInput.prototype, "observaciones", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateNestedOneWithoutAvancesInput_1.ProyectoCreateNestedOneWithoutAvancesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoCreateNestedOneWithoutAvancesInput_1.ProyectoCreateNestedOneWithoutAvancesInput)
], AvancesCreateWithoutCreadoPorInput.prototype, "proyecto", void 0);
AvancesCreateWithoutCreadoPorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvancesCreateWithoutCreadoPorInput", {
        isAbstract: true
    })
], AvancesCreateWithoutCreadoPorInput);
exports.AvancesCreateWithoutCreadoPorInput = AvancesCreateWithoutCreadoPorInput;
