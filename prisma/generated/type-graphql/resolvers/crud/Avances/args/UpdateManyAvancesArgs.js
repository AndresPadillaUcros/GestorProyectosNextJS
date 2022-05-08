"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyAvancesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesUpdateManyMutationInput_1 = require("../../../inputs/AvancesUpdateManyMutationInput");
const AvancesWhereInput_1 = require("../../../inputs/AvancesWhereInput");
let UpdateManyAvancesArgs = class UpdateManyAvancesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesUpdateManyMutationInput_1.AvancesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvancesUpdateManyMutationInput_1.AvancesUpdateManyMutationInput)
], UpdateManyAvancesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesWhereInput_1.AvancesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvancesWhereInput_1.AvancesWhereInput)
], UpdateManyAvancesArgs.prototype, "where", void 0);
UpdateManyAvancesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyAvancesArgs);
exports.UpdateManyAvancesArgs = UpdateManyAvancesArgs;
