"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateInscripcionArgs_1 = require("./args/AggregateInscripcionArgs");
const CreateInscripcionArgs_1 = require("./args/CreateInscripcionArgs");
const CreateManyInscripcionArgs_1 = require("./args/CreateManyInscripcionArgs");
const DeleteInscripcionArgs_1 = require("./args/DeleteInscripcionArgs");
const DeleteManyInscripcionArgs_1 = require("./args/DeleteManyInscripcionArgs");
const FindFirstInscripcionArgs_1 = require("./args/FindFirstInscripcionArgs");
const FindManyInscripcionArgs_1 = require("./args/FindManyInscripcionArgs");
const FindUniqueInscripcionArgs_1 = require("./args/FindUniqueInscripcionArgs");
const GroupByInscripcionArgs_1 = require("./args/GroupByInscripcionArgs");
const UpdateInscripcionArgs_1 = require("./args/UpdateInscripcionArgs");
const UpdateManyInscripcionArgs_1 = require("./args/UpdateManyInscripcionArgs");
const UpsertInscripcionArgs_1 = require("./args/UpsertInscripcionArgs");
const helpers_1 = require("../../../helpers");
const Inscripcion_1 = require("../../../models/Inscripcion");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateInscripcion_1 = require("../../outputs/AggregateInscripcion");
const InscripcionGroupBy_1 = require("../../outputs/InscripcionGroupBy");
let InscripcionCrudResolver = class InscripcionCrudResolver {
    async inscripcion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inscripcion.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstInscripcion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inscripcion.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async inscripcions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inscripcion.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createInscripcion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inscripcion.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyInscripcion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inscripcion.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteInscripcion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inscripcion.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateInscripcion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inscripcion.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyInscripcion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inscripcion.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyInscripcion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inscripcion.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertInscripcion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inscripcion.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateInscripcion(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).inscripcion.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByInscripcion(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inscripcion.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Inscripcion_1.Inscripcion, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueInscripcionArgs_1.FindUniqueInscripcionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InscripcionCrudResolver.prototype, "inscripcion", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Inscripcion_1.Inscripcion, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstInscripcionArgs_1.FindFirstInscripcionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InscripcionCrudResolver.prototype, "findFirstInscripcion", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Inscripcion_1.Inscripcion], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyInscripcionArgs_1.FindManyInscripcionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InscripcionCrudResolver.prototype, "inscripcions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Inscripcion_1.Inscripcion, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateInscripcionArgs_1.CreateInscripcionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InscripcionCrudResolver.prototype, "createInscripcion", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyInscripcionArgs_1.CreateManyInscripcionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InscripcionCrudResolver.prototype, "createManyInscripcion", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Inscripcion_1.Inscripcion, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteInscripcionArgs_1.DeleteInscripcionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InscripcionCrudResolver.prototype, "deleteInscripcion", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Inscripcion_1.Inscripcion, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateInscripcionArgs_1.UpdateInscripcionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InscripcionCrudResolver.prototype, "updateInscripcion", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyInscripcionArgs_1.DeleteManyInscripcionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InscripcionCrudResolver.prototype, "deleteManyInscripcion", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyInscripcionArgs_1.UpdateManyInscripcionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InscripcionCrudResolver.prototype, "updateManyInscripcion", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Inscripcion_1.Inscripcion, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertInscripcionArgs_1.UpsertInscripcionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InscripcionCrudResolver.prototype, "upsertInscripcion", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateInscripcion_1.AggregateInscripcion, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateInscripcionArgs_1.AggregateInscripcionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InscripcionCrudResolver.prototype, "aggregateInscripcion", null);
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
], InscripcionCrudResolver.prototype, "groupByInscripcion", null);
InscripcionCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Inscripcion_1.Inscripcion)
], InscripcionCrudResolver);
exports.InscripcionCrudResolver = InscripcionCrudResolver;
