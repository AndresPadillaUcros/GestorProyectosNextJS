"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAvancesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesOrderByWithAggregationInput_1 = require("../../../inputs/AvancesOrderByWithAggregationInput");
const AvancesScalarWhereWithAggregatesInput_1 = require("../../../inputs/AvancesScalarWhereWithAggregatesInput");
const AvancesWhereInput_1 = require("../../../inputs/AvancesWhereInput");
const AvancesScalarFieldEnum_1 = require("../../../../enums/AvancesScalarFieldEnum");
let GroupByAvancesArgs = class GroupByAvancesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesWhereInput_1.AvancesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvancesWhereInput_1.AvancesWhereInput)
], GroupByAvancesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvancesOrderByWithAggregationInput_1.AvancesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByAvancesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvancesScalarFieldEnum_1.AvancesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByAvancesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesScalarWhereWithAggregatesInput_1.AvancesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvancesScalarWhereWithAggregatesInput_1.AvancesScalarWhereWithAggregatesInput)
], GroupByAvancesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByAvancesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByAvancesArgs.prototype, "skip", void 0);
GroupByAvancesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByAvancesArgs);
exports.GroupByAvancesArgs = GroupByAvancesArgs;
