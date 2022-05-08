"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyInscripcionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InscripcionCreateManyInput_1 = require("../../../inputs/InscripcionCreateManyInput");
let CreateManyInscripcionArgs = class CreateManyInscripcionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionCreateManyInput_1.InscripcionCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyInscripcionArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyInscripcionArgs.prototype, "skipDuplicates", void 0);
CreateManyInscripcionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyInscripcionArgs);
exports.CreateManyInscripcionArgs = CreateManyInscripcionArgs;
