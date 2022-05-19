"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_EstadoUserFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_EstadoUserFilter_1 = require("../inputs/NestedEnumEnum_EstadoUserFilter");
const Enum_EstadoUser_1 = require("../../enums/Enum_EstadoUser");
let EnumEnum_EstadoUserFilter = class EnumEnum_EstadoUserFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_EstadoUser_1.Enum_EstadoUser, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_EstadoUserFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_EstadoUser_1.Enum_EstadoUser], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_EstadoUserFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_EstadoUser_1.Enum_EstadoUser], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_EstadoUserFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_EstadoUserFilter_1.NestedEnumEnum_EstadoUserFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_EstadoUserFilter_1.NestedEnumEnum_EstadoUserFilter)
], EnumEnum_EstadoUserFilter.prototype, "not", void 0);
EnumEnum_EstadoUserFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_EstadoUserFilter", {
        isAbstract: true
    })
], EnumEnum_EstadoUserFilter);
exports.EnumEnum_EstadoUserFilter = EnumEnum_EstadoUserFilter;
