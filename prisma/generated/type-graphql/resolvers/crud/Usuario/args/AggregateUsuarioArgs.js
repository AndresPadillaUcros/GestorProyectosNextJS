"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateUsuarioArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioOrderByWithRelationInput_1 = require("../../../inputs/UsuarioOrderByWithRelationInput");
const UsuarioWhereInput_1 = require("../../../inputs/UsuarioWhereInput");
const UsuarioWhereUniqueInput_1 = require("../../../inputs/UsuarioWhereUniqueInput");
let AggregateUsuarioArgs = class AggregateUsuarioArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioWhereInput_1.UsuarioWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioWhereInput_1.UsuarioWhereInput)
], AggregateUsuarioArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UsuarioOrderByWithRelationInput_1.UsuarioOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateUsuarioArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], AggregateUsuarioArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateUsuarioArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateUsuarioArgs.prototype, "skip", void 0);
AggregateUsuarioArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateUsuarioArgs);
exports.AggregateUsuarioArgs = AggregateUsuarioArgs;
