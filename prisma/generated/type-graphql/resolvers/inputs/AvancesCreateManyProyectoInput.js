"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvancesCreateManyProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AvancesCreateManyProyectoInput = class AvancesCreateManyProyectoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesCreateManyProyectoInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], AvancesCreateManyProyectoInput.prototype, "fecha", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AvancesCreateManyProyectoInput.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AvancesCreateManyProyectoInput.prototype, "observaciones", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AvancesCreateManyProyectoInput.prototype, "usuarioId", void 0);
AvancesCreateManyProyectoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvancesCreateManyProyectoInput", {
        isAbstract: true
    })
], AvancesCreateManyProyectoInput);
exports.AvancesCreateManyProyectoInput = AvancesCreateManyProyectoInput;
