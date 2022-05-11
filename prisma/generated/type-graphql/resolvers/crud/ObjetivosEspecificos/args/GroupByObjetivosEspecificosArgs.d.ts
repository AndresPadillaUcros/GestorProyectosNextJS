import { ObjetivosEspecificosOrderByWithAggregationInput } from "../../../inputs/ObjetivosEspecificosOrderByWithAggregationInput";
import { ObjetivosEspecificosScalarWhereWithAggregatesInput } from "../../../inputs/ObjetivosEspecificosScalarWhereWithAggregatesInput";
import { ObjetivosEspecificosWhereInput } from "../../../inputs/ObjetivosEspecificosWhereInput";
export declare class GroupByObjetivosEspecificosArgs {
    where?: ObjetivosEspecificosWhereInput | undefined;
    orderBy?: ObjetivosEspecificosOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "descripcion" | "proyectoId">;
    having?: ObjetivosEspecificosScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
