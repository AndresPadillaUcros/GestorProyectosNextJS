import { AvancesListRelationFilter } from "../inputs/AvancesListRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumEnum_EstadoProyectoFilter } from "../inputs/EnumEnum_EstadoProyectoFilter";
import { EnumEnum_FaseProyectoFilter } from "../inputs/EnumEnum_FaseProyectoFilter";
import { InscripcionListRelationFilter } from "../inputs/InscripcionListRelationFilter";
import { ObjetivosEspecificosListRelationFilter } from "../inputs/ObjetivosEspecificosListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class ProyectoWhereInput {
    AND?: ProyectoWhereInput[] | undefined;
    OR?: ProyectoWhereInput[] | undefined;
    NOT?: ProyectoWhereInput[] | undefined;
    id?: StringFilter | undefined;
    nombre?: StringFilter | undefined;
    presupuesto?: StringNullableFilter | undefined;
    fechaInicio?: DateTimeNullableFilter | undefined;
    fechaFin?: DateTimeNullableFilter | undefined;
    estado?: EnumEnum_EstadoProyectoFilter | undefined;
    fase?: EnumEnum_FaseProyectoFilter | undefined;
    objetivoGeneral?: StringNullableFilter | undefined;
    lider?: UserRelationFilter | undefined;
    UserId?: StringFilter | undefined;
    avances?: AvancesListRelationFilter | undefined;
    inscripciones?: InscripcionListRelationFilter | undefined;
    objetivosEspecificos?: ObjetivosEspecificosListRelationFilter | undefined;
}
