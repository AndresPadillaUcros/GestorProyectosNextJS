import { Avances } from "../../../models/Avances";
import { Proyecto } from "../../../models/Proyecto";
import { User } from "../../../models/User";
export declare class AvancesRelationsResolver {
    proyecto(avances: Avances, ctx: any): Promise<Proyecto>;
    creadoPor(avances: Avances, ctx: any): Promise<User>;
}
