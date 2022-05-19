"use strict";
var NestedEnumEnum_EstadoUserFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_EstadoUserFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_EstadoUser_1 = require("../../enums/Enum_EstadoUser");
let NestedEnumEnum_EstadoUserFilter = NestedEnumEnum_EstadoUserFilter_1 = class NestedEnumEnum_EstadoUserFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_EstadoUser_1.Enum_EstadoUser, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEnum_EstadoUserFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_EstadoUser_1.Enum_EstadoUser], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_EstadoUserFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_EstadoUser_1.Enum_EstadoUser], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_EstadoUserFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_EstadoUserFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_EstadoUserFilter)
], NestedEnumEnum_EstadoUserFilter.prototype, "not", void 0);
NestedEnumEnum_EstadoUserFilter = NestedEnumEnum_EstadoUserFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEnum_EstadoUserFilter", {
        isAbstract: true
    })
], NestedEnumEnum_EstadoUserFilter);
exports.NestedEnumEnum_EstadoUserFilter = NestedEnumEnum_EstadoUserFilter;
