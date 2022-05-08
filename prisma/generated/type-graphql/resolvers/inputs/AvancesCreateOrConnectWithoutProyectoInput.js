"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvancesCreateOrConnectWithoutProyectoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvancesCreateWithoutProyectoInput_1 = require("../inputs/AvancesCreateWithoutProyectoInput");
const AvancesWhereUniqueInput_1 = require("../inputs/AvancesWhereUniqueInput");
let AvancesCreateOrConnectWithoutProyectoInput = class AvancesCreateOrConnectWithoutProyectoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesWhereUniqueInput_1.AvancesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvancesWhereUniqueInput_1.AvancesWhereUniqueInput)
], AvancesCreateOrConnectWithoutProyectoInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvancesCreateWithoutProyectoInput_1.AvancesCreateWithoutProyectoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvancesCreateWithoutProyectoInput_1.AvancesCreateWithoutProyectoInput)
], AvancesCreateOrConnectWithoutProyectoInput.prototype, "create", void 0);
AvancesCreateOrConnectWithoutProyectoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AvancesCreateOrConnectWithoutProyectoInput", {
        isAbstract: true
    })
], AvancesCreateOrConnectWithoutProyectoInput);
exports.AvancesCreateOrConnectWithoutProyectoInput = AvancesCreateOrConnectWithoutProyectoInput;
