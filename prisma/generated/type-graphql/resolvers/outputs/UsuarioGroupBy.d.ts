import { UsuarioCountAggregate } from "../outputs/UsuarioCountAggregate";
import { UsuarioMaxAggregate } from "../outputs/UsuarioMaxAggregate";
import { UsuarioMinAggregate } from "../outputs/UsuarioMinAggregate";
export declare class UsuarioGroupBy {
    id: string;
    email: string;
    nombre: string;
    apellido: string;
    identificacion: string;
    rol: "Estudiante" | "Lider" | "Administrador";
    estado: "Pendiente" | "Autorizado" | "NoAutorizado";
    _count: UsuarioCountAggregate | null;
    _min: UsuarioMinAggregate | null;
    _max: UsuarioMaxAggregate | null;
}
