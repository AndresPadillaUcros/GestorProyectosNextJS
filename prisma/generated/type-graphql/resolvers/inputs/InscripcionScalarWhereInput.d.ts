import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumEnum_EstadoInscripcionFilter } from "../inputs/EnumEnum_EstadoInscripcionFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class InscripcionScalarWhereInput {
    AND?: InscripcionScalarWhereInput[] | undefined;
    OR?: InscripcionScalarWhereInput[] | undefined;
    NOT?: InscripcionScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    estado?: EnumEnum_EstadoInscripcionFilter | undefined;
    fechaIngreso?: DateTimeFilter | undefined;
    fechaEgreso?: DateTimeFilter | undefined;
    proyectoId?: StringFilter | undefined;
    usuarioId?: StringFilter | undefined;
}
