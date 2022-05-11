"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateObjetivosEspecificosResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateObjetivosEspecificosArgs_1 = require("./args/CreateObjetivosEspecificosArgs");
const ObjetivosEspecificos_1 = require("../../../models/ObjetivosEspecificos");
const helpers_1 = require("../../../helpers");
let CreateObjetivosEspecificosResolver = class CreateObjetivosEspecificosResolver {
    async createObjetivosEspecificos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).objetivosEspecificos.create({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateObjetivosEspecificosArgs_1.CreateObjetivosEspecificosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateObjetivosEspecificosResolver.prototype, "createObjetivosEspecificos", null);
CreateObjetivosEspecificosResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ObjetivosEspecificos_1.ObjetivosEspecificos)
], CreateObjetivosEspecificosResolver);
exports.CreateObjetivosEspecificosResolver = CreateObjetivosEspecificosResolver;
