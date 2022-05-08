import { GraphQLResolveInfo } from "graphql";
import { GroupByAvancesArgs } from "./args/GroupByAvancesArgs";
import { AvancesGroupBy } from "../../outputs/AvancesGroupBy";
export declare class GroupByAvancesResolver {
    groupByAvances(ctx: any, info: GraphQLResolveInfo, args: GroupByAvancesArgs): Promise<AvancesGroupBy[]>;
}
