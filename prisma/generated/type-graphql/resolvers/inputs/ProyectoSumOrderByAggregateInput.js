"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ProyectoSumOrderByAggregateInput = class ProyectoSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoSumOrderByAggregateInput.prototype, "presupuesto", void 0);
ProyectoSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoSumOrderByAggregateInput", {
        isAbstract: true
    })
], ProyectoSumOrderByAggregateInput);
exports.ProyectoSumOrderByAggregateInput = ProyectoSumOrderByAggregateInput;
