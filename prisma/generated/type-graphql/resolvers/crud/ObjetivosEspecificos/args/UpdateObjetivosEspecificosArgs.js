"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateObjetivosEspecificosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ObjetivosEspecificosUpdateInput_1 = require("../../../inputs/ObjetivosEspecificosUpdateInput");
const ObjetivosEspecificosWhereUniqueInput_1 = require("../../../inputs/ObjetivosEspecificosWhereUniqueInput");
let UpdateObjetivosEspecificosArgs = class UpdateObjetivosEspecificosArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosUpdateInput_1.ObjetivosEspecificosUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosUpdateInput_1.ObjetivosEspecificosUpdateInput)
], UpdateObjetivosEspecificosArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosWhereUniqueInput_1.ObjetivosEspecificosWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosWhereUniqueInput_1.ObjetivosEspecificosWhereUniqueInput)
], UpdateObjetivosEspecificosArgs.prototype, "where", void 0);
UpdateObjetivosEspecificosArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateObjetivosEspecificosArgs);
exports.UpdateObjetivosEspecificosArgs = UpdateObjetivosEspecificosArgs;
