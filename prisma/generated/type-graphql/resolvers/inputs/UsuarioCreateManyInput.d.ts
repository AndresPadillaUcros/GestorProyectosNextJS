export declare class UsuarioCreateManyInput {
    id?: string | undefined;
    email: string;
    nombre: string;
    apellido: string;
    identificacion: string;
    rol: "Estudiante" | "Lider" | "Administrador";
    estado: "Pendiente" | "Autorizado" | "NoAutorizado";
}
