"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateObjetivosEspecificosResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateObjetivosEspecificosArgs_1 = require("./args/AggregateObjetivosEspecificosArgs");
const ObjetivosEspecificos_1 = require("../../../models/ObjetivosEspecificos");
const AggregateObjetivosEspecificos_1 = require("../../outputs/AggregateObjetivosEspecificos");
const helpers_1 = require("../../../helpers");
let AggregateObjetivosEspecificosResolver = class AggregateObjetivosEspecificosResolver {
    async aggregateObjetivosEspecificos(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).objetivosEspecificos.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
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
], AggregateObjetivosEspecificosResolver.prototype, "aggregateObjetivosEspecificos", null);
AggregateObjetivosEspecificosResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ObjetivosEspecificos_1.ObjetivosEspecificos)
], AggregateObjetivosEspecificosResolver);
exports.AggregateObjetivosEspecificosResolver = AggregateObjetivosEspecificosResolver;
