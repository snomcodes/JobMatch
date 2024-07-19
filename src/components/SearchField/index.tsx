import { Input } from '../ui/input'
import { Button } from '../ui/button'

export function SearchField() {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-neutral-300 to-neutral-500">
      <section className="w-full py-32 md:py-48">
        <div>
          <Input type="text" placeholder="Enter a location.." />
          <Button>Search</Button>
        </div>
      </section>
    </div>
  )
}
