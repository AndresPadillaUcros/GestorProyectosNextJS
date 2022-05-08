"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInscripcionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateInscripcionArgs_1 = require("./args/UpdateInscripcionArgs");
const Inscripcion_1 = require("../../../models/Inscripcion");
const helpers_1 = require("../../../helpers");
let UpdateInscripcionResolver = class UpdateInscripcionResolver {
    async updateInscripcion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inscripcion.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Inscripcion_1.Inscripcion, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateInscripcionArgs_1.UpdateInscripcionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateInscripcionResolver.prototype, "updateInscripcion", null);
UpdateInscripcionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Inscripcion_1.Inscripcion)
], UpdateInscripcionResolver);
exports.UpdateInscripcionResolver = UpdateInscripcionResolver;
