"use strict";
var NestedEnumEnum_RolFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_RolFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_Rol_1 = require("../../enums/Enum_Rol");
let NestedEnumEnum_RolFilter = NestedEnumEnum_RolFilter_1 = class NestedEnumEnum_RolFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_Rol_1.Enum_Rol, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEnum_RolFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Rol_1.Enum_Rol], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_RolFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_Rol_1.Enum_Rol], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_RolFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_RolFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_RolFilter)
], NestedEnumEnum_RolFilter.prototype, "not", void 0);
NestedEnumEnum_RolFilter = NestedEnumEnum_RolFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEnum_RolFilter", {
        isAbstract: true
    })
], NestedEnumEnum_RolFilter);
exports.NestedEnumEnum_RolFilter = NestedEnumEnum_RolFilter;
