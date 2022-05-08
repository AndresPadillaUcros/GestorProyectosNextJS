"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInscripcionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateInscripcionArgs_1 = require("./args/CreateInscripcionArgs");
const Inscripcion_1 = require("../../../models/Inscripcion");
const helpers_1 = require("../../../helpers");
let CreateInscripcionResolver = class CreateInscripcionResolver {
    async createInscripcion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).inscripcion.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Inscripcion_1.Inscripcion, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateInscripcionArgs_1.CreateInscripcionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateInscripcionResolver.prototype, "createInscripcion", null);
CreateInscripcionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Inscripcion_1.Inscripcion)
], CreateInscripcionResolver);
exports.CreateInscripcionResolver = CreateInscripcionResolver;
