"use strict";
var ObjetivosEspecificosScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivosEspecificosScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFilter_1 = require("../inputs/StringFilter");
let ObjetivosEspecificosScalarWhereInput = ObjetivosEspecificosScalarWhereInput_1 = class ObjetivosEspecificosScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ObjetivosEspecificosScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ObjetivosEspecificosScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ObjetivosEspecificosScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ObjetivosEspecificosScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ObjetivosEspecificosScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ObjetivosEspecificosScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ObjetivosEspecificosScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ObjetivosEspecificosScalarWhereInput.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ObjetivosEspecificosScalarWhereInput.prototype, "proyectoId", void 0);
ObjetivosEspecificosScalarWhereInput = ObjetivosEspecificosScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ObjetivosEspecificosScalarWhereInput", {
        isAbstract: true
    })
], ObjetivosEspecificosScalarWhereInput);
exports.ObjetivosEspecificosScalarWhereInput = ObjetivosEspecificosScalarWhereInput;
