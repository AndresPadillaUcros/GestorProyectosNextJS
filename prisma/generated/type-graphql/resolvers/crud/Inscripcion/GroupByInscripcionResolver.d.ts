import { GraphQLResolveInfo } from "graphql";
import { GroupByInscripcionArgs } from "./args/GroupByInscripcionArgs";
import { InscripcionGroupBy } from "../../outputs/InscripcionGroupBy";
export declare class GroupByInscripcionResolver {
    groupByInscripcion(ctx: any, info: GraphQLResolveInfo, args: GroupByInscripcionArgs): Promise<InscripcionGroupBy[]>;
}
