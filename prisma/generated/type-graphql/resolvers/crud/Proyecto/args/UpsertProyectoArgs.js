"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertProyectoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoCreateInput_1 = require("../../../inputs/ProyectoCreateInput");
const ProyectoUpdateInput_1 = require("../../../inputs/ProyectoUpdateInput");
const ProyectoWhereUniqueInput_1 = require("../../../inputs/ProyectoWhereUniqueInput");
let UpsertProyectoArgs = class UpsertProyectoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput)
], UpsertProyectoArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateInput_1.ProyectoCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoCreateInput_1.ProyectoCreateInput)
], UpsertProyectoArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoUpdateInput_1.ProyectoUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoUpdateInput_1.ProyectoUpdateInput)
], UpsertProyectoArgs.prototype, "update", void 0);
UpsertProyectoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertProyectoArgs);
exports.UpsertProyectoArgs = UpsertProyectoArgs;
