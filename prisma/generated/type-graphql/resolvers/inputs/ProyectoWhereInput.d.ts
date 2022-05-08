import { AvancesListRelationFilter } from "../inputs/AvancesListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { InscripcionListRelationFilter } from "../inputs/InscripcionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UsuarioRelationFilter } from "../inputs/UsuarioRelationFilter";
export declare class ProyectoWhereInput {
    AND?: ProyectoWhereInput[] | undefined;
    OR?: ProyectoWhereInput[] | undefined;
    NOT?: ProyectoWhereInput[] | undefined;
    id?: StringFilter | undefined;
    nombre?: StringFilter | undefined;
    presupuesto?: FloatFilter | undefined;
    fechaInicio?: DateTimeFilter | undefined;
    fechaFin?: DateTimeNullableFilter | undefined;
    lider?: UsuarioRelationFilter | undefined;
    usuarioId?: StringFilter | undefined;
    avances?: AvancesListRelationFilter | undefined;
    inscripciones?: InscripcionListRelationFilter | undefined;
}
