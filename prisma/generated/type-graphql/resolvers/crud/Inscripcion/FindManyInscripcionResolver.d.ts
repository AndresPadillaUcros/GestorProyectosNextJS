import { GraphQLResolveInfo } from "graphql";
import { FindManyInscripcionArgs } from "./args/FindManyInscripcionArgs";
import { Inscripcion } from "../../../models/Inscripcion";
export declare class FindManyInscripcionResolver {
    inscripcions(ctx: any, info: GraphQLResolveInfo, args: FindManyInscripcionArgs): Promise<Inscripcion[]>;
}
