import { GraphQLResolveInfo } from "graphql";
import { CreateInscripcionArgs } from "./args/CreateInscripcionArgs";
import { Inscripcion } from "../../../models/Inscripcion";
export declare class CreateInscripcionResolver {
    createInscripcion(ctx: any, info: GraphQLResolveInfo, args: CreateInscripcionArgs): Promise<Inscripcion>;
}
