"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyProyectoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoOrderByWithRelationInput_1 = require("../../../inputs/ProyectoOrderByWithRelationInput");
const ProyectoWhereInput_1 = require("../../../inputs/ProyectoWhereInput");
const ProyectoWhereUniqueInput_1 = require("../../../inputs/ProyectoWhereUniqueInput");
const ProyectoScalarFieldEnum_1 = require("../../../../enums/ProyectoScalarFieldEnum");
let FindManyProyectoArgs = class FindManyProyectoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoWhereInput_1.ProyectoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoWhereInput_1.ProyectoWhereInput)
], FindManyProyectoArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProyectoOrderByWithRelationInput_1.ProyectoOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyProyectoArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput)
], FindManyProyectoArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyProyectoArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyProyectoArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProyectoScalarFieldEnum_1.ProyectoScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyProyectoArgs.prototype, "distinct", void 0);
FindManyProyectoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyProyectoArgs);
exports.FindManyProyectoArgs = FindManyProyectoArgs;
