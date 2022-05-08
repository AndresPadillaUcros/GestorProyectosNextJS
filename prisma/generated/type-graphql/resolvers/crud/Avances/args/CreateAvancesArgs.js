"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAvancesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesCreateInput_1 = require("../../../inputs/AvancesCreateInput");
let CreateAvancesArgs = class CreateAvancesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesCreateInput_1.AvancesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvancesCreateInput_1.AvancesCreateInput)
], CreateAvancesArgs.prototype, "data", void 0);
CreateAvancesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateAvancesArgs);
exports.CreateAvancesArgs = CreateAvancesArgs;
