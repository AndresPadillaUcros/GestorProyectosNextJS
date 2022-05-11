"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteObjetivosEspecificosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ObjetivosEspecificosWhereUniqueInput_1 = require("../../../inputs/ObjetivosEspecificosWhereUniqueInput");
let DeleteObjetivosEspecificosArgs = class DeleteObjetivosEspecificosArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosWhereUniqueInput_1.ObjetivosEspecificosWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosWhereUniqueInput_1.ObjetivosEspecificosWhereUniqueInput)
], DeleteObjetivosEspecificosArgs.prototype, "where", void 0);
DeleteObjetivosEspecificosArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteObjetivosEspecificosArgs);
exports.DeleteObjetivosEspecificosArgs = DeleteObjetivosEspecificosArgs;
