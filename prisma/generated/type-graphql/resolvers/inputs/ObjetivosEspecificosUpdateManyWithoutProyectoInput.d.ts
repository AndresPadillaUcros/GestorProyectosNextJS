import { ObjetivosEspecificosCreateManyProyectoInputEnvelope } from "../inputs/ObjetivosEspecificosCreateManyProyectoInputEnvelope";
import { ObjetivosEspecificosCreateOrConnectWithoutProyectoInput } from "../inputs/ObjetivosEspecificosCreateOrConnectWithoutProyectoInput";
import { ObjetivosEspecificosCreateWithoutProyectoInput } from "../inputs/ObjetivosEspecificosCreateWithoutProyectoInput";
import { ObjetivosEspecificosScalarWhereInput } from "../inputs/ObjetivosEspecificosScalarWhereInput";
import { ObjetivosEspecificosUpdateManyWithWhereWithoutProyectoInput } from "../inputs/ObjetivosEspecificosUpdateManyWithWhereWithoutProyectoInput";
import { ObjetivosEspecificosUpdateWithWhereUniqueWithoutProyectoInput } from "../inputs/ObjetivosEspecificosUpdateWithWhereUniqueWithoutProyectoInput";
import { ObjetivosEspecificosUpsertWithWhereUniqueWithoutProyectoInput } from "../inputs/ObjetivosEspecificosUpsertWithWhereUniqueWithoutProyectoInput";
import { ObjetivosEspecificosWhereUniqueInput } from "../inputs/ObjetivosEspecificosWhereUniqueInput";
export declare class ObjetivosEspecificosUpdateManyWithoutProyectoInput {
    create?: ObjetivosEspecificosCreateWithoutProyectoInput[] | undefined;
    connectOrCreate?: ObjetivosEspecificosCreateOrConnectWithoutProyectoInput[] | undefined;
    upsert?: ObjetivosEspecificosUpsertWithWhereUniqueWithoutProyectoInput[] | undefined;
    createMany?: ObjetivosEspecificosCreateManyProyectoInputEnvelope | undefined;
    set?: ObjetivosEspecificosWhereUniqueInput[] | undefined;
    disconnect?: ObjetivosEspecificosWhereUniqueInput[] | undefined;
    delete?: ObjetivosEspecificosWhereUniqueInput[] | undefined;
    connect?: ObjetivosEspecificosWhereUniqueInput[] | undefined;
    update?: ObjetivosEspecificosUpdateWithWhereUniqueWithoutProyectoInput[] | undefined;
    updateMany?: ObjetivosEspecificosUpdateManyWithWhereWithoutProyectoInput[] | undefined;
    deleteMany?: ObjetivosEspecificosScalarWhereInput[] | undefined;
}
