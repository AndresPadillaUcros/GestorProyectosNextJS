import { ProyectoCreateManyLiderInputEnvelope } from "../inputs/ProyectoCreateManyLiderInputEnvelope";
import { ProyectoCreateOrConnectWithoutLiderInput } from "../inputs/ProyectoCreateOrConnectWithoutLiderInput";
import { ProyectoCreateWithoutLiderInput } from "../inputs/ProyectoCreateWithoutLiderInput";
import { ProyectoWhereUniqueInput } from "../inputs/ProyectoWhereUniqueInput";
export declare class ProyectoCreateNestedManyWithoutLiderInput {
    create?: ProyectoCreateWithoutLiderInput[] | undefined;
    connectOrCreate?: ProyectoCreateOrConnectWithoutLiderInput[] | undefined;
    createMany?: ProyectoCreateManyLiderInputEnvelope | undefined;
    connect?: ProyectoWhereUniqueInput[] | undefined;
}
