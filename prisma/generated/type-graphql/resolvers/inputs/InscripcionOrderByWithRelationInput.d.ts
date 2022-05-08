import { ProyectoOrderByWithRelationInput } from "../inputs/ProyectoOrderByWithRelationInput";
import { UsuarioOrderByWithRelationInput } from "../inputs/UsuarioOrderByWithRelationInput";
export declare class InscripcionOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    estado?: "asc" | "desc" | undefined;
    fechaIngreso?: "asc" | "desc" | undefined;
    fechaEgreso?: "asc" | "desc" | undefined;
    proyecto?: ProyectoOrderByWithRelationInput | undefined;
    proyectoId?: "asc" | "desc" | undefined;
    estudiante?: UsuarioOrderByWithRelationInput | undefined;
    usuarioId?: "asc" | "desc" | undefined;
}
