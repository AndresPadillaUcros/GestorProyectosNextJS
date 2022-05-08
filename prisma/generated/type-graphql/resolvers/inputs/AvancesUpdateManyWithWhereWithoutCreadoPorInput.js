"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvancesUpdateManyWithWhereWithoutCreadoPorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesScalarWhereInput_1 = require("../inputs/AvancesScalarWhereInput");
const AvancesUpdateManyMutationInput_1 = require("../inputs/AvancesUpdateManyMutationInput");
let AvancesUpdateManyWithWhereWithoutCreadoPorInput = class AvancesUpdateManyWithWhereWithoutCreadoPorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesScalarWhereInput_1.AvancesScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvancesScalarWhereInput_1.AvancesScalarWhereInput)
], AvancesUpdateManyWithWhereWithoutCreadoPorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesUpdateManyMutationInput_1.AvancesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvancesUpdateManyMutationInput_1.AvancesUpdateManyMutationInput)
], AvancesUpdateManyWithWhereWithoutCreadoPorInput.prototype, "data", void 0);
AvancesUpdateManyWithWhereWithoutCreadoPorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvancesUpdateManyWithWhereWithoutCreadoPorInput", {
        isAbstract: true
    })
], AvancesUpdateManyWithWhereWithoutCreadoPorInput);
exports.AvancesUpdateManyWithWhereWithoutCreadoPorInput = AvancesUpdateManyWithWhereWithoutCreadoPorInput;
