import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumEnum_EstadoProyectoFilter } from "../inputs/EnumEnum_EstadoProyectoFilter";
import { EnumEnum_FaseProyectoFilter } from "../inputs/EnumEnum_FaseProyectoFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ProyectoScalarWhereInput {
    AND?: ProyectoScalarWhereInput[] | undefined;
    OR?: ProyectoScalarWhereInput[] | undefined;
    NOT?: ProyectoScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    nombre?: StringFilter | undefined;
    presupuesto?: StringFilter | undefined;
    fechaInicio?: DateTimeFilter | undefined;
    fechaFin?: DateTimeNullableFilter | undefined;
    estado?: EnumEnum_EstadoProyectoFilter | undefined;
    fase?: EnumEnum_FaseProyectoFilter | undefined;
    objetivoGeneral?: StringFilter | undefined;
    usuarioId?: StringFilter | undefined;
}
