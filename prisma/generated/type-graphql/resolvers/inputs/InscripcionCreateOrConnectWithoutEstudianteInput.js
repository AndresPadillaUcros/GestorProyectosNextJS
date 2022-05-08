"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionCreateOrConnectWithoutEstudianteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InscripcionCreateWithoutEstudianteInput_1 = require("../inputs/InscripcionCreateWithoutEstudianteInput");
const InscripcionWhereUniqueInput_1 = require("../inputs/InscripcionWhereUniqueInput");
let InscripcionCreateOrConnectWithoutEstudianteInput = class InscripcionCreateOrConnectWithoutEstudianteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput)
], InscripcionCreateOrConnectWithoutEstudianteInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionCreateWithoutEstudianteInput_1.InscripcionCreateWithoutEstudianteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InscripcionCreateWithoutEstudianteInput_1.InscripcionCreateWithoutEstudianteInput)
], InscripcionCreateOrConnectWithoutEstudianteInput.prototype, "create", void 0);
InscripcionCreateOrConnectWithoutEstudianteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InscripcionCreateOrConnectWithoutEstudianteInput", {
        isAbstract: true
    })
], InscripcionCreateOrConnectWithoutEstudianteInput);
exports.InscripcionCreateOrConnectWithoutEstudianteInput = InscripcionCreateOrConnectWithoutEstudianteInput;
