"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivosEspecificosCreateOrConnectWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ObjetivosEspecificosCreateWithoutProyectoInput_1 = require("../inputs/ObjetivosEspecificosCreateWithoutProyectoInput");
const ObjetivosEspecificosWhereUniqueInput_1 = require("../inputs/ObjetivosEspecificosWhereUniqueInput");
let ObjetivosEspecificosCreateOrConnectWithoutProyectoInput = class ObjetivosEspecificosCreateOrConnectWithoutProyectoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosWhereUniqueInput_1.ObjetivosEspecificosWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosWhereUniqueInput_1.ObjetivosEspecificosWhereUniqueInput)
], ObjetivosEspecificosCreateOrConnectWithoutProyectoInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosCreateWithoutProyectoInput_1.ObjetivosEspecificosCreateWithoutProyectoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosCreateWithoutProyectoInput_1.ObjetivosEspecificosCreateWithoutProyectoInput)
], ObjetivosEspecificosCreateOrConnectWithoutProyectoInput.prototype, "create", void 0);
ObjetivosEspecificosCreateOrConnectWithoutProyectoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ObjetivosEspecificosCreateOrConnectWithoutProyectoInput", {
        isAbstract: true
    })
], ObjetivosEspecificosCreateOrConnectWithoutProyectoInput);
exports.ObjetivosEspecificosCreateOrConnectWithoutProyectoInput = ObjetivosEspecificosCreateOrConnectWithoutProyectoInput;
