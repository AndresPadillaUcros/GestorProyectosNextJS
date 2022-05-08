"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByInscripcionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InscripcionOrderByWithAggregationInput_1 = require("../../../inputs/InscripcionOrderByWithAggregationInput");
const InscripcionScalarWhereWithAggregatesInput_1 = require("../../../inputs/InscripcionScalarWhereWithAggregatesInput");
const InscripcionWhereInput_1 = require("../../../inputs/InscripcionWhereInput");
const InscripcionScalarFieldEnum_1 = require("../../../../enums/InscripcionScalarFieldEnum");
let GroupByInscripcionArgs = class GroupByInscripcionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionWhereInput_1.InscripcionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionWhereInput_1.InscripcionWhereInput)
], GroupByInscripcionArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionOrderByWithAggregationInput_1.InscripcionOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByInscripcionArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionScalarFieldEnum_1.InscripcionScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByInscripcionArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionScalarWhereWithAggregatesInput_1.InscripcionScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionScalarWhereWithAggregatesInput_1.InscripcionScalarWhereWithAggregatesInput)
], GroupByInscripcionArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByInscripcionArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByInscripcionArgs.prototype, "skip", void 0);
GroupByInscripcionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByInscripcionArgs);
exports.GroupByInscripcionArgs = GroupByInscripcionArgs;
