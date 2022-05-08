import { GraphQLResolveInfo } from "graphql";
import { DeleteAvancesArgs } from "./args/DeleteAvancesArgs";
import { Avances } from "../../../models/Avances";
export declare class DeleteAvancesResolver {
    deleteAvances(ctx: any, info: GraphQLResolveInfo, args: DeleteAvancesArgs): Promise<Avances | null>;
}
