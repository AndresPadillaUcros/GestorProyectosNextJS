import { GraphQLResolveInfo } from "graphql";
import { UpdateProyectoArgs } from "./args/UpdateProyectoArgs";
import { Proyecto } from "../../../models/Proyecto";
export declare class UpdateProyectoResolver {
    updateProyecto(ctx: any, info: GraphQLResolveInfo, args: UpdateProyectoArgs): Promise<Proyecto | null>;
}
