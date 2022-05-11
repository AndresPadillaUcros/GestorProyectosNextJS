"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivosEspecificosCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ObjetivosEspecificosCountAggregate = class ObjetivosEspecificosCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ObjetivosEspecificosCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ObjetivosEspecificosCountAggregate.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ObjetivosEspecificosCountAggregate.prototype, "proyectoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ObjetivosEspecificosCountAggregate.prototype, "_all", void 0);
ObjetivosEspecificosCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ObjetivosEspecificosCountAggregate", {
        isAbstract: true
    })
], ObjetivosEspecificosCountAggregate);
exports.ObjetivosEspecificosCountAggregate = ObjetivosEspecificosCountAggregate;
