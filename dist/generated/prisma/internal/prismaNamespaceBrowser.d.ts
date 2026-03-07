import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Property: "Property";
    readonly Investment: "Investment";
    readonly Transaction: "Transaction";
    readonly YieldDistribution: "YieldDistribution";
    readonly YieldClaim: "YieldClaim";
    readonly ListingDraft: "ListingDraft";
    readonly Notification: "Notification";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly walletAddress: "walletAddress";
    readonly walletType: "walletType";
    readonly username: "username";
    readonly avatarUrl: "avatarUrl";
    readonly country: "country";
    readonly bio: "bio";
    readonly kycStatus: "kycStatus";
    readonly referralCode: "referralCode";
    readonly referredById: "referredById";
    readonly joinDate: "joinDate";
    readonly isActive: "isActive";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const PropertyScalarFieldEnum: {
    readonly id: "id";
    readonly ownerWallet: "ownerWallet";
    readonly name: "name";
    readonly type: "type";
    readonly tokenModel: "tokenModel";
    readonly country: "country";
    readonly city: "city";
    readonly addressFull: "addressFull";
    readonly description: "description";
    readonly yearBuilt: "yearBuilt";
    readonly areaSqft: "areaSqft";
    readonly totalValuation: "totalValuation";
    readonly pricePerShare: "pricePerShare";
    readonly totalShares: "totalShares";
    readonly availableShares: "availableShares";
    readonly yieldPercent: "yieldPercent";
    readonly monthlyRental: "monthlyRental";
    readonly operatingCosts: "operatingCosts";
    readonly managementFeePct: "managementFeePct";
    readonly insuranceCost: "insuranceCost";
    readonly capRate: "capRate";
    readonly occupancyPct: "occupancyPct";
    readonly status: "status";
    readonly mintAddress: "mintAddress";
    readonly metadataUri: "metadataUri";
    readonly collectionAddress: "collectionAddress";
    readonly treasuryPda: "treasuryPda";
    readonly coverImageUrl: "coverImageUrl";
    readonly images: "images";
    readonly isFeatured: "isFeatured";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum];
export declare const InvestmentScalarFieldEnum: {
    readonly id: "id";
    readonly userWallet: "userWallet";
    readonly propertyId: "propertyId";
    readonly sharesOwned: "sharesOwned";
    readonly avgCostPerShare: "avgCostPerShare";
    readonly purchasePrice: "purchasePrice";
    readonly currentValue: "currentValue";
    readonly yieldEarned: "yieldEarned";
    readonly claimableYield: "claimableYield";
    readonly lastYieldClaim: "lastYieldClaim";
    readonly tokenAccount: "tokenAccount";
    readonly investedAt: "investedAt";
};
export type InvestmentScalarFieldEnum = (typeof InvestmentScalarFieldEnum)[keyof typeof InvestmentScalarFieldEnum];
export declare const TransactionScalarFieldEnum: {
    readonly id: "id";
    readonly type: "type";
    readonly userWallet: "userWallet";
    readonly propertyId: "propertyId";
    readonly shares: "shares";
    readonly amountUsdc: "amountUsdc";
    readonly platformFee: "platformFee";
    readonly netAmount: "netAmount";
    readonly txSignature: "txSignature";
    readonly status: "status";
    readonly blockTime: "blockTime";
    readonly createdAt: "createdAt";
};
export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum];
export declare const YieldDistributionScalarFieldEnum: {
    readonly id: "id";
    readonly propertyId: "propertyId";
    readonly periodStart: "periodStart";
    readonly periodEnd: "periodEnd";
    readonly totalRental: "totalRental";
    readonly distributedAt: "distributedAt";
    readonly txSignature: "txSignature";
};
export type YieldDistributionScalarFieldEnum = (typeof YieldDistributionScalarFieldEnum)[keyof typeof YieldDistributionScalarFieldEnum];
export declare const YieldClaimScalarFieldEnum: {
    readonly id: "id";
    readonly userWallet: "userWallet";
    readonly propertyId: "propertyId";
    readonly amountUsdc: "amountUsdc";
    readonly distributionId: "distributionId";
    readonly txSignature: "txSignature";
    readonly claimedAt: "claimedAt";
};
export type YieldClaimScalarFieldEnum = (typeof YieldClaimScalarFieldEnum)[keyof typeof YieldClaimScalarFieldEnum];
export declare const ListingDraftScalarFieldEnum: {
    readonly id: "id";
    readonly userWallet: "userWallet";
    readonly stepCompleted: "stepCompleted";
    readonly step1Data: "step1Data";
    readonly step2Data: "step2Data";
    readonly step3Data: "step3Data";
    readonly step4Data: "step4Data";
    readonly submittedAt: "submittedAt";
    readonly propertyId: "propertyId";
};
export type ListingDraftScalarFieldEnum = (typeof ListingDraftScalarFieldEnum)[keyof typeof ListingDraftScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly userWallet: "userWallet";
    readonly type: "type";
    readonly title: "title";
    readonly body: "body";
    readonly isRead: "isRead";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map