"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvancesCreateManyCreadoPorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AvancesCreateManyCreadoPorInput = class AvancesCreateManyCreadoPorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesCreateManyCreadoPorInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], AvancesCreateManyCreadoPorInput.prototype, "fecha", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AvancesCreateManyCreadoPorInput.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AvancesCreateManyCreadoPorInput.prototype, "observaciones", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AvancesCreateManyCreadoPorInput.prototype, "proyectoId", void 0);
AvancesCreateManyCreadoPorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvancesCreateManyCreadoPorInput", {
        isAbstract: true
    })
], AvancesCreateManyCreadoPorInput);
exports.AvancesCreateManyCreadoPorInput = AvancesCreateManyCreadoPorInput;
