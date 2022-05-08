import { GraphQLResolveInfo } from "graphql";
import { AggregateAvancesArgs } from "./args/AggregateAvancesArgs";
import { AggregateAvances } from "../../outputs/AggregateAvances";
export declare class AggregateAvancesResolver {
    aggregateAvances(ctx: any, info: GraphQLResolveInfo, args: AggregateAvancesArgs): Promise<AggregateAvances>;
}
