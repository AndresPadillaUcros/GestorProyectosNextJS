"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoAvancesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesOrderByWithRelationInput_1 = require("../../../inputs/AvancesOrderByWithRelationInput");
const AvancesWhereInput_1 = require("../../../inputs/AvancesWhereInput");
const AvancesWhereUniqueInput_1 = require("../../../inputs/AvancesWhereUniqueInput");
const AvancesScalarFieldEnum_1 = require("../../../../enums/AvancesScalarFieldEnum");
let ProyectoAvancesArgs = class ProyectoAvancesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesWhereInput_1.AvancesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvancesWhereInput_1.AvancesWhereInput)
], ProyectoAvancesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvancesOrderByWithRelationInput_1.AvancesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProyectoAvancesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesWhereUniqueInput_1.AvancesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvancesWhereUniqueInput_1.AvancesWhereUniqueInput)
], ProyectoAvancesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProyectoAvancesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProyectoAvancesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvancesScalarFieldEnum_1.AvancesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProyectoAvancesArgs.prototype, "distinct", void 0);
ProyectoAvancesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], ProyectoAvancesArgs);
exports.ProyectoAvancesArgs = ProyectoAvancesArgs;
