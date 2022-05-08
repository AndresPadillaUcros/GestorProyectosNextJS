"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstInscripcionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstInscripcionArgs_1 = require("./args/FindFirstInscripcionArgs");
const Inscripcion_1 = require("../../../models/Inscripcion");
const helpers_1 = require("../../../helpers");
let FindFirstInscripcionResolver = class FindFirstInscripcionResolver {
    async findFirstInscripcion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inscripcion.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Inscripcion_1.Inscripcion, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstInscripcionArgs_1.FindFirstInscripcionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstInscripcionResolver.prototype, "findFirstInscripcion", null);
FindFirstInscripcionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Inscripcion_1.Inscripcion)
], FindFirstInscripcionResolver);
exports.FindFirstInscripcionResolver = FindFirstInscripcionResolver;
