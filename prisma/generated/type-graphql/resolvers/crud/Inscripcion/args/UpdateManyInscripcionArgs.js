"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyInscripcionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InscripcionUpdateManyMutationInput_1 = require("../../../inputs/InscripcionUpdateManyMutationInput");
const InscripcionWhereInput_1 = require("../../../inputs/InscripcionWhereInput");
let UpdateManyInscripcionArgs = class UpdateManyInscripcionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionUpdateManyMutationInput_1.InscripcionUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InscripcionUpdateManyMutationInput_1.InscripcionUpdateManyMutationInput)
], UpdateManyInscripcionArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionWhereInput_1.InscripcionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionWhereInput_1.InscripcionWhereInput)
], UpdateManyInscripcionArgs.prototype, "where", void 0);
UpdateManyInscripcionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyInscripcionArgs);
exports.UpdateManyInscripcionArgs = UpdateManyInscripcionArgs;
