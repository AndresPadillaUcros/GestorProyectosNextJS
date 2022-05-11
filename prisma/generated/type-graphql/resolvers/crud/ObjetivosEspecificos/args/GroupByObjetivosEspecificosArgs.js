"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByObjetivosEspecificosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ObjetivosEspecificosOrderByWithAggregationInput_1 = require("../../../inputs/ObjetivosEspecificosOrderByWithAggregationInput");
const ObjetivosEspecificosScalarWhereWithAggregatesInput_1 = require("../../../inputs/ObjetivosEspecificosScalarWhereWithAggregatesInput");
const ObjetivosEspecificosWhereInput_1 = require("../../../inputs/ObjetivosEspecificosWhereInput");
const ObjetivosEspecificosScalarFieldEnum_1 = require("../../../../enums/ObjetivosEspecificosScalarFieldEnum");
let GroupByObjetivosEspecificosArgs = class GroupByObjetivosEspecificosArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosWhereInput_1.ObjetivosEspecificosWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosWhereInput_1.ObjetivosEspecificosWhereInput)
], GroupByObjetivosEspecificosArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ObjetivosEspecificosOrderByWithAggregationInput_1.ObjetivosEspecificosOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByObjetivosEspecificosArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ObjetivosEspecificosScalarFieldEnum_1.ObjetivosEspecificosScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByObjetivosEspecificosArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosScalarWhereWithAggregatesInput_1.ObjetivosEspecificosScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosScalarWhereWithAggregatesInput_1.ObjetivosEspecificosScalarWhereWithAggregatesInput)
], GroupByObjetivosEspecificosArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByObjetivosEspecificosArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByObjetivosEspecificosArgs.prototype, "skip", void 0);
GroupByObjetivosEspecificosArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByObjetivosEspecificosArgs);
exports.GroupByObjetivosEspecificosArgs = GroupByObjetivosEspecificosArgs;
