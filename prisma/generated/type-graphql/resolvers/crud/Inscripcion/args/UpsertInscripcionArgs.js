"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertInscripcionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InscripcionCreateInput_1 = require("../../../inputs/InscripcionCreateInput");
const InscripcionUpdateInput_1 = require("../../../inputs/InscripcionUpdateInput");
const InscripcionWhereUniqueInput_1 = require("../../../inputs/InscripcionWhereUniqueInput");
let UpsertInscripcionArgs = class UpsertInscripcionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput)
], UpsertInscripcionArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionCreateInput_1.InscripcionCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InscripcionCreateInput_1.InscripcionCreateInput)
], UpsertInscripcionArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionUpdateInput_1.InscripcionUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InscripcionUpdateInput_1.InscripcionUpdateInput)
], UpsertInscripcionArgs.prototype, "update", void 0);
UpsertInscripcionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertInscripcionArgs);
exports.UpsertInscripcionArgs = UpsertInscripcionArgs;
