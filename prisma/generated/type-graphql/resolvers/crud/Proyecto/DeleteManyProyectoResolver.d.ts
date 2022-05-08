import { GraphQLResolveInfo } from "graphql";
import { DeleteManyProyectoArgs } from "./args/DeleteManyProyectoArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyProyectoResolver {
    deleteManyProyecto(ctx: any, info: GraphQLResolveInfo, args: DeleteManyProyectoArgs): Promise<AffectedRowsOutput>;
}
