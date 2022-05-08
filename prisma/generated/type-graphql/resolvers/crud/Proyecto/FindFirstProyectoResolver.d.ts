import { GraphQLResolveInfo } from "graphql";
import { FindFirstProyectoArgs } from "./args/FindFirstProyectoArgs";
import { Proyecto } from "../../../models/Proyecto";
export declare class FindFirstProyectoResolver {
    findFirstProyecto(ctx: any, info: GraphQLResolveInfo, args: FindFirstProyectoArgs): Promise<Proyecto | null>;
}
