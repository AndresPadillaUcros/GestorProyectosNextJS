import { GraphQLResolveInfo } from "graphql";
import { FindManyAvancesArgs } from "./args/FindManyAvancesArgs";
import { Avances } from "../../../models/Avances";
export declare class FindManyAvancesResolver {
    findManyAvances(ctx: any, info: GraphQLResolveInfo, args: FindManyAvancesArgs): Promise<Avances[]>;
}
