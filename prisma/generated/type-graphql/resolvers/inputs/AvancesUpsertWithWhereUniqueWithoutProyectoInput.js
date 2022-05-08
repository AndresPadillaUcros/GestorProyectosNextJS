"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvancesUpsertWithWhereUniqueWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesCreateWithoutProyectoInput_1 = require("../inputs/AvancesCreateWithoutProyectoInput");
const AvancesUpdateWithoutProyectoInput_1 = require("../inputs/AvancesUpdateWithoutProyectoInput");
const AvancesWhereUniqueInput_1 = require("../inputs/AvancesWhereUniqueInput");
let AvancesUpsertWithWhereUniqueWithoutProyectoInput = class AvancesUpsertWithWhereUniqueWithoutProyectoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesWhereUniqueInput_1.AvancesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvancesWhereUniqueInput_1.AvancesWhereUniqueInput)
], AvancesUpsertWithWhereUniqueWithoutProyectoInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesUpdateWithoutProyectoInput_1.AvancesUpdateWithoutProyectoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvancesUpdateWithoutProyectoInput_1.AvancesUpdateWithoutProyectoInput)
], AvancesUpsertWithWhereUniqueWithoutProyectoInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesCreateWithoutProyectoInput_1.AvancesCreateWithoutProyectoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvancesCreateWithoutProyectoInput_1.AvancesCreateWithoutProyectoInput)
], AvancesUpsertWithWhereUniqueWithoutProyectoInput.prototype, "create", void 0);
AvancesUpsertWithWhereUniqueWithoutProyectoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvancesUpsertWithWhereUniqueWithoutProyectoInput", {
        isAbstract: true
    })
], AvancesUpsertWithWhereUniqueWithoutProyectoInput);
exports.AvancesUpsertWithWhereUniqueWithoutProyectoInput = AvancesUpsertWithWhereUniqueWithoutProyectoInput;
