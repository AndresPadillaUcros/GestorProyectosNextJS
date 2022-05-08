import { AvancesOrderByWithAggregationInput } from "../../../inputs/AvancesOrderByWithAggregationInput";
import { AvancesScalarWhereWithAggregatesInput } from "../../../inputs/AvancesScalarWhereWithAggregatesInput";
import { AvancesWhereInput } from "../../../inputs/AvancesWhereInput";
export declare class GroupByAvancesArgs {
    where?: AvancesWhereInput | undefined;
    orderBy?: AvancesOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "fecha" | "descripcion" | "observaciones" | "proyectoId" | "usuarioId">;
    having?: AvancesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
