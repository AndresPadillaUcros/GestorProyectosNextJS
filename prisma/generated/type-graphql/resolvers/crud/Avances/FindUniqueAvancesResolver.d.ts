import { GraphQLResolveInfo } from "graphql";
import { FindUniqueAvancesArgs } from "./args/FindUniqueAvancesArgs";
import { Avances } from "../../../models/Avances";
export declare class FindUniqueAvancesResolver {
    findUniqueAvances(ctx: any, info: GraphQLResolveInfo, args: FindUniqueAvancesArgs): Promise<Avances | null>;
}
