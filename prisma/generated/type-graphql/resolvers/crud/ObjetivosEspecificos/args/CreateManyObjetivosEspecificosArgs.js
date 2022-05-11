"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyObjetivosEspecificosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ObjetivosEspecificosCreateManyInput_1 = require("../../../inputs/ObjetivosEspecificosCreateManyInput");
let CreateManyObjetivosEspecificosArgs = class CreateManyObjetivosEspecificosArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ObjetivosEspecificosCreateManyInput_1.ObjetivosEspecificosCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyObjetivosEspecificosArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyObjetivosEspecificosArgs.prototype, "skipDuplicates", void 0);
CreateManyObjetivosEspecificosArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyObjetivosEspecificosArgs);
exports.CreateManyObjetivosEspecificosArgs = CreateManyObjetivosEspecificosArgs;
