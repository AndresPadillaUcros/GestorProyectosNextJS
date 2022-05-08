"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionUpdateWithWhereUniqueWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InscripcionUpdateWithoutProyectoInput_1 = require("../inputs/InscripcionUpdateWithoutProyectoInput");
const InscripcionWhereUniqueInput_1 = require("../inputs/InscripcionWhereUniqueInput");
let InscripcionUpdateWithWhereUniqueWithoutProyectoInput = class InscripcionUpdateWithWhereUniqueWithoutProyectoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput)
], InscripcionUpdateWithWhereUniqueWithoutProyectoInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionUpdateWithoutProyectoInput_1.InscripcionUpdateWithoutProyectoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InscripcionUpdateWithoutProyectoInput_1.InscripcionUpdateWithoutProyectoInput)
], InscripcionUpdateWithWhereUniqueWithoutProyectoInput.prototype, "data", void 0);
InscripcionUpdateWithWhereUniqueWithoutProyectoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InscripcionUpdateWithWhereUniqueWithoutProyectoInput", {
        isAbstract: true
    })
], InscripcionUpdateWithWhereUniqueWithoutProyectoInput);
exports.InscripcionUpdateWithWhereUniqueWithoutProyectoInput = InscripcionUpdateWithWhereUniqueWithoutProyectoInput;
