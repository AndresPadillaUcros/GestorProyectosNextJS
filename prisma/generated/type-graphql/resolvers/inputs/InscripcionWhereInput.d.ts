import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumEnum_EstadoInscripcionFilter } from "../inputs/EnumEnum_EstadoInscripcionFilter";
import { ProyectoRelationFilter } from "../inputs/ProyectoRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class InscripcionWhereInput {
    AND?: InscripcionWhereInput[] | undefined;
    OR?: InscripcionWhereInput[] | undefined;
    NOT?: InscripcionWhereInput[] | undefined;
    id?: StringFilter | undefined;
    estado?: EnumEnum_EstadoInscripcionFilter | undefined;
    fechaIngreso?: DateTimeFilter | undefined;
    fechaEgreso?: DateTimeNullableFilter | undefined;
    proyecto?: ProyectoRelationFilter | undefined;
    proyectoId?: StringFilter | undefined;
    estudiante?: UserRelationFilter | undefined;
    UserId?: StringFilter | undefined;
}
