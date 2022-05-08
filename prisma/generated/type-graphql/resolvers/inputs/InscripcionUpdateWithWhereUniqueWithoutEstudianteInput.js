"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionUpdateWithWhereUniqueWithoutEstudianteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InscripcionUpdateWithoutEstudianteInput_1 = require("../inputs/InscripcionUpdateWithoutEstudianteInput");
const InscripcionWhereUniqueInput_1 = require("../inputs/InscripcionWhereUniqueInput");
let InscripcionUpdateWithWhereUniqueWithoutEstudianteInput = class InscripcionUpdateWithWhereUniqueWithoutEstudianteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput)
], InscripcionUpdateWithWhereUniqueWithoutEstudianteInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionUpdateWithoutEstudianteInput_1.InscripcionUpdateWithoutEstudianteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InscripcionUpdateWithoutEstudianteInput_1.InscripcionUpdateWithoutEstudianteInput)
], InscripcionUpdateWithWhereUniqueWithoutEstudianteInput.prototype, "data", void 0);
InscripcionUpdateWithWhereUniqueWithoutEstudianteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InscripcionUpdateWithWhereUniqueWithoutEstudianteInput", {
        isAbstract: true
    })
], InscripcionUpdateWithWhereUniqueWithoutEstudianteInput);
exports.InscripcionUpdateWithWhereUniqueWithoutEstudianteInput = InscripcionUpdateWithWhereUniqueWithoutEstudianteInput;
