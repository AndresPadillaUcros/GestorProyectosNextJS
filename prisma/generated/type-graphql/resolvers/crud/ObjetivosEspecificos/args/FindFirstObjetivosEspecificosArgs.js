"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstObjetivosEspecificosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ObjetivosEspecificosOrderByWithRelationInput_1 = require("../../../inputs/ObjetivosEspecificosOrderByWithRelationInput");
const ObjetivosEspecificosWhereInput_1 = require("../../../inputs/ObjetivosEspecificosWhereInput");
const ObjetivosEspecificosWhereUniqueInput_1 = require("../../../inputs/ObjetivosEspecificosWhereUniqueInput");
const ObjetivosEspecificosScalarFieldEnum_1 = require("../../../../enums/ObjetivosEspecificosScalarFieldEnum");
let FindFirstObjetivosEspecificosArgs = class FindFirstObjetivosEspecificosArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosWhereInput_1.ObjetivosEspecificosWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosWhereInput_1.ObjetivosEspecificosWhereInput)
], FindFirstObjetivosEspecificosArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ObjetivosEspecificosOrderByWithRelationInput_1.ObjetivosEspecificosOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstObjetivosEspecificosArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosWhereUniqueInput_1.ObjetivosEspecificosWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosWhereUniqueInput_1.ObjetivosEspecificosWhereUniqueInput)
], FindFirstObjetivosEspecificosArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstObjetivosEspecificosArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstObjetivosEspecificosArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ObjetivosEspecificosScalarFieldEnum_1.ObjetivosEspecificosScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstObjetivosEspecificosArgs.prototype, "distinct", void 0);
FindFirstObjetivosEspecificosArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstObjetivosEspecificosArgs);
exports.FindFirstObjetivosEspecificosArgs = FindFirstObjetivosEspecificosArgs;
