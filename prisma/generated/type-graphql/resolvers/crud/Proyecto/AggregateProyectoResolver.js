"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProyectoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateProyectoArgs_1 = require("./args/AggregateProyectoArgs");
const Proyecto_1 = require("../../../models/Proyecto");
const AggregateProyecto_1 = require("../../outputs/AggregateProyecto");
const helpers_1 = require("../../../helpers");
let AggregateProyectoResolver = class AggregateProyectoResolver {
    async aggregateProyecto(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).proyecto.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
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
], AggregateProyectoResolver.prototype, "aggregateProyecto", null);
AggregateProyectoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Proyecto_1.Proyecto)
], AggregateProyectoResolver);
exports.AggregateProyectoResolver = AggregateProyectoResolver;
