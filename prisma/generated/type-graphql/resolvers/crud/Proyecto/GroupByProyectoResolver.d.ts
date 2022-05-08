import { GraphQLResolveInfo } from "graphql";
import { GroupByProyectoArgs } from "./args/GroupByProyectoArgs";
import { ProyectoGroupBy } from "../../outputs/ProyectoGroupBy";
export declare class GroupByProyectoResolver {
    groupByProyecto(ctx: any, info: GraphQLResolveInfo, args: GroupByProyectoArgs): Promise<ProyectoGroupBy[]>;
}
