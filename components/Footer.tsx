import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GitlabIcon as GitHub, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react"

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold gradient-text">Emmanuel  Ronoh</h3>
              <p className="text-sm text-muted-foreground">
              Network, IT, and Web Development professional passionate about leveraging technology to build dynamic, user-friendly web applications and drive organizational success through innovative digital solutions.              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <nav className="space-y-2">
  {/* First Group */}
  <div className="flex space-x-4">
    <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
      Home
    </Link>
    <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
      About
    </Link>
    <Link href="/experience" className="text-sm text-muted-foreground hover:text-primary transition-colors">
      Experience
    </Link>
  </div>

  {/* Second Group */}
  <div className="flex space-x-4">
    <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
      Projects
    </Link>
    <Link href="/skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">
      Skills
    </Link>
    <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
      Contact Us
    </Link>
  </div>
</nav>

            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Us</h3>
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

              <Button variant="ghost" size="icon" asChild>
  <a href="https://www.instagram.com/_manuhronoh?igsh=MWs2YXFoc2l3bGF6" target="_blank" rel="noopener noreferrer">
    <Instagram className="h-5 w-5" />
    <span className="sr-only">Instagram</span>
  </a>
</Button>

<Button variant="ghost" size="icon" asChild>
  <a href="https://wa.me/254719267759" target="_blank" rel="noopener noreferrer">
    <MessageCircle className="h-5 w-5" />
    <span className="sr-only">WhatsApp</span>
  </a>
</Button>

<Button variant="ghost" size="icon" asChild>
  <a href="https://www.tiktok.com/@_manuhronoh?_t=ZM-8tWNkWAdPPi&_r=1" target="_blank" rel="noopener noreferrer">
    <TikTokIcon />
    <span className="sr-only">TikTok</span>
  </a>
</Button>

              <p className="text-sm text-muted-foreground">
                Feel free to reach out for collaborations or opportunities.
              </p>
            </div>
          </div>
        </div>
        <div className="border-t py-6 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Emmanuel Ronoh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

