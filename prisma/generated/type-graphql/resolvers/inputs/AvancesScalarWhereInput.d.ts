import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class AvancesScalarWhereInput {
    AND?: AvancesScalarWhereInput[] | undefined;
    OR?: AvancesScalarWhereInput[] | undefined;
    NOT?: AvancesScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    fecha?: DateTimeFilter | undefined;
    descripcion?: StringFilter | undefined;
    observaciones?: StringFilter | undefined;
    proyectoId?: StringFilter | undefined;
    usuarioId?: StringFilter | undefined;
}
