"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateObjetivosEspecificosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ObjetivosEspecificosCreateInput_1 = require("../../../inputs/ObjetivosEspecificosCreateInput");
let CreateObjetivosEspecificosArgs = class CreateObjetivosEspecificosArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ObjetivosEspecificosCreateInput_1.ObjetivosEspecificosCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ObjetivosEspecificosCreateInput_1.ObjetivosEspecificosCreateInput)
], CreateObjetivosEspecificosArgs.prototype, "data", void 0);
CreateObjetivosEspecificosArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateObjetivosEspecificosArgs);
exports.CreateObjetivosEspecificosArgs = CreateObjetivosEspecificosArgs;
