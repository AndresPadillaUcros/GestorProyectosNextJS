"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProyectoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoOrderByWithRelationInput_1 = require("../../../inputs/ProyectoOrderByWithRelationInput");
const ProyectoWhereInput_1 = require("../../../inputs/ProyectoWhereInput");
const ProyectoWhereUniqueInput_1 = require("../../../inputs/ProyectoWhereUniqueInput");
let AggregateProyectoArgs = class AggregateProyectoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoWhereInput_1.ProyectoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoWhereInput_1.ProyectoWhereInput)
], AggregateProyectoArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProyectoOrderByWithRelationInput_1.ProyectoOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateProyectoArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput)
], AggregateProyectoArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateProyectoArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateProyectoArgs.prototype, "skip", void 0);
AggregateProyectoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateProyectoArgs);
exports.AggregateProyectoArgs = AggregateProyectoArgs;
