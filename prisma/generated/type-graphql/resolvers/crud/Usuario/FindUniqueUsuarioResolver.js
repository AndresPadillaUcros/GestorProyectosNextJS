"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueUsuarioResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueUsuarioArgs_1 = require("./args/FindUniqueUsuarioArgs");
const Usuario_1 = require("../../../models/Usuario");
const helpers_1 = require("../../../helpers");
let FindUniqueUsuarioResolver = class FindUniqueUsuarioResolver {
    async usuario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueUsuarioArgs_1.FindUniqueUsuarioArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueUsuarioResolver.prototype, "usuario", null);
FindUniqueUsuarioResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Usuario_1.Usuario)
], FindUniqueUsuarioResolver);
exports.FindUniqueUsuarioResolver = FindUniqueUsuarioResolver;
