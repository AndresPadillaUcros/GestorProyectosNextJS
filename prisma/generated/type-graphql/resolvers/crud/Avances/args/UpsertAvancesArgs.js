"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertAvancesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesCreateInput_1 = require("../../../inputs/AvancesCreateInput");
const AvancesUpdateInput_1 = require("../../../inputs/AvancesUpdateInput");
const AvancesWhereUniqueInput_1 = require("../../../inputs/AvancesWhereUniqueInput");
let UpsertAvancesArgs = class UpsertAvancesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesWhereUniqueInput_1.AvancesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvancesWhereUniqueInput_1.AvancesWhereUniqueInput)
], UpsertAvancesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesCreateInput_1.AvancesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvancesCreateInput_1.AvancesCreateInput)
], UpsertAvancesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesUpdateInput_1.AvancesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvancesUpdateInput_1.AvancesUpdateInput)
], UpsertAvancesArgs.prototype, "update", void 0);
UpsertAvancesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertAvancesArgs);
exports.UpsertAvancesArgs = UpsertAvancesArgs;
