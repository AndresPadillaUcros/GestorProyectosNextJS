"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUsuarioResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateUsuarioArgs_1 = require("./args/UpdateUsuarioArgs");
const Usuario_1 = require("../../../models/Usuario");
const helpers_1 = require("../../../helpers");
let UpdateUsuarioResolver = class UpdateUsuarioResolver {
    async updateUsuario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Usuario_1.Usuario, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateUsuarioArgs_1.UpdateUsuarioArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateUsuarioResolver.prototype, "updateUsuario", null);
UpdateUsuarioResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Usuario_1.Usuario)
], UpdateUsuarioResolver);
exports.UpdateUsuarioResolver = UpdateUsuarioResolver;
