import { ProyectoOrderByWithRelationInput } from "../../../inputs/ProyectoOrderByWithRelationInput";
import { ProyectoWhereInput } from "../../../inputs/ProyectoWhereInput";
import { ProyectoWhereUniqueInput } from "../../../inputs/ProyectoWhereUniqueInput";
export declare class AggregateProyectoArgs {
    where?: ProyectoWhereInput | undefined;
    orderBy?: ProyectoOrderByWithRelationInput[] | undefined;
    cursor?: ProyectoWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
