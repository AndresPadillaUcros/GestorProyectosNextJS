"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstProyectoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstProyectoArgs_1 = require("./args/FindFirstProyectoArgs");
const Proyecto_1 = require("../../../models/Proyecto");
const helpers_1 = require("../../../helpers");
let FindFirstProyectoResolver = class FindFirstProyectoResolver {
    async findFirstProyecto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).proyecto.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstProyectoArgs_1.FindFirstProyectoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstProyectoResolver.prototype, "findFirstProyecto", null);
FindFirstProyectoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Proyecto_1.Proyecto)
], FindFirstProyectoResolver);
exports.FindFirstProyectoResolver = FindFirstProyectoResolver;
