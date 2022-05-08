import { GraphQLResolveInfo } from "graphql";
import { FindUniqueInscripcionArgs } from "./args/FindUniqueInscripcionArgs";
import { Inscripcion } from "../../../models/Inscripcion";
export declare class FindUniqueInscripcionResolver {
    inscripcion(ctx: any, info: GraphQLResolveInfo, args: FindUniqueInscripcionArgs): Promise<Inscripcion | null>;
}
