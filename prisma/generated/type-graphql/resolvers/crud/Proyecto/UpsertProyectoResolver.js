"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertProyectoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertProyectoArgs_1 = require("./args/UpsertProyectoArgs");
const Proyecto_1 = require("../../../models/Proyecto");
const helpers_1 = require("../../../helpers");
let UpsertProyectoResolver = class UpsertProyectoResolver {
    async upsertProyecto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).proyecto.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Proyecto_1.Proyecto, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertProyectoArgs_1.UpsertProyectoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertProyectoResolver.prototype, "upsertProyecto", null);
UpsertProyectoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Proyecto_1.Proyecto)
], UpsertProyectoResolver);
exports.UpsertProyectoResolver = UpsertProyectoResolver;
