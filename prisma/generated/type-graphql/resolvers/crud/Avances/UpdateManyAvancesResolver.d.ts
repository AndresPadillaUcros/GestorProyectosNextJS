import { GraphQLResolveInfo } from "graphql";
import { UpdateManyAvancesArgs } from "./args/UpdateManyAvancesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyAvancesResolver {
    updateManyAvances(ctx: any, info: GraphQLResolveInfo, args: UpdateManyAvancesArgs): Promise<AffectedRowsOutput>;
}
