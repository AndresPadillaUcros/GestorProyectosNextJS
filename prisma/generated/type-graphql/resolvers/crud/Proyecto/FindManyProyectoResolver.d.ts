import { GraphQLResolveInfo } from "graphql";
import { FindManyProyectoArgs } from "./args/FindManyProyectoArgs";
import { Proyecto } from "../../../models/Proyecto";
export declare class FindManyProyectoResolver {
    proyectos(ctx: any, info: GraphQLResolveInfo, args: FindManyProyectoArgs): Promise<Proyecto[]>;
}
