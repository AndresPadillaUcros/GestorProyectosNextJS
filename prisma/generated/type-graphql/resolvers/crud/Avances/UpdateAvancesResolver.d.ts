import { GraphQLResolveInfo } from "graphql";
import { UpdateAvancesArgs } from "./args/UpdateAvancesArgs";
import { Avances } from "../../../models/Avances";
export declare class UpdateAvancesResolver {
    updateAvances(ctx: any, info: GraphQLResolveInfo, args: UpdateAvancesArgs): Promise<Avances | null>;
}
