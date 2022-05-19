import { Account } from "../models/Account";
import { Avances } from "../models/Avances";
import { Inscripcion } from "../models/Inscripcion";
import { Proyecto } from "../models/Proyecto";
import { Session } from "../models/Session";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: string;
    email?: string | null;
    emailVerified?: Date | null;
    name?: string | null;
    apellido?: string | null;
    image?: string | null;
    identificacion?: string | null;
    rol: "Estudiante" | "Lider" | "Administrador";
    estado: "Pendiente" | "Autorizado" | "NoAutorizado";
    proyectosLiderados?: Proyecto[];
    avances?: Avances[];
    inscripciones?: Inscripcion[];
    accounts?: Account[];
    sessions?: Session[];
    _count?: UserCount | null;
}
