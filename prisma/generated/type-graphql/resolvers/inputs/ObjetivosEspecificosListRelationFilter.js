"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivosEspecificosListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ObjetivosEspecificosWhereInput_1 = require("../inputs/ObjetivosEspecificosWhereInput");
let ObjetivosEspecificosListRelationFilter = class ObjetivosEspecificosListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosWhereInput_1.ObjetivosEspecificosWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosWhereInput_1.ObjetivosEspecificosWhereInput)
], ObjetivosEspecificosListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosWhereInput_1.ObjetivosEspecificosWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosWhereInput_1.ObjetivosEspecificosWhereInput)
], ObjetivosEspecificosListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosWhereInput_1.ObjetivosEspecificosWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosWhereInput_1.ObjetivosEspecificosWhereInput)
], ObjetivosEspecificosListRelationFilter.prototype, "none", void 0);
ObjetivosEspecificosListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ObjetivosEspecificosListRelationFilter", {
        isAbstract: true
    })
], ObjetivosEspecificosListRelationFilter);
exports.ObjetivosEspecificosListRelationFilter = ObjetivosEspecificosListRelationFilter;
