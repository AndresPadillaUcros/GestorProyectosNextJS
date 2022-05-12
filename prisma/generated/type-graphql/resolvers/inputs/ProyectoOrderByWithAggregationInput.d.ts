import { ProyectoCountOrderByAggregateInput } from "../inputs/ProyectoCountOrderByAggregateInput";
import { ProyectoMaxOrderByAggregateInput } from "../inputs/ProyectoMaxOrderByAggregateInput";
import { ProyectoMinOrderByAggregateInput } from "../inputs/ProyectoMinOrderByAggregateInput";
export declare class ProyectoOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    nombre?: "asc" | "desc" | undefined;
    presupuesto?: "asc" | "desc" | undefined;
    fechaInicio?: "asc" | "desc" | undefined;
    fechaFin?: "asc" | "desc" | undefined;
    estado?: "asc" | "desc" | undefined;
    fase?: "asc" | "desc" | undefined;
    objetivoGeneral?: "asc" | "desc" | undefined;
    usuarioId?: "asc" | "desc" | undefined;
    _count?: ProyectoCountOrderByAggregateInput | undefined;
    _max?: ProyectoMaxOrderByAggregateInput | undefined;
    _min?: ProyectoMinOrderByAggregateInput | undefined;
}
