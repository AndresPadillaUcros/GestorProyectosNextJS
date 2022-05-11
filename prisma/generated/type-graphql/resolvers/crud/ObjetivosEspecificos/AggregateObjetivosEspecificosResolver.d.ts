import { GraphQLResolveInfo } from "graphql";
import { AggregateObjetivosEspecificosArgs } from "./args/AggregateObjetivosEspecificosArgs";
import { AggregateObjetivosEspecificos } from "../../outputs/AggregateObjetivosEspecificos";
export declare class AggregateObjetivosEspecificosResolver {
    aggregateObjetivosEspecificos(ctx: any, info: GraphQLResolveInfo, args: AggregateObjetivosEspecificosArgs): Promise<AggregateObjetivosEspecificos>;
}
