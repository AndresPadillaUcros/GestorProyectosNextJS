import { NestedEnumEnum_EstadoUsuarioFilter } from "../inputs/NestedEnumEnum_EstadoUsuarioFilter";
export declare class EnumEnum_EstadoUsuarioFilter {
    equals?: "Pendiente" | "Autorizado" | "NoAutorizado" | undefined;
    in?: Array<"Pendiente" | "Autorizado" | "NoAutorizado"> | undefined;
    notIn?: Array<"Pendiente" | "Autorizado" | "NoAutorizado"> | undefined;
    not?: NestedEnumEnum_EstadoUsuarioFilter | undefined;
}
