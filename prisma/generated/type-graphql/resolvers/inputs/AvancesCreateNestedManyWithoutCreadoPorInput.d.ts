import { AvancesCreateManyCreadoPorInputEnvelope } from "../inputs/AvancesCreateManyCreadoPorInputEnvelope";
import { AvancesCreateOrConnectWithoutCreadoPorInput } from "../inputs/AvancesCreateOrConnectWithoutCreadoPorInput";
import { AvancesCreateWithoutCreadoPorInput } from "../inputs/AvancesCreateWithoutCreadoPorInput";
import { AvancesWhereUniqueInput } from "../inputs/AvancesWhereUniqueInput";
export declare class AvancesCreateNestedManyWithoutCreadoPorInput {
    create?: AvancesCreateWithoutCreadoPorInput[] | undefined;
    connectOrCreate?: AvancesCreateOrConnectWithoutCreadoPorInput[] | undefined;
    createMany?: AvancesCreateManyCreadoPorInputEnvelope | undefined;
    connect?: AvancesWhereUniqueInput[] | undefined;
}
