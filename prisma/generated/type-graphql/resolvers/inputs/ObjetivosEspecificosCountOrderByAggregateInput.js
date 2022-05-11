"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivosEspecificosCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ObjetivosEspecificosCountOrderByAggregateInput = class ObjetivosEspecificosCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ObjetivosEspecificosCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ObjetivosEspecificosCountOrderByAggregateInput.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ObjetivosEspecificosCountOrderByAggregateInput.prototype, "proyectoId", void 0);
ObjetivosEspecificosCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ObjetivosEspecificosCountOrderByAggregateInput", {
        isAbstract: true
    })
], ObjetivosEspecificosCountOrderByAggregateInput);
exports.ObjetivosEspecificosCountOrderByAggregateInput = ObjetivosEspecificosCountOrderByAggregateInput;
