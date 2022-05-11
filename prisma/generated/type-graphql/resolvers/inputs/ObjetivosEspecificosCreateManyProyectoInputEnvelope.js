"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivosEspecificosCreateManyProyectoInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ObjetivosEspecificosCreateManyProyectoInput_1 = require("../inputs/ObjetivosEspecificosCreateManyProyectoInput");
let ObjetivosEspecificosCreateManyProyectoInputEnvelope = class ObjetivosEspecificosCreateManyProyectoInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ObjetivosEspecificosCreateManyProyectoInput_1.ObjetivosEspecificosCreateManyProyectoInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ObjetivosEspecificosCreateManyProyectoInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ObjetivosEspecificosCreateManyProyectoInputEnvelope.prototype, "skipDuplicates", void 0);
ObjetivosEspecificosCreateManyProyectoInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ObjetivosEspecificosCreateManyProyectoInputEnvelope", {
        isAbstract: true
    })
], ObjetivosEspecificosCreateManyProyectoInputEnvelope);
exports.ObjetivosEspecificosCreateManyProyectoInputEnvelope = ObjetivosEspecificosCreateManyProyectoInputEnvelope;
