import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GitlabIcon as GitHub, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold gradient-text">Emmanuel Kipkurui Ronoh</h3>
              <p className="text-sm text-muted-foreground">
                Network and IT professional passionate about leveraging technology for organizational success.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
                <Link href="/experience" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Experience
                </Link>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
                <Link href="/skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </Link>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Connect</h3>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://github.com/EmmanuelKipkurui" target="_blank" rel="noopener noreferrer">
                    <GitHub className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://www.linkedin.com/in/manuh10801" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="mailto:kipkuruironoh254@gmail.com">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Feel free to reach out for collaborations or opportunities.
              </p>
            </div>
          </div>
        </div>
        <div className="border-t py-6 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Emmanuel Kipkurui Ronoh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

