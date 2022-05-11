"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivosEspecificosRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ObjetivosEspecificos_1 = require("../../../models/ObjetivosEspecificos");
const Proyecto_1 = require("../../../models/Proyecto");
const helpers_1 = require("../../../helpers");
let ObjetivosEspecificosRelationsResolver = class ObjetivosEspecificosRelationsResolver {
    async proyecto(objetivosEspecificos, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).objetivosEspecificos.findUnique({
            where: {
                id: objetivosEspecificos.id,
            },
        }).proyecto({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Proyecto_1.Proyecto, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ObjetivosEspecificos_1.ObjetivosEspecificos, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ObjetivosEspecificosRelationsResolver.prototype, "proyecto", null);
ObjetivosEspecificosRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ObjetivosEspecificos_1.ObjetivosEspecificos)
], ObjetivosEspecificosRelationsResolver);
exports.ObjetivosEspecificosRelationsResolver = ObjetivosEspecificosRelationsResolver;
