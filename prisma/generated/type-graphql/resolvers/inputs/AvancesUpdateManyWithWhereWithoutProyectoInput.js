"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvancesUpdateManyWithWhereWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesScalarWhereInput_1 = require("../inputs/AvancesScalarWhereInput");
const AvancesUpdateManyMutationInput_1 = require("../inputs/AvancesUpdateManyMutationInput");
let AvancesUpdateManyWithWhereWithoutProyectoInput = class AvancesUpdateManyWithWhereWithoutProyectoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesScalarWhereInput_1.AvancesScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvancesScalarWhereInput_1.AvancesScalarWhereInput)
], AvancesUpdateManyWithWhereWithoutProyectoInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesUpdateManyMutationInput_1.AvancesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvancesUpdateManyMutationInput_1.AvancesUpdateManyMutationInput)
], AvancesUpdateManyWithWhereWithoutProyectoInput.prototype, "data", void 0);
AvancesUpdateManyWithWhereWithoutProyectoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvancesUpdateManyWithWhereWithoutProyectoInput", {
        isAbstract: true
    })
], AvancesUpdateManyWithWhereWithoutProyectoInput);
exports.AvancesUpdateManyWithWhereWithoutProyectoInput = AvancesUpdateManyWithWhereWithoutProyectoInput;
