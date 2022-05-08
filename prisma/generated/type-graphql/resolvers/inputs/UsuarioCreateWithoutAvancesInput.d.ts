import { InscripcionCreateNestedManyWithoutEstudianteInput } from "../inputs/InscripcionCreateNestedManyWithoutEstudianteInput";
import { ProyectoCreateNestedManyWithoutLiderInput } from "../inputs/ProyectoCreateNestedManyWithoutLiderInput";
export declare class UsuarioCreateWithoutAvancesInput {
    id?: string | undefined;
    email: string;
    nombre: string;
    apellido: string;
    identificacion: string;
    rol: "Estudiante" | "Lider" | "Administrador";
    estado: "Pendiente" | "Autorizado" | "NoAutorizado";
    proyectosLiderados?: ProyectoCreateNestedManyWithoutLiderInput | undefined;
    inscripciones?: InscripcionCreateNestedManyWithoutEstudianteInput | undefined;
}
