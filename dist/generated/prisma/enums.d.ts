export declare const WalletType: {
    readonly phantom: "phantom";
    readonly solflare: "solflare";
};
export type WalletType = (typeof WalletType)[keyof typeof WalletType];
export declare const KycStatus: {
    readonly none: "none";
    readonly pending: "pending";
    readonly approved: "approved";
    readonly rejected: "rejected";
};
export type KycStatus = (typeof KycStatus)[keyof typeof KycStatus];
export declare const PropertyType: {
    readonly Residential: "Residential";
    readonly Commercial: "Commercial";
    readonly Industrial: "Industrial";
    readonly MixedUse: "MixedUse";
};
export type PropertyType = (typeof PropertyType)[keyof typeof PropertyType];
export declare const TokenModel: {
    readonly nft: "nft";
    readonly spl: "spl";
};
export type TokenModel = (typeof TokenModel)[keyof typeof TokenModel];
export declare const PropertyStatus: {
    readonly draft: "draft";
    readonly pending: "pending";
    readonly approved: "approved";
    readonly rejected: "rejected";
    readonly live: "live";
    readonly soldOut: "soldOut";
};
export type PropertyStatus = (typeof PropertyStatus)[keyof typeof PropertyStatus];
export declare const TransactionType: {
    readonly buy: "buy";
    readonly sell: "sell";
    readonly yieldClaim: "yieldClaim";
    readonly listFee: "listFee";
    readonly transfer: "transfer";
};
export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType];
export declare const TransactionStatus: {
    readonly pending: "pending";
    readonly confirmed: "confirmed";
    readonly failed: "failed";
};
export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus];
export declare const NotificationType: {
    readonly yieldReady: "yieldReady";
    readonly buyConfirmed: "buyConfirmed";
    readonly sellConfirmed: "sellConfirmed";
    readonly listingApproved: "listingApproved";
    readonly listingRejected: "listingRejected";
};
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];
//# sourceMappingURL=enums.d.ts.map