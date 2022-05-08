"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyInscripcionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateManyInscripcionArgs_1 = require("./args/CreateManyInscripcionArgs");
const Inscripcion_1 = require("../../../models/Inscripcion");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyInscripcionResolver = class CreateManyInscripcionResolver {
    async createManyInscripcion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inscripcion.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyInscripcionArgs_1.CreateManyInscripcionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyInscripcionResolver.prototype, "createManyInscripcion", null);
CreateManyInscripcionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Inscripcion_1.Inscripcion)
], CreateManyInscripcionResolver);
exports.CreateManyInscripcionResolver = CreateManyInscripcionResolver;
