"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjetivosEspecificosWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ObjetivosEspecificosWhereUniqueInput = class ObjetivosEspecificosWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ObjetivosEspecificosWhereUniqueInput.prototype, "id", void 0);
ObjetivosEspecificosWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ObjetivosEspecificosWhereUniqueInput", {
        isAbstract: true
    })
], ObjetivosEspecificosWhereUniqueInput);
exports.ObjetivosEspecificosWhereUniqueInput = ObjetivosEspecificosWhereUniqueInput;
