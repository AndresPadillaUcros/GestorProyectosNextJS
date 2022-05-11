import { GraphQLResolveInfo } from "graphql";
import { GroupByObjetivosEspecificosArgs } from "./args/GroupByObjetivosEspecificosArgs";
import { ObjetivosEspecificosGroupBy } from "../../outputs/ObjetivosEspecificosGroupBy";
export declare class GroupByObjetivosEspecificosResolver {
    groupByObjetivosEspecificos(ctx: any, info: GraphQLResolveInfo, args: GroupByObjetivosEspecificosArgs): Promise<ObjetivosEspecificosGroupBy[]>;
}
