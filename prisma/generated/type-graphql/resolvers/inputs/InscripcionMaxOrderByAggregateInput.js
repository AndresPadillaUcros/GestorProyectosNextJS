"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let InscripcionMaxOrderByAggregateInput = class InscripcionMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionMaxOrderByAggregateInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionMaxOrderByAggregateInput.prototype, "fechaIngreso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionMaxOrderByAggregateInput.prototype, "fechaEgreso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionMaxOrderByAggregateInput.prototype, "proyectoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionMaxOrderByAggregateInput.prototype, "usuarioId", void 0);
InscripcionMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InscripcionMaxOrderByAggregateInput", {
        isAbstract: true
    })
], InscripcionMaxOrderByAggregateInput);
exports.InscripcionMaxOrderByAggregateInput = InscripcionMaxOrderByAggregateInput;
