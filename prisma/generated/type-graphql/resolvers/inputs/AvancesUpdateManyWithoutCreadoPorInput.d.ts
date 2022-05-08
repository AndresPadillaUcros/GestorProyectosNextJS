import { AvancesCreateManyCreadoPorInputEnvelope } from "../inputs/AvancesCreateManyCreadoPorInputEnvelope";
import { AvancesCreateOrConnectWithoutCreadoPorInput } from "../inputs/AvancesCreateOrConnectWithoutCreadoPorInput";
import { AvancesCreateWithoutCreadoPorInput } from "../inputs/AvancesCreateWithoutCreadoPorInput";
import { AvancesScalarWhereInput } from "../inputs/AvancesScalarWhereInput";
import { AvancesUpdateManyWithWhereWithoutCreadoPorInput } from "../inputs/AvancesUpdateManyWithWhereWithoutCreadoPorInput";
import { AvancesUpdateWithWhereUniqueWithoutCreadoPorInput } from "../inputs/AvancesUpdateWithWhereUniqueWithoutCreadoPorInput";
import { AvancesUpsertWithWhereUniqueWithoutCreadoPorInput } from "../inputs/AvancesUpsertWithWhereUniqueWithoutCreadoPorInput";
import { AvancesWhereUniqueInput } from "../inputs/AvancesWhereUniqueInput";
export declare class AvancesUpdateManyWithoutCreadoPorInput {
    create?: AvancesCreateWithoutCreadoPorInput[] | undefined;
    connectOrCreate?: AvancesCreateOrConnectWithoutCreadoPorInput[] | undefined;
    upsert?: AvancesUpsertWithWhereUniqueWithoutCreadoPorInput[] | undefined;
    createMany?: AvancesCreateManyCreadoPorInputEnvelope | undefined;
    set?: AvancesWhereUniqueInput[] | undefined;
    disconnect?: AvancesWhereUniqueInput[] | undefined;
    delete?: AvancesWhereUniqueInput[] | undefined;
    connect?: AvancesWhereUniqueInput[] | undefined;
    update?: AvancesUpdateWithWhereUniqueWithoutCreadoPorInput[] | undefined;
    updateMany?: AvancesUpdateManyWithWhereWithoutCreadoPorInput[] | undefined;
    deleteMany?: AvancesScalarWhereInput[] | undefined;
}
