import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { tokenContract } from '@/lib/server'
import { PartyPopper } from 'lucide-react'
import { toEther } from 'thirdweb'
import { totalSupply as getTotalSupply } from 'thirdweb/extensions/erc20'

export const TokenSupply = async () => {
  const totalSupply = await getTotalSupply({
    contract: tokenContract,
  })

  return (
    <Card>
      <CardHeader className="">
        <CardDescription>Total Supply</CardDescription>
        <CardTitle className="flex items-center gap-4">
          <span className="text-4xl">
            {totalSupply ? toEther(totalSupply) : '-'}
          </span>
          <span className="mt-2 text-foreground/80">BBQ</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 text-muted-foreground">
          <PartyPopper className="h-4 w-4" />
          <span className="text-xs">July 20, 12:00 Claim begins</span>
        </div>
      </CardContent>
    </Card>
  )
}

export const TokenSupplySkeleton = () => {
  return (
    <Card>
      <CardHeader className="">
        <CardDescription>Total Supply</CardDescription>
        <CardTitle className="flex items-center gap-4">
          <Skeleton className="h-10 w-1/2" />
          <span className="mt-2 text-foreground/80">BBQ</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 text-muted-foreground">
          <PartyPopper className="h-4 w-4" />
          <span className="text-xs">July 20, 12:00 Claim begins</span>
        </div>
      </CardContent>
    </Card>
  )
}
