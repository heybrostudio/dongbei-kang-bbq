'use client'

import { NavItem } from '@/components/nav/nav-item'
import { usePathname } from 'next/navigation'

const NavList = [
  {
    link: '/',
    label: 'Home',
  },
  {
    link: '/nfts',
    label: 'BBQ NFTs',
  },
  {
    link: '/staking',
    label: 'Staking NFTs',
  },
  {
    link: '/my',
    label: 'My BBQ',
  },
  {
    link: '/airdrop',
    label: 'Airdrop',
  },
]

export function Nav() {
  const pathname = usePathname()

  return (
    <nav className="flex h-full items-center gap-4 lg:gap-8">
      {NavList.map((nav) => {
        return (
          <NavItem
            key={nav.link}
            label={nav.label}
            link={nav.link}
            active={pathname === nav.link}
          />
        )
      })}
    </nav>
  )
}
