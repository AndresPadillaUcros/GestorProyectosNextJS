import { NestedEnumEnum_EstadoUserFilter } from "../inputs/NestedEnumEnum_EstadoUserFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumEnum_EstadoUserWithAggregatesFilter {
    equals?: "Pendiente" | "Autorizado" | "NoAutorizado" | undefined;
    in?: Array<"Pendiente" | "Autorizado" | "NoAutorizado"> | undefined;
    notIn?: Array<"Pendiente" | "Autorizado" | "NoAutorizado"> | undefined;
    not?: NestedEnumEnum_EstadoUserWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumEnum_EstadoUserFilter | undefined;
    _max?: NestedEnumEnum_EstadoUserFilter | undefined;
}
