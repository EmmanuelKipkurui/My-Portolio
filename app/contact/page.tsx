import { PageHeader } from "@/components/PageHeader"
import { ContactForm } from "@/components/ContactForm"
import { Card, CardContent } from "@/components/ui/card"
import { GitlabIcon as GitHub, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export const metadata = {
  title: "Contact Me",
  description: "Get in touch with Emmanuel Kipkurui Ronoh for networking and IT opportunities.",
}

export default function Contact() {
  return (
    <div className="section-container">
      <PageHeader title="Contact Me" description="Let's connect and explore how we can work together." />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="card-hover">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 gradient-text">Get in Touch</h2>
            <ContactForm />
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 gradient-text">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <a href="mailto:kipkuruironoh254@gmail.com" className="text-primary hover:underline">
                  kipkuruironoh254@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
  <Phone className="h-5 w-5 text-muted-foreground" />
  <a href="tel:+254719267759" className="hover:underline">+254719267759</a>
</div>

<div className="flex items-center space-x-3">
  <MapPin className="h-5 w-5 text-muted-foreground" />
  <a
    href="https://www.google.com/maps/search/?api=1&query=W2GW+9J+Thika"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline text-blue-600"
  >
    P.O. Box 314-01000, Thika
  </a>
</div>

              <div className="flex items-center space-x-4 mt-6">
                <a
                  href="https://github.com/EmmanuelKipkurui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <GitHub className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/manuh10801"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

