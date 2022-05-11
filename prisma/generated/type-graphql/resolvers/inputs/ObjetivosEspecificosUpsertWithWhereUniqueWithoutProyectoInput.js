"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivosEspecificosUpsertWithWhereUniqueWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ObjetivosEspecificosCreateWithoutProyectoInput_1 = require("../inputs/ObjetivosEspecificosCreateWithoutProyectoInput");
const ObjetivosEspecificosUpdateWithoutProyectoInput_1 = require("../inputs/ObjetivosEspecificosUpdateWithoutProyectoInput");
const ObjetivosEspecificosWhereUniqueInput_1 = require("../inputs/ObjetivosEspecificosWhereUniqueInput");
let ObjetivosEspecificosUpsertWithWhereUniqueWithoutProyectoInput = class ObjetivosEspecificosUpsertWithWhereUniqueWithoutProyectoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosWhereUniqueInput_1.ObjetivosEspecificosWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosWhereUniqueInput_1.ObjetivosEspecificosWhereUniqueInput)
], ObjetivosEspecificosUpsertWithWhereUniqueWithoutProyectoInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosUpdateWithoutProyectoInput_1.ObjetivosEspecificosUpdateWithoutProyectoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosUpdateWithoutProyectoInput_1.ObjetivosEspecificosUpdateWithoutProyectoInput)
], ObjetivosEspecificosUpsertWithWhereUniqueWithoutProyectoInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosCreateWithoutProyectoInput_1.ObjetivosEspecificosCreateWithoutProyectoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosCreateWithoutProyectoInput_1.ObjetivosEspecificosCreateWithoutProyectoInput)
], ObjetivosEspecificosUpsertWithWhereUniqueWithoutProyectoInput.prototype, "create", void 0);
ObjetivosEspecificosUpsertWithWhereUniqueWithoutProyectoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ObjetivosEspecificosUpsertWithWhereUniqueWithoutProyectoInput", {
        isAbstract: true
    })
], ObjetivosEspecificosUpsertWithWhereUniqueWithoutProyectoInput);
exports.ObjetivosEspecificosUpsertWithWhereUniqueWithoutProyectoInput = ObjetivosEspecificosUpsertWithWhereUniqueWithoutProyectoInput;
