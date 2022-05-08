import { InscripcionCreateManyEstudianteInputEnvelope } from "../inputs/InscripcionCreateManyEstudianteInputEnvelope";
import { InscripcionCreateOrConnectWithoutEstudianteInput } from "../inputs/InscripcionCreateOrConnectWithoutEstudianteInput";
import { InscripcionCreateWithoutEstudianteInput } from "../inputs/InscripcionCreateWithoutEstudianteInput";
import { InscripcionWhereUniqueInput } from "../inputs/InscripcionWhereUniqueInput";
export declare class InscripcionCreateNestedManyWithoutEstudianteInput {
    create?: InscripcionCreateWithoutEstudianteInput[] | undefined;
    connectOrCreate?: InscripcionCreateOrConnectWithoutEstudianteInput[] | undefined;
    createMany?: InscripcionCreateManyEstudianteInputEnvelope | undefined;
    connect?: InscripcionWhereUniqueInput[] | undefined;
}
