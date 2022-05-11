import { GraphQLResolveInfo } from "graphql";
import { UpdateManyObjetivosEspecificosArgs } from "./args/UpdateManyObjetivosEspecificosArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyObjetivosEspecificosResolver {
    updateManyObjetivosEspecificos(ctx: any, info: GraphQLResolveInfo, args: UpdateManyObjetivosEspecificosArgs): Promise<AffectedRowsOutput>;
}
