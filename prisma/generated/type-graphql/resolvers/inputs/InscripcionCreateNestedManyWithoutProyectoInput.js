"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionCreateNestedManyWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InscripcionCreateManyProyectoInputEnvelope_1 = require("../inputs/InscripcionCreateManyProyectoInputEnvelope");
const InscripcionCreateOrConnectWithoutProyectoInput_1 = require("../inputs/InscripcionCreateOrConnectWithoutProyectoInput");
const InscripcionCreateWithoutProyectoInput_1 = require("../inputs/InscripcionCreateWithoutProyectoInput");
const InscripcionWhereUniqueInput_1 = require("../inputs/InscripcionWhereUniqueInput");
let InscripcionCreateNestedManyWithoutProyectoInput = class InscripcionCreateNestedManyWithoutProyectoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionCreateWithoutProyectoInput_1.InscripcionCreateWithoutProyectoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionCreateNestedManyWithoutProyectoInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionCreateOrConnectWithoutProyectoInput_1.InscripcionCreateOrConnectWithoutProyectoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionCreateNestedManyWithoutProyectoInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionCreateManyProyectoInputEnvelope_1.InscripcionCreateManyProyectoInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InscripcionCreateManyProyectoInputEnvelope_1.InscripcionCreateManyProyectoInputEnvelope)
], InscripcionCreateNestedManyWithoutProyectoInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionCreateNestedManyWithoutProyectoInput.prototype, "connect", void 0);
InscripcionCreateNestedManyWithoutProyectoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InscripcionCreateNestedManyWithoutProyectoInput", {
        isAbstract: true
    })
], InscripcionCreateNestedManyWithoutProyectoInput);
exports.InscripcionCreateNestedManyWithoutProyectoInput = InscripcionCreateNestedManyWithoutProyectoInput;
