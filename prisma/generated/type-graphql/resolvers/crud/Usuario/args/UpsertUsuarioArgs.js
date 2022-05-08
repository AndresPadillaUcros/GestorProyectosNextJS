"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertUsuarioArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioCreateInput_1 = require("../../../inputs/UsuarioCreateInput");
const UsuarioUpdateInput_1 = require("../../../inputs/UsuarioUpdateInput");
const UsuarioWhereUniqueInput_1 = require("../../../inputs/UsuarioWhereUniqueInput");
let UpsertUsuarioArgs = class UpsertUsuarioArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], UpsertUsuarioArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateInput_1.UsuarioCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioCreateInput_1.UsuarioCreateInput)
], UpsertUsuarioArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioUpdateInput_1.UsuarioUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioUpdateInput_1.UsuarioUpdateInput)
], UpsertUsuarioArgs.prototype, "update", void 0);
UpsertUsuarioArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertUsuarioArgs);
exports.UpsertUsuarioArgs = UpsertUsuarioArgs;
