import { NestedEnumEnum_EstadoInscripcionFilter } from "../inputs/NestedEnumEnum_EstadoInscripcionFilter";
import { NestedEnumEnum_EstadoInscripcionWithAggregatesFilter } from "../inputs/NestedEnumEnum_EstadoInscripcionWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumEnum_EstadoInscripcionWithAggregatesFilter {
    equals?: "Aceptado" | "Rechazado" | "Pendiente" | undefined;
    in?: Array<"Aceptado" | "Rechazado" | "Pendiente"> | undefined;
    notIn?: Array<"Aceptado" | "Rechazado" | "Pendiente"> | undefined;
    not?: NestedEnumEnum_EstadoInscripcionWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumEnum_EstadoInscripcionFilter | undefined;
    _max?: NestedEnumEnum_EstadoInscripcionFilter | undefined;
}
