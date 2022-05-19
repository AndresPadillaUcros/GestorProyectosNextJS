import { ProyectoCountAggregate } from "../outputs/ProyectoCountAggregate";
import { ProyectoMaxAggregate } from "../outputs/ProyectoMaxAggregate";
import { ProyectoMinAggregate } from "../outputs/ProyectoMinAggregate";
export declare class ProyectoGroupBy {
    id: string;
    nombre: string;
    presupuesto: string | null;
    fechaInicio: Date | null;
    fechaFin: Date | null;
    estado: "Activo" | "Inactivo";
    fase: "Iniciado" | "Desarrollo" | "Terminado";
    objetivoGeneral: string | null;
    UserId: string;
    _count: ProyectoCountAggregate | null;
    _min: ProyectoMinAggregate | null;
    _max: ProyectoMaxAggregate | null;
}
