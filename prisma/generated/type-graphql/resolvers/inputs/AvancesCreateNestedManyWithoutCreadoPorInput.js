"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvancesCreateNestedManyWithoutCreadoPorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesCreateManyCreadoPorInputEnvelope_1 = require("../inputs/AvancesCreateManyCreadoPorInputEnvelope");
const AvancesCreateOrConnectWithoutCreadoPorInput_1 = require("../inputs/AvancesCreateOrConnectWithoutCreadoPorInput");
const AvancesCreateWithoutCreadoPorInput_1 = require("../inputs/AvancesCreateWithoutCreadoPorInput");
const AvancesWhereUniqueInput_1 = require("../inputs/AvancesWhereUniqueInput");
let AvancesCreateNestedManyWithoutCreadoPorInput = class AvancesCreateNestedManyWithoutCreadoPorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvancesCreateWithoutCreadoPorInput_1.AvancesCreateWithoutCreadoPorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvancesCreateNestedManyWithoutCreadoPorInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvancesCreateOrConnectWithoutCreadoPorInput_1.AvancesCreateOrConnectWithoutCreadoPorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvancesCreateNestedManyWithoutCreadoPorInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesCreateManyCreadoPorInputEnvelope_1.AvancesCreateManyCreadoPorInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvancesCreateManyCreadoPorInputEnvelope_1.AvancesCreateManyCreadoPorInputEnvelope)
], AvancesCreateNestedManyWithoutCreadoPorInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvancesWhereUniqueInput_1.AvancesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvancesCreateNestedManyWithoutCreadoPorInput.prototype, "connect", void 0);
AvancesCreateNestedManyWithoutCreadoPorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvancesCreateNestedManyWithoutCreadoPorInput", {
        isAbstract: true
    })
], AvancesCreateNestedManyWithoutCreadoPorInput);
exports.AvancesCreateNestedManyWithoutCreadoPorInput = AvancesCreateNestedManyWithoutCreadoPorInput;
