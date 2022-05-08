"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionCreateOrConnectWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InscripcionCreateWithoutProyectoInput_1 = require("../inputs/InscripcionCreateWithoutProyectoInput");
const InscripcionWhereUniqueInput_1 = require("../inputs/InscripcionWhereUniqueInput");
let InscripcionCreateOrConnectWithoutProyectoInput = class InscripcionCreateOrConnectWithoutProyectoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput)
], InscripcionCreateOrConnectWithoutProyectoInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionCreateWithoutProyectoInput_1.InscripcionCreateWithoutProyectoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InscripcionCreateWithoutProyectoInput_1.InscripcionCreateWithoutProyectoInput)
], InscripcionCreateOrConnectWithoutProyectoInput.prototype, "create", void 0);
InscripcionCreateOrConnectWithoutProyectoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InscripcionCreateOrConnectWithoutProyectoInput", {
        isAbstract: true
    })
], InscripcionCreateOrConnectWithoutProyectoInput);
exports.InscripcionCreateOrConnectWithoutProyectoInput = InscripcionCreateOrConnectWithoutProyectoInput;
