import { Inscripcion } from "../../../models/Inscripcion";
import { Proyecto } from "../../../models/Proyecto";
import { User } from "../../../models/User";
export declare class InscripcionRelationsResolver {
    proyecto(inscripcion: Inscripcion, ctx: any): Promise<Proyecto>;
    estudiante(inscripcion: Inscripcion, ctx: any): Promise<User>;
}
