"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivosEspecificosCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ObjetivosEspecificosCreateManyInput = class ObjetivosEspecificosCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ObjetivosEspecificosCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ObjetivosEspecificosCreateManyInput.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ObjetivosEspecificosCreateManyInput.prototype, "proyectoId", void 0);
ObjetivosEspecificosCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ObjetivosEspecificosCreateManyInput", {
        isAbstract: true
    })
], ObjetivosEspecificosCreateManyInput);
exports.ObjetivosEspecificosCreateManyInput = ObjetivosEspecificosCreateManyInput;
