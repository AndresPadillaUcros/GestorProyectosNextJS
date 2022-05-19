"use strict";
var NestedEnumEnum_EstadoUserWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_EstadoUserWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_EstadoUserFilter_1 = require("../inputs/NestedEnumEnum_EstadoUserFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_EstadoUser_1 = require("../../enums/Enum_EstadoUser");
let NestedEnumEnum_EstadoUserWithAggregatesFilter = NestedEnumEnum_EstadoUserWithAggregatesFilter_1 = class NestedEnumEnum_EstadoUserWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_EstadoUser_1.Enum_EstadoUser, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEnum_EstadoUserWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_EstadoUser_1.Enum_EstadoUser], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_EstadoUserWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_EstadoUser_1.Enum_EstadoUser], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_EstadoUserWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_EstadoUserWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_EstadoUserWithAggregatesFilter)
], NestedEnumEnum_EstadoUserWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumEnum_EstadoUserWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_EstadoUserFilter_1.NestedEnumEnum_EstadoUserFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_EstadoUserFilter_1.NestedEnumEnum_EstadoUserFilter)
], NestedEnumEnum_EstadoUserWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_EstadoUserFilter_1.NestedEnumEnum_EstadoUserFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_EstadoUserFilter_1.NestedEnumEnum_EstadoUserFilter)
], NestedEnumEnum_EstadoUserWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumEnum_EstadoUserWithAggregatesFilter = NestedEnumEnum_EstadoUserWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEnum_EstadoUserWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumEnum_EstadoUserWithAggregatesFilter);
exports.NestedEnumEnum_EstadoUserWithAggregatesFilter = NestedEnumEnum_EstadoUserWithAggregatesFilter;
