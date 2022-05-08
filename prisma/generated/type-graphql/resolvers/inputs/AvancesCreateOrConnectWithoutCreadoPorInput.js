"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvancesCreateOrConnectWithoutCreadoPorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesCreateWithoutCreadoPorInput_1 = require("../inputs/AvancesCreateWithoutCreadoPorInput");
const AvancesWhereUniqueInput_1 = require("../inputs/AvancesWhereUniqueInput");
let AvancesCreateOrConnectWithoutCreadoPorInput = class AvancesCreateOrConnectWithoutCreadoPorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesWhereUniqueInput_1.AvancesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvancesWhereUniqueInput_1.AvancesWhereUniqueInput)
], AvancesCreateOrConnectWithoutCreadoPorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesCreateWithoutCreadoPorInput_1.AvancesCreateWithoutCreadoPorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvancesCreateWithoutCreadoPorInput_1.AvancesCreateWithoutCreadoPorInput)
], AvancesCreateOrConnectWithoutCreadoPorInput.prototype, "create", void 0);
AvancesCreateOrConnectWithoutCreadoPorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvancesCreateOrConnectWithoutCreadoPorInput", {
        isAbstract: true
    })
], AvancesCreateOrConnectWithoutCreadoPorInput);
exports.AvancesCreateOrConnectWithoutCreadoPorInput = AvancesCreateOrConnectWithoutCreadoPorInput;
