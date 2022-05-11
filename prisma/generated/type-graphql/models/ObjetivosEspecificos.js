"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivosEspecificos = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ObjetivosEspecificos = class ObjetivosEspecificos {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ObjetivosEspecificos.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ObjetivosEspecificos.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ObjetivosEspecificos.prototype, "proyectoId", void 0);
ObjetivosEspecificos = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ObjetivosEspecificos", {
        isAbstract: true
    })
], ObjetivosEspecificos);
exports.ObjetivosEspecificos = ObjetivosEspecificos;
