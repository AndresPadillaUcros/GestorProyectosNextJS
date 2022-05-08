import { AvancesCreateNestedManyWithoutProyectoInput } from "../inputs/AvancesCreateNestedManyWithoutProyectoInput";
import { InscripcionCreateNestedManyWithoutProyectoInput } from "../inputs/InscripcionCreateNestedManyWithoutProyectoInput";
export declare class ProyectoCreateWithoutLiderInput {
    id?: string | undefined;
    nombre: string;
    presupuesto: number;
    fechaInicio: Date;
    fechaFin?: Date | undefined;
    avances?: AvancesCreateNestedManyWithoutProyectoInput | undefined;
    inscripciones?: InscripcionCreateNestedManyWithoutProyectoInput | undefined;
}
