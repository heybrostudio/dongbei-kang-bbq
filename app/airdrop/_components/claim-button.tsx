import { Button } from '@/components/ui/button'
import { client, tokenContract } from '@/lib/const'
import { Loader } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'
import { sendTransaction, waitForReceipt } from 'thirdweb'
import { sepolia } from 'thirdweb/chains'
import { claimTo } from 'thirdweb/extensions/erc20'
import { useActiveAccount } from 'thirdweb/react'

export function ClaimButton() {
  const router = useRouter()
  const account = useActiveAccount()
  const [isClaiming, setIsClaiming] = useState(false)

  async function handleClaim() {
    if (!account?.address) return

    setIsClaiming(true)

    const transaction = claimTo({
      contract: tokenContract,
      to: account.address,
      quantity: '10000',
    })

    try {
      const { transactionHash } = await sendTransaction({
        transaction,
        account,
      })

      if (transactionHash) {
        await waitForReceipt({
          client,
          transactionHash,
          chain: sepolia,
        })

        toast.success('Successfully claimed 10,000 BBQ')
        router.refresh()
      }
    } catch (error) {
      console.log(error)
      toast.error('An error occurred while claiming')
    } finally {
      setIsClaiming(false)
    }
  }
  return account?.address ? (
    <Button
      disabled={isClaiming}
      className="w-full min-w-28 sm:w-auto"
      onClick={handleClaim}
    >
      {isClaiming ? <Loader className="h-4 w-4 animate-spin" /> : 'Claim BBQ'}
    </Button>
  ) : null
}
