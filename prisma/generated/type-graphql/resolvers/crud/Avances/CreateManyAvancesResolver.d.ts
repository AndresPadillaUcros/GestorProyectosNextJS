import { GraphQLResolveInfo } from "graphql";
import { CreateManyAvancesArgs } from "./args/CreateManyAvancesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyAvancesResolver {
    createManyAvances(ctx: any, info: GraphQLResolveInfo, args: CreateManyAvancesArgs): Promise<AffectedRowsOutput>;
}
