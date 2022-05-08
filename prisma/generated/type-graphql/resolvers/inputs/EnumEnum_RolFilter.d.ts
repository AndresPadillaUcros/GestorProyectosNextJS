import { NestedEnumEnum_RolFilter } from "../inputs/NestedEnumEnum_RolFilter";
export declare class EnumEnum_RolFilter {
    equals?: "Estudiante" | "Lider" | "Administrador" | undefined;
    in?: Array<"Estudiante" | "Lider" | "Administrador"> | undefined;
    notIn?: Array<"Estudiante" | "Lider" | "Administrador"> | undefined;
    not?: NestedEnumEnum_RolFilter | undefined;
}
