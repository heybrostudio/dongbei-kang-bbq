import { createThirdwebClient } from 'thirdweb'
import { createWallet, walletConnect } from 'thirdweb/wallets'

export const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID!,
})
export const wallets = [
  createWallet('io.metamask'),
  createWallet('com.coinbase.wallet'),
  walletConnect(),
]
