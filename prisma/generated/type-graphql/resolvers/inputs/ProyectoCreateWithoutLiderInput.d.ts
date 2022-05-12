import { AvancesCreateNestedManyWithoutProyectoInput } from "../inputs/AvancesCreateNestedManyWithoutProyectoInput";
import { InscripcionCreateNestedManyWithoutProyectoInput } from "../inputs/InscripcionCreateNestedManyWithoutProyectoInput";
import { ObjetivosEspecificosCreateNestedManyWithoutProyectoInput } from "../inputs/ObjetivosEspecificosCreateNestedManyWithoutProyectoInput";
export declare class ProyectoCreateWithoutLiderInput {
    id?: string | undefined;
    nombre: string;
    presupuesto: string;
    fechaInicio: Date;
    fechaFin?: Date | undefined;
    estado?: "Activo" | "Inactivo" | undefined;
    fase?: "Iniciado" | "Desarollo" | "Terminado" | undefined;
    objetivoGeneral: string;
    avances?: AvancesCreateNestedManyWithoutProyectoInput | undefined;
    inscripciones?: InscripcionCreateNestedManyWithoutProyectoInput | undefined;
    objetivosEspecificos?: ObjetivosEspecificosCreateNestedManyWithoutProyectoInput | undefined;
}
