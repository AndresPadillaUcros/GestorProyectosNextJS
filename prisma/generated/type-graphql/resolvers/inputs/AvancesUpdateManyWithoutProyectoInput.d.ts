import { AvancesCreateManyProyectoInputEnvelope } from "../inputs/AvancesCreateManyProyectoInputEnvelope";
import { AvancesCreateOrConnectWithoutProyectoInput } from "../inputs/AvancesCreateOrConnectWithoutProyectoInput";
import { AvancesCreateWithoutProyectoInput } from "../inputs/AvancesCreateWithoutProyectoInput";
import { AvancesScalarWhereInput } from "../inputs/AvancesScalarWhereInput";
import { AvancesUpdateManyWithWhereWithoutProyectoInput } from "../inputs/AvancesUpdateManyWithWhereWithoutProyectoInput";
import { AvancesUpdateWithWhereUniqueWithoutProyectoInput } from "../inputs/AvancesUpdateWithWhereUniqueWithoutProyectoInput";
import { AvancesUpsertWithWhereUniqueWithoutProyectoInput } from "../inputs/AvancesUpsertWithWhereUniqueWithoutProyectoInput";
import { AvancesWhereUniqueInput } from "../inputs/AvancesWhereUniqueInput";
export declare class AvancesUpdateManyWithoutProyectoInput {
    create?: AvancesCreateWithoutProyectoInput[] | undefined;
    connectOrCreate?: AvancesCreateOrConnectWithoutProyectoInput[] | undefined;
    upsert?: AvancesUpsertWithWhereUniqueWithoutProyectoInput[] | undefined;
    createMany?: AvancesCreateManyProyectoInputEnvelope | undefined;
    set?: AvancesWhereUniqueInput[] | undefined;
    disconnect?: AvancesWhereUniqueInput[] | undefined;
    delete?: AvancesWhereUniqueInput[] | undefined;
    connect?: AvancesWhereUniqueInput[] | undefined;
    update?: AvancesUpdateWithWhereUniqueWithoutProyectoInput[] | undefined;
    updateMany?: AvancesUpdateManyWithWhereWithoutProyectoInput[] | undefined;
    deleteMany?: AvancesScalarWhereInput[] | undefined;
}
