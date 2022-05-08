import { UsuarioOrderByWithAggregationInput } from "../../../inputs/UsuarioOrderByWithAggregationInput";
import { UsuarioScalarWhereWithAggregatesInput } from "../../../inputs/UsuarioScalarWhereWithAggregatesInput";
import { UsuarioWhereInput } from "../../../inputs/UsuarioWhereInput";
export declare class GroupByUsuarioArgs {
    where?: UsuarioWhereInput | undefined;
    orderBy?: UsuarioOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "email" | "nombre" | "apellido" | "identificacion" | "rol" | "estado">;
    having?: UsuarioScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
