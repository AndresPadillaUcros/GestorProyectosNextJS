import { GraphQLResolveInfo } from "graphql";
import { AggregateProyectoArgs } from "./args/AggregateProyectoArgs";
import { AggregateProyecto } from "../../outputs/AggregateProyecto";
export declare class AggregateProyectoResolver {
    aggregateProyecto(ctx: any, info: GraphQLResolveInfo, args: AggregateProyectoArgs): Promise<AggregateProyecto>;
}
