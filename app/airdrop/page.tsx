import { TokenBalance } from '@/app/airdrop/_components/token-balance'
import { TokenInfo } from '@/app/airdrop/_components/token-info'
import {
  TokenSupply,
  TokenSupplySkeleton,
} from '@/app/airdrop/_components/token-supply'
import { Suspense } from 'react'

type TokenPageProps = Readonly<{
  children: React.ReactNode
}>

export default function AirdropPage({ children }: TokenPageProps) {
  return (
    <div className="m-auto max-w-5xl p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <TokenInfo />
        <Suspense fallback={<TokenSupplySkeleton />}>
          <TokenSupply />
        </Suspense>

        <TokenBalance />
      </div>
    </div>
  )
}
