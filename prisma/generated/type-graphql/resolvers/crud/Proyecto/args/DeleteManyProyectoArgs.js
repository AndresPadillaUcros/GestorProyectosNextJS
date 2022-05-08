"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyProyectoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoWhereInput_1 = require("../../../inputs/ProyectoWhereInput");
let DeleteManyProyectoArgs = class DeleteManyProyectoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoWhereInput_1.ProyectoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProyectoWhereInput_1.ProyectoWhereInput)
], DeleteManyProyectoArgs.prototype, "where", void 0);
DeleteManyProyectoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyProyectoArgs);
exports.DeleteManyProyectoArgs = DeleteManyProyectoArgs;
