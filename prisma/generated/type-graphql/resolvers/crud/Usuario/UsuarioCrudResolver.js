"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateUsuarioArgs_1 = require("./args/AggregateUsuarioArgs");
const CreateManyUsuarioArgs_1 = require("./args/CreateManyUsuarioArgs");
const CreateUsuarioArgs_1 = require("./args/CreateUsuarioArgs");
const DeleteManyUsuarioArgs_1 = require("./args/DeleteManyUsuarioArgs");
const DeleteUsuarioArgs_1 = require("./args/DeleteUsuarioArgs");
const FindFirstUsuarioArgs_1 = require("./args/FindFirstUsuarioArgs");
const FindManyUsuarioArgs_1 = require("./args/FindManyUsuarioArgs");
const FindUniqueUsuarioArgs_1 = require("./args/FindUniqueUsuarioArgs");
const GroupByUsuarioArgs_1 = require("./args/GroupByUsuarioArgs");
const UpdateManyUsuarioArgs_1 = require("./args/UpdateManyUsuarioArgs");
const UpdateUsuarioArgs_1 = require("./args/UpdateUsuarioArgs");
const UpsertUsuarioArgs_1 = require("./args/UpsertUsuarioArgs");
const helpers_1 = require("../../../helpers");
const Usuario_1 = require("../../../models/Usuario");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateUsuario_1 = require("../../outputs/AggregateUsuario");
const UsuarioGroupBy_1 = require("../../outputs/UsuarioGroupBy");
let UsuarioCrudResolver = class UsuarioCrudResolver {
    async usuario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstUsuario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async usuarios(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createUsuario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyUsuario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteUsuario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateUsuario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyUsuario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyUsuario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertUsuario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateUsuario(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByUsuario(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Usuario_1.Usuario, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueUsuarioArgs_1.FindUniqueUsuarioArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioCrudResolver.prototype, "usuario", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Usuario_1.Usuario, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstUsuarioArgs_1.FindFirstUsuarioArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioCrudResolver.prototype, "findFirstUsuario", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Usuario_1.Usuario], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyUsuarioArgs_1.FindManyUsuarioArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioCrudResolver.prototype, "usuarios", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Usuario_1.Usuario, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateUsuarioArgs_1.CreateUsuarioArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioCrudResolver.prototype, "createUsuario", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyUsuarioArgs_1.CreateManyUsuarioArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioCrudResolver.prototype, "createManyUsuario", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Usuario_1.Usuario, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteUsuarioArgs_1.DeleteUsuarioArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioCrudResolver.prototype, "deleteUsuario", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Usuario_1.Usuario, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateUsuarioArgs_1.UpdateUsuarioArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioCrudResolver.prototype, "updateUsuario", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyUsuarioArgs_1.DeleteManyUsuarioArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioCrudResolver.prototype, "deleteManyUsuario", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyUsuarioArgs_1.UpdateManyUsuarioArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioCrudResolver.prototype, "updateManyUsuario", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Usuario_1.Usuario, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertUsuarioArgs_1.UpsertUsuarioArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioCrudResolver.prototype, "upsertUsuario", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateUsuario_1.AggregateUsuario, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateUsuarioArgs_1.AggregateUsuarioArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioCrudResolver.prototype, "aggregateUsuario", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [UsuarioGroupBy_1.UsuarioGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByUsuarioArgs_1.GroupByUsuarioArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioCrudResolver.prototype, "groupByUsuario", null);
UsuarioCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Usuario_1.Usuario)
], UsuarioCrudResolver);
exports.UsuarioCrudResolver = UsuarioCrudResolver;
