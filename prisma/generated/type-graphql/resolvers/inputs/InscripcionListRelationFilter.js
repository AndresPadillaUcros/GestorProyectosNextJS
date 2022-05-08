"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InscripcionWhereInput_1 = require("../inputs/InscripcionWhereInput");
let InscripcionListRelationFilter = class InscripcionListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionWhereInput_1.InscripcionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionWhereInput_1.InscripcionWhereInput)
], InscripcionListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionWhereInput_1.InscripcionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionWhereInput_1.InscripcionWhereInput)
], InscripcionListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionWhereInput_1.InscripcionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionWhereInput_1.InscripcionWhereInput)
], InscripcionListRelationFilter.prototype, "none", void 0);
InscripcionListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("InscripcionListRelationFilter", {
        isAbstract: true
    })
], InscripcionListRelationFilter);
exports.InscripcionListRelationFilter = InscripcionListRelationFilter;
