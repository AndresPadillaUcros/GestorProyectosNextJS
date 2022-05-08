"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyUsuarioArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioUpdateManyMutationInput_1 = require("../../../inputs/UsuarioUpdateManyMutationInput");
const UsuarioWhereInput_1 = require("../../../inputs/UsuarioWhereInput");
let UpdateManyUsuarioArgs = class UpdateManyUsuarioArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioUpdateManyMutationInput_1.UsuarioUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioUpdateManyMutationInput_1.UsuarioUpdateManyMutationInput)
], UpdateManyUsuarioArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioWhereInput_1.UsuarioWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioWhereInput_1.UsuarioWhereInput)
], UpdateManyUsuarioArgs.prototype, "where", void 0);
UpdateManyUsuarioArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyUsuarioArgs);
exports.UpdateManyUsuarioArgs = UpdateManyUsuarioArgs;
