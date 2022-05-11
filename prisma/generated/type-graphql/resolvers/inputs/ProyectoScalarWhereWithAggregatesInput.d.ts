import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumEnum_EstadoProyectoWithAggregatesFilter } from "../inputs/EnumEnum_EstadoProyectoWithAggregatesFilter";
import { EnumEnum_FaseProyectoWithAggregatesFilter } from "../inputs/EnumEnum_FaseProyectoWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
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
    estado?: EnumEnum_EstadoProyectoWithAggregatesFilter | undefined;
    fase?: EnumEnum_FaseProyectoWithAggregatesFilter | undefined;
    objetivoGeneral?: StringNullableWithAggregatesFilter | undefined;
    usuarioId?: StringWithAggregatesFilter | undefined;
}
