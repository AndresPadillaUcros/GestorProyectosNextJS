import { ProyectoCreateManyLiderInputEnvelope } from "../inputs/ProyectoCreateManyLiderInputEnvelope";
import { ProyectoCreateOrConnectWithoutLiderInput } from "../inputs/ProyectoCreateOrConnectWithoutLiderInput";
import { ProyectoCreateWithoutLiderInput } from "../inputs/ProyectoCreateWithoutLiderInput";
import { ProyectoScalarWhereInput } from "../inputs/ProyectoScalarWhereInput";
import { ProyectoUpdateManyWithWhereWithoutLiderInput } from "../inputs/ProyectoUpdateManyWithWhereWithoutLiderInput";
import { ProyectoUpdateWithWhereUniqueWithoutLiderInput } from "../inputs/ProyectoUpdateWithWhereUniqueWithoutLiderInput";
import { ProyectoUpsertWithWhereUniqueWithoutLiderInput } from "../inputs/ProyectoUpsertWithWhereUniqueWithoutLiderInput";
import { ProyectoWhereUniqueInput } from "../inputs/ProyectoWhereUniqueInput";
export declare class ProyectoUpdateManyWithoutLiderInput {
    create?: ProyectoCreateWithoutLiderInput[] | undefined;
    connectOrCreate?: ProyectoCreateOrConnectWithoutLiderInput[] | undefined;
    upsert?: ProyectoUpsertWithWhereUniqueWithoutLiderInput[] | undefined;
    createMany?: ProyectoCreateManyLiderInputEnvelope | undefined;
    set?: ProyectoWhereUniqueInput[] | undefined;
    disconnect?: ProyectoWhereUniqueInput[] | undefined;
    delete?: ProyectoWhereUniqueInput[] | undefined;
    connect?: ProyectoWhereUniqueInput[] | undefined;
    update?: ProyectoUpdateWithWhereUniqueWithoutLiderInput[] | undefined;
    updateMany?: ProyectoUpdateManyWithWhereWithoutLiderInput[] | undefined;
    deleteMany?: ProyectoScalarWhereInput[] | undefined;
}
