"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivosEspecificosUpdateManyWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ObjetivosEspecificosCreateManyProyectoInputEnvelope_1 = require("../inputs/ObjetivosEspecificosCreateManyProyectoInputEnvelope");
const ObjetivosEspecificosCreateOrConnectWithoutProyectoInput_1 = require("../inputs/ObjetivosEspecificosCreateOrConnectWithoutProyectoInput");
const ObjetivosEspecificosCreateWithoutProyectoInput_1 = require("../inputs/ObjetivosEspecificosCreateWithoutProyectoInput");
const ObjetivosEspecificosScalarWhereInput_1 = require("../inputs/ObjetivosEspecificosScalarWhereInput");
const ObjetivosEspecificosUpdateManyWithWhereWithoutProyectoInput_1 = require("../inputs/ObjetivosEspecificosUpdateManyWithWhereWithoutProyectoInput");
const ObjetivosEspecificosUpdateWithWhereUniqueWithoutProyectoInput_1 = require("../inputs/ObjetivosEspecificosUpdateWithWhereUniqueWithoutProyectoInput");
const ObjetivosEspecificosUpsertWithWhereUniqueWithoutProyectoInput_1 = require("../inputs/ObjetivosEspecificosUpsertWithWhereUniqueWithoutProyectoInput");
const ObjetivosEspecificosWhereUniqueInput_1 = require("../inputs/ObjetivosEspecificosWhereUniqueInput");
let ObjetivosEspecificosUpdateManyWithoutProyectoInput = class ObjetivosEspecificosUpdateManyWithoutProyectoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ObjetivosEspecificosCreateWithoutProyectoInput_1.ObjetivosEspecificosCreateWithoutProyectoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ObjetivosEspecificosUpdateManyWithoutProyectoInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ObjetivosEspecificosCreateOrConnectWithoutProyectoInput_1.ObjetivosEspecificosCreateOrConnectWithoutProyectoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ObjetivosEspecificosUpdateManyWithoutProyectoInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ObjetivosEspecificosUpsertWithWhereUniqueWithoutProyectoInput_1.ObjetivosEspecificosUpsertWithWhereUniqueWithoutProyectoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ObjetivosEspecificosUpdateManyWithoutProyectoInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosCreateManyProyectoInputEnvelope_1.ObjetivosEspecificosCreateManyProyectoInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosCreateManyProyectoInputEnvelope_1.ObjetivosEspecificosCreateManyProyectoInputEnvelope)
], ObjetivosEspecificosUpdateManyWithoutProyectoInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ObjetivosEspecificosWhereUniqueInput_1.ObjetivosEspecificosWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ObjetivosEspecificosUpdateManyWithoutProyectoInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ObjetivosEspecificosWhereUniqueInput_1.ObjetivosEspecificosWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ObjetivosEspecificosUpdateManyWithoutProyectoInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ObjetivosEspecificosWhereUniqueInput_1.ObjetivosEspecificosWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ObjetivosEspecificosUpdateManyWithoutProyectoInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ObjetivosEspecificosWhereUniqueInput_1.ObjetivosEspecificosWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ObjetivosEspecificosUpdateManyWithoutProyectoInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ObjetivosEspecificosUpdateWithWhereUniqueWithoutProyectoInput_1.ObjetivosEspecificosUpdateWithWhereUniqueWithoutProyectoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ObjetivosEspecificosUpdateManyWithoutProyectoInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ObjetivosEspecificosUpdateManyWithWhereWithoutProyectoInput_1.ObjetivosEspecificosUpdateManyWithWhereWithoutProyectoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ObjetivosEspecificosUpdateManyWithoutProyectoInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ObjetivosEspecificosScalarWhereInput_1.ObjetivosEspecificosScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ObjetivosEspecificosUpdateManyWithoutProyectoInput.prototype, "deleteMany", void 0);
ObjetivosEspecificosUpdateManyWithoutProyectoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ObjetivosEspecificosUpdateManyWithoutProyectoInput", {
        isAbstract: true
    })
], ObjetivosEspecificosUpdateManyWithoutProyectoInput);
exports.ObjetivosEspecificosUpdateManyWithoutProyectoInput = ObjetivosEspecificosUpdateManyWithoutProyectoInput;
