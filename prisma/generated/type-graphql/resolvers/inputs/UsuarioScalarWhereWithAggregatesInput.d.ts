import { EnumEnum_EstadoUsuarioWithAggregatesFilter } from "../inputs/EnumEnum_EstadoUsuarioWithAggregatesFilter";
import { EnumEnum_RolWithAggregatesFilter } from "../inputs/EnumEnum_RolWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class UsuarioScalarWhereWithAggregatesInput {
    AND?: UsuarioScalarWhereWithAggregatesInput[] | undefined;
    OR?: UsuarioScalarWhereWithAggregatesInput[] | undefined;
    NOT?: UsuarioScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    email?: StringWithAggregatesFilter | undefined;
    nombre?: StringWithAggregatesFilter | undefined;
    apellido?: StringWithAggregatesFilter | undefined;
    identificacion?: StringWithAggregatesFilter | undefined;
    rol?: EnumEnum_RolWithAggregatesFilter | undefined;
    estado?: EnumEnum_EstadoUsuarioWithAggregatesFilter | undefined;
}
