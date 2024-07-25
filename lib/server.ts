import { TOKEN_CONTRACT_ADDRESS } from '@/lib/const'
import { createThirdwebClient, getContract } from 'thirdweb'
import { sepolia } from 'thirdweb/chains'

export const client = createThirdwebClient({
  secretKey: process.env.THIRDWEB_SECRET_ID!,
})

export const tokenContract = getContract({
  client,
  chain: sepolia,
  address: TOKEN_CONTRACT_ADDRESS,
})
