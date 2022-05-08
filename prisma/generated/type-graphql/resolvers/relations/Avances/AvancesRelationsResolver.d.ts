import { Avances } from "../../../models/Avances";
import { Proyecto } from "../../../models/Proyecto";
import { Usuario } from "../../../models/Usuario";
export declare class AvancesRelationsResolver {
    proyecto(avances: Avances, ctx: any): Promise<Proyecto>;
    creadoPor(avances: Avances, ctx: any): Promise<Usuario>;
}
