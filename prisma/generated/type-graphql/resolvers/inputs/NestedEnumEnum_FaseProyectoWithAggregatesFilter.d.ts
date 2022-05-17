import { NestedEnumEnum_FaseProyectoFilter } from "../inputs/NestedEnumEnum_FaseProyectoFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumEnum_FaseProyectoWithAggregatesFilter {
    equals?: "Iniciado" | "Desarrollo" | "Terminado" | undefined;
    in?: Array<"Iniciado" | "Desarrollo" | "Terminado"> | undefined;
    notIn?: Array<"Iniciado" | "Desarrollo" | "Terminado"> | undefined;
    not?: NestedEnumEnum_FaseProyectoWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumEnum_FaseProyectoFilter | undefined;
    _max?: NestedEnumEnum_FaseProyectoFilter | undefined;
}
