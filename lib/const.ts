import { createThirdwebClient, getContract } from 'thirdweb'
import { sepolia } from 'thirdweb/chains'
import { createWallet, walletConnect } from 'thirdweb/wallets'

export const TOKEN_CONTRACT_ADDRESS =
  '0x020d168d6F6fb0B103047001C8b479d9DC6f8506'

export const wallets = [
  createWallet('io.metamask'),
  createWallet('com.coinbase.wallet'),
  walletConnect(),
]

export const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID!,
})
export const tokenContract = getContract({
  client,
  chain: sepolia,
  address: TOKEN_CONTRACT_ADDRESS,
})
