"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumEnum_FaseProyectoFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumEnum_FaseProyectoFilter_1 = require("../inputs/NestedEnumEnum_FaseProyectoFilter");
const Enum_FaseProyecto_1 = require("../../enums/Enum_FaseProyecto");
let EnumEnum_FaseProyectoFilter = class EnumEnum_FaseProyectoFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_FaseProyecto_1.Enum_FaseProyecto, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumEnum_FaseProyectoFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_FaseProyecto_1.Enum_FaseProyecto], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_FaseProyectoFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_FaseProyecto_1.Enum_FaseProyecto], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumEnum_FaseProyectoFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_FaseProyectoFilter_1.NestedEnumEnum_FaseProyectoFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_FaseProyectoFilter_1.NestedEnumEnum_FaseProyectoFilter)
], EnumEnum_FaseProyectoFilter.prototype, "not", void 0);
EnumEnum_FaseProyectoFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumEnum_FaseProyectoFilter", {
        isAbstract: true
    })
], EnumEnum_FaseProyectoFilter);
exports.EnumEnum_FaseProyectoFilter = EnumEnum_FaseProyectoFilter;
