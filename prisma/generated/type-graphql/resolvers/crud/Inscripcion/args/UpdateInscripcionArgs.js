"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInscripcionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InscripcionUpdateInput_1 = require("../../../inputs/InscripcionUpdateInput");
const InscripcionWhereUniqueInput_1 = require("../../../inputs/InscripcionWhereUniqueInput");
let UpdateInscripcionArgs = class UpdateInscripcionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionUpdateInput_1.InscripcionUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InscripcionUpdateInput_1.InscripcionUpdateInput)
], UpdateInscripcionArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput)
], UpdateInscripcionArgs.prototype, "where", void 0);
UpdateInscripcionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateInscripcionArgs);
exports.UpdateInscripcionArgs = UpdateInscripcionArgs;
