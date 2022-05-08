import { GraphQLResolveInfo } from "graphql";
import { FindUniqueProyectoArgs } from "./args/FindUniqueProyectoArgs";
import { Proyecto } from "../../../models/Proyecto";
export declare class FindUniqueProyectoResolver {
    proyecto(ctx: any, info: GraphQLResolveInfo, args: FindUniqueProyectoArgs): Promise<Proyecto | null>;
}
