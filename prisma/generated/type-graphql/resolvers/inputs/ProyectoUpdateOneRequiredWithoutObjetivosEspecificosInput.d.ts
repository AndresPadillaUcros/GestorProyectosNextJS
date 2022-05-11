import { ProyectoCreateOrConnectWithoutObjetivosEspecificosInput } from "../inputs/ProyectoCreateOrConnectWithoutObjetivosEspecificosInput";
import { ProyectoCreateWithoutObjetivosEspecificosInput } from "../inputs/ProyectoCreateWithoutObjetivosEspecificosInput";
import { ProyectoUpdateWithoutObjetivosEspecificosInput } from "../inputs/ProyectoUpdateWithoutObjetivosEspecificosInput";
import { ProyectoUpsertWithoutObjetivosEspecificosInput } from "../inputs/ProyectoUpsertWithoutObjetivosEspecificosInput";
import { ProyectoWhereUniqueInput } from "../inputs/ProyectoWhereUniqueInput";
export declare class ProyectoUpdateOneRequiredWithoutObjetivosEspecificosInput {
    create?: ProyectoCreateWithoutObjetivosEspecificosInput | undefined;
    connectOrCreate?: ProyectoCreateOrConnectWithoutObjetivosEspecificosInput | undefined;
    upsert?: ProyectoUpsertWithoutObjetivosEspecificosInput | undefined;
    connect?: ProyectoWhereUniqueInput | undefined;
    update?: ProyectoUpdateWithoutObjetivosEspecificosInput | undefined;
}
