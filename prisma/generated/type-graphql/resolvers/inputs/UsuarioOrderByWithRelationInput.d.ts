import { AvancesOrderByRelationAggregateInput } from "../inputs/AvancesOrderByRelationAggregateInput";
import { InscripcionOrderByRelationAggregateInput } from "../inputs/InscripcionOrderByRelationAggregateInput";
import { ProyectoOrderByRelationAggregateInput } from "../inputs/ProyectoOrderByRelationAggregateInput";
export declare class UsuarioOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    nombre?: "asc" | "desc" | undefined;
    apellido?: "asc" | "desc" | undefined;
    identificacion?: "asc" | "desc" | undefined;
    rol?: "asc" | "desc" | undefined;
    estado?: "asc" | "desc" | undefined;
    proyectosLiderados?: ProyectoOrderByRelationAggregateInput | undefined;
    avances?: AvancesOrderByRelationAggregateInput | undefined;
    inscripciones?: InscripcionOrderByRelationAggregateInput | undefined;
}
