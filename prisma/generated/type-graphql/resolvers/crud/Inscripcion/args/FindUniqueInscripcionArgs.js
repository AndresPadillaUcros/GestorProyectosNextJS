"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueInscripcionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InscripcionWhereUniqueInput_1 = require("../../../inputs/InscripcionWhereUniqueInput");
let FindUniqueInscripcionArgs = class FindUniqueInscripcionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput)
], FindUniqueInscripcionArgs.prototype, "where", void 0);
FindUniqueInscripcionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueInscripcionArgs);
exports.FindUniqueInscripcionArgs = FindUniqueInscripcionArgs;
