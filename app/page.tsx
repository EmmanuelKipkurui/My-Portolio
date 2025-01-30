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
            title="Emmanuel Kipkurui Ronoh"
            description="Network and IT professional passionate about leveraging technology for organizational success."
          />
          <div className="flex space-x-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/about">Learn More</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="https://www.linkedin.com/in/manuh10801" target="_blank" rel="noopener noreferrer">
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
    alt="Emmanuel Kipkurui Ronoh"
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
            <h3 className="text-lg font-semibold mb-2">Network Expertise</h3>
            <p className="text-muted-foreground">Specializing in LAN/WAN infrastructure, security, and optimization.</p>
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-2">Cloud Solutions</h3>
            <p className="text-muted-foreground">Proficient in AWS, Google Cloud, and Azure technologies.</p>
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-2">IT Management</h3>
            <p className="text-muted-foreground">Experienced in project management and system administration.</p>
          </CardContent>
        </Card>
        <Card className="card-hover">
  <CardContent className="p-6">
    <h3 className="text-lg font-semibold mb-2">Programming & Development</h3>
    <p className="text-muted-foreground">Skilled in HTML, CSS, JavaScript, React, Flutter, Python, and its libraries.</p>
  </CardContent>
</Card>

<Card className="card-hover">
  <CardContent className="p-6">
    <h3 className="text-lg font-semibold mb-2">Backend Development</h3>
    <p className="text-muted-foreground">Proficient in Node.js and Next.js for building scalable applications.</p>
  </CardContent>
</Card>

<Card className="card-hover">
  <CardContent className="p-6">
    <h3 className="text-lg font-semibold mb-2">Mobile Development</h3>
    <p className="text-muted-foreground">Experienced in Flutter and Swift for cross-platform and iOS app development.</p>
  </CardContent>
</Card>

<Card className="card-hover">
  <CardContent className="p-6">
    <h3 className="text-lg font-semibold mb-2">Database Management</h3>
    <p className="text-muted-foreground">Knowledgeable in MySQL, PostgreSQL, and MongoDB for efficient data handling.</p>
  </CardContent>
</Card>

<Card className="card-hover">
  <CardContent className="p-6">
    <h3 className="text-lg font-semibold mb-2">Version Control</h3>
    <p className="text-muted-foreground">Proficient in Git and GitHub for collaborative development and version tracking.</p>
  </CardContent>
</Card>

<Card className="card-hover">
  <CardContent className="p-6">
    <h3 className="text-lg font-semibold mb-2">System Administration</h3>
    <p className="text-muted-foreground">Experienced in IT support, server management, and software debugging.</p>
  </CardContent>
</Card>

<Card className="card-hover">
  <CardContent className="p-6">
    <h3 className="text-lg font-semibold mb-2">Cybersecurity</h3>
    <p className="text-muted-foreground">Basic knowledge of cybersecurity principles and threat mitigation strategies.</p>
  </CardContent>
</Card>

      </div>
    </div>
  )
}

