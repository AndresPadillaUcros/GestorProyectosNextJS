"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAvancesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesUpdateInput_1 = require("../../../inputs/AvancesUpdateInput");
const AvancesWhereUniqueInput_1 = require("../../../inputs/AvancesWhereUniqueInput");
let UpdateAvancesArgs = class UpdateAvancesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesUpdateInput_1.AvancesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvancesUpdateInput_1.AvancesUpdateInput)
], UpdateAvancesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesWhereUniqueInput_1.AvancesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvancesWhereUniqueInput_1.AvancesWhereUniqueInput)
], UpdateAvancesArgs.prototype, "where", void 0);
UpdateAvancesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateAvancesArgs);
exports.UpdateAvancesArgs = UpdateAvancesArgs;
