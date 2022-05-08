import { AvancesListRelationFilter } from "../inputs/AvancesListRelationFilter";
import { EnumEnum_EstadoUsuarioFilter } from "../inputs/EnumEnum_EstadoUsuarioFilter";
import { EnumEnum_RolFilter } from "../inputs/EnumEnum_RolFilter";
import { InscripcionListRelationFilter } from "../inputs/InscripcionListRelationFilter";
import { ProyectoListRelationFilter } from "../inputs/ProyectoListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class UsuarioWhereInput {
    AND?: UsuarioWhereInput[] | undefined;
    OR?: UsuarioWhereInput[] | undefined;
    NOT?: UsuarioWhereInput[] | undefined;
    id?: StringFilter | undefined;
    email?: StringFilter | undefined;
    nombre?: StringFilter | undefined;
    apellido?: StringFilter | undefined;
    identificacion?: StringFilter | undefined;
    rol?: EnumEnum_RolFilter | undefined;
    estado?: EnumEnum_EstadoUsuarioFilter | undefined;
    proyectosLiderados?: ProyectoListRelationFilter | undefined;
    avances?: AvancesListRelationFilter | undefined;
    inscripciones?: InscripcionListRelationFilter | undefined;
}
