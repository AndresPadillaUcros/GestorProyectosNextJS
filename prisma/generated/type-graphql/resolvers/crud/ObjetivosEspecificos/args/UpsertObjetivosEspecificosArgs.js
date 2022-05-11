"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertObjetivosEspecificosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ObjetivosEspecificosCreateInput_1 = require("../../../inputs/ObjetivosEspecificosCreateInput");
const ObjetivosEspecificosUpdateInput_1 = require("../../../inputs/ObjetivosEspecificosUpdateInput");
const ObjetivosEspecificosWhereUniqueInput_1 = require("../../../inputs/ObjetivosEspecificosWhereUniqueInput");
let UpsertObjetivosEspecificosArgs = class UpsertObjetivosEspecificosArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosWhereUniqueInput_1.ObjetivosEspecificosWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosWhereUniqueInput_1.ObjetivosEspecificosWhereUniqueInput)
], UpsertObjetivosEspecificosArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosCreateInput_1.ObjetivosEspecificosCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosCreateInput_1.ObjetivosEspecificosCreateInput)
], UpsertObjetivosEspecificosArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosUpdateInput_1.ObjetivosEspecificosUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosUpdateInput_1.ObjetivosEspecificosUpdateInput)
], UpsertObjetivosEspecificosArgs.prototype, "update", void 0);
UpsertObjetivosEspecificosArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertObjetivosEspecificosArgs);
exports.UpsertObjetivosEspecificosArgs = UpsertObjetivosEspecificosArgs;
