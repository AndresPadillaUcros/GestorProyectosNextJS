import { GraphQLResolveInfo } from "graphql";
import { AggregateVerificationTokenArgs } from "./args/AggregateVerificationTokenArgs";
import { CreateManyVerificationTokenArgs } from "./args/CreateManyVerificationTokenArgs";
import { CreateVerificationTokenArgs } from "./args/CreateVerificationTokenArgs";
import { DeleteManyVerificationTokenArgs } from "./args/DeleteManyVerificationTokenArgs";
import { DeleteVerificationTokenArgs } from "./args/DeleteVerificationTokenArgs";
import { FindFirstVerificationTokenArgs } from "./args/FindFirstVerificationTokenArgs";
import { FindManyVerificationTokenArgs } from "./args/FindManyVerificationTokenArgs";
import { FindUniqueVerificationTokenArgs } from "./args/FindUniqueVerificationTokenArgs";
import { GroupByVerificationTokenArgs } from "./args/GroupByVerificationTokenArgs";
import { UpdateManyVerificationTokenArgs } from "./args/UpdateManyVerificationTokenArgs";
import { UpdateVerificationTokenArgs } from "./args/UpdateVerificationTokenArgs";
import { UpsertVerificationTokenArgs } from "./args/UpsertVerificationTokenArgs";
import { VerificationToken } from "../../../models/VerificationToken";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateVerificationToken } from "../../outputs/AggregateVerificationToken";
import { VerificationTokenGroupBy } from "../../outputs/VerificationTokenGroupBy";
export declare class VerificationTokenCrudResolver {
    verificationToken(ctx: any, info: GraphQLResolveInfo, args: FindUniqueVerificationTokenArgs): Promise<VerificationToken | null>;
    findFirstVerificationToken(ctx: any, info: GraphQLResolveInfo, args: FindFirstVerificationTokenArgs): Promise<VerificationToken | null>;
    verificationTokens(ctx: any, info: GraphQLResolveInfo, args: FindManyVerificationTokenArgs): Promise<VerificationToken[]>;
    createVerificationToken(ctx: any, info: GraphQLResolveInfo, args: CreateVerificationTokenArgs): Promise<VerificationToken>;
    createManyVerificationToken(ctx: any, info: GraphQLResolveInfo, args: CreateManyVerificationTokenArgs): Promise<AffectedRowsOutput>;
    deleteVerificationToken(ctx: any, info: GraphQLResolveInfo, args: DeleteVerificationTokenArgs): Promise<VerificationToken | null>;
    updateVerificationToken(ctx: any, info: GraphQLResolveInfo, args: UpdateVerificationTokenArgs): Promise<VerificationToken | null>;
    deleteManyVerificationToken(ctx: any, info: GraphQLResolveInfo, args: DeleteManyVerificationTokenArgs): Promise<AffectedRowsOutput>;
    updateManyVerificationToken(ctx: any, info: GraphQLResolveInfo, args: UpdateManyVerificationTokenArgs): Promise<AffectedRowsOutput>;
    upsertVerificationToken(ctx: any, info: GraphQLResolveInfo, args: UpsertVerificationTokenArgs): Promise<VerificationToken>;
    aggregateVerificationToken(ctx: any, info: GraphQLResolveInfo, args: AggregateVerificationTokenArgs): Promise<AggregateVerificationToken>;
    groupByVerificationToken(ctx: any, info: GraphQLResolveInfo, args: GroupByVerificationTokenArgs): Promise<VerificationTokenGroupBy[]>;
}