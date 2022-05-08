"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByInscripcionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByInscripcionArgs_1 = require("./args/GroupByInscripcionArgs");
const Inscripcion_1 = require("../../../models/Inscripcion");
const InscripcionGroupBy_1 = require("../../outputs/InscripcionGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByInscripcionResolver = class GroupByInscripcionResolver {
    async groupByInscripcion(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inscripcion.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [InscripcionGroupBy_1.InscripcionGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByInscripcionArgs_1.GroupByInscripcionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByInscripcionResolver.prototype, "groupByInscripcion", null);
GroupByInscripcionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Inscripcion_1.Inscripcion)
], GroupByInscripcionResolver);
exports.GroupByInscripcionResolver = GroupByInscripcionResolver;
