"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioUpdateOneRequiredWithoutAvancesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioCreateOrConnectWithoutAvancesInput_1 = require("../inputs/UsuarioCreateOrConnectWithoutAvancesInput");
const UsuarioCreateWithoutAvancesInput_1 = require("../inputs/UsuarioCreateWithoutAvancesInput");
const UsuarioUpdateWithoutAvancesInput_1 = require("../inputs/UsuarioUpdateWithoutAvancesInput");
const UsuarioUpsertWithoutAvancesInput_1 = require("../inputs/UsuarioUpsertWithoutAvancesInput");
const UsuarioWhereUniqueInput_1 = require("../inputs/UsuarioWhereUniqueInput");
let UsuarioUpdateOneRequiredWithoutAvancesInput = class UsuarioUpdateOneRequiredWithoutAvancesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutAvancesInput_1.UsuarioCreateWithoutAvancesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioCreateWithoutAvancesInput_1.UsuarioCreateWithoutAvancesInput)
], UsuarioUpdateOneRequiredWithoutAvancesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateOrConnectWithoutAvancesInput_1.UsuarioCreateOrConnectWithoutAvancesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioCreateOrConnectWithoutAvancesInput_1.UsuarioCreateOrConnectWithoutAvancesInput)
], UsuarioUpdateOneRequiredWithoutAvancesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioUpsertWithoutAvancesInput_1.UsuarioUpsertWithoutAvancesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioUpsertWithoutAvancesInput_1.UsuarioUpsertWithoutAvancesInput)
], UsuarioUpdateOneRequiredWithoutAvancesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioWhereUniqueInput_1.UsuarioWhereUniqueInput)
], UsuarioUpdateOneRequiredWithoutAvancesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioUpdateWithoutAvancesInput_1.UsuarioUpdateWithoutAvancesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioUpdateWithoutAvancesInput_1.UsuarioUpdateWithoutAvancesInput)
], UsuarioUpdateOneRequiredWithoutAvancesInput.prototype, "update", void 0);
UsuarioUpdateOneRequiredWithoutAvancesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioUpdateOneRequiredWithoutAvancesInput", {
        isAbstract: true
    })
], UsuarioUpdateOneRequiredWithoutAvancesInput);
exports.UsuarioUpdateOneRequiredWithoutAvancesInput = UsuarioUpdateOneRequiredWithoutAvancesInput;
