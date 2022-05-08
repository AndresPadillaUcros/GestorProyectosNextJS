import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class AvancesScalarWhereWithAggregatesInput {
    AND?: AvancesScalarWhereWithAggregatesInput[] | undefined;
    OR?: AvancesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: AvancesScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    fecha?: DateTimeWithAggregatesFilter | undefined;
    descripcion?: StringWithAggregatesFilter | undefined;
    observaciones?: StringWithAggregatesFilter | undefined;
    proyectoId?: StringWithAggregatesFilter | undefined;
    usuarioId?: StringWithAggregatesFilter | undefined;
}
