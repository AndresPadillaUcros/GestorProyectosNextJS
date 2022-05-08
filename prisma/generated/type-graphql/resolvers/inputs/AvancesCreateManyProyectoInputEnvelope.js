"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvancesCreateManyProyectoInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesCreateManyProyectoInput_1 = require("../inputs/AvancesCreateManyProyectoInput");
let AvancesCreateManyProyectoInputEnvelope = class AvancesCreateManyProyectoInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvancesCreateManyProyectoInput_1.AvancesCreateManyProyectoInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], AvancesCreateManyProyectoInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AvancesCreateManyProyectoInputEnvelope.prototype, "skipDuplicates", void 0);
AvancesCreateManyProyectoInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("AvancesCreateManyProyectoInputEnvelope", {
        isAbstract: true
    })
], AvancesCreateManyProyectoInputEnvelope);
exports.AvancesCreateManyProyectoInputEnvelope = AvancesCreateManyProyectoInputEnvelope;
