"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvancesCreateManyCreadoPorInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesCreateManyCreadoPorInput_1 = require("../inputs/AvancesCreateManyCreadoPorInput");
let AvancesCreateManyCreadoPorInputEnvelope = class AvancesCreateManyCreadoPorInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvancesCreateManyCreadoPorInput_1.AvancesCreateManyCreadoPorInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], AvancesCreateManyCreadoPorInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AvancesCreateManyCreadoPorInputEnvelope.prototype, "skipDuplicates", void 0);
AvancesCreateManyCreadoPorInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("AvancesCreateManyCreadoPorInputEnvelope", {
        isAbstract: true
    })
], AvancesCreateManyCreadoPorInputEnvelope);
exports.AvancesCreateManyCreadoPorInputEnvelope = AvancesCreateManyCreadoPorInputEnvelope;
