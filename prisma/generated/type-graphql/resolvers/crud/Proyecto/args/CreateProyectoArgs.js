"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProyectoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProyectoCreateInput_1 = require("../../../inputs/ProyectoCreateInput");
let CreateProyectoArgs = class CreateProyectoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProyectoCreateInput_1.ProyectoCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProyectoCreateInput_1.ProyectoCreateInput)
], CreateProyectoArgs.prototype, "data", void 0);
CreateProyectoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateProyectoArgs);
exports.CreateProyectoArgs = CreateProyectoArgs;
