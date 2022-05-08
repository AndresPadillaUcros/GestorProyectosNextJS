import { NestedEnumEnum_EstadoUsuarioFilter } from "../inputs/NestedEnumEnum_EstadoUsuarioFilter";
import { NestedEnumEnum_EstadoUsuarioWithAggregatesFilter } from "../inputs/NestedEnumEnum_EstadoUsuarioWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumEnum_EstadoUsuarioWithAggregatesFilter {
    equals?: "Pendiente" | "Autorizado" | "NoAutorizado" | undefined;
    in?: Array<"Pendiente" | "Autorizado" | "NoAutorizado"> | undefined;
    notIn?: Array<"Pendiente" | "Autorizado" | "NoAutorizado"> | undefined;
    not?: NestedEnumEnum_EstadoUsuarioWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumEnum_EstadoUsuarioFilter | undefined;
    _max?: NestedEnumEnum_EstadoUsuarioFilter | undefined;
}
