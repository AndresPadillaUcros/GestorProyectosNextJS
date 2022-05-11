"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivosEspecificosUpdateManyWithWhereWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ObjetivosEspecificosScalarWhereInput_1 = require("../inputs/ObjetivosEspecificosScalarWhereInput");
const ObjetivosEspecificosUpdateManyMutationInput_1 = require("../inputs/ObjetivosEspecificosUpdateManyMutationInput");
let ObjetivosEspecificosUpdateManyWithWhereWithoutProyectoInput = class ObjetivosEspecificosUpdateManyWithWhereWithoutProyectoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosScalarWhereInput_1.ObjetivosEspecificosScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosScalarWhereInput_1.ObjetivosEspecificosScalarWhereInput)
], ObjetivosEspecificosUpdateManyWithWhereWithoutProyectoInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosUpdateManyMutationInput_1.ObjetivosEspecificosUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosUpdateManyMutationInput_1.ObjetivosEspecificosUpdateManyMutationInput)
], ObjetivosEspecificosUpdateManyWithWhereWithoutProyectoInput.prototype, "data", void 0);
ObjetivosEspecificosUpdateManyWithWhereWithoutProyectoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ObjetivosEspecificosUpdateManyWithWhereWithoutProyectoInput", {
        isAbstract: true
    })
], ObjetivosEspecificosUpdateManyWithWhereWithoutProyectoInput);
exports.ObjetivosEspecificosUpdateManyWithWhereWithoutProyectoInput = ObjetivosEspecificosUpdateManyWithWhereWithoutProyectoInput;
