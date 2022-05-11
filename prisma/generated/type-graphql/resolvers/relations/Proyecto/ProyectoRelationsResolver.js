"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Avances_1 = require("../../../models/Avances");
const Inscripcion_1 = require("../../../models/Inscripcion");
const ObjetivosEspecificos_1 = require("../../../models/ObjetivosEspecificos");
const Proyecto_1 = require("../../../models/Proyecto");
const Usuario_1 = require("../../../models/Usuario");
const ProyectoAvancesArgs_1 = require("./args/ProyectoAvancesArgs");
const ProyectoInscripcionesArgs_1 = require("./args/ProyectoInscripcionesArgs");
const ProyectoObjetivosEspecificosArgs_1 = require("./args/ProyectoObjetivosEspecificosArgs");
const helpers_1 = require("../../../helpers");
let ProyectoRelationsResolver = class ProyectoRelationsResolver {
    async objetivosEspecificos(proyecto, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).proyecto.findUnique({
            where: {
                id: proyecto.id,
            },
        }).objetivosEspecificos(args);
    }
    async lider(proyecto, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).proyecto.findUnique({
            where: {
                id: proyecto.id,
            },
        }).lider({});
    }
    async avances(proyecto, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).proyecto.findUnique({
            where: {
                id: proyecto.id,
            },
        }).avances(args);
    }
    async inscripciones(proyecto, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).proyecto.findUnique({
            where: {
                id: proyecto.id,
            },
        }).inscripciones(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [ObjetivosEspecificos_1.ObjetivosEspecificos], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Proyecto_1.Proyecto, Object, ProyectoObjetivosEspecificosArgs_1.ProyectoObjetivosEspecificosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProyectoRelationsResolver.prototype, "objetivosEspecificos", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Usuario_1.Usuario, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Proyecto_1.Proyecto, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProyectoRelationsResolver.prototype, "lider", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Avances_1.Avances], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Proyecto_1.Proyecto, Object, ProyectoAvancesArgs_1.ProyectoAvancesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProyectoRelationsResolver.prototype, "avances", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Inscripcion_1.Inscripcion], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Proyecto_1.Proyecto, Object, ProyectoInscripcionesArgs_1.ProyectoInscripcionesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProyectoRelationsResolver.prototype, "inscripciones", null);
ProyectoRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Proyecto_1.Proyecto)
], ProyectoRelationsResolver);
exports.ProyectoRelationsResolver = ProyectoRelationsResolver;
