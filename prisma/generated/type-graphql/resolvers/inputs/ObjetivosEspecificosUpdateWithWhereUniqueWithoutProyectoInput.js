"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivosEspecificosUpdateWithWhereUniqueWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ObjetivosEspecificosUpdateWithoutProyectoInput_1 = require("../inputs/ObjetivosEspecificosUpdateWithoutProyectoInput");
const ObjetivosEspecificosWhereUniqueInput_1 = require("../inputs/ObjetivosEspecificosWhereUniqueInput");
let ObjetivosEspecificosUpdateWithWhereUniqueWithoutProyectoInput = class ObjetivosEspecificosUpdateWithWhereUniqueWithoutProyectoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosWhereUniqueInput_1.ObjetivosEspecificosWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosWhereUniqueInput_1.ObjetivosEspecificosWhereUniqueInput)
], ObjetivosEspecificosUpdateWithWhereUniqueWithoutProyectoInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosUpdateWithoutProyectoInput_1.ObjetivosEspecificosUpdateWithoutProyectoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosUpdateWithoutProyectoInput_1.ObjetivosEspecificosUpdateWithoutProyectoInput)
], ObjetivosEspecificosUpdateWithWhereUniqueWithoutProyectoInput.prototype, "data", void 0);
ObjetivosEspecificosUpdateWithWhereUniqueWithoutProyectoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ObjetivosEspecificosUpdateWithWhereUniqueWithoutProyectoInput", {
        isAbstract: true
    })
], ObjetivosEspecificosUpdateWithWhereUniqueWithoutProyectoInput);
exports.ObjetivosEspecificosUpdateWithWhereUniqueWithoutProyectoInput = ObjetivosEspecificosUpdateWithWhereUniqueWithoutProyectoInput;
