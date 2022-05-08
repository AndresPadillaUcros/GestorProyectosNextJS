"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvancesCreateNestedManyWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesCreateManyProyectoInputEnvelope_1 = require("../inputs/AvancesCreateManyProyectoInputEnvelope");
const AvancesCreateOrConnectWithoutProyectoInput_1 = require("../inputs/AvancesCreateOrConnectWithoutProyectoInput");
const AvancesCreateWithoutProyectoInput_1 = require("../inputs/AvancesCreateWithoutProyectoInput");
const AvancesWhereUniqueInput_1 = require("../inputs/AvancesWhereUniqueInput");
let AvancesCreateNestedManyWithoutProyectoInput = class AvancesCreateNestedManyWithoutProyectoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvancesCreateWithoutProyectoInput_1.AvancesCreateWithoutProyectoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvancesCreateNestedManyWithoutProyectoInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvancesCreateOrConnectWithoutProyectoInput_1.AvancesCreateOrConnectWithoutProyectoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvancesCreateNestedManyWithoutProyectoInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesCreateManyProyectoInputEnvelope_1.AvancesCreateManyProyectoInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AvancesCreateManyProyectoInputEnvelope_1.AvancesCreateManyProyectoInputEnvelope)
], AvancesCreateNestedManyWithoutProyectoInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvancesWhereUniqueInput_1.AvancesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AvancesCreateNestedManyWithoutProyectoInput.prototype, "connect", void 0);
AvancesCreateNestedManyWithoutProyectoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvancesCreateNestedManyWithoutProyectoInput", {
        isAbstract: true
    })
], AvancesCreateNestedManyWithoutProyectoInput);
exports.AvancesCreateNestedManyWithoutProyectoInput = AvancesCreateNestedManyWithoutProyectoInput;
