"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ProyectoOrderByRelationAggregateInput = class ProyectoOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoOrderByRelationAggregateInput.prototype, "_count", void 0);
ProyectoOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoOrderByRelationAggregateInput", {
        isAbstract: true
    })
], ProyectoOrderByRelationAggregateInput);
exports.ProyectoOrderByRelationAggregateInput = ProyectoOrderByRelationAggregateInput;
