import { Avances } from "../../../models/Avances";
import { Inscripcion } from "../../../models/Inscripcion";
import { Proyecto } from "../../../models/Proyecto";
import { Usuario } from "../../../models/Usuario";
import { UsuarioAvancesArgs } from "./args/UsuarioAvancesArgs";
import { UsuarioInscripcionesArgs } from "./args/UsuarioInscripcionesArgs";
import { UsuarioProyectosLideradosArgs } from "./args/UsuarioProyectosLideradosArgs";
export declare class UsuarioRelationsResolver {
    proyectosLiderados(usuario: Usuario, ctx: any, args: UsuarioProyectosLideradosArgs): Promise<Proyecto[]>;
    avances(usuario: Usuario, ctx: any, args: UsuarioAvancesArgs): Promise<Avances[]>;
    inscripciones(usuario: Usuario, ctx: any, args: UsuarioInscripcionesArgs): Promise<Inscripcion[]>;
}
