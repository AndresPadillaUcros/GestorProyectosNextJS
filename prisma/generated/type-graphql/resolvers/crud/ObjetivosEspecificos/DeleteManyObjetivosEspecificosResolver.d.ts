import { GraphQLResolveInfo } from "graphql";
import { DeleteManyObjetivosEspecificosArgs } from "./args/DeleteManyObjetivosEspecificosArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyObjetivosEspecificosResolver {
    deleteManyObjetivosEspecificos(ctx: any, info: GraphQLResolveInfo, args: DeleteManyObjetivosEspecificosArgs): Promise<AffectedRowsOutput>;
}
