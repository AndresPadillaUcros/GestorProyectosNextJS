import { GraphQLResolveInfo } from "graphql";
import { DeleteManyAvancesArgs } from "./args/DeleteManyAvancesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyAvancesResolver {
    deleteManyAvances(ctx: any, info: GraphQLResolveInfo, args: DeleteManyAvancesArgs): Promise<AffectedRowsOutput>;
}
