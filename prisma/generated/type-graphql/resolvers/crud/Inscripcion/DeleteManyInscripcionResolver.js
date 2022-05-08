"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyInscripcionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManyInscripcionArgs_1 = require("./args/DeleteManyInscripcionArgs");
const Inscripcion_1 = require("../../../models/Inscripcion");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyInscripcionResolver = class DeleteManyInscripcionResolver {
    async deleteManyInscripcion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inscripcion.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyInscripcionArgs_1.DeleteManyInscripcionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyInscripcionResolver.prototype, "deleteManyInscripcion", null);
DeleteManyInscripcionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Inscripcion_1.Inscripcion)
], DeleteManyInscripcionResolver);
exports.DeleteManyInscripcionResolver = DeleteManyInscripcionResolver;
