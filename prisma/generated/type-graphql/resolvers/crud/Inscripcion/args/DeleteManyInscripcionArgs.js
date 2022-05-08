"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyInscripcionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InscripcionWhereInput_1 = require("../../../inputs/InscripcionWhereInput");
let DeleteManyInscripcionArgs = class DeleteManyInscripcionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionWhereInput_1.InscripcionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionWhereInput_1.InscripcionWhereInput)
], DeleteManyInscripcionArgs.prototype, "where", void 0);
DeleteManyInscripcionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyInscripcionArgs);
exports.DeleteManyInscripcionArgs = DeleteManyInscripcionArgs;
