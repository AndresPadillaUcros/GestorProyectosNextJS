"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionUpdateManyWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InscripcionCreateManyProyectoInputEnvelope_1 = require("../inputs/InscripcionCreateManyProyectoInputEnvelope");
const InscripcionCreateOrConnectWithoutProyectoInput_1 = require("../inputs/InscripcionCreateOrConnectWithoutProyectoInput");
const InscripcionCreateWithoutProyectoInput_1 = require("../inputs/InscripcionCreateWithoutProyectoInput");
const InscripcionScalarWhereInput_1 = require("../inputs/InscripcionScalarWhereInput");
const InscripcionUpdateManyWithWhereWithoutProyectoInput_1 = require("../inputs/InscripcionUpdateManyWithWhereWithoutProyectoInput");
const InscripcionUpdateWithWhereUniqueWithoutProyectoInput_1 = require("../inputs/InscripcionUpdateWithWhereUniqueWithoutProyectoInput");
const InscripcionUpsertWithWhereUniqueWithoutProyectoInput_1 = require("../inputs/InscripcionUpsertWithWhereUniqueWithoutProyectoInput");
const InscripcionWhereUniqueInput_1 = require("../inputs/InscripcionWhereUniqueInput");
let InscripcionUpdateManyWithoutProyectoInput = class InscripcionUpdateManyWithoutProyectoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionCreateWithoutProyectoInput_1.InscripcionCreateWithoutProyectoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionUpdateManyWithoutProyectoInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionCreateOrConnectWithoutProyectoInput_1.InscripcionCreateOrConnectWithoutProyectoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionUpdateManyWithoutProyectoInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionUpsertWithWhereUniqueWithoutProyectoInput_1.InscripcionUpsertWithWhereUniqueWithoutProyectoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionUpdateManyWithoutProyectoInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionCreateManyProyectoInputEnvelope_1.InscripcionCreateManyProyectoInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionCreateManyProyectoInputEnvelope_1.InscripcionCreateManyProyectoInputEnvelope)
], InscripcionUpdateManyWithoutProyectoInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionUpdateManyWithoutProyectoInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionUpdateManyWithoutProyectoInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionUpdateManyWithoutProyectoInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionUpdateManyWithoutProyectoInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionUpdateWithWhereUniqueWithoutProyectoInput_1.InscripcionUpdateWithWhereUniqueWithoutProyectoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionUpdateManyWithoutProyectoInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionUpdateManyWithWhereWithoutProyectoInput_1.InscripcionUpdateManyWithWhereWithoutProyectoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionUpdateManyWithoutProyectoInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionScalarWhereInput_1.InscripcionScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionUpdateManyWithoutProyectoInput.prototype, "deleteMany", void 0);
InscripcionUpdateManyWithoutProyectoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InscripcionUpdateManyWithoutProyectoInput", {
        isAbstract: true
    })
], InscripcionUpdateManyWithoutProyectoInput);
exports.InscripcionUpdateManyWithoutProyectoInput = InscripcionUpdateManyWithoutProyectoInput;
