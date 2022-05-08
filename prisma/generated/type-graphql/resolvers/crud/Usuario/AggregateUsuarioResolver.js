"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateUsuarioResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateUsuarioArgs_1 = require("./args/AggregateUsuarioArgs");
const Usuario_1 = require("../../../models/Usuario");
const AggregateUsuario_1 = require("../../outputs/AggregateUsuario");
const helpers_1 = require("../../../helpers");
let AggregateUsuarioResolver = class AggregateUsuarioResolver {
    async aggregateUsuario(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateUsuario_1.AggregateUsuario, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateUsuarioArgs_1.AggregateUsuarioArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateUsuarioResolver.prototype, "aggregateUsuario", null);
AggregateUsuarioResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Usuario_1.Usuario)
], AggregateUsuarioResolver);
exports.AggregateUsuarioResolver = AggregateUsuarioResolver;
