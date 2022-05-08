import { InscripcionCreateManyEstudianteInputEnvelope } from "../inputs/InscripcionCreateManyEstudianteInputEnvelope";
import { InscripcionCreateOrConnectWithoutEstudianteInput } from "../inputs/InscripcionCreateOrConnectWithoutEstudianteInput";
import { InscripcionCreateWithoutEstudianteInput } from "../inputs/InscripcionCreateWithoutEstudianteInput";
import { InscripcionScalarWhereInput } from "../inputs/InscripcionScalarWhereInput";
import { InscripcionUpdateManyWithWhereWithoutEstudianteInput } from "../inputs/InscripcionUpdateManyWithWhereWithoutEstudianteInput";
import { InscripcionUpdateWithWhereUniqueWithoutEstudianteInput } from "../inputs/InscripcionUpdateWithWhereUniqueWithoutEstudianteInput";
import { InscripcionUpsertWithWhereUniqueWithoutEstudianteInput } from "../inputs/InscripcionUpsertWithWhereUniqueWithoutEstudianteInput";
import { InscripcionWhereUniqueInput } from "../inputs/InscripcionWhereUniqueInput";
export declare class InscripcionUpdateManyWithoutEstudianteInput {
    create?: InscripcionCreateWithoutEstudianteInput[] | undefined;
    connectOrCreate?: InscripcionCreateOrConnectWithoutEstudianteInput[] | undefined;
    upsert?: InscripcionUpsertWithWhereUniqueWithoutEstudianteInput[] | undefined;
    createMany?: InscripcionCreateManyEstudianteInputEnvelope | undefined;
    set?: InscripcionWhereUniqueInput[] | undefined;
    disconnect?: InscripcionWhereUniqueInput[] | undefined;
    delete?: InscripcionWhereUniqueInput[] | undefined;
    connect?: InscripcionWhereUniqueInput[] | undefined;
    update?: InscripcionUpdateWithWhereUniqueWithoutEstudianteInput[] | undefined;
    updateMany?: InscripcionUpdateManyWithWhereWithoutEstudianteInput[] | undefined;
    deleteMany?: InscripcionScalarWhereInput[] | undefined;
}
