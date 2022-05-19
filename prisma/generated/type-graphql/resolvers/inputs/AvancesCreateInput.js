"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvancesCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoCreateNestedOneWithoutAvancesInput_1 = require("../inputs/ProyectoCreateNestedOneWithoutAvancesInput");
const UserCreateNestedOneWithoutAvancesInput_1 = require("../inputs/UserCreateNestedOneWithoutAvancesInput");
let AvancesCreateInput = class AvancesCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AvancesCreateInput.prototype, "fecha", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AvancesCreateInput.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesCreateInput.prototype, "observaciones", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateNestedOneWithoutAvancesInput_1.ProyectoCreateNestedOneWithoutAvancesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoCreateNestedOneWithoutAvancesInput_1.ProyectoCreateNestedOneWithoutAvancesInput)
], AvancesCreateInput.prototype, "proyecto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutAvancesInput_1.UserCreateNestedOneWithoutAvancesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutAvancesInput_1.UserCreateNestedOneWithoutAvancesInput)
], AvancesCreateInput.prototype, "creadoPor", void 0);
AvancesCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvancesCreateInput", {
        isAbstract: true
    })
], AvancesCreateInput);
exports.AvancesCreateInput = AvancesCreateInput;
