import Link from "next/link"
import { ModeToggle } from "./ModeToggle"
import { Button } from "./ui/button"

const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-border/40">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold gradient-text">
            ER
          </Link>
          <div className="hidden md:flex space-x-1">
            <Button variant="ghost" asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/about">About</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/experience">Experience</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/projects">Projects</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/skills">Skills</Link>
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Button asChild className="hidden md:inline-flex">
              <Link href="/contact"  rel="noopener noreferrer">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

