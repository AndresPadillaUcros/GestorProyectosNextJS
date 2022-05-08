"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvancesUpdateWithWhereUniqueWithoutCreadoPorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesUpdateWithoutCreadoPorInput_1 = require("../inputs/AvancesUpdateWithoutCreadoPorInput");
const AvancesWhereUniqueInput_1 = require("../inputs/AvancesWhereUniqueInput");
let AvancesUpdateWithWhereUniqueWithoutCreadoPorInput = class AvancesUpdateWithWhereUniqueWithoutCreadoPorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesWhereUniqueInput_1.AvancesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvancesWhereUniqueInput_1.AvancesWhereUniqueInput)
], AvancesUpdateWithWhereUniqueWithoutCreadoPorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesUpdateWithoutCreadoPorInput_1.AvancesUpdateWithoutCreadoPorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvancesUpdateWithoutCreadoPorInput_1.AvancesUpdateWithoutCreadoPorInput)
], AvancesUpdateWithWhereUniqueWithoutCreadoPorInput.prototype, "data", void 0);
AvancesUpdateWithWhereUniqueWithoutCreadoPorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvancesUpdateWithWhereUniqueWithoutCreadoPorInput", {
        isAbstract: true
    })
], AvancesUpdateWithWhereUniqueWithoutCreadoPorInput);
exports.AvancesUpdateWithWhereUniqueWithoutCreadoPorInput = AvancesUpdateWithWhereUniqueWithoutCreadoPorInput;
