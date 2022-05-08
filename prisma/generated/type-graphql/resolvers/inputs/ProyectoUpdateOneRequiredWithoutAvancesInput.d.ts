import { ProyectoCreateOrConnectWithoutAvancesInput } from "../inputs/ProyectoCreateOrConnectWithoutAvancesInput";
import { ProyectoCreateWithoutAvancesInput } from "../inputs/ProyectoCreateWithoutAvancesInput";
import { ProyectoUpdateWithoutAvancesInput } from "../inputs/ProyectoUpdateWithoutAvancesInput";
import { ProyectoUpsertWithoutAvancesInput } from "../inputs/ProyectoUpsertWithoutAvancesInput";
import { ProyectoWhereUniqueInput } from "../inputs/ProyectoWhereUniqueInput";
export declare class ProyectoUpdateOneRequiredWithoutAvancesInput {
    create?: ProyectoCreateWithoutAvancesInput | undefined;
    connectOrCreate?: ProyectoCreateOrConnectWithoutAvancesInput | undefined;
    upsert?: ProyectoUpsertWithoutAvancesInput | undefined;
    connect?: ProyectoWhereUniqueInput | undefined;
    update?: ProyectoUpdateWithoutAvancesInput | undefined;
}
