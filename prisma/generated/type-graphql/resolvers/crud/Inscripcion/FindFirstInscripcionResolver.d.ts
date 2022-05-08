import { GraphQLResolveInfo } from "graphql";
import { FindFirstInscripcionArgs } from "./args/FindFirstInscripcionArgs";
import { Inscripcion } from "../../../models/Inscripcion";
export declare class FindFirstInscripcionResolver {
    findFirstInscripcion(ctx: any, info: GraphQLResolveInfo, args: FindFirstInscripcionArgs): Promise<Inscripcion | null>;
}
