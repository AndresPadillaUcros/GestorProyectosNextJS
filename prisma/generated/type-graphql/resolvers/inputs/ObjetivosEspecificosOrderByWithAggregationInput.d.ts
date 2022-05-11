import { ObjetivosEspecificosCountOrderByAggregateInput } from "../inputs/ObjetivosEspecificosCountOrderByAggregateInput";
import { ObjetivosEspecificosMaxOrderByAggregateInput } from "../inputs/ObjetivosEspecificosMaxOrderByAggregateInput";
import { ObjetivosEspecificosMinOrderByAggregateInput } from "../inputs/ObjetivosEspecificosMinOrderByAggregateInput";
export declare class ObjetivosEspecificosOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    descripcion?: "asc" | "desc" | undefined;
    proyectoId?: "asc" | "desc" | undefined;
    _count?: ObjetivosEspecificosCountOrderByAggregateInput | undefined;
    _max?: ObjetivosEspecificosMaxOrderByAggregateInput | undefined;
    _min?: ObjetivosEspecificosMinOrderByAggregateInput | undefined;
}
