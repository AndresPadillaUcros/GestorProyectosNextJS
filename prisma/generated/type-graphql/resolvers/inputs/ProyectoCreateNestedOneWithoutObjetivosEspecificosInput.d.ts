import { ProyectoCreateOrConnectWithoutObjetivosEspecificosInput } from "../inputs/ProyectoCreateOrConnectWithoutObjetivosEspecificosInput";
import { ProyectoCreateWithoutObjetivosEspecificosInput } from "../inputs/ProyectoCreateWithoutObjetivosEspecificosInput";
import { ProyectoWhereUniqueInput } from "../inputs/ProyectoWhereUniqueInput";
export declare class ProyectoCreateNestedOneWithoutObjetivosEspecificosInput {
    create?: ProyectoCreateWithoutObjetivosEspecificosInput | undefined;
    connectOrCreate?: ProyectoCreateOrConnectWithoutObjetivosEspecificosInput | undefined;
    connect?: ProyectoWhereUniqueInput | undefined;
}
