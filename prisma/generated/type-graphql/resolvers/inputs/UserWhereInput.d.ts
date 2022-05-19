import { AccountListRelationFilter } from "../inputs/AccountListRelationFilter";
import { AvancesListRelationFilter } from "../inputs/AvancesListRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumEnum_EstadoUserFilter } from "../inputs/EnumEnum_EstadoUserFilter";
import { EnumEnum_RolFilter } from "../inputs/EnumEnum_RolFilter";
import { InscripcionListRelationFilter } from "../inputs/InscripcionListRelationFilter";
import { ProyectoListRelationFilter } from "../inputs/ProyectoListRelationFilter";
import { SessionListRelationFilter } from "../inputs/SessionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class UserWhereInput {
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    id?: StringFilter | undefined;
    email?: StringNullableFilter | undefined;
    emailVerified?: DateTimeNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    apellido?: StringNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    identificacion?: StringNullableFilter | undefined;
    rol?: EnumEnum_RolFilter | undefined;
    estado?: EnumEnum_EstadoUserFilter | undefined;
    proyectosLiderados?: ProyectoListRelationFilter | undefined;
    avances?: AvancesListRelationFilter | undefined;
    inscripciones?: InscripcionListRelationFilter | undefined;
    accounts?: AccountListRelationFilter | undefined;
    sessions?: SessionListRelationFilter | undefined;
}
