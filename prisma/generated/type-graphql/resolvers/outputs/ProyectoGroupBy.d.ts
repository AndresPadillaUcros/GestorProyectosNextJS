import { ProyectoAvgAggregate } from "../outputs/ProyectoAvgAggregate";
import { ProyectoCountAggregate } from "../outputs/ProyectoCountAggregate";
import { ProyectoMaxAggregate } from "../outputs/ProyectoMaxAggregate";
import { ProyectoMinAggregate } from "../outputs/ProyectoMinAggregate";
import { ProyectoSumAggregate } from "../outputs/ProyectoSumAggregate";
export declare class ProyectoGroupBy {
    id: string;
    nombre: string;
    presupuesto: number;
    fechaInicio: Date;
    fechaFin: Date | null;
    usuarioId: string;
    _count: ProyectoCountAggregate | null;
    _avg: ProyectoAvgAggregate | null;
    _sum: ProyectoSumAggregate | null;
    _min: ProyectoMinAggregate | null;
    _max: ProyectoMaxAggregate | null;
}
