import { AvancesCountAggregate } from "../outputs/AvancesCountAggregate";
import { AvancesMaxAggregate } from "../outputs/AvancesMaxAggregate";
import { AvancesMinAggregate } from "../outputs/AvancesMinAggregate";
export declare class AvancesGroupBy {
    id: string;
    fecha: Date;
    descripcion: string;
    observaciones: string | null;
    proyectoId: string;
    UserId: string;
    _count: AvancesCountAggregate | null;
    _min: AvancesMinAggregate | null;
    _max: AvancesMaxAggregate | null;
}
