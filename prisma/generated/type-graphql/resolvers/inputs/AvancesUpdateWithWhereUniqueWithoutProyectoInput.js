"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvancesUpdateWithWhereUniqueWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesUpdateWithoutProyectoInput_1 = require("../inputs/AvancesUpdateWithoutProyectoInput");
const AvancesWhereUniqueInput_1 = require("../inputs/AvancesWhereUniqueInput");
let AvancesUpdateWithWhereUniqueWithoutProyectoInput = class AvancesUpdateWithWhereUniqueWithoutProyectoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesWhereUniqueInput_1.AvancesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvancesWhereUniqueInput_1.AvancesWhereUniqueInput)
], AvancesUpdateWithWhereUniqueWithoutProyectoInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesUpdateWithoutProyectoInput_1.AvancesUpdateWithoutProyectoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvancesUpdateWithoutProyectoInput_1.AvancesUpdateWithoutProyectoInput)
], AvancesUpdateWithWhereUniqueWithoutProyectoInput.prototype, "data", void 0);
AvancesUpdateWithWhereUniqueWithoutProyectoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvancesUpdateWithWhereUniqueWithoutProyectoInput", {
        isAbstract: true
    })
], AvancesUpdateWithWhereUniqueWithoutProyectoInput);
exports.AvancesUpdateWithWhereUniqueWithoutProyectoInput = AvancesUpdateWithWhereUniqueWithoutProyectoInput;
