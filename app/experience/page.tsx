import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/PageHeader"
import { format } from "date-fns"

export const metadata = {
  title: "Work Experience",
  description: "Explore Emmanuel Kipkurui Ronoh's professional experience and internships.",
}

const experiences = [
  {
    title: "ICT Intern",
    company: "Digitalent Internship Programme, ICT Authority",
    startDate: new Date(2024, 0, 1),
    endDate: new Date(2024, 11, 31),
    responsibilities: [
      "Planned and implemented secure network solutions, ensuring zero downtime for critical operations.",
      "Designed and maintained network diagrams and disaster recovery documentation.",
      "Researched and evaluated emerging technologies to improve system performance and reliability.",
      "Developed access control policies to protect data integrity and confidentiality.",
    ],
  },
  {
    title: "IT Support Intern",
    company: "Nakuru High Court",
    startDate: new Date(2020, 0, 1),
    endDate: new Date(2020, 2, 31),
    responsibilities: [
      "Provided IT support to over 50 staff, troubleshooting and resolving network-related issues.",
      "Assisted in database system management and ensured compliance with regulatory standards.",
      "Monitored system health and implemented updates, reducing downtime and enhancing performance.",
    ],
  },
]

export default function Experience() {
  return (
    <div className="section-container">
      <PageHeader title="Work Experience" description="My professional journey in IT has evolved into a passion for web development, creating intuitive and high-performing digital experiences." />
      <div className="mt-8 space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="card-hover">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">{exp.title}</CardTitle>
              <p className="text-lg text-muted-foreground">{exp.company}</p>
              <p className="text-sm text-muted-foreground">
                {format(exp.startDate, "MMMM yyyy")} - {format(exp.endDate, "MMMM yyyy")}
              </p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex}>{resp}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

