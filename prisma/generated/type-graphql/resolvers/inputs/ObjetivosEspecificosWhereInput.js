"use strict";
var ObjetivosEspecificosWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivosEspecificosWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoRelationFilter_1 = require("../inputs/ProyectoRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let ObjetivosEspecificosWhereInput = ObjetivosEspecificosWhereInput_1 = class ObjetivosEspecificosWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ObjetivosEspecificosWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ObjetivosEspecificosWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ObjetivosEspecificosWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ObjetivosEspecificosWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ObjetivosEspecificosWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ObjetivosEspecificosWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ObjetivosEspecificosWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ObjetivosEspecificosWhereInput.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoRelationFilter_1.ProyectoRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoRelationFilter_1.ProyectoRelationFilter)
], ObjetivosEspecificosWhereInput.prototype, "proyecto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ObjetivosEspecificosWhereInput.prototype, "proyectoId", void 0);
ObjetivosEspecificosWhereInput = ObjetivosEspecificosWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ObjetivosEspecificosWhereInput", {
        isAbstract: true
    })
], ObjetivosEspecificosWhereInput);
exports.ObjetivosEspecificosWhereInput = ObjetivosEspecificosWhereInput;
