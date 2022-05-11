"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyObjetivosEspecificosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ObjetivosEspecificosWhereInput_1 = require("../../../inputs/ObjetivosEspecificosWhereInput");
let DeleteManyObjetivosEspecificosArgs = class DeleteManyObjetivosEspecificosArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosWhereInput_1.ObjetivosEspecificosWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosWhereInput_1.ObjetivosEspecificosWhereInput)
], DeleteManyObjetivosEspecificosArgs.prototype, "where", void 0);
DeleteManyObjetivosEspecificosArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyObjetivosEspecificosArgs);
exports.DeleteManyObjetivosEspecificosArgs = DeleteManyObjetivosEspecificosArgs;
