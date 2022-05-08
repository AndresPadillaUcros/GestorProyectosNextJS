import { ProyectoCreateOrConnectWithoutAvancesInput } from "../inputs/ProyectoCreateOrConnectWithoutAvancesInput";
import { ProyectoCreateWithoutAvancesInput } from "../inputs/ProyectoCreateWithoutAvancesInput";
import { ProyectoWhereUniqueInput } from "../inputs/ProyectoWhereUniqueInput";
export declare class ProyectoCreateNestedOneWithoutAvancesInput {
    create?: ProyectoCreateWithoutAvancesInput | undefined;
    connectOrCreate?: ProyectoCreateOrConnectWithoutAvancesInput | undefined;
    connect?: ProyectoWhereUniqueInput | undefined;
}
