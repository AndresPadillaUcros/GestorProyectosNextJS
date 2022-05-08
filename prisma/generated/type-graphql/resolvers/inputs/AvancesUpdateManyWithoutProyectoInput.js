"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvancesUpdateManyWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesCreateManyProyectoInputEnvelope_1 = require("../inputs/AvancesCreateManyProyectoInputEnvelope");
const AvancesCreateOrConnectWithoutProyectoInput_1 = require("../inputs/AvancesCreateOrConnectWithoutProyectoInput");
const AvancesCreateWithoutProyectoInput_1 = require("../inputs/AvancesCreateWithoutProyectoInput");
const AvancesScalarWhereInput_1 = require("../inputs/AvancesScalarWhereInput");
const AvancesUpdateManyWithWhereWithoutProyectoInput_1 = require("../inputs/AvancesUpdateManyWithWhereWithoutProyectoInput");
const AvancesUpdateWithWhereUniqueWithoutProyectoInput_1 = require("../inputs/AvancesUpdateWithWhereUniqueWithoutProyectoInput");
const AvancesUpsertWithWhereUniqueWithoutProyectoInput_1 = require("../inputs/AvancesUpsertWithWhereUniqueWithoutProyectoInput");
const AvancesWhereUniqueInput_1 = require("../inputs/AvancesWhereUniqueInput");
let AvancesUpdateManyWithoutProyectoInput = class AvancesUpdateManyWithoutProyectoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvancesCreateWithoutProyectoInput_1.AvancesCreateWithoutProyectoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvancesUpdateManyWithoutProyectoInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvancesCreateOrConnectWithoutProyectoInput_1.AvancesCreateOrConnectWithoutProyectoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvancesUpdateManyWithoutProyectoInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvancesUpsertWithWhereUniqueWithoutProyectoInput_1.AvancesUpsertWithWhereUniqueWithoutProyectoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvancesUpdateManyWithoutProyectoInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesCreateManyProyectoInputEnvelope_1.AvancesCreateManyProyectoInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvancesCreateManyProyectoInputEnvelope_1.AvancesCreateManyProyectoInputEnvelope)
], AvancesUpdateManyWithoutProyectoInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvancesWhereUniqueInput_1.AvancesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvancesUpdateManyWithoutProyectoInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvancesWhereUniqueInput_1.AvancesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvancesUpdateManyWithoutProyectoInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvancesWhereUniqueInput_1.AvancesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvancesUpdateManyWithoutProyectoInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvancesWhereUniqueInput_1.AvancesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvancesUpdateManyWithoutProyectoInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvancesUpdateWithWhereUniqueWithoutProyectoInput_1.AvancesUpdateWithWhereUniqueWithoutProyectoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvancesUpdateManyWithoutProyectoInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvancesUpdateManyWithWhereWithoutProyectoInput_1.AvancesUpdateManyWithWhereWithoutProyectoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvancesUpdateManyWithoutProyectoInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvancesScalarWhereInput_1.AvancesScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvancesUpdateManyWithoutProyectoInput.prototype, "deleteMany", void 0);
AvancesUpdateManyWithoutProyectoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvancesUpdateManyWithoutProyectoInput", {
        isAbstract: true
    })
], AvancesUpdateManyWithoutProyectoInput);
exports.AvancesUpdateManyWithoutProyectoInput = AvancesUpdateManyWithoutProyectoInput;
