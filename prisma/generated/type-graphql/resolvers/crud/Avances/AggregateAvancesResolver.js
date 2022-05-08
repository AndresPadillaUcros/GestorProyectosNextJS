"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAvancesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateAvancesArgs_1 = require("./args/AggregateAvancesArgs");
const Avances_1 = require("../../../models/Avances");
const AggregateAvances_1 = require("../../outputs/AggregateAvances");
const helpers_1 = require("../../../helpers");
let AggregateAvancesResolver = class AggregateAvancesResolver {
    async aggregateAvances(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).avances.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateAvances_1.AggregateAvances, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateAvancesArgs_1.AggregateAvancesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateAvancesResolver.prototype, "aggregateAvances", null);
AggregateAvancesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Avances_1.Avances)
], AggregateAvancesResolver);
exports.AggregateAvancesResolver = AggregateAvancesResolver;
