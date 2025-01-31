import { Suspense } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PageHeader } from "@/components/PageHeader"
import { Card, CardContent } from "@/components/ui/card"
import { GitlabIcon as GitHub, Linkedin, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="section-container">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
          <PageHeader
            title="Emmanuel  Ronoh"
            description="Web Developer and UI/UX Enthusiast passionate about creating innovative digital experiences that drive business success."
          />
          <div className="flex space-x-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/about">Learn More</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact" rel="noopener noreferrer">
                Connect
              </Link>
            </Button>
          </div>
          <div className="flex space-x-4">
            <Link href="https://github.com/EmmanuelKipkurui" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <GitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/manuh10801" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:kipkuruironoh254@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
        <Suspense fallback={<div className="w-64 h-64 bg-muted rounded-full animate-pulse" />}>
  <Image
    src="/profile.jpg"
    alt="Emmanuel  Ronoh"
    width={256}
    height={256}
    className="rounded-full border-4 border-primary shadow-2xl"
    priority
  />
</Suspense>

        </div>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card className="card-hover">
  <CardContent className="p-6">
    <h3 className="text-lg font-semibold mb-2">Frontend Development</h3>
    <p className="text-muted-foreground">
      Skilled in HTML, CSS, JavaScript, React, Vue.js, Bootstrap, and Tailwind CSS.
    </p>
  </CardContent>
</Card>

<Card className="card-hover">
  <CardContent className="p-6">
    <h3 className="text-lg font-semibold mb-2">UI/UX Design</h3>
    <p className="text-muted-foreground">
      Experienced in Figma, Adobe XD, wireframing, and prototyping.
    </p>
  </CardContent>
</Card>

<Card className="card-hover">
  <CardContent className="p-6">
    <h3 className="text-lg font-semibold mb-2">Backend Integration</h3>
    <p className="text-muted-foreground">
      Proficient in Node.js and RESTful APIs for seamless data communication.
    </p>
  </CardContent>
</Card>

<Card className="card-hover">
  <CardContent className="p-6">
    <h3 className="text-lg font-semibold mb-2">Database Management</h3>
    <p className="text-muted-foreground">
      Experienced in MySQL for efficient data storage and retrieval.
    </p>
  </CardContent>
</Card>

<Card className="card-hover">
  <CardContent className="p-6">
    <h3 className="text-lg font-semibold mb-2">Development Tools</h3>
    <p className="text-muted-foreground">
      Proficient in Git, GitHub, VS Code, and Chrome DevTools for efficient coding and debugging.
    </p>
  </CardContent>
</Card>

<Card className="card-hover">
  <CardContent className="p-6">
    <h3 className="text-lg font-semibold mb-2">Other Skills</h3>
    <p className="text-muted-foreground">
      Strong knowledge of responsive design, cross-browser compatibility, and web performance optimization.
    </p>
  </CardContent>
</Card>


      </div>
    </div>
  )
}

