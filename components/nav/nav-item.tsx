import { cn } from '@/lib/utils'
import Link from 'next/link'

type NavItemProps = {
  link: string
  label: string
  active?: boolean
}

export function NavItem({ link, label, active }: NavItemProps) {
  return (
    <Link
      href={link}
      className={cn(
        'text-foreground/60 transition-colors hover:text-foreground/80',
        active && 'text-foreground'
      )}
    >
      {label}
    </Link>
  )
}
