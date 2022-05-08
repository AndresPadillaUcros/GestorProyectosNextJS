import { AvancesCreateNestedManyWithoutCreadoPorInput } from "../inputs/AvancesCreateNestedManyWithoutCreadoPorInput";
import { ProyectoCreateNestedManyWithoutLiderInput } from "../inputs/ProyectoCreateNestedManyWithoutLiderInput";
export declare class UsuarioCreateWithoutInscripcionesInput {
    id?: string | undefined;
    email: string;
    nombre: string;
    apellido: string;
    identificacion: string;
    rol: "Estudiante" | "Lider" | "Administrador";
    estado: "Pendiente" | "Autorizado" | "NoAutorizado";
    proyectosLiderados?: ProyectoCreateNestedManyWithoutLiderInput | undefined;
    avances?: AvancesCreateNestedManyWithoutCreadoPorInput | undefined;
}
