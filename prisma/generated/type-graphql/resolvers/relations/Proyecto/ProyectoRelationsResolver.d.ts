import { Avances } from "../../../models/Avances";
import { Inscripcion } from "../../../models/Inscripcion";
import { Proyecto } from "../../../models/Proyecto";
import { Usuario } from "../../../models/Usuario";
import { ProyectoAvancesArgs } from "./args/ProyectoAvancesArgs";
import { ProyectoInscripcionesArgs } from "./args/ProyectoInscripcionesArgs";
export declare class ProyectoRelationsResolver {
    lider(proyecto: Proyecto, ctx: any): Promise<Usuario>;
    avances(proyecto: Proyecto, ctx: any, args: ProyectoAvancesArgs): Promise<Avances[]>;
    inscripciones(proyecto: Proyecto, ctx: any, args: ProyectoInscripcionesArgs): Promise<Inscripcion[]>;
}
