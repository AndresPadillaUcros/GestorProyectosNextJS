import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ProyectoRelationFilter } from "../inputs/ProyectoRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UsuarioRelationFilter } from "../inputs/UsuarioRelationFilter";
export declare class AvancesWhereInput {
    AND?: AvancesWhereInput[] | undefined;
    OR?: AvancesWhereInput[] | undefined;
    NOT?: AvancesWhereInput[] | undefined;
    id?: StringFilter | undefined;
    fecha?: DateTimeFilter | undefined;
    descripcion?: StringFilter | undefined;
    observaciones?: StringNullableFilter | undefined;
    proyecto?: ProyectoRelationFilter | undefined;
    proyectoId?: StringFilter | undefined;
    creadoPor?: UsuarioRelationFilter | undefined;
    usuarioId?: StringFilter | undefined;
}
