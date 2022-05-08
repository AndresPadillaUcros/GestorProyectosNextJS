"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvancesUpdateManyWithoutCreadoPorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesCreateManyCreadoPorInputEnvelope_1 = require("../inputs/AvancesCreateManyCreadoPorInputEnvelope");
const AvancesCreateOrConnectWithoutCreadoPorInput_1 = require("../inputs/AvancesCreateOrConnectWithoutCreadoPorInput");
const AvancesCreateWithoutCreadoPorInput_1 = require("../inputs/AvancesCreateWithoutCreadoPorInput");
const AvancesScalarWhereInput_1 = require("../inputs/AvancesScalarWhereInput");
const AvancesUpdateManyWithWhereWithoutCreadoPorInput_1 = require("../inputs/AvancesUpdateManyWithWhereWithoutCreadoPorInput");
const AvancesUpdateWithWhereUniqueWithoutCreadoPorInput_1 = require("../inputs/AvancesUpdateWithWhereUniqueWithoutCreadoPorInput");
const AvancesUpsertWithWhereUniqueWithoutCreadoPorInput_1 = require("../inputs/AvancesUpsertWithWhereUniqueWithoutCreadoPorInput");
const AvancesWhereUniqueInput_1 = require("../inputs/AvancesWhereUniqueInput");
let AvancesUpdateManyWithoutCreadoPorInput = class AvancesUpdateManyWithoutCreadoPorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvancesCreateWithoutCreadoPorInput_1.AvancesCreateWithoutCreadoPorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvancesUpdateManyWithoutCreadoPorInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvancesCreateOrConnectWithoutCreadoPorInput_1.AvancesCreateOrConnectWithoutCreadoPorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvancesUpdateManyWithoutCreadoPorInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvancesUpsertWithWhereUniqueWithoutCreadoPorInput_1.AvancesUpsertWithWhereUniqueWithoutCreadoPorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvancesUpdateManyWithoutCreadoPorInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesCreateManyCreadoPorInputEnvelope_1.AvancesCreateManyCreadoPorInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvancesCreateManyCreadoPorInputEnvelope_1.AvancesCreateManyCreadoPorInputEnvelope)
], AvancesUpdateManyWithoutCreadoPorInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvancesWhereUniqueInput_1.AvancesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvancesUpdateManyWithoutCreadoPorInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvancesWhereUniqueInput_1.AvancesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvancesUpdateManyWithoutCreadoPorInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvancesWhereUniqueInput_1.AvancesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvancesUpdateManyWithoutCreadoPorInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvancesWhereUniqueInput_1.AvancesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvancesUpdateManyWithoutCreadoPorInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvancesUpdateWithWhereUniqueWithoutCreadoPorInput_1.AvancesUpdateWithWhereUniqueWithoutCreadoPorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvancesUpdateManyWithoutCreadoPorInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvancesUpdateManyWithWhereWithoutCreadoPorInput_1.AvancesUpdateManyWithWhereWithoutCreadoPorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvancesUpdateManyWithoutCreadoPorInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvancesScalarWhereInput_1.AvancesScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvancesUpdateManyWithoutCreadoPorInput.prototype, "deleteMany", void 0);
AvancesUpdateManyWithoutCreadoPorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvancesUpdateManyWithoutCreadoPorInput", {
        isAbstract: true
    })
], AvancesUpdateManyWithoutCreadoPorInput);
exports.AvancesUpdateManyWithoutCreadoPorInput = AvancesUpdateManyWithoutCreadoPorInput;
