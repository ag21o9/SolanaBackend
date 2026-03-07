import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model User
 *
 */
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    walletAddress: string | null;
    walletType: $Enums.WalletType | null;
    username: string | null;
    avatarUrl: string | null;
    country: string | null;
    bio: string | null;
    kycStatus: $Enums.KycStatus | null;
    referralCode: string | null;
    referredById: string | null;
    joinDate: Date | null;
    isActive: boolean | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    walletAddress: string | null;
    walletType: $Enums.WalletType | null;
    username: string | null;
    avatarUrl: string | null;
    country: string | null;
    bio: string | null;
    kycStatus: $Enums.KycStatus | null;
    referralCode: string | null;
    referredById: string | null;
    joinDate: Date | null;
    isActive: boolean | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    walletAddress: number;
    walletType: number;
    username: number;
    avatarUrl: number;
    country: number;
    bio: number;
    kycStatus: number;
    referralCode: number;
    referredById: number;
    joinDate: number;
    isActive: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    walletAddress?: true;
    walletType?: true;
    username?: true;
    avatarUrl?: true;
    country?: true;
    bio?: true;
    kycStatus?: true;
    referralCode?: true;
    referredById?: true;
    joinDate?: true;
    isActive?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    walletAddress?: true;
    walletType?: true;
    username?: true;
    avatarUrl?: true;
    country?: true;
    bio?: true;
    kycStatus?: true;
    referralCode?: true;
    referredById?: true;
    joinDate?: true;
    isActive?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    walletAddress?: true;
    walletType?: true;
    username?: true;
    avatarUrl?: true;
    country?: true;
    bio?: true;
    kycStatus?: true;
    referralCode?: true;
    referredById?: true;
    joinDate?: true;
    isActive?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    walletAddress: string;
    walletType: $Enums.WalletType | null;
    username: string | null;
    avatarUrl: string | null;
    country: string | null;
    bio: string | null;
    kycStatus: $Enums.KycStatus;
    referralCode: string | null;
    referredById: string | null;
    joinDate: Date;
    isActive: boolean;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    walletAddress?: Prisma.StringFilter<"User"> | string;
    walletType?: Prisma.EnumWalletTypeNullableFilter<"User"> | $Enums.WalletType | null;
    username?: Prisma.StringNullableFilter<"User"> | string | null;
    avatarUrl?: Prisma.StringNullableFilter<"User"> | string | null;
    country?: Prisma.StringNullableFilter<"User"> | string | null;
    bio?: Prisma.StringNullableFilter<"User"> | string | null;
    kycStatus?: Prisma.EnumKycStatusFilter<"User"> | $Enums.KycStatus;
    referralCode?: Prisma.StringNullableFilter<"User"> | string | null;
    referredById?: Prisma.StringNullableFilter<"User"> | string | null;
    joinDate?: Prisma.DateTimeFilter<"User"> | Date | string;
    isActive?: Prisma.BoolFilter<"User"> | boolean;
    referredBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    properties?: Prisma.PropertyListRelationFilter;
    investments?: Prisma.InvestmentListRelationFilter;
    transactions?: Prisma.TransactionListRelationFilter;
    listingDrafts?: Prisma.ListingDraftListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    yieldClaims?: Prisma.YieldClaimListRelationFilter;
    users?: Prisma.UserListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    walletAddress?: Prisma.SortOrder;
    walletType?: Prisma.SortOrderInput | Prisma.SortOrder;
    username?: Prisma.SortOrderInput | Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    country?: Prisma.SortOrderInput | Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    kycStatus?: Prisma.SortOrder;
    referralCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    referredById?: Prisma.SortOrderInput | Prisma.SortOrder;
    joinDate?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    referredBy?: Prisma.UserOrderByWithRelationInput;
    properties?: Prisma.PropertyOrderByRelationAggregateInput;
    investments?: Prisma.InvestmentOrderByRelationAggregateInput;
    transactions?: Prisma.TransactionOrderByRelationAggregateInput;
    listingDrafts?: Prisma.ListingDraftOrderByRelationAggregateInput;
    notifications?: Prisma.NotificationOrderByRelationAggregateInput;
    yieldClaims?: Prisma.YieldClaimOrderByRelationAggregateInput;
    users?: Prisma.UserOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    walletAddress?: string;
    username?: string;
    referralCode?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    walletType?: Prisma.EnumWalletTypeNullableFilter<"User"> | $Enums.WalletType | null;
    avatarUrl?: Prisma.StringNullableFilter<"User"> | string | null;
    country?: Prisma.StringNullableFilter<"User"> | string | null;
    bio?: Prisma.StringNullableFilter<"User"> | string | null;
    kycStatus?: Prisma.EnumKycStatusFilter<"User"> | $Enums.KycStatus;
    referredById?: Prisma.StringNullableFilter<"User"> | string | null;
    joinDate?: Prisma.DateTimeFilter<"User"> | Date | string;
    isActive?: Prisma.BoolFilter<"User"> | boolean;
    referredBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    properties?: Prisma.PropertyListRelationFilter;
    investments?: Prisma.InvestmentListRelationFilter;
    transactions?: Prisma.TransactionListRelationFilter;
    listingDrafts?: Prisma.ListingDraftListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    yieldClaims?: Prisma.YieldClaimListRelationFilter;
    users?: Prisma.UserListRelationFilter;
}, "id" | "walletAddress" | "username" | "referralCode">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    walletAddress?: Prisma.SortOrder;
    walletType?: Prisma.SortOrderInput | Prisma.SortOrder;
    username?: Prisma.SortOrderInput | Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    country?: Prisma.SortOrderInput | Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    kycStatus?: Prisma.SortOrder;
    referralCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    referredById?: Prisma.SortOrderInput | Prisma.SortOrder;
    joinDate?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    walletAddress?: Prisma.StringWithAggregatesFilter<"User"> | string;
    walletType?: Prisma.EnumWalletTypeNullableWithAggregatesFilter<"User"> | $Enums.WalletType | null;
    username?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    avatarUrl?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    country?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    bio?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    kycStatus?: Prisma.EnumKycStatusWithAggregatesFilter<"User"> | $Enums.KycStatus;
    referralCode?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    referredById?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    joinDate?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
};
export type UserCreateInput = {
    id?: string;
    walletAddress: string;
    walletType?: $Enums.WalletType | null;
    username?: string | null;
    avatarUrl?: string | null;
    country?: string | null;
    bio?: string | null;
    kycStatus?: $Enums.KycStatus;
    referralCode?: string | null;
    joinDate?: Date | string;
    isActive?: boolean;
    referredBy?: Prisma.UserCreateNestedOneWithoutUsersInput;
    properties?: Prisma.PropertyCreateNestedManyWithoutOwnerInput;
    investments?: Prisma.InvestmentCreateNestedManyWithoutUserInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutUserInput;
    listingDrafts?: Prisma.ListingDraftCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    yieldClaims?: Prisma.YieldClaimCreateNestedManyWithoutUserInput;
    users?: Prisma.UserCreateNestedManyWithoutReferredByInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    walletAddress: string;
    walletType?: $Enums.WalletType | null;
    username?: string | null;
    avatarUrl?: string | null;
    country?: string | null;
    bio?: string | null;
    kycStatus?: $Enums.KycStatus;
    referralCode?: string | null;
    referredById?: string | null;
    joinDate?: Date | string;
    isActive?: boolean;
    properties?: Prisma.PropertyUncheckedCreateNestedManyWithoutOwnerInput;
    investments?: Prisma.InvestmentUncheckedCreateNestedManyWithoutUserInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutUserInput;
    listingDrafts?: Prisma.ListingDraftUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    yieldClaims?: Prisma.YieldClaimUncheckedCreateNestedManyWithoutUserInput;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutReferredByInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    walletAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    walletType?: Prisma.NullableEnumWalletTypeFieldUpdateOperationsInput | $Enums.WalletType | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kycStatus?: Prisma.EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus;
    referralCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joinDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    referredBy?: Prisma.UserUpdateOneWithoutUsersNestedInput;
    properties?: Prisma.PropertyUpdateManyWithoutOwnerNestedInput;
    investments?: Prisma.InvestmentUpdateManyWithoutUserNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutUserNestedInput;
    listingDrafts?: Prisma.ListingDraftUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    yieldClaims?: Prisma.YieldClaimUpdateManyWithoutUserNestedInput;
    users?: Prisma.UserUpdateManyWithoutReferredByNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    walletAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    walletType?: Prisma.NullableEnumWalletTypeFieldUpdateOperationsInput | $Enums.WalletType | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kycStatus?: Prisma.EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus;
    referralCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referredById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joinDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    properties?: Prisma.PropertyUncheckedUpdateManyWithoutOwnerNestedInput;
    investments?: Prisma.InvestmentUncheckedUpdateManyWithoutUserNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutUserNestedInput;
    listingDrafts?: Prisma.ListingDraftUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    yieldClaims?: Prisma.YieldClaimUncheckedUpdateManyWithoutUserNestedInput;
    users?: Prisma.UserUncheckedUpdateManyWithoutReferredByNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    walletAddress: string;
    walletType?: $Enums.WalletType | null;
    username?: string | null;
    avatarUrl?: string | null;
    country?: string | null;
    bio?: string | null;
    kycStatus?: $Enums.KycStatus;
    referralCode?: string | null;
    referredById?: string | null;
    joinDate?: Date | string;
    isActive?: boolean;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    walletAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    walletType?: Prisma.NullableEnumWalletTypeFieldUpdateOperationsInput | $Enums.WalletType | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kycStatus?: Prisma.EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus;
    referralCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joinDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    walletAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    walletType?: Prisma.NullableEnumWalletTypeFieldUpdateOperationsInput | $Enums.WalletType | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kycStatus?: Prisma.EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus;
    referralCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referredById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joinDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type UserListRelationFilter = {
    every?: Prisma.UserWhereInput;
    some?: Prisma.UserWhereInput;
    none?: Prisma.UserWhereInput;
};
export type UserOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    walletAddress?: Prisma.SortOrder;
    walletType?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    kycStatus?: Prisma.SortOrder;
    referralCode?: Prisma.SortOrder;
    referredById?: Prisma.SortOrder;
    joinDate?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    walletAddress?: Prisma.SortOrder;
    walletType?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    kycStatus?: Prisma.SortOrder;
    referralCode?: Prisma.SortOrder;
    referredById?: Prisma.SortOrder;
    joinDate?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    walletAddress?: Prisma.SortOrder;
    walletType?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    kycStatus?: Prisma.SortOrder;
    referralCode?: Prisma.SortOrder;
    referredById?: Prisma.SortOrder;
    joinDate?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUsersInput, Prisma.UserUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUsersInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedManyWithoutReferredByInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReferredByInput, Prisma.UserUncheckedCreateWithoutReferredByInput> | Prisma.UserCreateWithoutReferredByInput[] | Prisma.UserUncheckedCreateWithoutReferredByInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReferredByInput | Prisma.UserCreateOrConnectWithoutReferredByInput[];
    createMany?: Prisma.UserCreateManyReferredByInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUncheckedCreateNestedManyWithoutReferredByInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReferredByInput, Prisma.UserUncheckedCreateWithoutReferredByInput> | Prisma.UserCreateWithoutReferredByInput[] | Prisma.UserUncheckedCreateWithoutReferredByInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReferredByInput | Prisma.UserCreateOrConnectWithoutReferredByInput[];
    createMany?: Prisma.UserCreateManyReferredByInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableEnumWalletTypeFieldUpdateOperationsInput = {
    set?: $Enums.WalletType | null;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type EnumKycStatusFieldUpdateOperationsInput = {
    set?: $Enums.KycStatus;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type UserUpdateOneWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUsersInput, Prisma.UserUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.UserUpsertWithoutUsersInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutUsersInput, Prisma.UserUpdateWithoutUsersInput>, Prisma.UserUncheckedUpdateWithoutUsersInput>;
};
export type UserUpdateManyWithoutReferredByNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReferredByInput, Prisma.UserUncheckedCreateWithoutReferredByInput> | Prisma.UserCreateWithoutReferredByInput[] | Prisma.UserUncheckedCreateWithoutReferredByInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReferredByInput | Prisma.UserCreateOrConnectWithoutReferredByInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutReferredByInput | Prisma.UserUpsertWithWhereUniqueWithoutReferredByInput[];
    createMany?: Prisma.UserCreateManyReferredByInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutReferredByInput | Prisma.UserUpdateWithWhereUniqueWithoutReferredByInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutReferredByInput | Prisma.UserUpdateManyWithWhereWithoutReferredByInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserUncheckedUpdateManyWithoutReferredByNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReferredByInput, Prisma.UserUncheckedCreateWithoutReferredByInput> | Prisma.UserCreateWithoutReferredByInput[] | Prisma.UserUncheckedCreateWithoutReferredByInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReferredByInput | Prisma.UserCreateOrConnectWithoutReferredByInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutReferredByInput | Prisma.UserUpsertWithWhereUniqueWithoutReferredByInput[];
    createMany?: Prisma.UserCreateManyReferredByInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutReferredByInput | Prisma.UserUpdateWithWhereUniqueWithoutReferredByInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutReferredByInput | Prisma.UserUpdateManyWithWhereWithoutReferredByInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserCreateNestedOneWithoutPropertiesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPropertiesInput, Prisma.UserUncheckedCreateWithoutPropertiesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPropertiesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPropertiesInput, Prisma.UserUncheckedCreateWithoutPropertiesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPropertiesInput;
    upsert?: Prisma.UserUpsertWithoutPropertiesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutPropertiesInput, Prisma.UserUpdateWithoutPropertiesInput>, Prisma.UserUncheckedUpdateWithoutPropertiesInput>;
};
export type UserCreateNestedOneWithoutInvestmentsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutInvestmentsInput, Prisma.UserUncheckedCreateWithoutInvestmentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutInvestmentsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutInvestmentsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutInvestmentsInput, Prisma.UserUncheckedCreateWithoutInvestmentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutInvestmentsInput;
    upsert?: Prisma.UserUpsertWithoutInvestmentsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutInvestmentsInput, Prisma.UserUpdateWithoutInvestmentsInput>, Prisma.UserUncheckedUpdateWithoutInvestmentsInput>;
};
export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTransactionsInput, Prisma.UserUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTransactionsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTransactionsInput, Prisma.UserUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTransactionsInput;
    upsert?: Prisma.UserUpsertWithoutTransactionsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutTransactionsInput, Prisma.UserUpdateWithoutTransactionsInput>, Prisma.UserUncheckedUpdateWithoutTransactionsInput>;
};
export type UserCreateNestedOneWithoutYieldClaimsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutYieldClaimsInput, Prisma.UserUncheckedCreateWithoutYieldClaimsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutYieldClaimsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutYieldClaimsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutYieldClaimsInput, Prisma.UserUncheckedCreateWithoutYieldClaimsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutYieldClaimsInput;
    upsert?: Prisma.UserUpsertWithoutYieldClaimsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutYieldClaimsInput, Prisma.UserUpdateWithoutYieldClaimsInput>, Prisma.UserUncheckedUpdateWithoutYieldClaimsInput>;
};
export type UserCreateNestedOneWithoutListingDraftsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutListingDraftsInput, Prisma.UserUncheckedCreateWithoutListingDraftsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutListingDraftsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutListingDraftsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutListingDraftsInput, Prisma.UserUncheckedCreateWithoutListingDraftsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutListingDraftsInput;
    upsert?: Prisma.UserUpsertWithoutListingDraftsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutListingDraftsInput, Prisma.UserUpdateWithoutListingDraftsInput>, Prisma.UserUncheckedUpdateWithoutListingDraftsInput>;
};
export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.UserUpsertWithoutNotificationsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutNotificationsInput, Prisma.UserUpdateWithoutNotificationsInput>, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
};
export type UserCreateWithoutUsersInput = {
    id?: string;
    walletAddress: string;
    walletType?: $Enums.WalletType | null;
    username?: string | null;
    avatarUrl?: string | null;
    country?: string | null;
    bio?: string | null;
    kycStatus?: $Enums.KycStatus;
    referralCode?: string | null;
    joinDate?: Date | string;
    isActive?: boolean;
    referredBy?: Prisma.UserCreateNestedOneWithoutUsersInput;
    properties?: Prisma.PropertyCreateNestedManyWithoutOwnerInput;
    investments?: Prisma.InvestmentCreateNestedManyWithoutUserInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutUserInput;
    listingDrafts?: Prisma.ListingDraftCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    yieldClaims?: Prisma.YieldClaimCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutUsersInput = {
    id?: string;
    walletAddress: string;
    walletType?: $Enums.WalletType | null;
    username?: string | null;
    avatarUrl?: string | null;
    country?: string | null;
    bio?: string | null;
    kycStatus?: $Enums.KycStatus;
    referralCode?: string | null;
    referredById?: string | null;
    joinDate?: Date | string;
    isActive?: boolean;
    properties?: Prisma.PropertyUncheckedCreateNestedManyWithoutOwnerInput;
    investments?: Prisma.InvestmentUncheckedCreateNestedManyWithoutUserInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutUserInput;
    listingDrafts?: Prisma.ListingDraftUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    yieldClaims?: Prisma.YieldClaimUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutUsersInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutUsersInput, Prisma.UserUncheckedCreateWithoutUsersInput>;
};
export type UserCreateWithoutReferredByInput = {
    id?: string;
    walletAddress: string;
    walletType?: $Enums.WalletType | null;
    username?: string | null;
    avatarUrl?: string | null;
    country?: string | null;
    bio?: string | null;
    kycStatus?: $Enums.KycStatus;
    referralCode?: string | null;
    joinDate?: Date | string;
    isActive?: boolean;
    properties?: Prisma.PropertyCreateNestedManyWithoutOwnerInput;
    investments?: Prisma.InvestmentCreateNestedManyWithoutUserInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutUserInput;
    listingDrafts?: Prisma.ListingDraftCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    yieldClaims?: Prisma.YieldClaimCreateNestedManyWithoutUserInput;
    users?: Prisma.UserCreateNestedManyWithoutReferredByInput;
};
export type UserUncheckedCreateWithoutReferredByInput = {
    id?: string;
    walletAddress: string;
    walletType?: $Enums.WalletType | null;
    username?: string | null;
    avatarUrl?: string | null;
    country?: string | null;
    bio?: string | null;
    kycStatus?: $Enums.KycStatus;
    referralCode?: string | null;
    joinDate?: Date | string;
    isActive?: boolean;
    properties?: Prisma.PropertyUncheckedCreateNestedManyWithoutOwnerInput;
    investments?: Prisma.InvestmentUncheckedCreateNestedManyWithoutUserInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutUserInput;
    listingDrafts?: Prisma.ListingDraftUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    yieldClaims?: Prisma.YieldClaimUncheckedCreateNestedManyWithoutUserInput;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutReferredByInput;
};
export type UserCreateOrConnectWithoutReferredByInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutReferredByInput, Prisma.UserUncheckedCreateWithoutReferredByInput>;
};
export type UserCreateManyReferredByInputEnvelope = {
    data: Prisma.UserCreateManyReferredByInput | Prisma.UserCreateManyReferredByInput[];
    skipDuplicates?: boolean;
};
export type UserUpsertWithoutUsersInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutUsersInput, Prisma.UserUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutUsersInput, Prisma.UserUncheckedCreateWithoutUsersInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutUsersInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutUsersInput, Prisma.UserUncheckedUpdateWithoutUsersInput>;
};
export type UserUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    walletAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    walletType?: Prisma.NullableEnumWalletTypeFieldUpdateOperationsInput | $Enums.WalletType | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kycStatus?: Prisma.EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus;
    referralCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joinDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    referredBy?: Prisma.UserUpdateOneWithoutUsersNestedInput;
    properties?: Prisma.PropertyUpdateManyWithoutOwnerNestedInput;
    investments?: Prisma.InvestmentUpdateManyWithoutUserNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutUserNestedInput;
    listingDrafts?: Prisma.ListingDraftUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    yieldClaims?: Prisma.YieldClaimUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    walletAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    walletType?: Prisma.NullableEnumWalletTypeFieldUpdateOperationsInput | $Enums.WalletType | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kycStatus?: Prisma.EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus;
    referralCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referredById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joinDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    properties?: Prisma.PropertyUncheckedUpdateManyWithoutOwnerNestedInput;
    investments?: Prisma.InvestmentUncheckedUpdateManyWithoutUserNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutUserNestedInput;
    listingDrafts?: Prisma.ListingDraftUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    yieldClaims?: Prisma.YieldClaimUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserUpsertWithWhereUniqueWithoutReferredByInput = {
    where: Prisma.UserWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserUpdateWithoutReferredByInput, Prisma.UserUncheckedUpdateWithoutReferredByInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutReferredByInput, Prisma.UserUncheckedCreateWithoutReferredByInput>;
};
export type UserUpdateWithWhereUniqueWithoutReferredByInput = {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutReferredByInput, Prisma.UserUncheckedUpdateWithoutReferredByInput>;
};
export type UserUpdateManyWithWhereWithoutReferredByInput = {
    where: Prisma.UserScalarWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyWithoutReferredByInput>;
};
export type UserScalarWhereInput = {
    AND?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
    OR?: Prisma.UserScalarWhereInput[];
    NOT?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    walletAddress?: Prisma.StringFilter<"User"> | string;
    walletType?: Prisma.EnumWalletTypeNullableFilter<"User"> | $Enums.WalletType | null;
    username?: Prisma.StringNullableFilter<"User"> | string | null;
    avatarUrl?: Prisma.StringNullableFilter<"User"> | string | null;
    country?: Prisma.StringNullableFilter<"User"> | string | null;
    bio?: Prisma.StringNullableFilter<"User"> | string | null;
    kycStatus?: Prisma.EnumKycStatusFilter<"User"> | $Enums.KycStatus;
    referralCode?: Prisma.StringNullableFilter<"User"> | string | null;
    referredById?: Prisma.StringNullableFilter<"User"> | string | null;
    joinDate?: Prisma.DateTimeFilter<"User"> | Date | string;
    isActive?: Prisma.BoolFilter<"User"> | boolean;
};
export type UserCreateWithoutPropertiesInput = {
    id?: string;
    walletAddress: string;
    walletType?: $Enums.WalletType | null;
    username?: string | null;
    avatarUrl?: string | null;
    country?: string | null;
    bio?: string | null;
    kycStatus?: $Enums.KycStatus;
    referralCode?: string | null;
    joinDate?: Date | string;
    isActive?: boolean;
    referredBy?: Prisma.UserCreateNestedOneWithoutUsersInput;
    investments?: Prisma.InvestmentCreateNestedManyWithoutUserInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutUserInput;
    listingDrafts?: Prisma.ListingDraftCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    yieldClaims?: Prisma.YieldClaimCreateNestedManyWithoutUserInput;
    users?: Prisma.UserCreateNestedManyWithoutReferredByInput;
};
export type UserUncheckedCreateWithoutPropertiesInput = {
    id?: string;
    walletAddress: string;
    walletType?: $Enums.WalletType | null;
    username?: string | null;
    avatarUrl?: string | null;
    country?: string | null;
    bio?: string | null;
    kycStatus?: $Enums.KycStatus;
    referralCode?: string | null;
    referredById?: string | null;
    joinDate?: Date | string;
    isActive?: boolean;
    investments?: Prisma.InvestmentUncheckedCreateNestedManyWithoutUserInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutUserInput;
    listingDrafts?: Prisma.ListingDraftUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    yieldClaims?: Prisma.YieldClaimUncheckedCreateNestedManyWithoutUserInput;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutReferredByInput;
};
export type UserCreateOrConnectWithoutPropertiesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutPropertiesInput, Prisma.UserUncheckedCreateWithoutPropertiesInput>;
};
export type UserUpsertWithoutPropertiesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutPropertiesInput, Prisma.UserUncheckedUpdateWithoutPropertiesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutPropertiesInput, Prisma.UserUncheckedCreateWithoutPropertiesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutPropertiesInput, Prisma.UserUncheckedUpdateWithoutPropertiesInput>;
};
export type UserUpdateWithoutPropertiesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    walletAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    walletType?: Prisma.NullableEnumWalletTypeFieldUpdateOperationsInput | $Enums.WalletType | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kycStatus?: Prisma.EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus;
    referralCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joinDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    referredBy?: Prisma.UserUpdateOneWithoutUsersNestedInput;
    investments?: Prisma.InvestmentUpdateManyWithoutUserNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutUserNestedInput;
    listingDrafts?: Prisma.ListingDraftUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    yieldClaims?: Prisma.YieldClaimUpdateManyWithoutUserNestedInput;
    users?: Prisma.UserUpdateManyWithoutReferredByNestedInput;
};
export type UserUncheckedUpdateWithoutPropertiesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    walletAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    walletType?: Prisma.NullableEnumWalletTypeFieldUpdateOperationsInput | $Enums.WalletType | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kycStatus?: Prisma.EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus;
    referralCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referredById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joinDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    investments?: Prisma.InvestmentUncheckedUpdateManyWithoutUserNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutUserNestedInput;
    listingDrafts?: Prisma.ListingDraftUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    yieldClaims?: Prisma.YieldClaimUncheckedUpdateManyWithoutUserNestedInput;
    users?: Prisma.UserUncheckedUpdateManyWithoutReferredByNestedInput;
};
export type UserCreateWithoutInvestmentsInput = {
    id?: string;
    walletAddress: string;
    walletType?: $Enums.WalletType | null;
    username?: string | null;
    avatarUrl?: string | null;
    country?: string | null;
    bio?: string | null;
    kycStatus?: $Enums.KycStatus;
    referralCode?: string | null;
    joinDate?: Date | string;
    isActive?: boolean;
    referredBy?: Prisma.UserCreateNestedOneWithoutUsersInput;
    properties?: Prisma.PropertyCreateNestedManyWithoutOwnerInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutUserInput;
    listingDrafts?: Prisma.ListingDraftCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    yieldClaims?: Prisma.YieldClaimCreateNestedManyWithoutUserInput;
    users?: Prisma.UserCreateNestedManyWithoutReferredByInput;
};
export type UserUncheckedCreateWithoutInvestmentsInput = {
    id?: string;
    walletAddress: string;
    walletType?: $Enums.WalletType | null;
    username?: string | null;
    avatarUrl?: string | null;
    country?: string | null;
    bio?: string | null;
    kycStatus?: $Enums.KycStatus;
    referralCode?: string | null;
    referredById?: string | null;
    joinDate?: Date | string;
    isActive?: boolean;
    properties?: Prisma.PropertyUncheckedCreateNestedManyWithoutOwnerInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutUserInput;
    listingDrafts?: Prisma.ListingDraftUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    yieldClaims?: Prisma.YieldClaimUncheckedCreateNestedManyWithoutUserInput;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutReferredByInput;
};
export type UserCreateOrConnectWithoutInvestmentsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutInvestmentsInput, Prisma.UserUncheckedCreateWithoutInvestmentsInput>;
};
export type UserUpsertWithoutInvestmentsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutInvestmentsInput, Prisma.UserUncheckedUpdateWithoutInvestmentsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutInvestmentsInput, Prisma.UserUncheckedCreateWithoutInvestmentsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutInvestmentsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutInvestmentsInput, Prisma.UserUncheckedUpdateWithoutInvestmentsInput>;
};
export type UserUpdateWithoutInvestmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    walletAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    walletType?: Prisma.NullableEnumWalletTypeFieldUpdateOperationsInput | $Enums.WalletType | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kycStatus?: Prisma.EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus;
    referralCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joinDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    referredBy?: Prisma.UserUpdateOneWithoutUsersNestedInput;
    properties?: Prisma.PropertyUpdateManyWithoutOwnerNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutUserNestedInput;
    listingDrafts?: Prisma.ListingDraftUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    yieldClaims?: Prisma.YieldClaimUpdateManyWithoutUserNestedInput;
    users?: Prisma.UserUpdateManyWithoutReferredByNestedInput;
};
export type UserUncheckedUpdateWithoutInvestmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    walletAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    walletType?: Prisma.NullableEnumWalletTypeFieldUpdateOperationsInput | $Enums.WalletType | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kycStatus?: Prisma.EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus;
    referralCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referredById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joinDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    properties?: Prisma.PropertyUncheckedUpdateManyWithoutOwnerNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutUserNestedInput;
    listingDrafts?: Prisma.ListingDraftUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    yieldClaims?: Prisma.YieldClaimUncheckedUpdateManyWithoutUserNestedInput;
    users?: Prisma.UserUncheckedUpdateManyWithoutReferredByNestedInput;
};
export type UserCreateWithoutTransactionsInput = {
    id?: string;
    walletAddress: string;
    walletType?: $Enums.WalletType | null;
    username?: string | null;
    avatarUrl?: string | null;
    country?: string | null;
    bio?: string | null;
    kycStatus?: $Enums.KycStatus;
    referralCode?: string | null;
    joinDate?: Date | string;
    isActive?: boolean;
    referredBy?: Prisma.UserCreateNestedOneWithoutUsersInput;
    properties?: Prisma.PropertyCreateNestedManyWithoutOwnerInput;
    investments?: Prisma.InvestmentCreateNestedManyWithoutUserInput;
    listingDrafts?: Prisma.ListingDraftCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    yieldClaims?: Prisma.YieldClaimCreateNestedManyWithoutUserInput;
    users?: Prisma.UserCreateNestedManyWithoutReferredByInput;
};
export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: string;
    walletAddress: string;
    walletType?: $Enums.WalletType | null;
    username?: string | null;
    avatarUrl?: string | null;
    country?: string | null;
    bio?: string | null;
    kycStatus?: $Enums.KycStatus;
    referralCode?: string | null;
    referredById?: string | null;
    joinDate?: Date | string;
    isActive?: boolean;
    properties?: Prisma.PropertyUncheckedCreateNestedManyWithoutOwnerInput;
    investments?: Prisma.InvestmentUncheckedCreateNestedManyWithoutUserInput;
    listingDrafts?: Prisma.ListingDraftUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    yieldClaims?: Prisma.YieldClaimUncheckedCreateNestedManyWithoutUserInput;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutReferredByInput;
};
export type UserCreateOrConnectWithoutTransactionsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutTransactionsInput, Prisma.UserUncheckedCreateWithoutTransactionsInput>;
};
export type UserUpsertWithoutTransactionsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutTransactionsInput, Prisma.UserUncheckedUpdateWithoutTransactionsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutTransactionsInput, Prisma.UserUncheckedCreateWithoutTransactionsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutTransactionsInput, Prisma.UserUncheckedUpdateWithoutTransactionsInput>;
};
export type UserUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    walletAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    walletType?: Prisma.NullableEnumWalletTypeFieldUpdateOperationsInput | $Enums.WalletType | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kycStatus?: Prisma.EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus;
    referralCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joinDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    referredBy?: Prisma.UserUpdateOneWithoutUsersNestedInput;
    properties?: Prisma.PropertyUpdateManyWithoutOwnerNestedInput;
    investments?: Prisma.InvestmentUpdateManyWithoutUserNestedInput;
    listingDrafts?: Prisma.ListingDraftUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    yieldClaims?: Prisma.YieldClaimUpdateManyWithoutUserNestedInput;
    users?: Prisma.UserUpdateManyWithoutReferredByNestedInput;
};
export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    walletAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    walletType?: Prisma.NullableEnumWalletTypeFieldUpdateOperationsInput | $Enums.WalletType | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kycStatus?: Prisma.EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus;
    referralCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referredById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joinDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    properties?: Prisma.PropertyUncheckedUpdateManyWithoutOwnerNestedInput;
    investments?: Prisma.InvestmentUncheckedUpdateManyWithoutUserNestedInput;
    listingDrafts?: Prisma.ListingDraftUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    yieldClaims?: Prisma.YieldClaimUncheckedUpdateManyWithoutUserNestedInput;
    users?: Prisma.UserUncheckedUpdateManyWithoutReferredByNestedInput;
};
export type UserCreateWithoutYieldClaimsInput = {
    id?: string;
    walletAddress: string;
    walletType?: $Enums.WalletType | null;
    username?: string | null;
    avatarUrl?: string | null;
    country?: string | null;
    bio?: string | null;
    kycStatus?: $Enums.KycStatus;
    referralCode?: string | null;
    joinDate?: Date | string;
    isActive?: boolean;
    referredBy?: Prisma.UserCreateNestedOneWithoutUsersInput;
    properties?: Prisma.PropertyCreateNestedManyWithoutOwnerInput;
    investments?: Prisma.InvestmentCreateNestedManyWithoutUserInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutUserInput;
    listingDrafts?: Prisma.ListingDraftCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    users?: Prisma.UserCreateNestedManyWithoutReferredByInput;
};
export type UserUncheckedCreateWithoutYieldClaimsInput = {
    id?: string;
    walletAddress: string;
    walletType?: $Enums.WalletType | null;
    username?: string | null;
    avatarUrl?: string | null;
    country?: string | null;
    bio?: string | null;
    kycStatus?: $Enums.KycStatus;
    referralCode?: string | null;
    referredById?: string | null;
    joinDate?: Date | string;
    isActive?: boolean;
    properties?: Prisma.PropertyUncheckedCreateNestedManyWithoutOwnerInput;
    investments?: Prisma.InvestmentUncheckedCreateNestedManyWithoutUserInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutUserInput;
    listingDrafts?: Prisma.ListingDraftUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutReferredByInput;
};
export type UserCreateOrConnectWithoutYieldClaimsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutYieldClaimsInput, Prisma.UserUncheckedCreateWithoutYieldClaimsInput>;
};
export type UserUpsertWithoutYieldClaimsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutYieldClaimsInput, Prisma.UserUncheckedUpdateWithoutYieldClaimsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutYieldClaimsInput, Prisma.UserUncheckedCreateWithoutYieldClaimsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutYieldClaimsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutYieldClaimsInput, Prisma.UserUncheckedUpdateWithoutYieldClaimsInput>;
};
export type UserUpdateWithoutYieldClaimsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    walletAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    walletType?: Prisma.NullableEnumWalletTypeFieldUpdateOperationsInput | $Enums.WalletType | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kycStatus?: Prisma.EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus;
    referralCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joinDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    referredBy?: Prisma.UserUpdateOneWithoutUsersNestedInput;
    properties?: Prisma.PropertyUpdateManyWithoutOwnerNestedInput;
    investments?: Prisma.InvestmentUpdateManyWithoutUserNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutUserNestedInput;
    listingDrafts?: Prisma.ListingDraftUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    users?: Prisma.UserUpdateManyWithoutReferredByNestedInput;
};
export type UserUncheckedUpdateWithoutYieldClaimsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    walletAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    walletType?: Prisma.NullableEnumWalletTypeFieldUpdateOperationsInput | $Enums.WalletType | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kycStatus?: Prisma.EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus;
    referralCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referredById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joinDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    properties?: Prisma.PropertyUncheckedUpdateManyWithoutOwnerNestedInput;
    investments?: Prisma.InvestmentUncheckedUpdateManyWithoutUserNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutUserNestedInput;
    listingDrafts?: Prisma.ListingDraftUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    users?: Prisma.UserUncheckedUpdateManyWithoutReferredByNestedInput;
};
export type UserCreateWithoutListingDraftsInput = {
    id?: string;
    walletAddress: string;
    walletType?: $Enums.WalletType | null;
    username?: string | null;
    avatarUrl?: string | null;
    country?: string | null;
    bio?: string | null;
    kycStatus?: $Enums.KycStatus;
    referralCode?: string | null;
    joinDate?: Date | string;
    isActive?: boolean;
    referredBy?: Prisma.UserCreateNestedOneWithoutUsersInput;
    properties?: Prisma.PropertyCreateNestedManyWithoutOwnerInput;
    investments?: Prisma.InvestmentCreateNestedManyWithoutUserInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    yieldClaims?: Prisma.YieldClaimCreateNestedManyWithoutUserInput;
    users?: Prisma.UserCreateNestedManyWithoutReferredByInput;
};
export type UserUncheckedCreateWithoutListingDraftsInput = {
    id?: string;
    walletAddress: string;
    walletType?: $Enums.WalletType | null;
    username?: string | null;
    avatarUrl?: string | null;
    country?: string | null;
    bio?: string | null;
    kycStatus?: $Enums.KycStatus;
    referralCode?: string | null;
    referredById?: string | null;
    joinDate?: Date | string;
    isActive?: boolean;
    properties?: Prisma.PropertyUncheckedCreateNestedManyWithoutOwnerInput;
    investments?: Prisma.InvestmentUncheckedCreateNestedManyWithoutUserInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    yieldClaims?: Prisma.YieldClaimUncheckedCreateNestedManyWithoutUserInput;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutReferredByInput;
};
export type UserCreateOrConnectWithoutListingDraftsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutListingDraftsInput, Prisma.UserUncheckedCreateWithoutListingDraftsInput>;
};
export type UserUpsertWithoutListingDraftsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutListingDraftsInput, Prisma.UserUncheckedUpdateWithoutListingDraftsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutListingDraftsInput, Prisma.UserUncheckedCreateWithoutListingDraftsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutListingDraftsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutListingDraftsInput, Prisma.UserUncheckedUpdateWithoutListingDraftsInput>;
};
export type UserUpdateWithoutListingDraftsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    walletAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    walletType?: Prisma.NullableEnumWalletTypeFieldUpdateOperationsInput | $Enums.WalletType | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kycStatus?: Prisma.EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus;
    referralCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joinDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    referredBy?: Prisma.UserUpdateOneWithoutUsersNestedInput;
    properties?: Prisma.PropertyUpdateManyWithoutOwnerNestedInput;
    investments?: Prisma.InvestmentUpdateManyWithoutUserNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    yieldClaims?: Prisma.YieldClaimUpdateManyWithoutUserNestedInput;
    users?: Prisma.UserUpdateManyWithoutReferredByNestedInput;
};
export type UserUncheckedUpdateWithoutListingDraftsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    walletAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    walletType?: Prisma.NullableEnumWalletTypeFieldUpdateOperationsInput | $Enums.WalletType | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kycStatus?: Prisma.EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus;
    referralCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referredById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joinDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    properties?: Prisma.PropertyUncheckedUpdateManyWithoutOwnerNestedInput;
    investments?: Prisma.InvestmentUncheckedUpdateManyWithoutUserNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    yieldClaims?: Prisma.YieldClaimUncheckedUpdateManyWithoutUserNestedInput;
    users?: Prisma.UserUncheckedUpdateManyWithoutReferredByNestedInput;
};
export type UserCreateWithoutNotificationsInput = {
    id?: string;
    walletAddress: string;
    walletType?: $Enums.WalletType | null;
    username?: string | null;
    avatarUrl?: string | null;
    country?: string | null;
    bio?: string | null;
    kycStatus?: $Enums.KycStatus;
    referralCode?: string | null;
    joinDate?: Date | string;
    isActive?: boolean;
    referredBy?: Prisma.UserCreateNestedOneWithoutUsersInput;
    properties?: Prisma.PropertyCreateNestedManyWithoutOwnerInput;
    investments?: Prisma.InvestmentCreateNestedManyWithoutUserInput;
    transactions?: Prisma.TransactionCreateNestedManyWithoutUserInput;
    listingDrafts?: Prisma.ListingDraftCreateNestedManyWithoutUserInput;
    yieldClaims?: Prisma.YieldClaimCreateNestedManyWithoutUserInput;
    users?: Prisma.UserCreateNestedManyWithoutReferredByInput;
};
export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string;
    walletAddress: string;
    walletType?: $Enums.WalletType | null;
    username?: string | null;
    avatarUrl?: string | null;
    country?: string | null;
    bio?: string | null;
    kycStatus?: $Enums.KycStatus;
    referralCode?: string | null;
    referredById?: string | null;
    joinDate?: Date | string;
    isActive?: boolean;
    properties?: Prisma.PropertyUncheckedCreateNestedManyWithoutOwnerInput;
    investments?: Prisma.InvestmentUncheckedCreateNestedManyWithoutUserInput;
    transactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutUserInput;
    listingDrafts?: Prisma.ListingDraftUncheckedCreateNestedManyWithoutUserInput;
    yieldClaims?: Prisma.YieldClaimUncheckedCreateNestedManyWithoutUserInput;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutReferredByInput;
};
export type UserCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
};
export type UserUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsInput, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsInput, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
};
export type UserUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    walletAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    walletType?: Prisma.NullableEnumWalletTypeFieldUpdateOperationsInput | $Enums.WalletType | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kycStatus?: Prisma.EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus;
    referralCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joinDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    referredBy?: Prisma.UserUpdateOneWithoutUsersNestedInput;
    properties?: Prisma.PropertyUpdateManyWithoutOwnerNestedInput;
    investments?: Prisma.InvestmentUpdateManyWithoutUserNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutUserNestedInput;
    listingDrafts?: Prisma.ListingDraftUpdateManyWithoutUserNestedInput;
    yieldClaims?: Prisma.YieldClaimUpdateManyWithoutUserNestedInput;
    users?: Prisma.UserUpdateManyWithoutReferredByNestedInput;
};
export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    walletAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    walletType?: Prisma.NullableEnumWalletTypeFieldUpdateOperationsInput | $Enums.WalletType | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kycStatus?: Prisma.EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus;
    referralCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referredById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joinDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    properties?: Prisma.PropertyUncheckedUpdateManyWithoutOwnerNestedInput;
    investments?: Prisma.InvestmentUncheckedUpdateManyWithoutUserNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutUserNestedInput;
    listingDrafts?: Prisma.ListingDraftUncheckedUpdateManyWithoutUserNestedInput;
    yieldClaims?: Prisma.YieldClaimUncheckedUpdateManyWithoutUserNestedInput;
    users?: Prisma.UserUncheckedUpdateManyWithoutReferredByNestedInput;
};
export type UserCreateManyReferredByInput = {
    id?: string;
    walletAddress: string;
    walletType?: $Enums.WalletType | null;
    username?: string | null;
    avatarUrl?: string | null;
    country?: string | null;
    bio?: string | null;
    kycStatus?: $Enums.KycStatus;
    referralCode?: string | null;
    joinDate?: Date | string;
    isActive?: boolean;
};
export type UserUpdateWithoutReferredByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    walletAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    walletType?: Prisma.NullableEnumWalletTypeFieldUpdateOperationsInput | $Enums.WalletType | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kycStatus?: Prisma.EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus;
    referralCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joinDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    properties?: Prisma.PropertyUpdateManyWithoutOwnerNestedInput;
    investments?: Prisma.InvestmentUpdateManyWithoutUserNestedInput;
    transactions?: Prisma.TransactionUpdateManyWithoutUserNestedInput;
    listingDrafts?: Prisma.ListingDraftUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    yieldClaims?: Prisma.YieldClaimUpdateManyWithoutUserNestedInput;
    users?: Prisma.UserUpdateManyWithoutReferredByNestedInput;
};
export type UserUncheckedUpdateWithoutReferredByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    walletAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    walletType?: Prisma.NullableEnumWalletTypeFieldUpdateOperationsInput | $Enums.WalletType | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kycStatus?: Prisma.EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus;
    referralCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joinDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    properties?: Prisma.PropertyUncheckedUpdateManyWithoutOwnerNestedInput;
    investments?: Prisma.InvestmentUncheckedUpdateManyWithoutUserNestedInput;
    transactions?: Prisma.TransactionUncheckedUpdateManyWithoutUserNestedInput;
    listingDrafts?: Prisma.ListingDraftUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    yieldClaims?: Prisma.YieldClaimUncheckedUpdateManyWithoutUserNestedInput;
    users?: Prisma.UserUncheckedUpdateManyWithoutReferredByNestedInput;
};
export type UserUncheckedUpdateManyWithoutReferredByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    walletAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    walletType?: Prisma.NullableEnumWalletTypeFieldUpdateOperationsInput | $Enums.WalletType | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kycStatus?: Prisma.EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus;
    referralCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    joinDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
/**
 * Count Type UserCountOutputType
 */
export type UserCountOutputType = {
    properties: number;
    investments: number;
    transactions: number;
    listingDrafts: number;
    notifications: number;
    yieldClaims: number;
    users: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    properties?: boolean | UserCountOutputTypeCountPropertiesArgs;
    investments?: boolean | UserCountOutputTypeCountInvestmentsArgs;
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs;
    listingDrafts?: boolean | UserCountOutputTypeCountListingDraftsArgs;
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs;
    yieldClaims?: boolean | UserCountOutputTypeCountYieldClaimsArgs;
    users?: boolean | UserCountOutputTypeCountUsersArgs;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountPropertiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PropertyWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountInvestmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestmentWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransactionWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountListingDraftsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ListingDraftWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountYieldClaimsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.YieldClaimWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountUsersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    walletAddress?: boolean;
    walletType?: boolean;
    username?: boolean;
    avatarUrl?: boolean;
    country?: boolean;
    bio?: boolean;
    kycStatus?: boolean;
    referralCode?: boolean;
    referredById?: boolean;
    joinDate?: boolean;
    isActive?: boolean;
    referredBy?: boolean | Prisma.User$referredByArgs<ExtArgs>;
    properties?: boolean | Prisma.User$propertiesArgs<ExtArgs>;
    investments?: boolean | Prisma.User$investmentsArgs<ExtArgs>;
    transactions?: boolean | Prisma.User$transactionsArgs<ExtArgs>;
    listingDrafts?: boolean | Prisma.User$listingDraftsArgs<ExtArgs>;
    notifications?: boolean | Prisma.User$notificationsArgs<ExtArgs>;
    yieldClaims?: boolean | Prisma.User$yieldClaimsArgs<ExtArgs>;
    users?: boolean | Prisma.User$usersArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    walletAddress?: boolean;
    walletType?: boolean;
    username?: boolean;
    avatarUrl?: boolean;
    country?: boolean;
    bio?: boolean;
    kycStatus?: boolean;
    referralCode?: boolean;
    referredById?: boolean;
    joinDate?: boolean;
    isActive?: boolean;
    referredBy?: boolean | Prisma.User$referredByArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    walletAddress?: boolean;
    walletType?: boolean;
    username?: boolean;
    avatarUrl?: boolean;
    country?: boolean;
    bio?: boolean;
    kycStatus?: boolean;
    referralCode?: boolean;
    referredById?: boolean;
    joinDate?: boolean;
    isActive?: boolean;
    referredBy?: boolean | Prisma.User$referredByArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    walletAddress?: boolean;
    walletType?: boolean;
    username?: boolean;
    avatarUrl?: boolean;
    country?: boolean;
    bio?: boolean;
    kycStatus?: boolean;
    referralCode?: boolean;
    referredById?: boolean;
    joinDate?: boolean;
    isActive?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "walletAddress" | "walletType" | "username" | "avatarUrl" | "country" | "bio" | "kycStatus" | "referralCode" | "referredById" | "joinDate" | "isActive", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    referredBy?: boolean | Prisma.User$referredByArgs<ExtArgs>;
    properties?: boolean | Prisma.User$propertiesArgs<ExtArgs>;
    investments?: boolean | Prisma.User$investmentsArgs<ExtArgs>;
    transactions?: boolean | Prisma.User$transactionsArgs<ExtArgs>;
    listingDrafts?: boolean | Prisma.User$listingDraftsArgs<ExtArgs>;
    notifications?: boolean | Prisma.User$notificationsArgs<ExtArgs>;
    yieldClaims?: boolean | Prisma.User$yieldClaimsArgs<ExtArgs>;
    users?: boolean | Prisma.User$usersArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    referredBy?: boolean | Prisma.User$referredByArgs<ExtArgs>;
};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    referredBy?: boolean | Prisma.User$referredByArgs<ExtArgs>;
};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        referredBy: Prisma.$UserPayload<ExtArgs> | null;
        properties: Prisma.$PropertyPayload<ExtArgs>[];
        investments: Prisma.$InvestmentPayload<ExtArgs>[];
        transactions: Prisma.$TransactionPayload<ExtArgs>[];
        listingDrafts: Prisma.$ListingDraftPayload<ExtArgs>[];
        notifications: Prisma.$NotificationPayload<ExtArgs>[];
        yieldClaims: Prisma.$YieldClaimPayload<ExtArgs>[];
        users: Prisma.$UserPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        walletAddress: string;
        walletType: $Enums.WalletType | null;
        username: string | null;
        avatarUrl: string | null;
        country: string | null;
        bio: string | null;
        kycStatus: $Enums.KycStatus;
        referralCode: string | null;
        referredById: string | null;
        joinDate: Date;
        isActive: boolean;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for User.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    referredBy<T extends Prisma.User$referredByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$referredByArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    properties<T extends Prisma.User$propertiesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    investments<T extends Prisma.User$investmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$investmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    transactions<T extends Prisma.User$transactionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    listingDrafts<T extends Prisma.User$listingDraftsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$listingDraftsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ListingDraftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notifications<T extends Prisma.User$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    yieldClaims<T extends Prisma.User$yieldClaimsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$yieldClaimsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$YieldClaimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    users<T extends Prisma.User$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$usersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the User model
 */
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly walletAddress: Prisma.FieldRef<"User", 'String'>;
    readonly walletType: Prisma.FieldRef<"User", 'WalletType'>;
    readonly username: Prisma.FieldRef<"User", 'String'>;
    readonly avatarUrl: Prisma.FieldRef<"User", 'String'>;
    readonly country: Prisma.FieldRef<"User", 'String'>;
    readonly bio: Prisma.FieldRef<"User", 'String'>;
    readonly kycStatus: Prisma.FieldRef<"User", 'KycStatus'>;
    readonly referralCode: Prisma.FieldRef<"User", 'String'>;
    readonly referredById: Prisma.FieldRef<"User", 'String'>;
    readonly joinDate: Prisma.FieldRef<"User", 'DateTime'>;
    readonly isActive: Prisma.FieldRef<"User", 'Boolean'>;
}
/**
 * User findUnique
 */
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findUniqueOrThrow
 */
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findFirst
 */
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findFirstOrThrow
 */
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findMany
 */
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User create
 */
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
/**
 * User createMany
 */
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User createManyAndReturn
 */
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * User update
 */
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User updateMany
 */
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User updateManyAndReturn
 */
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * User upsert
 */
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: Prisma.UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
/**
 * User delete
 */
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User deleteMany
 */
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
};
/**
 * User.referredBy
 */
export type User$referredByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
/**
 * User.properties
 */
export type User$propertiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: Prisma.PropertySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Property
     */
    omit?: Prisma.PropertyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PropertyInclude<ExtArgs> | null;
    where?: Prisma.PropertyWhereInput;
    orderBy?: Prisma.PropertyOrderByWithRelationInput | Prisma.PropertyOrderByWithRelationInput[];
    cursor?: Prisma.PropertyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PropertyScalarFieldEnum | Prisma.PropertyScalarFieldEnum[];
};
/**
 * User.investments
 */
export type User$investmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: Prisma.InvestmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Investment
     */
    omit?: Prisma.InvestmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvestmentInclude<ExtArgs> | null;
    where?: Prisma.InvestmentWhereInput;
    orderBy?: Prisma.InvestmentOrderByWithRelationInput | Prisma.InvestmentOrderByWithRelationInput[];
    cursor?: Prisma.InvestmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestmentScalarFieldEnum | Prisma.InvestmentScalarFieldEnum[];
};
/**
 * User.transactions
 */
export type User$transactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    where?: Prisma.TransactionWhereInput;
    orderBy?: Prisma.TransactionOrderByWithRelationInput | Prisma.TransactionOrderByWithRelationInput[];
    cursor?: Prisma.TransactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransactionScalarFieldEnum | Prisma.TransactionScalarFieldEnum[];
};
/**
 * User.listingDrafts
 */
export type User$listingDraftsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingDraft
     */
    select?: Prisma.ListingDraftSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ListingDraft
     */
    omit?: Prisma.ListingDraftOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ListingDraftInclude<ExtArgs> | null;
    where?: Prisma.ListingDraftWhereInput;
    orderBy?: Prisma.ListingDraftOrderByWithRelationInput | Prisma.ListingDraftOrderByWithRelationInput[];
    cursor?: Prisma.ListingDraftWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ListingDraftScalarFieldEnum | Prisma.ListingDraftScalarFieldEnum[];
};
/**
 * User.notifications
 */
export type User$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
/**
 * User.yieldClaims
 */
export type User$yieldClaimsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YieldClaim
     */
    select?: Prisma.YieldClaimSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the YieldClaim
     */
    omit?: Prisma.YieldClaimOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.YieldClaimInclude<ExtArgs> | null;
    where?: Prisma.YieldClaimWhereInput;
    orderBy?: Prisma.YieldClaimOrderByWithRelationInput | Prisma.YieldClaimOrderByWithRelationInput[];
    cursor?: Prisma.YieldClaimWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.YieldClaimScalarFieldEnum | Prisma.YieldClaimScalarFieldEnum[];
};
/**
 * User.users
 */
export type User$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User without action
 */
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=User.d.ts.map