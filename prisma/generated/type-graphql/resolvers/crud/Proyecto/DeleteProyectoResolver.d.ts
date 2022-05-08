import { GraphQLResolveInfo } from "graphql";
import { DeleteProyectoArgs } from "./args/DeleteProyectoArgs";
import { Proyecto } from "../../../models/Proyecto";
export declare class DeleteProyectoResolver {
    deleteProyecto(ctx: any, info: GraphQLResolveInfo, args: DeleteProyectoArgs): Promise<Proyecto | null>;
}
