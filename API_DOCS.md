# SolanaApp Backend API Docs

## Base URL
- Local: `http://localhost:3000`

## Router Mounts
- `app.use('/user', userRouter)`
- `app.use('/property', propertyRouter)`
- `app.use('/api', tradingRouter)`

## Auth
Most endpoints require:

`Authorization: Bearer <jwt>`

JWT is obtained from `POST /user/signin`.

## Conventions
- Big integer money fields are commonly returned as strings, e.g. `"123456"`.
- For GET routes, use query params (not request body).
- Some transaction endpoints return `unsignedTx` (base64 serialized transaction) to be signed by the wallet.

---

## 1) User / Auth Endpoints

### POST `/user/signin`
Verify Solana signature and return JWT.

Request:
```json
{
  "publicKey": "7Yh...walletPubkey...9A",
  "signature": "<base64-signature-or-byte-array>"
}
```

Success response:
```json
{
  "token": "<jwt-token>"
}
```

Error examples:
```json
{ "message": "Missing publicKey" }
```
```json
{ "message": "Incorrect signature" }
```

### PUT `/user/profile`
Update profile fields.

Request:
```json
{
  "username": "alice",
  "country": "UAE"
}
```

Success response:
```json
{
  "message": "Profile updated successfully",
  "user": {
    "id": "cm...",
    "walletAddress": "7Yh...",
    "username": "alice",
    "country": "UAE"
  }
}
```

### GET `/user/profile`
Fetch authenticated user profile.

Success response:
```json
{
  "message": "Profile fetched successfully",
  "user": {
    "id": "cm...",
    "walletAddress": "7Yh...",
    "walletType": null,
    "username": "alice",
    "avatarUrl": null,
    "country": "UAE",
    "bio": null,
    "kycStatus": "none",
    "referralCode": null,
    "referredById": null,
    "joinDate": "2026-03-08T10:20:00.000Z",
    "isActive": true
  }
}
```

---

## 2) Property Listing Draft & Mint Endpoints

### GET `/property/listings/drafts`
List drafts with filters and pagination.

Query params:
- `submitted=true|false`
- `approved=true|false`
- `stepCompletedMin=<number>`
- `stepCompletedMax=<number>`
- `page=<number>` (default `1`)
- `limit=<number>` (default `10`, max `50`)

Sample:
`/property/listings/drafts?submitted=false&page=1&limit=10`

Success response:
```json
{
  "message": "Drafts fetched successfully",
  "data": [
    {
      "id": "cm...",
      "userWallet": "7Yh...",
      "stepCompleted": 2,
      "submittedAt": null,
      "propertyId": null,
      "workflowStatus": "not_submitted"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "totalPages": 1
  }
}
```

### GET `/property/listings/drafts/submitted`
List submitted drafts.

### GET `/property/listings/drafts/not-submitted`
List non-submitted drafts.

### GET `/property/listings/drafts/:draftId`
Get one draft by ID (must belong to auth wallet).

### GET `/property/properties`
List properties with optional filters.

Query params:
- `status`
- `country`
- `city`
- `type=Residential|Commercial|Industrial|MixedUse`
- `page`
- `limit`

### GET `/property/properties/:propertyId`
Get single property.

### POST `/property/listings/draft`
Create step-1 draft.

Request:
```json
{
  "step": 1,
  "basicInfo": {
    "name": "Palm Tower",
    "country": "UAE",
    "city": "Dubai",
    "type": "Residential"
  }
}
```

Response:
```json
{
  "message": "Draft created",
  "draftId": "cm...",
  "draft": {
    "id": "cm...",
    "stepCompleted": 1
  }
}
```

### PATCH `/property/listings/:draftId`
Save step 2/3/4 data.

Request examples:

Step 2:
```json
{
  "step": 2,
  "tokenomics": {
    "tokenModel": "spl",
    "totalShares": 10000
  }
}
```

Step 3:
```json
{
  "step": 3,
  "mediaUploads": {
    "images": ["https://ik.imagekit.io/.../1.jpg"],
    "coverImage": "https://ik.imagekit.io/.../cover.jpg"
  }
}
```

Step 4:
```json
{
  "step": 4,
  "legalDocs": {
    "titleDeedUrl": "https://..."
  }
}
```

### POST `/property/upload/image`
Upload image (`multipart/form-data`, field name: `file`).

Response:
```json
{
  "message": "Image uploaded",
  "imageUrl": "https://ik.imagekit.io/.../img.jpg",
  "fileId": "file_xxx"
}
```

### POST `/property/listings/:draftId/submit`
Submit completed draft for review.

Response:
```json
{
  "message": "Draft submitted for admin review",
  "draft": {
    "id": "cm...",
    "submittedAt": "2026-03-08T10:40:00.000Z"
  }
}
```

### POST `/property/mint/property`
Mint property token + metadata from submitted draft.

Request:
```json
{
  "draftId": "cm..."
}
```

Response:
```json
{
  "message": "Mint completed",
  "mintAddress": "7m1...",
  "metadataUri": "https://ik.imagekit.io/.../property-metadata-cm....json",
  "treasuryPDA": "9xA...",
  "txSignature": "5Fv...",
  "property": {
    "id": "cm...",
    "status": "live"
  }
}
```

---

## 3) Trading Endpoints (Buy / Sell / Yield)

## B) Buy Shares Flow (Correct Workflow)
1. App calls quote:
- `GET /api/properties/:id/quote?shares=<n>`
2. App calls initiate:
- `POST /api/transactions/initiate-buy`
3. Wallet signs/sends `unsignedTx`.
4. App confirms:
- `POST /api/transactions/confirm` with `side: "buy"`

### GET `/api/properties/:id/quote`
Query:
- `shares` (required, integer > 0)

Sample request:
`GET /api/properties/cm_prop_1/quote?shares=25`

Sample response:
```json
{
  "pricePerShare": 120,
  "platformFeeRate": 200,
  "usdcRequired": "3000",
  "platformFee": "60",
  "availableShares": 5000
}
```

### POST `/api/transactions/initiate-buy`
Request:
```json
{
  "propertyId": "cm_prop_1",
  "shares": 25,
  "walletAddress": "7Yh..."
}
```

Response:
```json
{
  "escrowPDA": "9pE...",
  "usdcAmount": "3000",
  "platformFee": "60",
  "unsignedTx": "AQABAgM...base64..."
}
```

### POST `/api/transactions/confirm`
Use this for both buy and sell confirmation.

Request (buy):
```json
{
  "txSignature": "5Fv...",
  "propertyId": "cm_prop_1",
  "shares": 25,
  "side": "buy"
}
```

Response:
```json
{
  "success": true,
  "investmentRecord": {
    "id": "cm_inv_1",
    "userWallet": "7Yh...",
    "propertyId": "cm_prop_1",
    "sharesOwned": 125
  },
  "updatedInvestment": {
    "id": "cm_inv_1",
    "sharesOwned": 125
  },
  "tokenAccountAddress": "G7n..."
}
```

---

## C) Sell Shares Flow (Correct Workflow)
1. App calls sell quote:
- `GET /api/investments/:propertyId/sell-quote?shares=<n>&walletAddress=<wallet>`
2. App calls initiate sell:
- `POST /api/transactions/initiate-sell`
3. Wallet signs/sends `unsignedTx`.
4. App confirms sell:
- `POST /api/transactions/confirm` with `side: "sell"`

Important correction:
- Your original flow showed body on GET; in HTTP/Express this endpoint uses query params.

### GET `/api/investments/:propertyId/sell-quote`
Sample request:
`GET /api/investments/cm_prop_1/sell-quote?shares=10&walletAddress=7Yh...`

Sample response:
```json
{
  "proceedsUsdc": "1200",
  "feeAmount": "24",
  "netProceeds": "1176",
  "pnl": "176"
}
```

### POST `/api/transactions/initiate-sell`
Request:
```json
{
  "propertyId": "cm_prop_1",
  "shares": 10,
  "walletAddress": "7Yh..."
}
```

Response:
```json
{
  "unsignedTx": "AQABAgM...base64..."
}
```

### POST `/api/transactions/confirm`
Request (sell):
```json
{
  "txSignature": "4Zd...",
  "propertyId": "cm_prop_1",
  "shares": 10,
  "side": "sell"
}
```

Sample response:
```json
{
  "success": true,
  "investmentRecord": {
    "id": "cm_inv_1",
    "sharesOwned": 115
  },
  "updatedInvestment": {
    "id": "cm_inv_1",
    "sharesOwned": 115
  },
  "tokenAccountAddress": "G7n..."
}
```

---

## D) Claim Yield Flow (Correct Workflow)
1. App loads claimable:
- `GET /api/yield/claimable?wallet=<wallet>`
2. App initiates claim transaction:
- `POST /api/yield/claim`
3. Wallet signs/sends `unsignedTx`.
4. App confirms:
- `POST /api/yield/confirm-claim`

### GET `/api/yield/claimable`
Sample request:
`GET /api/yield/claimable?wallet=7Yh...`

Sample response:
```json
[
  {
    "propertyId": "cm_prop_1",
    "distributionId": "cm_dist_1",
    "amount": "950"
  },
  {
    "propertyId": "cm_prop_2",
    "distributionId": "cm_dist_9",
    "amount": "450"
  }
]
```

### POST `/api/yield/claim`
Request:
```json
{
  "walletAddress": "7Yh...",
  "claims": [
    { "propertyId": "cm_prop_1", "distributionId": "cm_dist_1" },
    { "propertyId": "cm_prop_2", "distributionId": "cm_dist_9" }
  ]
}
```

Response:
```json
{
  "unsignedTx": "AQABAgM...base64...",
  "totalClaimable": "1400"
}
```

### POST `/api/yield/confirm-claim`
Request:
```json
{
  "txSignature": "2mF...",
  "claims": [
    { "propertyId": "cm_prop_1", "distributionId": "cm_dist_1" },
    { "propertyId": "cm_prop_2", "distributionId": "cm_dist_9" }
  ]
}
```

Response:
```json
{
  "totalClaimed": "1400",
  "updatedBalance": "300"
}
```

---

## Root Endpoint

### GET `/`
Response:
```json
{
  "message": "solana is great"
}
```

---

## Common Error Responses

### 401 Unauthorized
```json
{ "message": "Unauthorized" }
```

### 403 Forbidden
```json
{ "message": "walletAddress does not match authenticated user" }
```

### 400 Validation error
```json
{ "message": "propertyId, shares, walletAddress are required" }
```

### 500 Server error
```json
{ "message": "Failed to initiate buy transaction" }
```

---

## Environment Variables Used by Current Backend

- `JWT_SECRET`
- `DATABASE_URL`
- `SOLANA_RPC_URL`
- `PLATFORM_FEE_BPS` (default `200` = 2%)
- `ESCROW_PROGRAM_ID`
- `PLATFORM_SIGNER_SECRET` (used by property mint flow)
- `IMAGEKIT_PRIVATE_KEY`
- `METADATA_EXTERNAL_URL` (optional for metadata JSON)

---

## Notes for Frontend Integration

- Always include JWT for protected routes.
- For buy/sell confirm, this backend expects `propertyId`, `shares`, and optional `side` (defaults to buy).
- `unsignedTx` is currently memo-based for intent. Replace with real escrow/token program instructions later without changing endpoint contracts.
