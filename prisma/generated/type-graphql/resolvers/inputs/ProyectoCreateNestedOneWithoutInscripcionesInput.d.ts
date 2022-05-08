import { ProyectoCreateOrConnectWithoutInscripcionesInput } from "../inputs/ProyectoCreateOrConnectWithoutInscripcionesInput";
import { ProyectoCreateWithoutInscripcionesInput } from "../inputs/ProyectoCreateWithoutInscripcionesInput";
import { ProyectoWhereUniqueInput } from "../inputs/ProyectoWhereUniqueInput";
export declare class ProyectoCreateNestedOneWithoutInscripcionesInput {
    create?: ProyectoCreateWithoutInscripcionesInput | undefined;
    connectOrCreate?: ProyectoCreateOrConnectWithoutInscripcionesInput | undefined;
    connect?: ProyectoWhereUniqueInput | undefined;
}
