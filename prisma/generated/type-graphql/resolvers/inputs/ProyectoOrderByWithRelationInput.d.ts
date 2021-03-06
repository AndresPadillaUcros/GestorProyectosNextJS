import { AvancesOrderByRelationAggregateInput } from "../inputs/AvancesOrderByRelationAggregateInput";
import { InscripcionOrderByRelationAggregateInput } from "../inputs/InscripcionOrderByRelationAggregateInput";
import { ObjetivosEspecificosOrderByRelationAggregateInput } from "../inputs/ObjetivosEspecificosOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class ProyectoOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    nombre?: "asc" | "desc" | undefined;
    presupuesto?: "asc" | "desc" | undefined;
    fechaInicio?: "asc" | "desc" | undefined;
    fechaFin?: "asc" | "desc" | undefined;
    estado?: "asc" | "desc" | undefined;
    fase?: "asc" | "desc" | undefined;
    objetivoGeneral?: "asc" | "desc" | undefined;
    lider?: UserOrderByWithRelationInput | undefined;
    UserId?: "asc" | "desc" | undefined;
    avances?: AvancesOrderByRelationAggregateInput | undefined;
    inscripciones?: InscripcionOrderByRelationAggregateInput | undefined;
    objetivosEspecificos?: ObjetivosEspecificosOrderByRelationAggregateInput | undefined;
}
