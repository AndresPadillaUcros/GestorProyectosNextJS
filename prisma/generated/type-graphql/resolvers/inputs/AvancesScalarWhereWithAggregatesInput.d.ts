import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class AvancesScalarWhereWithAggregatesInput {
    AND?: AvancesScalarWhereWithAggregatesInput[] | undefined;
    OR?: AvancesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: AvancesScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    fecha?: DateTimeWithAggregatesFilter | undefined;
    descripcion?: StringWithAggregatesFilter | undefined;
    observaciones?: StringNullableWithAggregatesFilter | undefined;
    proyectoId?: StringWithAggregatesFilter | undefined;
    UserId?: StringWithAggregatesFilter | undefined;
}
