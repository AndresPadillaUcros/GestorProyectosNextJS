"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyAvancesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesWhereInput_1 = require("../../../inputs/AvancesWhereInput");
let DeleteManyAvancesArgs = class DeleteManyAvancesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesWhereInput_1.AvancesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvancesWhereInput_1.AvancesWhereInput)
], DeleteManyAvancesArgs.prototype, "where", void 0);
DeleteManyAvancesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyAvancesArgs);
exports.DeleteManyAvancesArgs = DeleteManyAvancesArgs;
