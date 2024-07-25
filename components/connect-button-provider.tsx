'use client'

import { client, wallets } from '@/lib/const'
import { useTheme } from 'next-themes'
import { ConnectButton, type ConnectButtonProps } from 'thirdweb/react'

export function ConnectButtonProvider() {
  const { theme } = useTheme()

  return (
    <div suppressHydrationWarning>
      <ConnectButton
        client={client}
        wallets={wallets}
        theme={theme as ConnectButtonProps['theme']}
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
    </div>
  )
}
