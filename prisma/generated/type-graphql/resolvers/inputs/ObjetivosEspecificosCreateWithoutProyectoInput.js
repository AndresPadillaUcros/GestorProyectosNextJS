"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivosEspecificosCreateWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ObjetivosEspecificosCreateWithoutProyectoInput = class ObjetivosEspecificosCreateWithoutProyectoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ObjetivosEspecificosCreateWithoutProyectoInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ObjetivosEspecificosCreateWithoutProyectoInput.prototype, "descripcion", void 0);
ObjetivosEspecificosCreateWithoutProyectoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ObjetivosEspecificosCreateWithoutProyectoInput", {
        isAbstract: true
    })
], ObjetivosEspecificosCreateWithoutProyectoInput);
exports.ObjetivosEspecificosCreateWithoutProyectoInput = ObjetivosEspecificosCreateWithoutProyectoInput;
