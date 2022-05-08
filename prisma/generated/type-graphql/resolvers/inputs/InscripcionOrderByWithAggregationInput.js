"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InscripcionCountOrderByAggregateInput_1 = require("../inputs/InscripcionCountOrderByAggregateInput");
const InscripcionMaxOrderByAggregateInput_1 = require("../inputs/InscripcionMaxOrderByAggregateInput");
const InscripcionMinOrderByAggregateInput_1 = require("../inputs/InscripcionMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let InscripcionOrderByWithAggregationInput = class InscripcionOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionOrderByWithAggregationInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionOrderByWithAggregationInput.prototype, "fechaIngreso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionOrderByWithAggregationInput.prototype, "fechaEgreso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionOrderByWithAggregationInput.prototype, "proyectoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionOrderByWithAggregationInput.prototype, "usuarioId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionCountOrderByAggregateInput_1.InscripcionCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionCountOrderByAggregateInput_1.InscripcionCountOrderByAggregateInput)
], InscripcionOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionMaxOrderByAggregateInput_1.InscripcionMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionMaxOrderByAggregateInput_1.InscripcionMaxOrderByAggregateInput)
], InscripcionOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionMinOrderByAggregateInput_1.InscripcionMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionMinOrderByAggregateInput_1.InscripcionMinOrderByAggregateInput)
], InscripcionOrderByWithAggregationInput.prototype, "_min", void 0);
InscripcionOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InscripcionOrderByWithAggregationInput", {
        isAbstract: true
    })
], InscripcionOrderByWithAggregationInput);
exports.InscripcionOrderByWithAggregationInput = InscripcionOrderByWithAggregationInput;
