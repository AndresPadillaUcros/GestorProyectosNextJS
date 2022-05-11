"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivosEspecificosCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateObjetivosEspecificosArgs_1 = require("./args/AggregateObjetivosEspecificosArgs");
const CreateManyObjetivosEspecificosArgs_1 = require("./args/CreateManyObjetivosEspecificosArgs");
const CreateObjetivosEspecificosArgs_1 = require("./args/CreateObjetivosEspecificosArgs");
const DeleteManyObjetivosEspecificosArgs_1 = require("./args/DeleteManyObjetivosEspecificosArgs");
const DeleteObjetivosEspecificosArgs_1 = require("./args/DeleteObjetivosEspecificosArgs");
const FindFirstObjetivosEspecificosArgs_1 = require("./args/FindFirstObjetivosEspecificosArgs");
const FindManyObjetivosEspecificosArgs_1 = require("./args/FindManyObjetivosEspecificosArgs");
const FindUniqueObjetivosEspecificosArgs_1 = require("./args/FindUniqueObjetivosEspecificosArgs");
const GroupByObjetivosEspecificosArgs_1 = require("./args/GroupByObjetivosEspecificosArgs");
const UpdateManyObjetivosEspecificosArgs_1 = require("./args/UpdateManyObjetivosEspecificosArgs");
const UpdateObjetivosEspecificosArgs_1 = require("./args/UpdateObjetivosEspecificosArgs");
const UpsertObjetivosEspecificosArgs_1 = require("./args/UpsertObjetivosEspecificosArgs");
const helpers_1 = require("../../../helpers");
const ObjetivosEspecificos_1 = require("../../../models/ObjetivosEspecificos");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateObjetivosEspecificos_1 = require("../../outputs/AggregateObjetivosEspecificos");
const ObjetivosEspecificosGroupBy_1 = require("../../outputs/ObjetivosEspecificosGroupBy");
let ObjetivosEspecificosCrudResolver = class ObjetivosEspecificosCrudResolver {
    async findUniqueObjetivosEspecificos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).objetivosEspecificos.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstObjetivosEspecificos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).objetivosEspecificos.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyObjetivosEspecificos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).objetivosEspecificos.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createObjetivosEspecificos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).objetivosEspecificos.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyObjetivosEspecificos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).objetivosEspecificos.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteObjetivosEspecificos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).objetivosEspecificos.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateObjetivosEspecificos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).objetivosEspecificos.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyObjetivosEspecificos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).objetivosEspecificos.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyObjetivosEspecificos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).objetivosEspecificos.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertObjetivosEspecificos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).objetivosEspecificos.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateObjetivosEspecificos(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).objetivosEspecificos.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByObjetivosEspecificos(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).objetivosEspecificos.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ObjetivosEspecificos_1.ObjetivosEspecificos, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueObjetivosEspecificosArgs_1.FindUniqueObjetivosEspecificosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ObjetivosEspecificosCrudResolver.prototype, "findUniqueObjetivosEspecificos", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ObjetivosEspecificos_1.ObjetivosEspecificos, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstObjetivosEspecificosArgs_1.FindFirstObjetivosEspecificosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ObjetivosEspecificosCrudResolver.prototype, "findFirstObjetivosEspecificos", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ObjetivosEspecificos_1.ObjetivosEspecificos], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyObjetivosEspecificosArgs_1.FindManyObjetivosEspecificosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ObjetivosEspecificosCrudResolver.prototype, "findManyObjetivosEspecificos", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ObjetivosEspecificos_1.ObjetivosEspecificos, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateObjetivosEspecificosArgs_1.CreateObjetivosEspecificosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ObjetivosEspecificosCrudResolver.prototype, "createObjetivosEspecificos", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyObjetivosEspecificosArgs_1.CreateManyObjetivosEspecificosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ObjetivosEspecificosCrudResolver.prototype, "createManyObjetivosEspecificos", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ObjetivosEspecificos_1.ObjetivosEspecificos, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteObjetivosEspecificosArgs_1.DeleteObjetivosEspecificosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ObjetivosEspecificosCrudResolver.prototype, "deleteObjetivosEspecificos", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ObjetivosEspecificos_1.ObjetivosEspecificos, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateObjetivosEspecificosArgs_1.UpdateObjetivosEspecificosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ObjetivosEspecificosCrudResolver.prototype, "updateObjetivosEspecificos", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyObjetivosEspecificosArgs_1.DeleteManyObjetivosEspecificosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ObjetivosEspecificosCrudResolver.prototype, "deleteManyObjetivosEspecificos", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyObjetivosEspecificosArgs_1.UpdateManyObjetivosEspecificosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ObjetivosEspecificosCrudResolver.prototype, "updateManyObjetivosEspecificos", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ObjetivosEspecificos_1.ObjetivosEspecificos, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertObjetivosEspecificosArgs_1.UpsertObjetivosEspecificosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ObjetivosEspecificosCrudResolver.prototype, "upsertObjetivosEspecificos", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateObjetivosEspecificos_1.AggregateObjetivosEspecificos, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateObjetivosEspecificosArgs_1.AggregateObjetivosEspecificosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ObjetivosEspecificosCrudResolver.prototype, "aggregateObjetivosEspecificos", null);
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
], ObjetivosEspecificosCrudResolver.prototype, "groupByObjetivosEspecificos", null);
ObjetivosEspecificosCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ObjetivosEspecificos_1.ObjetivosEspecificos)
], ObjetivosEspecificosCrudResolver);
exports.ObjetivosEspecificosCrudResolver = ObjetivosEspecificosCrudResolver;
