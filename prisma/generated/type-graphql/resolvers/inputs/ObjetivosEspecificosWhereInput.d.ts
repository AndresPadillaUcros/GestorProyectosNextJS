import { ProyectoRelationFilter } from "../inputs/ProyectoRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ObjetivosEspecificosWhereInput {
    AND?: ObjetivosEspecificosWhereInput[] | undefined;
    OR?: ObjetivosEspecificosWhereInput[] | undefined;
    NOT?: ObjetivosEspecificosWhereInput[] | undefined;
    id?: StringFilter | undefined;
    descripcion?: StringFilter | undefined;
    proyecto?: ProyectoRelationFilter | undefined;
    proyectoId?: StringFilter | undefined;
}
