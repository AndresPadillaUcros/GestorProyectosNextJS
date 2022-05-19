"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_EstadoUserWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_EstadoUserFilter_1 = require("../inputs/NestedEnumEnum_EstadoUserFilter");
const NestedEnumEnum_EstadoUserWithAggregatesFilter_1 = require("../inputs/NestedEnumEnum_EstadoUserWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Enum_EstadoUser_1 = require("../../enums/Enum_EstadoUser");
let EnumEnum_EstadoUserWithAggregatesFilter = class EnumEnum_EstadoUserWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_EstadoUser_1.Enum_EstadoUser, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_EstadoUserWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_EstadoUser_1.Enum_EstadoUser], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_EstadoUserWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_EstadoUser_1.Enum_EstadoUser], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_EstadoUserWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_EstadoUserWithAggregatesFilter_1.NestedEnumEnum_EstadoUserWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_EstadoUserWithAggregatesFilter_1.NestedEnumEnum_EstadoUserWithAggregatesFilter)
], EnumEnum_EstadoUserWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumEnum_EstadoUserWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_EstadoUserFilter_1.NestedEnumEnum_EstadoUserFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_EstadoUserFilter_1.NestedEnumEnum_EstadoUserFilter)
], EnumEnum_EstadoUserWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_EstadoUserFilter_1.NestedEnumEnum_EstadoUserFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_EstadoUserFilter_1.NestedEnumEnum_EstadoUserFilter)
], EnumEnum_EstadoUserWithAggregatesFilter.prototype, "_max", void 0);
EnumEnum_EstadoUserWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_EstadoUserWithAggregatesFilter", {
        isAbstract: true
    })
], EnumEnum_EstadoUserWithAggregatesFilter);
exports.EnumEnum_EstadoUserWithAggregatesFilter = EnumEnum_EstadoUserWithAggregatesFilter;
