import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/PageHeader"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Projects",
  description: "Discover the projects Emmanuel Kipkurui Ronoh has worked on in networking and IT.",
}

const projects = [
  {
    title: "Network Optimization for Search Services",
    description:
      "Developed a backend service using Node.js and AWS Lambda, enhancing search accuracy and system efficiency by 25%.",
    link: "#",
  },
  {
    title: "Web-Based Inventory Management System",
    description: "Designed a secure, scalable system with MySQL and optimized database performance by 30%.",
    link: "#",
  },
  {
    title: "LAN/WAN Security Implementation",
    description:
      "Conducted security audits and implemented firewall policies for a mid-sized enterprise, ensuring compliance with industry standards.",
    link: "#",
  },
  {
    title: "Task Management App",
    description: "Designed an iOS app using Swift, integrating push notifications to improve team collaboration.",
    link: "#",
  },
]

export default function Projects() {
  return (
    <div className="section-container">
      <PageHeader
        title="Projects"
        description="A showcase of my work in networking, cloud computing, and IT management"
      />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="card-hover">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{project.description}</p>
              <Button asChild variant="outline">
                <Link href={project.link}>Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

