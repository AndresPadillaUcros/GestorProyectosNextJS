import { ProyectoCountAggregate } from "../outputs/ProyectoCountAggregate";
import { ProyectoMaxAggregate } from "../outputs/ProyectoMaxAggregate";
import { ProyectoMinAggregate } from "../outputs/ProyectoMinAggregate";
export declare class ProyectoGroupBy {
    id: string;
    nombre: string;
    presupuesto: string;
    fechaInicio: Date;
    fechaFin: Date | null;
    estado: "Activo" | "Inactivo";
    fase: "Iniciado" | "Desarollo" | "Terminado";
    objetivoGeneral: string;
    usuarioId: string;
    _count: ProyectoCountAggregate | null;
    _min: ProyectoMinAggregate | null;
    _max: ProyectoMaxAggregate | null;
}
