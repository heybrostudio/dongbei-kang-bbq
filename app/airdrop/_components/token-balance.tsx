'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { tokenContract } from '@/lib/const'
import { Info } from 'lucide-react'
import { useEffect, useState } from 'react'
import { toEther } from 'thirdweb'
import { balanceOf } from 'thirdweb/extensions/erc20'
import { useActiveAccount } from 'thirdweb/react'

export function TokenBalance() {
  const account = useActiveAccount()
  const [isPending, setIsPending] = useState(false)
  const [balance, setBalance] = useState<string>()

  useEffect(() => {
    if (!account?.address) return

    const getBalanceOf = async () => {
      setIsPending(true)
      const result = await balanceOf({
        contract: tokenContract,
        address: account?.address!,
      })
      setBalance(toEther(result))
      setIsPending(false)
    }

    getBalanceOf()
  }, [account])

  return (
    <Card>
      <CardHeader className="">
        <CardDescription>Total Balance</CardDescription>
        <CardTitle className="flex items-center gap-4">
          {isPending ? (
            <Skeleton className="h-10 w-1/2" />
          ) : (
            <span className="text-4xl">{balance || 0}</span>
          )}
          <span className="mt-2 text-foreground/80">BBQ</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Info className="h-4 w-4" />
          <span className="text-xs">Only 10,000 per wallet</span>
        </div>
      </CardContent>
    </Card>
  )
}
