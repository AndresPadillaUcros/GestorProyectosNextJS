"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvancesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesCountOrderByAggregateInput_1 = require("../inputs/AvancesCountOrderByAggregateInput");
const AvancesMaxOrderByAggregateInput_1 = require("../inputs/AvancesMaxOrderByAggregateInput");
const AvancesMinOrderByAggregateInput_1 = require("../inputs/AvancesMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AvancesOrderByWithAggregationInput = class AvancesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesOrderByWithAggregationInput.prototype, "fecha", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesOrderByWithAggregationInput.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesOrderByWithAggregationInput.prototype, "observaciones", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesOrderByWithAggregationInput.prototype, "proyectoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesOrderByWithAggregationInput.prototype, "UserId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesCountOrderByAggregateInput_1.AvancesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvancesCountOrderByAggregateInput_1.AvancesCountOrderByAggregateInput)
], AvancesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesMaxOrderByAggregateInput_1.AvancesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvancesMaxOrderByAggregateInput_1.AvancesMaxOrderByAggregateInput)
], AvancesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesMinOrderByAggregateInput_1.AvancesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvancesMinOrderByAggregateInput_1.AvancesMinOrderByAggregateInput)
], AvancesOrderByWithAggregationInput.prototype, "_min", void 0);
AvancesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvancesOrderByWithAggregationInput", {
        isAbstract: true
    })
], AvancesOrderByWithAggregationInput);
exports.AvancesOrderByWithAggregationInput = AvancesOrderByWithAggregationInput;
