import { Inscripcion } from "../../../models/Inscripcion";
import { Proyecto } from "../../../models/Proyecto";
import { Usuario } from "../../../models/Usuario";
export declare class InscripcionRelationsResolver {
    proyecto(inscripcion: Inscripcion, ctx: any): Promise<Proyecto>;
    estudiante(inscripcion: Inscripcion, ctx: any): Promise<Usuario>;
}
