import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ProyectoScalarWhereWithAggregatesInput {
    AND?: ProyectoScalarWhereWithAggregatesInput[] | undefined;
    OR?: ProyectoScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ProyectoScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    nombre?: StringWithAggregatesFilter | undefined;
    presupuesto?: FloatWithAggregatesFilter | undefined;
    fechaInicio?: DateTimeWithAggregatesFilter | undefined;
    fechaFin?: DateTimeNullableWithAggregatesFilter | undefined;
    usuarioId?: StringWithAggregatesFilter | undefined;
}
