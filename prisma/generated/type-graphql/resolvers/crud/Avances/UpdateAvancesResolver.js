"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAvancesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateAvancesArgs_1 = require("./args/UpdateAvancesArgs");
const Avances_1 = require("../../../models/Avances");
const helpers_1 = require("../../../helpers");
let UpdateAvancesResolver = class UpdateAvancesResolver {
    async updateAvances(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).avances.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Avances_1.Avances, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateAvancesArgs_1.UpdateAvancesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateAvancesResolver.prototype, "updateAvances", null);
UpdateAvancesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Avances_1.Avances)
], UpdateAvancesResolver);
exports.UpdateAvancesResolver = UpdateAvancesResolver;
