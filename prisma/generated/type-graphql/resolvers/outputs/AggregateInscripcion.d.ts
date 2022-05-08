import { InscripcionCountAggregate } from "../outputs/InscripcionCountAggregate";
import { InscripcionMaxAggregate } from "../outputs/InscripcionMaxAggregate";
import { InscripcionMinAggregate } from "../outputs/InscripcionMinAggregate";
export declare class AggregateInscripcion {
    _count: InscripcionCountAggregate | null;
    _min: InscripcionMinAggregate | null;
    _max: InscripcionMaxAggregate | null;
}
