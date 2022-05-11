"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivosEspecificosCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoCreateNestedOneWithoutObjetivosEspecificosInput_1 = require("../inputs/ProyectoCreateNestedOneWithoutObjetivosEspecificosInput");
let ObjetivosEspecificosCreateInput = class ObjetivosEspecificosCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ObjetivosEspecificosCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ObjetivosEspecificosCreateInput.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateNestedOneWithoutObjetivosEspecificosInput_1.ProyectoCreateNestedOneWithoutObjetivosEspecificosInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoCreateNestedOneWithoutObjetivosEspecificosInput_1.ProyectoCreateNestedOneWithoutObjetivosEspecificosInput)
], ObjetivosEspecificosCreateInput.prototype, "proyecto", void 0);
ObjetivosEspecificosCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ObjetivosEspecificosCreateInput", {
        isAbstract: true
    })
], ObjetivosEspecificosCreateInput);
exports.ObjetivosEspecificosCreateInput = ObjetivosEspecificosCreateInput;
