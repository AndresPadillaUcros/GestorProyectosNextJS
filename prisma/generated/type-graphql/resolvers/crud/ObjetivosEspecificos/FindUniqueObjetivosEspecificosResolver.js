"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueObjetivosEspecificosResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueObjetivosEspecificosArgs_1 = require("./args/FindUniqueObjetivosEspecificosArgs");
const ObjetivosEspecificos_1 = require("../../../models/ObjetivosEspecificos");
const helpers_1 = require("../../../helpers");
let FindUniqueObjetivosEspecificosResolver = class FindUniqueObjetivosEspecificosResolver {
    async findUniqueObjetivosEspecificos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).objetivosEspecificos.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
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
], FindUniqueObjetivosEspecificosResolver.prototype, "findUniqueObjetivosEspecificos", null);
FindUniqueObjetivosEspecificosResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ObjetivosEspecificos_1.ObjetivosEspecificos)
], FindUniqueObjetivosEspecificosResolver);
exports.FindUniqueObjetivosEspecificosResolver = FindUniqueObjetivosEspecificosResolver;
