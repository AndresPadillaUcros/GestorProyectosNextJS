import { GraphQLResolveInfo } from "graphql";
import { UpsertProyectoArgs } from "./args/UpsertProyectoArgs";
import { Proyecto } from "../../../models/Proyecto";
export declare class UpsertProyectoResolver {
    upsertProyecto(ctx: any, info: GraphQLResolveInfo, args: UpsertProyectoArgs): Promise<Proyecto>;
}
