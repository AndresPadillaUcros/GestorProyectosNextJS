"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvancesMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AvancesMinOrderByAggregateInput = class AvancesMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesMinOrderByAggregateInput.prototype, "fecha", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesMinOrderByAggregateInput.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesMinOrderByAggregateInput.prototype, "observaciones", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesMinOrderByAggregateInput.prototype, "proyectoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesMinOrderByAggregateInput.prototype, "usuarioId", void 0);
AvancesMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvancesMinOrderByAggregateInput", {
        isAbstract: true
    })
], AvancesMinOrderByAggregateInput);
exports.AvancesMinOrderByAggregateInput = AvancesMinOrderByAggregateInput;
