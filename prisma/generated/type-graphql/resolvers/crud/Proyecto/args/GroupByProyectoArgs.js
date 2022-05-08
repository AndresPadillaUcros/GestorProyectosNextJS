"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByProyectoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoOrderByWithAggregationInput_1 = require("../../../inputs/ProyectoOrderByWithAggregationInput");
const ProyectoScalarWhereWithAggregatesInput_1 = require("../../../inputs/ProyectoScalarWhereWithAggregatesInput");
const ProyectoWhereInput_1 = require("../../../inputs/ProyectoWhereInput");
const ProyectoScalarFieldEnum_1 = require("../../../../enums/ProyectoScalarFieldEnum");
let GroupByProyectoArgs = class GroupByProyectoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoWhereInput_1.ProyectoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoWhereInput_1.ProyectoWhereInput)
], GroupByProyectoArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProyectoOrderByWithAggregationInput_1.ProyectoOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByProyectoArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProyectoScalarFieldEnum_1.ProyectoScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByProyectoArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoScalarWhereWithAggregatesInput_1.ProyectoScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoScalarWhereWithAggregatesInput_1.ProyectoScalarWhereWithAggregatesInput)
], GroupByProyectoArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByProyectoArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByProyectoArgs.prototype, "skip", void 0);
GroupByProyectoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByProyectoArgs);
exports.GroupByProyectoArgs = GroupByProyectoArgs;
