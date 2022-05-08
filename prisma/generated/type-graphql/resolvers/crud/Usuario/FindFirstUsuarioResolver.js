"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstUsuarioResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstUsuarioArgs_1 = require("./args/FindFirstUsuarioArgs");
const Usuario_1 = require("../../../models/Usuario");
const helpers_1 = require("../../../helpers");
let FindFirstUsuarioResolver = class FindFirstUsuarioResolver {
    async findFirstUsuario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Usuario_1.Usuario, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstUsuarioArgs_1.FindFirstUsuarioArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstUsuarioResolver.prototype, "findFirstUsuario", null);
FindFirstUsuarioResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Usuario_1.Usuario)
], FindFirstUsuarioResolver);
exports.FindFirstUsuarioResolver = FindFirstUsuarioResolver;
