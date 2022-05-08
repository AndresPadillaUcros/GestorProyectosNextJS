"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyInscripcionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InscripcionOrderByWithRelationInput_1 = require("../../../inputs/InscripcionOrderByWithRelationInput");
const InscripcionWhereInput_1 = require("../../../inputs/InscripcionWhereInput");
const InscripcionWhereUniqueInput_1 = require("../../../inputs/InscripcionWhereUniqueInput");
const InscripcionScalarFieldEnum_1 = require("../../../../enums/InscripcionScalarFieldEnum");
let FindManyInscripcionArgs = class FindManyInscripcionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionWhereInput_1.InscripcionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionWhereInput_1.InscripcionWhereInput)
], FindManyInscripcionArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionOrderByWithRelationInput_1.InscripcionOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyInscripcionArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput)
], FindManyInscripcionArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyInscripcionArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyInscripcionArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionScalarFieldEnum_1.InscripcionScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyInscripcionArgs.prototype, "distinct", void 0);
FindManyInscripcionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyInscripcionArgs);
exports.FindManyInscripcionArgs = FindManyInscripcionArgs;
