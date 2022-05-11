"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProyectoCount = class ProyectoCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProyectoCount.prototype, "avances", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProyectoCount.prototype, "inscripciones", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProyectoCount.prototype, "objetivosEspecificos", void 0);
ProyectoCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProyectoCount", {
        isAbstract: true
    })
], ProyectoCount);
exports.ProyectoCount = ProyectoCount;
