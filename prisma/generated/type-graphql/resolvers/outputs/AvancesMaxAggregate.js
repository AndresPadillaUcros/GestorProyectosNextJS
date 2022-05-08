"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvancesMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AvancesMaxAggregate = class AvancesMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AvancesMaxAggregate.prototype, "fecha", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesMaxAggregate.prototype, "descripcion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesMaxAggregate.prototype, "observaciones", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesMaxAggregate.prototype, "proyectoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AvancesMaxAggregate.prototype, "usuarioId", void 0);
AvancesMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AvancesMaxAggregate", {
        isAbstract: true
    })
], AvancesMaxAggregate);
exports.AvancesMaxAggregate = AvancesMaxAggregate;
