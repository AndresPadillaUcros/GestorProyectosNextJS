"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvancesUpsertWithWhereUniqueWithoutCreadoPorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesCreateWithoutCreadoPorInput_1 = require("../inputs/AvancesCreateWithoutCreadoPorInput");
const AvancesUpdateWithoutCreadoPorInput_1 = require("../inputs/AvancesUpdateWithoutCreadoPorInput");
const AvancesWhereUniqueInput_1 = require("../inputs/AvancesWhereUniqueInput");
let AvancesUpsertWithWhereUniqueWithoutCreadoPorInput = class AvancesUpsertWithWhereUniqueWithoutCreadoPorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesWhereUniqueInput_1.AvancesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvancesWhereUniqueInput_1.AvancesWhereUniqueInput)
], AvancesUpsertWithWhereUniqueWithoutCreadoPorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesUpdateWithoutCreadoPorInput_1.AvancesUpdateWithoutCreadoPorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvancesUpdateWithoutCreadoPorInput_1.AvancesUpdateWithoutCreadoPorInput)
], AvancesUpsertWithWhereUniqueWithoutCreadoPorInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesCreateWithoutCreadoPorInput_1.AvancesCreateWithoutCreadoPorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvancesCreateWithoutCreadoPorInput_1.AvancesCreateWithoutCreadoPorInput)
], AvancesUpsertWithWhereUniqueWithoutCreadoPorInput.prototype, "create", void 0);
AvancesUpsertWithWhereUniqueWithoutCreadoPorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvancesUpsertWithWhereUniqueWithoutCreadoPorInput", {
        isAbstract: true
    })
], AvancesUpsertWithWhereUniqueWithoutCreadoPorInput);
exports.AvancesUpsertWithWhereUniqueWithoutCreadoPorInput = AvancesUpsertWithWhereUniqueWithoutCreadoPorInput;
