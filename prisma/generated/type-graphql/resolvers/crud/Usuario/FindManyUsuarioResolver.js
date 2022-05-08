"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyUsuarioResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyUsuarioArgs_1 = require("./args/FindManyUsuarioArgs");
const Usuario_1 = require("../../../models/Usuario");
const helpers_1 = require("../../../helpers");
let FindManyUsuarioResolver = class FindManyUsuarioResolver {
    async usuarios(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Usuario_1.Usuario], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyUsuarioArgs_1.FindManyUsuarioArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyUsuarioResolver.prototype, "usuarios", null);
FindManyUsuarioResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Usuario_1.Usuario)
], FindManyUsuarioResolver);
exports.FindManyUsuarioResolver = FindManyUsuarioResolver;
