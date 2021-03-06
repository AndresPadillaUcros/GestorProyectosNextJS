import { AvancesOrderByWithRelationInput } from "../../../inputs/AvancesOrderByWithRelationInput";
import { AvancesWhereInput } from "../../../inputs/AvancesWhereInput";
import { AvancesWhereUniqueInput } from "../../../inputs/AvancesWhereUniqueInput";
export declare class FindFirstAvancesArgs {
    where?: AvancesWhereInput | undefined;
    orderBy?: AvancesOrderByWithRelationInput[] | undefined;
    cursor?: AvancesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "fecha" | "descripcion" | "observaciones" | "proyectoId" | "UserId"> | undefined;
}
