"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioUpsertWithoutAvancesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioCreateWithoutAvancesInput_1 = require("../inputs/UsuarioCreateWithoutAvancesInput");
const UsuarioUpdateWithoutAvancesInput_1 = require("../inputs/UsuarioUpdateWithoutAvancesInput");
let UsuarioUpsertWithoutAvancesInput = class UsuarioUpsertWithoutAvancesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioUpdateWithoutAvancesInput_1.UsuarioUpdateWithoutAvancesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioUpdateWithoutAvancesInput_1.UsuarioUpdateWithoutAvancesInput)
], UsuarioUpsertWithoutAvancesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioCreateWithoutAvancesInput_1.UsuarioCreateWithoutAvancesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UsuarioCreateWithoutAvancesInput_1.UsuarioCreateWithoutAvancesInput)
], UsuarioUpsertWithoutAvancesInput.prototype, "create", void 0);
UsuarioUpsertWithoutAvancesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioUpsertWithoutAvancesInput", {
        isAbstract: true
    })
], UsuarioUpsertWithoutAvancesInput);
exports.UsuarioUpsertWithoutAvancesInput = UsuarioUpsertWithoutAvancesInput;
