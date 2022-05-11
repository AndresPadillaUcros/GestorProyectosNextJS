import { AvancesListRelationFilter } from "../inputs/AvancesListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumEnum_EstadoProyectoFilter } from "../inputs/EnumEnum_EstadoProyectoFilter";
import { EnumEnum_FaseProyectoFilter } from "../inputs/EnumEnum_FaseProyectoFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { InscripcionListRelationFilter } from "../inputs/InscripcionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { UsuarioRelationFilter } from "../inputs/UsuarioRelationFilter";
export declare class ProyectoWhereInput {
    AND?: ProyectoWhereInput[] | undefined;
    OR?: ProyectoWhereInput[] | undefined;
    NOT?: ProyectoWhereInput[] | undefined;
    id?: StringFilter | undefined;
    nombre?: StringFilter | undefined;
    presupuesto?: FloatFilter | undefined;
    fechaInicio?: DateTimeFilter | undefined;
    fechaFin?: DateTimeNullableFilter | undefined;
    estado?: EnumEnum_EstadoProyectoFilter | undefined;
    fase?: EnumEnum_FaseProyectoFilter | undefined;
    objetivoGeneral?: StringNullableFilter | undefined;
    objetivosEspecificos?: StringNullableListFilter | undefined;
    lider?: UsuarioRelationFilter | undefined;
    usuarioId?: StringFilter | undefined;
    avances?: AvancesListRelationFilter | undefined;
    inscripciones?: InscripcionListRelationFilter | undefined;
}
