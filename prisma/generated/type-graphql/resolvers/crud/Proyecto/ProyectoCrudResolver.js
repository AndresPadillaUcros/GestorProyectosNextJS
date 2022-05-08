"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateProyectoArgs_1 = require("./args/AggregateProyectoArgs");
const CreateManyProyectoArgs_1 = require("./args/CreateManyProyectoArgs");
const CreateProyectoArgs_1 = require("./args/CreateProyectoArgs");
const DeleteManyProyectoArgs_1 = require("./args/DeleteManyProyectoArgs");
const DeleteProyectoArgs_1 = require("./args/DeleteProyectoArgs");
const FindFirstProyectoArgs_1 = require("./args/FindFirstProyectoArgs");
const FindManyProyectoArgs_1 = require("./args/FindManyProyectoArgs");
const FindUniqueProyectoArgs_1 = require("./args/FindUniqueProyectoArgs");
const GroupByProyectoArgs_1 = require("./args/GroupByProyectoArgs");
const UpdateManyProyectoArgs_1 = require("./args/UpdateManyProyectoArgs");
const UpdateProyectoArgs_1 = require("./args/UpdateProyectoArgs");
const UpsertProyectoArgs_1 = require("./args/UpsertProyectoArgs");
const helpers_1 = require("../../../helpers");
const Proyecto_1 = require("../../../models/Proyecto");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateProyecto_1 = require("../../outputs/AggregateProyecto");
const ProyectoGroupBy_1 = require("../../outputs/ProyectoGroupBy");
let ProyectoCrudResolver = class ProyectoCrudResolver {
    async proyecto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).proyecto.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstProyecto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).proyecto.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async proyectos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).proyecto.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createProyecto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).proyecto.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyProyecto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).proyecto.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteProyecto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).proyecto.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateProyecto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).proyecto.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyProyecto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).proyecto.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyProyecto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).proyecto.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertProyecto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).proyecto.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateProyecto(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).proyecto.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByProyecto(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).proyecto.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
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
], ProyectoCrudResolver.prototype, "proyecto", null);
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
], ProyectoCrudResolver.prototype, "findFirstProyecto", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Proyecto_1.Proyecto], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyProyectoArgs_1.FindManyProyectoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProyectoCrudResolver.prototype, "proyectos", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Proyecto_1.Proyecto, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateProyectoArgs_1.CreateProyectoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProyectoCrudResolver.prototype, "createProyecto", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyProyectoArgs_1.CreateManyProyectoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProyectoCrudResolver.prototype, "createManyProyecto", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Proyecto_1.Proyecto, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteProyectoArgs_1.DeleteProyectoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProyectoCrudResolver.prototype, "deleteProyecto", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Proyecto_1.Proyecto, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateProyectoArgs_1.UpdateProyectoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProyectoCrudResolver.prototype, "updateProyecto", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyProyectoArgs_1.DeleteManyProyectoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProyectoCrudResolver.prototype, "deleteManyProyecto", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyProyectoArgs_1.UpdateManyProyectoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProyectoCrudResolver.prototype, "updateManyProyecto", null);
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
], ProyectoCrudResolver.prototype, "upsertProyecto", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateProyecto_1.AggregateProyecto, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateProyectoArgs_1.AggregateProyectoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProyectoCrudResolver.prototype, "aggregateProyecto", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ProyectoGroupBy_1.ProyectoGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByProyectoArgs_1.GroupByProyectoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProyectoCrudResolver.prototype, "groupByProyecto", null);
ProyectoCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Proyecto_1.Proyecto)
], ProyectoCrudResolver);
exports.ProyectoCrudResolver = ProyectoCrudResolver;
