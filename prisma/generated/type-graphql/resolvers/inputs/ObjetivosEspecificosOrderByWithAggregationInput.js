"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivosEspecificosOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ObjetivosEspecificosCountOrderByAggregateInput_1 = require("../inputs/ObjetivosEspecificosCountOrderByAggregateInput");
const ObjetivosEspecificosMaxOrderByAggregateInput_1 = require("../inputs/ObjetivosEspecificosMaxOrderByAggregateInput");
const ObjetivosEspecificosMinOrderByAggregateInput_1 = require("../inputs/ObjetivosEspecificosMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ObjetivosEspecificosOrderByWithAggregationInput = class ObjetivosEspecificosOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ObjetivosEspecificosOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ObjetivosEspecificosOrderByWithAggregationInput.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ObjetivosEspecificosOrderByWithAggregationInput.prototype, "proyectoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosCountOrderByAggregateInput_1.ObjetivosEspecificosCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosCountOrderByAggregateInput_1.ObjetivosEspecificosCountOrderByAggregateInput)
], ObjetivosEspecificosOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosMaxOrderByAggregateInput_1.ObjetivosEspecificosMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosMaxOrderByAggregateInput_1.ObjetivosEspecificosMaxOrderByAggregateInput)
], ObjetivosEspecificosOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosMinOrderByAggregateInput_1.ObjetivosEspecificosMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosMinOrderByAggregateInput_1.ObjetivosEspecificosMinOrderByAggregateInput)
], ObjetivosEspecificosOrderByWithAggregationInput.prototype, "_min", void 0);
ObjetivosEspecificosOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ObjetivosEspecificosOrderByWithAggregationInput", {
        isAbstract: true
    })
], ObjetivosEspecificosOrderByWithAggregationInput);
exports.ObjetivosEspecificosOrderByWithAggregationInput = ObjetivosEspecificosOrderByWithAggregationInput;
