import { ProyectoCreateOrConnectWithoutInscripcionesInput } from "../inputs/ProyectoCreateOrConnectWithoutInscripcionesInput";
import { ProyectoCreateWithoutInscripcionesInput } from "../inputs/ProyectoCreateWithoutInscripcionesInput";
import { ProyectoUpdateWithoutInscripcionesInput } from "../inputs/ProyectoUpdateWithoutInscripcionesInput";
import { ProyectoUpsertWithoutInscripcionesInput } from "../inputs/ProyectoUpsertWithoutInscripcionesInput";
import { ProyectoWhereUniqueInput } from "../inputs/ProyectoWhereUniqueInput";
export declare class ProyectoUpdateOneRequiredWithoutInscripcionesInput {
    create?: ProyectoCreateWithoutInscripcionesInput | undefined;
    connectOrCreate?: ProyectoCreateOrConnectWithoutInscripcionesInput | undefined;
    upsert?: ProyectoUpsertWithoutInscripcionesInput | undefined;
    connect?: ProyectoWhereUniqueInput | undefined;
    update?: ProyectoUpdateWithoutInscripcionesInput | undefined;
}
