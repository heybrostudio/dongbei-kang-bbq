import { Button } from '@/components/ui/button'
import { ChefHat } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold">Welcome to Dongbei Kang BBQ!</h2>
      <Button className="gap-2">
        <ChefHat className="h-4 w-4" />
        BBQ
      </Button>
    </div>
  )
}
