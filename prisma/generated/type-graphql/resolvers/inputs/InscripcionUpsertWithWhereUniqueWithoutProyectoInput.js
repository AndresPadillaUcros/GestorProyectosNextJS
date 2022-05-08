"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionUpsertWithWhereUniqueWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InscripcionCreateWithoutProyectoInput_1 = require("../inputs/InscripcionCreateWithoutProyectoInput");
const InscripcionUpdateWithoutProyectoInput_1 = require("../inputs/InscripcionUpdateWithoutProyectoInput");
const InscripcionWhereUniqueInput_1 = require("../inputs/InscripcionWhereUniqueInput");
let InscripcionUpsertWithWhereUniqueWithoutProyectoInput = class InscripcionUpsertWithWhereUniqueWithoutProyectoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput)
], InscripcionUpsertWithWhereUniqueWithoutProyectoInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionUpdateWithoutProyectoInput_1.InscripcionUpdateWithoutProyectoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InscripcionUpdateWithoutProyectoInput_1.InscripcionUpdateWithoutProyectoInput)
], InscripcionUpsertWithWhereUniqueWithoutProyectoInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionCreateWithoutProyectoInput_1.InscripcionCreateWithoutProyectoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InscripcionCreateWithoutProyectoInput_1.InscripcionCreateWithoutProyectoInput)
], InscripcionUpsertWithWhereUniqueWithoutProyectoInput.prototype, "create", void 0);
InscripcionUpsertWithWhereUniqueWithoutProyectoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InscripcionUpsertWithWhereUniqueWithoutProyectoInput", {
        isAbstract: true
    })
], InscripcionUpsertWithWhereUniqueWithoutProyectoInput);
exports.InscripcionUpsertWithWhereUniqueWithoutProyectoInput = InscripcionUpsertWithWhereUniqueWithoutProyectoInput;
