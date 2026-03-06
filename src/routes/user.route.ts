import { Router } from 'express'
import nacl from "tweetnacl";
import { Connection, PublicKey, Transaction } from "@solana/web3.js";

const userRouter = Router()


userRouter.post('/login', (req: any, res: any) => {

    const { walletAddress, signMessage } = req.body;
    console.log(walletAddress)
    console.log(signMessage)

    // signin logic 



    // signin logic 



    res.status(200).json({ 'message': 'wallet created' })

})

export default userRouter