"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivosEspecificosCreateManyProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ObjetivosEspecificosCreateManyProyectoInput = class ObjetivosEspecificosCreateManyProyectoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ObjetivosEspecificosCreateManyProyectoInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ObjetivosEspecificosCreateManyProyectoInput.prototype, "descripcion", void 0);
ObjetivosEspecificosCreateManyProyectoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ObjetivosEspecificosCreateManyProyectoInput", {
        isAbstract: true
    })
], ObjetivosEspecificosCreateManyProyectoInput);
exports.ObjetivosEspecificosCreateManyProyectoInput = ObjetivosEspecificosCreateManyProyectoInput;
