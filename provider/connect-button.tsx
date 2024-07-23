'use client'

import { client, wallets } from '@/lib/const'
import { ConnectButton } from 'thirdweb/react'

export function ConnectButtonProvider() {
  return (
    <ConnectButton
      client={client}
      wallets={wallets}
      theme="light"
      connectButton={{ label: 'Come in' }}
      connectModal={{
        size: 'compact',
        title: 'Connect your wallet',
        titleIcon: '',
        welcomeScreen: {
          title: 'Welcome to Dongbei Kang BBQ',
          subtitle: "There's nothing that a BBQ can't solve.",
        },
        showThirdwebBranding: false,
      }}
    />
  )
}
