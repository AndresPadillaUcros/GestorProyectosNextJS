import { GraphQLResolveInfo } from "graphql";
import { CreateAvancesArgs } from "./args/CreateAvancesArgs";
import { Avances } from "../../../models/Avances";
export declare class CreateAvancesResolver {
    createAvances(ctx: any, info: GraphQLResolveInfo, args: CreateAvancesArgs): Promise<Avances>;
}
