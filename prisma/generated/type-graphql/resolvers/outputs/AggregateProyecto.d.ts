import { ProyectoCountAggregate } from "../outputs/ProyectoCountAggregate";
import { ProyectoMaxAggregate } from "../outputs/ProyectoMaxAggregate";
import { ProyectoMinAggregate } from "../outputs/ProyectoMinAggregate";
export declare class AggregateProyecto {
    _count: ProyectoCountAggregate | null;
    _min: ProyectoMinAggregate | null;
    _max: ProyectoMaxAggregate | null;
}
