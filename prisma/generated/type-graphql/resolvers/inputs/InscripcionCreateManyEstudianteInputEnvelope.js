"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscripcionCreateManyEstudianteInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InscripcionCreateManyEstudianteInput_1 = require("../inputs/InscripcionCreateManyEstudianteInput");
let InscripcionCreateManyEstudianteInputEnvelope = class InscripcionCreateManyEstudianteInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InscripcionCreateManyEstudianteInput_1.InscripcionCreateManyEstudianteInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], InscripcionCreateManyEstudianteInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], InscripcionCreateManyEstudianteInputEnvelope.prototype, "skipDuplicates", void 0);
InscripcionCreateManyEstudianteInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("InscripcionCreateManyEstudianteInputEnvelope", {
        isAbstract: true
    })
], InscripcionCreateManyEstudianteInputEnvelope);
exports.InscripcionCreateManyEstudianteInputEnvelope = InscripcionCreateManyEstudianteInputEnvelope;
