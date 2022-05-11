"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertObjetivosEspecificosResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertObjetivosEspecificosArgs_1 = require("./args/UpsertObjetivosEspecificosArgs");
const ObjetivosEspecificos_1 = require("../../../models/ObjetivosEspecificos");
const helpers_1 = require("../../../helpers");
let UpsertObjetivosEspecificosResolver = class UpsertObjetivosEspecificosResolver {
    async upsertObjetivosEspecificos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).objetivosEspecificos.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpsertObjetivosEspecificosResolver.prototype, "upsertObjetivosEspecificos", null);
UpsertObjetivosEspecificosResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ObjetivosEspecificos_1.ObjetivosEspecificos)
], UpsertObjetivosEspecificosResolver);
exports.UpsertObjetivosEspecificosResolver = UpsertObjetivosEspecificosResolver;
