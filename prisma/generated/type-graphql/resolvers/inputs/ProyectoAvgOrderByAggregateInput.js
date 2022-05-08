"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ProyectoAvgOrderByAggregateInput = class ProyectoAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoAvgOrderByAggregateInput.prototype, "presupuesto", void 0);
ProyectoAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoAvgOrderByAggregateInput", {
        isAbstract: true
    })
], ProyectoAvgOrderByAggregateInput);
exports.ProyectoAvgOrderByAggregateInput = ProyectoAvgOrderByAggregateInput;
