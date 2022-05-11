"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueObjetivosEspecificosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ObjetivosEspecificosWhereUniqueInput_1 = require("../../../inputs/ObjetivosEspecificosWhereUniqueInput");
let FindUniqueObjetivosEspecificosArgs = class FindUniqueObjetivosEspecificosArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosWhereUniqueInput_1.ObjetivosEspecificosWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosWhereUniqueInput_1.ObjetivosEspecificosWhereUniqueInput)
], FindUniqueObjetivosEspecificosArgs.prototype, "where", void 0);
FindUniqueObjetivosEspecificosArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueObjetivosEspecificosArgs);
exports.FindUniqueObjetivosEspecificosArgs = FindUniqueObjetivosEspecificosArgs;
