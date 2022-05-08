"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let UsuarioWhereUniqueInput = class UsuarioWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioWhereUniqueInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioWhereUniqueInput.prototype, "identificacion", void 0);
UsuarioWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioWhereUniqueInput", {
        isAbstract: true
    })
], UsuarioWhereUniqueInput);
exports.UsuarioWhereUniqueInput = UsuarioWhereUniqueInput;
