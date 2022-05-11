"use strict";
var NestedEnumEnum_FaseProyectoFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumEnum_FaseProyectoFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Enum_FaseProyecto_1 = require("../../enums/Enum_FaseProyecto");
let NestedEnumEnum_FaseProyectoFilter = NestedEnumEnum_FaseProyectoFilter_1 = class NestedEnumEnum_FaseProyectoFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Enum_FaseProyecto_1.Enum_FaseProyecto, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumEnum_FaseProyectoFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_FaseProyecto_1.Enum_FaseProyecto], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_FaseProyectoFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Enum_FaseProyecto_1.Enum_FaseProyecto], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumEnum_FaseProyectoFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumEnum_FaseProyectoFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumEnum_FaseProyectoFilter)
], NestedEnumEnum_FaseProyectoFilter.prototype, "not", void 0);
NestedEnumEnum_FaseProyectoFilter = NestedEnumEnum_FaseProyectoFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumEnum_FaseProyectoFilter", {
        isAbstract: true
    })
], NestedEnumEnum_FaseProyectoFilter);
exports.NestedEnumEnum_FaseProyectoFilter = NestedEnumEnum_FaseProyectoFilter;
