"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvancesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateAvancesArgs_1 = require("./args/AggregateAvancesArgs");
const CreateAvancesArgs_1 = require("./args/CreateAvancesArgs");
const CreateManyAvancesArgs_1 = require("./args/CreateManyAvancesArgs");
const DeleteAvancesArgs_1 = require("./args/DeleteAvancesArgs");
const DeleteManyAvancesArgs_1 = require("./args/DeleteManyAvancesArgs");
const FindFirstAvancesArgs_1 = require("./args/FindFirstAvancesArgs");
const FindManyAvancesArgs_1 = require("./args/FindManyAvancesArgs");
const FindUniqueAvancesArgs_1 = require("./args/FindUniqueAvancesArgs");
const GroupByAvancesArgs_1 = require("./args/GroupByAvancesArgs");
const UpdateAvancesArgs_1 = require("./args/UpdateAvancesArgs");
const UpdateManyAvancesArgs_1 = require("./args/UpdateManyAvancesArgs");
const UpsertAvancesArgs_1 = require("./args/UpsertAvancesArgs");
const helpers_1 = require("../../../helpers");
const Avances_1 = require("../../../models/Avances");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateAvances_1 = require("../../outputs/AggregateAvances");
const AvancesGroupBy_1 = require("../../outputs/AvancesGroupBy");
let AvancesCrudResolver = class AvancesCrudResolver {
    async findUniqueAvances(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).avances.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAvances(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).avances.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyAvances(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).avances.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createAvances(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).avances.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAvances(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).avances.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteAvances(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).avances.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateAvances(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).avances.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyAvances(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).avances.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyAvances(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).avances.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertAvances(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).avances.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateAvances(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).avances.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByAvances(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).avances.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Avances_1.Avances, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueAvancesArgs_1.FindUniqueAvancesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AvancesCrudResolver.prototype, "findUniqueAvances", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Avances_1.Avances, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstAvancesArgs_1.FindFirstAvancesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AvancesCrudResolver.prototype, "findFirstAvances", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Avances_1.Avances], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyAvancesArgs_1.FindManyAvancesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AvancesCrudResolver.prototype, "findManyAvances", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Avances_1.Avances, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateAvancesArgs_1.CreateAvancesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AvancesCrudResolver.prototype, "createAvances", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAvancesArgs_1.CreateManyAvancesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AvancesCrudResolver.prototype, "createManyAvances", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Avances_1.Avances, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteAvancesArgs_1.DeleteAvancesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AvancesCrudResolver.prototype, "deleteAvances", null);
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
], AvancesCrudResolver.prototype, "updateAvances", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyAvancesArgs_1.DeleteManyAvancesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AvancesCrudResolver.prototype, "deleteManyAvances", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyAvancesArgs_1.UpdateManyAvancesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AvancesCrudResolver.prototype, "updateManyAvances", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Avances_1.Avances, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertAvancesArgs_1.UpsertAvancesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AvancesCrudResolver.prototype, "upsertAvances", null);
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
], AvancesCrudResolver.prototype, "aggregateAvances", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [AvancesGroupBy_1.AvancesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByAvancesArgs_1.GroupByAvancesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AvancesCrudResolver.prototype, "groupByAvances", null);
AvancesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Avances_1.Avances)
], AvancesCrudResolver);
exports.AvancesCrudResolver = AvancesCrudResolver;
