"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvancesCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AvancesCreateManyInput = class AvancesCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], AvancesCreateManyInput.prototype, "fecha", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AvancesCreateManyInput.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AvancesCreateManyInput.prototype, "observaciones", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AvancesCreateManyInput.prototype, "proyectoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AvancesCreateManyInput.prototype, "usuarioId", void 0);
AvancesCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvancesCreateManyInput", {
        isAbstract: true
    })
], AvancesCreateManyInput);
exports.AvancesCreateManyInput = AvancesCreateManyInput;
