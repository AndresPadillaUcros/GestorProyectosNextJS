"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvancesListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesWhereInput_1 = require("../inputs/AvancesWhereInput");
let AvancesListRelationFilter = class AvancesListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesWhereInput_1.AvancesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvancesWhereInput_1.AvancesWhereInput)
], AvancesListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesWhereInput_1.AvancesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvancesWhereInput_1.AvancesWhereInput)
], AvancesListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesWhereInput_1.AvancesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvancesWhereInput_1.AvancesWhereInput)
], AvancesListRelationFilter.prototype, "none", void 0);
AvancesListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("AvancesListRelationFilter", {
        isAbstract: true
    })
], AvancesListRelationFilter);
exports.AvancesListRelationFilter = AvancesListRelationFilter;
