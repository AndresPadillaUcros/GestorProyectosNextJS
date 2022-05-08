"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAvancesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesCreateManyInput_1 = require("../../../inputs/AvancesCreateManyInput");
let CreateManyAvancesArgs = class CreateManyAvancesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvancesCreateManyInput_1.AvancesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyAvancesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyAvancesArgs.prototype, "skipDuplicates", void 0);
CreateManyAvancesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAvancesArgs);
exports.CreateManyAvancesArgs = CreateManyAvancesArgs;
