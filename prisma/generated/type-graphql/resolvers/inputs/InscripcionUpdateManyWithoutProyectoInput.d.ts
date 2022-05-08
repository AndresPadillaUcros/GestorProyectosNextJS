import { InscripcionCreateManyProyectoInputEnvelope } from "../inputs/InscripcionCreateManyProyectoInputEnvelope";
import { InscripcionCreateOrConnectWithoutProyectoInput } from "../inputs/InscripcionCreateOrConnectWithoutProyectoInput";
import { InscripcionCreateWithoutProyectoInput } from "../inputs/InscripcionCreateWithoutProyectoInput";
import { InscripcionScalarWhereInput } from "../inputs/InscripcionScalarWhereInput";
import { InscripcionUpdateManyWithWhereWithoutProyectoInput } from "../inputs/InscripcionUpdateManyWithWhereWithoutProyectoInput";
import { InscripcionUpdateWithWhereUniqueWithoutProyectoInput } from "../inputs/InscripcionUpdateWithWhereUniqueWithoutProyectoInput";
import { InscripcionUpsertWithWhereUniqueWithoutProyectoInput } from "../inputs/InscripcionUpsertWithWhereUniqueWithoutProyectoInput";
import { InscripcionWhereUniqueInput } from "../inputs/InscripcionWhereUniqueInput";
export declare class InscripcionUpdateManyWithoutProyectoInput {
    create?: InscripcionCreateWithoutProyectoInput[] | undefined;
    connectOrCreate?: InscripcionCreateOrConnectWithoutProyectoInput[] | undefined;
    upsert?: InscripcionUpsertWithWhereUniqueWithoutProyectoInput[] | undefined;
    createMany?: InscripcionCreateManyProyectoInputEnvelope | undefined;
    set?: InscripcionWhereUniqueInput[] | undefined;
    disconnect?: InscripcionWhereUniqueInput[] | undefined;
    delete?: InscripcionWhereUniqueInput[] | undefined;
    connect?: InscripcionWhereUniqueInput[] | undefined;
    update?: InscripcionUpdateWithWhereUniqueWithoutProyectoInput[] | undefined;
    updateMany?: InscripcionUpdateManyWithWhereWithoutProyectoInput[] | undefined;
    deleteMany?: InscripcionScalarWhereInput[] | undefined;
}
