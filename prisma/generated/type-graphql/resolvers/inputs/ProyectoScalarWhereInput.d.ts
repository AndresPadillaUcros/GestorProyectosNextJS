import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ProyectoScalarWhereInput {
    AND?: ProyectoScalarWhereInput[] | undefined;
    OR?: ProyectoScalarWhereInput[] | undefined;
    NOT?: ProyectoScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    nombre?: StringFilter | undefined;
    presupuesto?: FloatFilter | undefined;
    fechaInicio?: DateTimeFilter | undefined;
    fechaFin?: DateTimeNullableFilter | undefined;
    usuarioId?: StringFilter | undefined;
}
