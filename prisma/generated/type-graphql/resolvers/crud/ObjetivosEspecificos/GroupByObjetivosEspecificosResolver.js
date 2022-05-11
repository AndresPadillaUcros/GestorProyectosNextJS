"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByObjetivosEspecificosResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByObjetivosEspecificosArgs_1 = require("./args/GroupByObjetivosEspecificosArgs");
const ObjetivosEspecificos_1 = require("../../../models/ObjetivosEspecificos");
const ObjetivosEspecificosGroupBy_1 = require("../../outputs/ObjetivosEspecificosGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByObjetivosEspecificosResolver = class GroupByObjetivosEspecificosResolver {
    async groupByObjetivosEspecificos(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).objetivosEspecificos.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ObjetivosEspecificosGroupBy_1.ObjetivosEspecificosGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByObjetivosEspecificosArgs_1.GroupByObjetivosEspecificosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByObjetivosEspecificosResolver.prototype, "groupByObjetivosEspecificos", null);
GroupByObjetivosEspecificosResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ObjetivosEspecificos_1.ObjetivosEspecificos)
], GroupByObjetivosEspecificosResolver);
exports.GroupByObjetivosEspecificosResolver = GroupByObjetivosEspecificosResolver;
