"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProyectoWhereUniqueInput = class ProyectoWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProyectoWhereUniqueInput.prototype, "id", void 0);
ProyectoWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProyectoWhereUniqueInput", {
        isAbstract: true
    })
], ProyectoWhereUniqueInput);
exports.ProyectoWhereUniqueInput = ProyectoWhereUniqueInput;
