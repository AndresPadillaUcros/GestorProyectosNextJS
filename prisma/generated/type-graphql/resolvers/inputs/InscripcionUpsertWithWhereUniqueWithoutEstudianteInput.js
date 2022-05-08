"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionUpsertWithWhereUniqueWithoutEstudianteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InscripcionCreateWithoutEstudianteInput_1 = require("../inputs/InscripcionCreateWithoutEstudianteInput");
const InscripcionUpdateWithoutEstudianteInput_1 = require("../inputs/InscripcionUpdateWithoutEstudianteInput");
const InscripcionWhereUniqueInput_1 = require("../inputs/InscripcionWhereUniqueInput");
let InscripcionUpsertWithWhereUniqueWithoutEstudianteInput = class InscripcionUpsertWithWhereUniqueWithoutEstudianteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput)
], InscripcionUpsertWithWhereUniqueWithoutEstudianteInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionUpdateWithoutEstudianteInput_1.InscripcionUpdateWithoutEstudianteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InscripcionUpdateWithoutEstudianteInput_1.InscripcionUpdateWithoutEstudianteInput)
], InscripcionUpsertWithWhereUniqueWithoutEstudianteInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionCreateWithoutEstudianteInput_1.InscripcionCreateWithoutEstudianteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InscripcionCreateWithoutEstudianteInput_1.InscripcionCreateWithoutEstudianteInput)
], InscripcionUpsertWithWhereUniqueWithoutEstudianteInput.prototype, "create", void 0);
InscripcionUpsertWithWhereUniqueWithoutEstudianteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InscripcionUpsertWithWhereUniqueWithoutEstudianteInput", {
        isAbstract: true
    })
], InscripcionUpsertWithWhereUniqueWithoutEstudianteInput);
exports.InscripcionUpsertWithWhereUniqueWithoutEstudianteInput = InscripcionUpsertWithWhereUniqueWithoutEstudianteInput;
