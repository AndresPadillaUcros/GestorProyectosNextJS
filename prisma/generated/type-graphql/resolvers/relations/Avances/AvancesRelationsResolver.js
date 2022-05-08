"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvancesRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Avances_1 = require("../../../models/Avances");
const Proyecto_1 = require("../../../models/Proyecto");
const Usuario_1 = require("../../../models/Usuario");
const helpers_1 = require("../../../helpers");
let AvancesRelationsResolver = class AvancesRelationsResolver {
    async proyecto(avances, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).avances.findUnique({
            where: {
                id: avances.id,
            },
        }).proyecto({});
    }
    async creadoPor(avances, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).avances.findUnique({
            where: {
                id: avances.id,
            },
        }).creadoPor({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Proyecto_1.Proyecto, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Avances_1.Avances, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AvancesRelationsResolver.prototype, "proyecto", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Usuario_1.Usuario, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Avances_1.Avances, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AvancesRelationsResolver.prototype, "creadoPor", null);
AvancesRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Avances_1.Avances)
], AvancesRelationsResolver);
exports.AvancesRelationsResolver = AvancesRelationsResolver;
