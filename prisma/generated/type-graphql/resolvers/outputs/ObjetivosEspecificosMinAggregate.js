"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivosEspecificosMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ObjetivosEspecificosMinAggregate = class ObjetivosEspecificosMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ObjetivosEspecificosMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ObjetivosEspecificosMinAggregate.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ObjetivosEspecificosMinAggregate.prototype, "proyectoId", void 0);
ObjetivosEspecificosMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ObjetivosEspecificosMinAggregate", {
        isAbstract: true
    })
], ObjetivosEspecificosMinAggregate);
exports.ObjetivosEspecificosMinAggregate = ObjetivosEspecificosMinAggregate;
