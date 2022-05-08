import { GraphQLResolveInfo } from "graphql";
import { UpdateManyInscripcionArgs } from "./args/UpdateManyInscripcionArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyInscripcionResolver {
    updateManyInscripcion(ctx: any, info: GraphQLResolveInfo, args: UpdateManyInscripcionArgs): Promise<AffectedRowsOutput>;
}
