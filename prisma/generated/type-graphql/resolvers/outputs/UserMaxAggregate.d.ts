export declare class UserMaxAggregate {
    id: string | null;
    email: string | null;
    emailVerified: Date | null;
    name: string | null;
    apellido: string | null;
    image: string | null;
    identificacion: string | null;
    rol: "Estudiante" | "Lider" | "Administrador" | null;
    estado: "Pendiente" | "Autorizado" | "NoAutorizado" | null;
}
