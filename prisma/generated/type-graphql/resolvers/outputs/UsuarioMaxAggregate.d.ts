export declare class UsuarioMaxAggregate {
    id: string | null;
    email: string | null;
    nombre: string | null;
    apellido: string | null;
    identificacion: string | null;
    rol: "Estudiante" | "Lider" | "Administrador" | null;
    estado: "Pendiente" | "Autorizado" | "NoAutorizado" | null;
}
