import { NestedEnumEnum_EstadoProyectoFilter } from "../inputs/NestedEnumEnum_EstadoProyectoFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumEnum_EstadoProyectoWithAggregatesFilter {
    equals?: "Activo" | "Inactivo" | undefined;
    in?: Array<"Activo" | "Inactivo"> | undefined;
    notIn?: Array<"Activo" | "Inactivo"> | undefined;
    not?: NestedEnumEnum_EstadoProyectoWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumEnum_EstadoProyectoFilter | undefined;
    _max?: NestedEnumEnum_EstadoProyectoFilter | undefined;
}
