"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAvancesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesWhereUniqueInput_1 = require("../../../inputs/AvancesWhereUniqueInput");
let DeleteAvancesArgs = class DeleteAvancesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesWhereUniqueInput_1.AvancesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvancesWhereUniqueInput_1.AvancesWhereUniqueInput)
], DeleteAvancesArgs.prototype, "where", void 0);
DeleteAvancesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteAvancesArgs);
exports.DeleteAvancesArgs = DeleteAvancesArgs;
