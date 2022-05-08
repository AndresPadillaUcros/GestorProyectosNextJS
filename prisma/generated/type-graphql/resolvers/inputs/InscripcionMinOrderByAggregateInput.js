"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let InscripcionMinOrderByAggregateInput = class InscripcionMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionMinOrderByAggregateInput.prototype, "estado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionMinOrderByAggregateInput.prototype, "fechaIngreso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionMinOrderByAggregateInput.prototype, "fechaEgreso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionMinOrderByAggregateInput.prototype, "proyectoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionMinOrderByAggregateInput.prototype, "usuarioId", void 0);
InscripcionMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InscripcionMinOrderByAggregateInput", {
        isAbstract: true
    })
], InscripcionMinOrderByAggregateInput);
exports.InscripcionMinOrderByAggregateInput = InscripcionMinOrderByAggregateInput;
