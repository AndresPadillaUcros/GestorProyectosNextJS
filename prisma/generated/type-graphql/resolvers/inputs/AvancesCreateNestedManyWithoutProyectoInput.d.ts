import { AvancesCreateManyProyectoInputEnvelope } from "../inputs/AvancesCreateManyProyectoInputEnvelope";
import { AvancesCreateOrConnectWithoutProyectoInput } from "../inputs/AvancesCreateOrConnectWithoutProyectoInput";
import { AvancesCreateWithoutProyectoInput } from "../inputs/AvancesCreateWithoutProyectoInput";
import { AvancesWhereUniqueInput } from "../inputs/AvancesWhereUniqueInput";
export declare class AvancesCreateNestedManyWithoutProyectoInput {
    create?: AvancesCreateWithoutProyectoInput[] | undefined;
    connectOrCreate?: AvancesCreateOrConnectWithoutProyectoInput[] | undefined;
    createMany?: AvancesCreateManyProyectoInputEnvelope | undefined;
    connect?: AvancesWhereUniqueInput[] | undefined;
}
