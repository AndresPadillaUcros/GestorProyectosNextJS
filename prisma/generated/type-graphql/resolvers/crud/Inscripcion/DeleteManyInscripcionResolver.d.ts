import { GraphQLResolveInfo } from "graphql";
import { DeleteManyInscripcionArgs } from "./args/DeleteManyInscripcionArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyInscripcionResolver {
    deleteManyInscripcion(ctx: any, info: GraphQLResolveInfo, args: DeleteManyInscripcionArgs): Promise<AffectedRowsOutput>;
}
