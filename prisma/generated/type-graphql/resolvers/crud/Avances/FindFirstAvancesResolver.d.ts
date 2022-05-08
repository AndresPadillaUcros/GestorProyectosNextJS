import { GraphQLResolveInfo } from "graphql";
import { FindFirstAvancesArgs } from "./args/FindFirstAvancesArgs";
import { Avances } from "../../../models/Avances";
export declare class FindFirstAvancesResolver {
    findFirstAvances(ctx: any, info: GraphQLResolveInfo, args: FindFirstAvancesArgs): Promise<Avances | null>;
}
