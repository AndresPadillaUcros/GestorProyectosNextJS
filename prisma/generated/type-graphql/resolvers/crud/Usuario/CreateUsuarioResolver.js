"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsuarioResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateUsuarioArgs_1 = require("./args/CreateUsuarioArgs");
const Usuario_1 = require("../../../models/Usuario");
const helpers_1 = require("../../../helpers");
let CreateUsuarioResolver = class CreateUsuarioResolver {
    async createUsuario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Usuario_1.Usuario, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateUsuarioArgs_1.CreateUsuarioArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateUsuarioResolver.prototype, "createUsuario", null);
CreateUsuarioResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Usuario_1.Usuario)
], CreateUsuarioResolver);
exports.CreateUsuarioResolver = CreateUsuarioResolver;
