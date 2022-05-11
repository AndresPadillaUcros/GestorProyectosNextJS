"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyObjetivosEspecificosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ObjetivosEspecificosUpdateManyMutationInput_1 = require("../../../inputs/ObjetivosEspecificosUpdateManyMutationInput");
const ObjetivosEspecificosWhereInput_1 = require("../../../inputs/ObjetivosEspecificosWhereInput");
let UpdateManyObjetivosEspecificosArgs = class UpdateManyObjetivosEspecificosArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosUpdateManyMutationInput_1.ObjetivosEspecificosUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosUpdateManyMutationInput_1.ObjetivosEspecificosUpdateManyMutationInput)
], UpdateManyObjetivosEspecificosArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosWhereInput_1.ObjetivosEspecificosWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosWhereInput_1.ObjetivosEspecificosWhereInput)
], UpdateManyObjetivosEspecificosArgs.prototype, "where", void 0);
UpdateManyObjetivosEspecificosArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyObjetivosEspecificosArgs);
exports.UpdateManyObjetivosEspecificosArgs = UpdateManyObjetivosEspecificosArgs;
