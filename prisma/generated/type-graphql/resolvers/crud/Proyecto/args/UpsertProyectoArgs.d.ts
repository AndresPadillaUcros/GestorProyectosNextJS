import { ProyectoCreateInput } from "../../../inputs/ProyectoCreateInput";
import { ProyectoUpdateInput } from "../../../inputs/ProyectoUpdateInput";
import { ProyectoWhereUniqueInput } from "../../../inputs/ProyectoWhereUniqueInput";
export declare class UpsertProyectoArgs {
    where: ProyectoWhereUniqueInput;
    create: ProyectoCreateInput;
    update: ProyectoUpdateInput;
}
