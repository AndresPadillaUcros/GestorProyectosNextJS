import { AvancesCreateNestedManyWithoutCreadoPorInput } from "../inputs/AvancesCreateNestedManyWithoutCreadoPorInput";
import { InscripcionCreateNestedManyWithoutEstudianteInput } from "../inputs/InscripcionCreateNestedManyWithoutEstudianteInput";
export declare class UsuarioCreateWithoutProyectosLideradosInput {
    id?: string | undefined;
    email: string;
    nombre: string;
    apellido: string;
    identificacion: string;
    rol: "Estudiante" | "Lider" | "Administrador";
    estado: "Pendiente" | "Autorizado" | "NoAutorizado";
    avances?: AvancesCreateNestedManyWithoutCreadoPorInput | undefined;
    inscripciones?: InscripcionCreateNestedManyWithoutEstudianteInput | undefined;
}
