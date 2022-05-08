import { GraphQLResolveInfo } from "graphql";
import { CreateManyProyectoArgs } from "./args/CreateManyProyectoArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyProyectoResolver {
    createManyProyecto(ctx: any, info: GraphQLResolveInfo, args: CreateManyProyectoArgs): Promise<AffectedRowsOutput>;
}
