import { ProyectoOrderByWithRelationInput } from "../inputs/ProyectoOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class InscripcionOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    estado?: "asc" | "desc" | undefined;
    fechaIngreso?: "asc" | "desc" | undefined;
    fechaEgreso?: "asc" | "desc" | undefined;
    proyecto?: ProyectoOrderByWithRelationInput | undefined;
    proyectoId?: "asc" | "desc" | undefined;
    estudiante?: UserOrderByWithRelationInput | undefined;
    UserId?: "asc" | "desc" | undefined;
}
