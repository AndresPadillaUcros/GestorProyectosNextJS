"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvancesCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AvancesCountOrderByAggregateInput = class AvancesCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesCountOrderByAggregateInput.prototype, "fecha", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesCountOrderByAggregateInput.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesCountOrderByAggregateInput.prototype, "observaciones", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesCountOrderByAggregateInput.prototype, "proyectoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesCountOrderByAggregateInput.prototype, "usuarioId", void 0);
AvancesCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvancesCountOrderByAggregateInput", {
        isAbstract: true
    })
], AvancesCountOrderByAggregateInput);
exports.AvancesCountOrderByAggregateInput = AvancesCountOrderByAggregateInput;
