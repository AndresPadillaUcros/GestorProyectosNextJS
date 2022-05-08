"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let UsuarioCount = class UsuarioCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], UsuarioCount.prototype, "proyectosLiderados", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], UsuarioCount.prototype, "avances", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], UsuarioCount.prototype, "inscripciones", void 0);
UsuarioCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("UsuarioCount", {
        isAbstract: true
    })
], UsuarioCount);
exports.UsuarioCount = UsuarioCount;
