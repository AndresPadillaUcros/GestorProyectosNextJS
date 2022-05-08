import { GraphQLResolveInfo } from "graphql";
import { UpsertAvancesArgs } from "./args/UpsertAvancesArgs";
import { Avances } from "../../../models/Avances";
export declare class UpsertAvancesResolver {
    upsertAvances(ctx: any, info: GraphQLResolveInfo, args: UpsertAvancesArgs): Promise<Avances>;
}
