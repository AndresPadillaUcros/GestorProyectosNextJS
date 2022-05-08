import { GraphQLResolveInfo } from "graphql";
import { CreateProyectoArgs } from "./args/CreateProyectoArgs";
import { Proyecto } from "../../../models/Proyecto";
export declare class CreateProyectoResolver {
    createProyecto(ctx: any, info: GraphQLResolveInfo, args: CreateProyectoArgs): Promise<Proyecto>;
}
