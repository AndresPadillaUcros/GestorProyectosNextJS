"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvancesCreateWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioCreateNestedOneWithoutAvancesInput_1 = require("../inputs/UsuarioCreateNestedOneWithoutAvancesInput");
let AvancesCreateWithoutProyectoInput = class AvancesCreateWithoutProyectoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesCreateWithoutProyectoInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], AvancesCreateWithoutProyectoInput.prototype, "fecha", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AvancesCreateWithoutProyectoInput.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AvancesCreateWithoutProyectoInput.prototype, "observaciones", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateNestedOneWithoutAvancesInput_1.UsuarioCreateNestedOneWithoutAvancesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioCreateNestedOneWithoutAvancesInput_1.UsuarioCreateNestedOneWithoutAvancesInput)
], AvancesCreateWithoutProyectoInput.prototype, "creadoPor", void 0);
AvancesCreateWithoutProyectoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvancesCreateWithoutProyectoInput", {
        isAbstract: true
    })
], AvancesCreateWithoutProyectoInput);
exports.AvancesCreateWithoutProyectoInput = AvancesCreateWithoutProyectoInput;
