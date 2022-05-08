"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProyectoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoWhereUniqueInput_1 = require("../../../inputs/ProyectoWhereUniqueInput");
let DeleteProyectoArgs = class DeleteProyectoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoWhereUniqueInput_1.ProyectoWhereUniqueInput)
], DeleteProyectoArgs.prototype, "where", void 0);
DeleteProyectoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteProyectoArgs);
exports.DeleteProyectoArgs = DeleteProyectoArgs;
