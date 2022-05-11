"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivosEspecificosCreateNestedManyWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ObjetivosEspecificosCreateManyProyectoInputEnvelope_1 = require("../inputs/ObjetivosEspecificosCreateManyProyectoInputEnvelope");
const ObjetivosEspecificosCreateOrConnectWithoutProyectoInput_1 = require("../inputs/ObjetivosEspecificosCreateOrConnectWithoutProyectoInput");
const ObjetivosEspecificosCreateWithoutProyectoInput_1 = require("../inputs/ObjetivosEspecificosCreateWithoutProyectoInput");
const ObjetivosEspecificosWhereUniqueInput_1 = require("../inputs/ObjetivosEspecificosWhereUniqueInput");
let ObjetivosEspecificosCreateNestedManyWithoutProyectoInput = class ObjetivosEspecificosCreateNestedManyWithoutProyectoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ObjetivosEspecificosCreateWithoutProyectoInput_1.ObjetivosEspecificosCreateWithoutProyectoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ObjetivosEspecificosCreateNestedManyWithoutProyectoInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ObjetivosEspecificosCreateOrConnectWithoutProyectoInput_1.ObjetivosEspecificosCreateOrConnectWithoutProyectoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ObjetivosEspecificosCreateNestedManyWithoutProyectoInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosCreateManyProyectoInputEnvelope_1.ObjetivosEspecificosCreateManyProyectoInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosCreateManyProyectoInputEnvelope_1.ObjetivosEspecificosCreateManyProyectoInputEnvelope)
], ObjetivosEspecificosCreateNestedManyWithoutProyectoInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ObjetivosEspecificosWhereUniqueInput_1.ObjetivosEspecificosWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ObjetivosEspecificosCreateNestedManyWithoutProyectoInput.prototype, "connect", void 0);
ObjetivosEspecificosCreateNestedManyWithoutProyectoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ObjetivosEspecificosCreateNestedManyWithoutProyectoInput", {
        isAbstract: true
    })
], ObjetivosEspecificosCreateNestedManyWithoutProyectoInput);
exports.ObjetivosEspecificosCreateNestedManyWithoutProyectoInput = ObjetivosEspecificosCreateNestedManyWithoutProyectoInput;
