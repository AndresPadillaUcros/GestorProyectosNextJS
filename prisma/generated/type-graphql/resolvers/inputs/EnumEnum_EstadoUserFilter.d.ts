import { NestedEnumEnum_EstadoUserFilter } from "../inputs/NestedEnumEnum_EstadoUserFilter";
export declare class EnumEnum_EstadoUserFilter {
    equals?: "Pendiente" | "Autorizado" | "NoAutorizado" | undefined;
    in?: Array<"Pendiente" | "Autorizado" | "NoAutorizado"> | undefined;
    notIn?: Array<"Pendiente" | "Autorizado" | "NoAutorizado"> | undefined;
    not?: NestedEnumEnum_EstadoUserFilter | undefined;
}
