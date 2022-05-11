"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivosEspecificosMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ObjetivosEspecificosMaxOrderByAggregateInput = class ObjetivosEspecificosMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ObjetivosEspecificosMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ObjetivosEspecificosMaxOrderByAggregateInput.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ObjetivosEspecificosMaxOrderByAggregateInput.prototype, "proyectoId", void 0);
ObjetivosEspecificosMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ObjetivosEspecificosMaxOrderByAggregateInput", {
        isAbstract: true
    })
], ObjetivosEspecificosMaxOrderByAggregateInput);
exports.ObjetivosEspecificosMaxOrderByAggregateInput = ObjetivosEspecificosMaxOrderByAggregateInput;
