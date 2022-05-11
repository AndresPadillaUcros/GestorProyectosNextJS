"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivosEspecificosMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ObjetivosEspecificosMaxAggregate = class ObjetivosEspecificosMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ObjetivosEspecificosMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ObjetivosEspecificosMaxAggregate.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ObjetivosEspecificosMaxAggregate.prototype, "proyectoId", void 0);
ObjetivosEspecificosMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ObjetivosEspecificosMaxAggregate", {
        isAbstract: true
    })
], ObjetivosEspecificosMaxAggregate);
exports.ObjetivosEspecificosMaxAggregate = ObjetivosEspecificosMaxAggregate;
