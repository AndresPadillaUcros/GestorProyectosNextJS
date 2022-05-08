import { GraphQLResolveInfo } from "graphql";
import { UpdateManyProyectoArgs } from "./args/UpdateManyProyectoArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyProyectoResolver {
    updateManyProyecto(ctx: any, info: GraphQLResolveInfo, args: UpdateManyProyectoArgs): Promise<AffectedRowsOutput>;
}
