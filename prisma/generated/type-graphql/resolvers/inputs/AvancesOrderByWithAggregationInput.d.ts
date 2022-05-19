import { AvancesCountOrderByAggregateInput } from "../inputs/AvancesCountOrderByAggregateInput";
import { AvancesMaxOrderByAggregateInput } from "../inputs/AvancesMaxOrderByAggregateInput";
import { AvancesMinOrderByAggregateInput } from "../inputs/AvancesMinOrderByAggregateInput";
export declare class AvancesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    fecha?: "asc" | "desc" | undefined;
    descripcion?: "asc" | "desc" | undefined;
    observaciones?: "asc" | "desc" | undefined;
    proyectoId?: "asc" | "desc" | undefined;
    UserId?: "asc" | "desc" | undefined;
    _count?: AvancesCountOrderByAggregateInput | undefined;
    _max?: AvancesMaxOrderByAggregateInput | undefined;
    _min?: AvancesMinOrderByAggregateInput | undefined;
}
