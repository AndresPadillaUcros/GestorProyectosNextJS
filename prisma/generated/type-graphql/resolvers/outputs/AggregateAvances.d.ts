import { AvancesCountAggregate } from "../outputs/AvancesCountAggregate";
import { AvancesMaxAggregate } from "../outputs/AvancesMaxAggregate";
import { AvancesMinAggregate } from "../outputs/AvancesMinAggregate";
export declare class AggregateAvances {
    _count: AvancesCountAggregate | null;
    _min: AvancesMinAggregate | null;
    _max: AvancesMaxAggregate | null;
}
