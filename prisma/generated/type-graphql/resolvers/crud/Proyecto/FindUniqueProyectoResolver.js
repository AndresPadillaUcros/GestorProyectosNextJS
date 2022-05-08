"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProyectoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueProyectoArgs_1 = require("./args/FindUniqueProyectoArgs");
const Proyecto_1 = require("../../../models/Proyecto");
const helpers_1 = require("../../../helpers");
let FindUniqueProyectoResolver = class FindUniqueProyectoResolver {
    async proyecto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).proyecto.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Proyecto_1.Proyecto, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueProyectoArgs_1.FindUniqueProyectoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueProyectoResolver.prototype, "proyecto", null);
FindUniqueProyectoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Proyecto_1.Proyecto)
], FindUniqueProyectoResolver);
exports.FindUniqueProyectoResolver = FindUniqueProyectoResolver;
