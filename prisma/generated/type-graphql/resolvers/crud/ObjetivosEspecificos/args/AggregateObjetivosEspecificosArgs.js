"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateObjetivosEspecificosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ObjetivosEspecificosOrderByWithRelationInput_1 = require("../../../inputs/ObjetivosEspecificosOrderByWithRelationInput");
const ObjetivosEspecificosWhereInput_1 = require("../../../inputs/ObjetivosEspecificosWhereInput");
const ObjetivosEspecificosWhereUniqueInput_1 = require("../../../inputs/ObjetivosEspecificosWhereUniqueInput");
let AggregateObjetivosEspecificosArgs = class AggregateObjetivosEspecificosArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosWhereInput_1.ObjetivosEspecificosWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosWhereInput_1.ObjetivosEspecificosWhereInput)
], AggregateObjetivosEspecificosArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ObjetivosEspecificosOrderByWithRelationInput_1.ObjetivosEspecificosOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateObjetivosEspecificosArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosWhereUniqueInput_1.ObjetivosEspecificosWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosWhereUniqueInput_1.ObjetivosEspecificosWhereUniqueInput)
], AggregateObjetivosEspecificosArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateObjetivosEspecificosArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateObjetivosEspecificosArgs.prototype, "skip", void 0);
AggregateObjetivosEspecificosArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateObjetivosEspecificosArgs);
exports.AggregateObjetivosEspecificosArgs = AggregateObjetivosEspecificosArgs;
