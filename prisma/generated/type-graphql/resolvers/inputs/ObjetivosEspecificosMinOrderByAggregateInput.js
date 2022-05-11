"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivosEspecificosMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ObjetivosEspecificosMinOrderByAggregateInput = class ObjetivosEspecificosMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ObjetivosEspecificosMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ObjetivosEspecificosMinOrderByAggregateInput.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ObjetivosEspecificosMinOrderByAggregateInput.prototype, "proyectoId", void 0);
ObjetivosEspecificosMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ObjetivosEspecificosMinOrderByAggregateInput", {
        isAbstract: true
    })
], ObjetivosEspecificosMinOrderByAggregateInput);
exports.ObjetivosEspecificosMinOrderByAggregateInput = ObjetivosEspecificosMinOrderByAggregateInput;
