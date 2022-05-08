"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let InscripcionWhereUniqueInput = class InscripcionWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InscripcionWhereUniqueInput.prototype, "id", void 0);
InscripcionWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InscripcionWhereUniqueInput", {
        isAbstract: true
    })
], InscripcionWhereUniqueInput);
exports.InscripcionWhereUniqueInput = InscripcionWhereUniqueInput;
