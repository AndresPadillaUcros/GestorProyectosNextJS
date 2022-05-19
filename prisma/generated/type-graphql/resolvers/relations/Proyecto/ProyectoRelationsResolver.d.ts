import { Avances } from "../../../models/Avances";
import { Inscripcion } from "../../../models/Inscripcion";
import { ObjetivosEspecificos } from "../../../models/ObjetivosEspecificos";
import { Proyecto } from "../../../models/Proyecto";
import { User } from "../../../models/User";
import { ProyectoAvancesArgs } from "./args/ProyectoAvancesArgs";
import { ProyectoInscripcionesArgs } from "./args/ProyectoInscripcionesArgs";
import { ProyectoObjetivosEspecificosArgs } from "./args/ProyectoObjetivosEspecificosArgs";
export declare class ProyectoRelationsResolver {
    lider(proyecto: Proyecto, ctx: any): Promise<User>;
    avances(proyecto: Proyecto, ctx: any, args: ProyectoAvancesArgs): Promise<Avances[]>;
    inscripciones(proyecto: Proyecto, ctx: any, args: ProyectoInscripcionesArgs): Promise<Inscripcion[]>;
    objetivosEspecificos(proyecto: Proyecto, ctx: any, args: ProyectoObjetivosEspecificosArgs): Promise<ObjetivosEspecificos[]>;
}
