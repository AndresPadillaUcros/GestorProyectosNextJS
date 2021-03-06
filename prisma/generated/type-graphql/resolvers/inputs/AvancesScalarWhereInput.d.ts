import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class AvancesScalarWhereInput {
    AND?: AvancesScalarWhereInput[] | undefined;
    OR?: AvancesScalarWhereInput[] | undefined;
    NOT?: AvancesScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    fecha?: DateTimeFilter | undefined;
    descripcion?: StringFilter | undefined;
    observaciones?: StringNullableFilter | undefined;
    proyectoId?: StringFilter | undefined;
    UserId?: StringFilter | undefined;
}
