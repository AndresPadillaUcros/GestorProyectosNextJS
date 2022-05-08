"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Avances_1 = require("../../../models/Avances");
const Inscripcion_1 = require("../../../models/Inscripcion");
const Proyecto_1 = require("../../../models/Proyecto");
const Usuario_1 = require("../../../models/Usuario");
const UsuarioAvancesArgs_1 = require("./args/UsuarioAvancesArgs");
const UsuarioInscripcionesArgs_1 = require("./args/UsuarioInscripcionesArgs");
const UsuarioProyectosLideradosArgs_1 = require("./args/UsuarioProyectosLideradosArgs");
const helpers_1 = require("../../../helpers");
let UsuarioRelationsResolver = class UsuarioRelationsResolver {
    async proyectosLiderados(usuario, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.findUnique({
            where: {
                id: usuario.id,
            },
        }).proyectosLiderados(args);
    }
    async avances(usuario, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.findUnique({
            where: {
                id: usuario.id,
            },
        }).avances(args);
    }
    async inscripciones(usuario, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.findUnique({
            where: {
                id: usuario.id,
            },
        }).inscripciones(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Proyecto_1.Proyecto], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Usuario_1.Usuario, Object, UsuarioProyectosLideradosArgs_1.UsuarioProyectosLideradosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioRelationsResolver.prototype, "proyectosLiderados", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Avances_1.Avances], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Usuario_1.Usuario, Object, UsuarioAvancesArgs_1.UsuarioAvancesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioRelationsResolver.prototype, "avances", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Inscripcion_1.Inscripcion], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Usuario_1.Usuario, Object, UsuarioInscripcionesArgs_1.UsuarioInscripcionesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioRelationsResolver.prototype, "inscripciones", null);
UsuarioRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Usuario_1.Usuario)
], UsuarioRelationsResolver);
exports.UsuarioRelationsResolver = UsuarioRelationsResolver;
