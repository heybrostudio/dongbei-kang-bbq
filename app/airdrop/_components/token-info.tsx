'use client'

import { ClaimButton } from '@/app/airdrop/_components/claim-button'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { client, tokenContract } from '@/lib/const'
import { useEffect, useState } from 'react'
import { fromGwei, hexToBigInt, toEther, toTokens } from 'thirdweb'
import { getContractMetadata } from 'thirdweb/extensions/common'
import { MediaRenderer } from 'thirdweb/react'

type Metadata = {
  name: string
  symbol: string
  description: string
  image: string
}

export function TokenInfoSkeleton() {
  return (
    <Card className="flex flex-col sm:col-span-2 sm:flex-row sm:items-center">
      <div className="flex-shrink-0 p-6 pb-0 sm:pb-6 sm:pr-2">
        <Skeleton className="h-32 w-32" />
      </div>
      <CardHeader className="sm:flex-1">
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-5 w-5/6" />
        <Skeleton className="h-5 w-1/4" />
      </CardHeader>
    </Card>
  )
}

export function TokenInfo() {
  const [isPending, setIsPending] = useState(true)
  const [metadata, setMetadata] = useState<Metadata>()

  useEffect(() => {
    getContractMetadata({ contract: tokenContract }).then((metadata) => {
      setMetadata(metadata as Metadata)
      setIsPending(false)
    })
  }, [])

  return isPending ? (
    <TokenInfoSkeleton />
  ) : (
    <Card className="flex flex-col sm:col-span-2 sm:flex-row sm:items-center">
      <div className="flex-shrink-0 rounded-sm p-6 pb-0 sm:pb-6 sm:pr-2">
        <div className="h-32 w-32">
          <MediaRenderer
            client={client}
            src={metadata?.image}
            className="h-full w-full rounded-md"
          />
        </div>
      </div>
      <CardHeader>
        <CardTitle>{metadata?.name}</CardTitle>
        <CardDescription className="leading-relaxed">
          {metadata?.description}
        </CardDescription>
        <div className="pt-2 sm:flex">
          <ClaimButton />
        </div>
      </CardHeader>
    </Card>
  )
}
