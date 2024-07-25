type HeaderProps = Readonly<{
  children: React.ReactNode
}>

export function Header({ children }: HeaderProps) {
  return (
    <div className="sticky top-0 z-50 h-24 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {children}
    </div>
  )
}
