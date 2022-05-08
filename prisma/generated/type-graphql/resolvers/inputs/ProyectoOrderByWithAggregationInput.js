"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoAvgOrderByAggregateInput_1 = require("../inputs/ProyectoAvgOrderByAggregateInput");
const ProyectoCountOrderByAggregateInput_1 = require("../inputs/ProyectoCountOrderByAggregateInput");
const ProyectoMaxOrderByAggregateInput_1 = require("../inputs/ProyectoMaxOrderByAggregateInput");
const ProyectoMinOrderByAggregateInput_1 = require("../inputs/ProyectoMinOrderByAggregateInput");
const ProyectoSumOrderByAggregateInput_1 = require("../inputs/ProyectoSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ProyectoOrderByWithAggregationInput = class ProyectoOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoOrderByWithAggregationInput.prototype, "nombre", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoOrderByWithAggregationInput.prototype, "presupuesto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoOrderByWithAggregationInput.prototype, "fechaInicio", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoOrderByWithAggregationInput.prototype, "fechaFin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoOrderByWithAggregationInput.prototype, "usuarioId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCountOrderByAggregateInput_1.ProyectoCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoCountOrderByAggregateInput_1.ProyectoCountOrderByAggregateInput)
], ProyectoOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoAvgOrderByAggregateInput_1.ProyectoAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoAvgOrderByAggregateInput_1.ProyectoAvgOrderByAggregateInput)
], ProyectoOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoMaxOrderByAggregateInput_1.ProyectoMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoMaxOrderByAggregateInput_1.ProyectoMaxOrderByAggregateInput)
], ProyectoOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoMinOrderByAggregateInput_1.ProyectoMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoMinOrderByAggregateInput_1.ProyectoMinOrderByAggregateInput)
], ProyectoOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoSumOrderByAggregateInput_1.ProyectoSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoSumOrderByAggregateInput_1.ProyectoSumOrderByAggregateInput)
], ProyectoOrderByWithAggregationInput.prototype, "_sum", void 0);
ProyectoOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoOrderByWithAggregationInput", {
        isAbstract: true
    })
], ProyectoOrderByWithAggregationInput);
exports.ProyectoOrderByWithAggregationInput = ProyectoOrderByWithAggregationInput;
