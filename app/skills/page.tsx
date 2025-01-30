import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/PageHeader"
import { Skills } from "@/components/Skills"

export const metadata = {
  title: "Skills & Certifications",
  description: "Explore Emmanuel Kipkurui Ronoh's technical skills and professional certifications.",
}

const skillsData = [
  {
    category: "Networking",
    skills: ["TCP/IP", "VLAN", "VPN", "SNMP", "IP Telephony", "Firewall Appliances", "Routing Protocols (BGP, OSPF)"],
  },
  {
    category: "Cloud Technologies",
    skills: ["AWS (Lambda, S3, DynamoDB)", "Google Cloud", "Microsoft Azure"],
  },
  {
    category: "IT Management",
    skills: ["Project Management", "System Administration", "IT Support", "Network Security"],
  },
]

const certifications = [
  "Cisco Certified Network Associate (CCNA) (2023)",
  "NDG Linux Essentials (2024) – Linux Basics, Command Line Proficiency, System Administration",
  "AWS Cloud Practitioner Essentials (2023) – Cloud Computing Fundamentals, AWS Services",
  "Google IT Support Professional Certificate (2023) – Troubleshooting, Networking, Systems Administration",
  "Introduction to Cybersecurity Badge (2024) – Cybersecurity Fundamentals, Risk Management, Threat Analysis",
]

export default function SkillsPage() {
  return (
    <div className="section-container">
      <PageHeader
        title="Skills & Certifications"
        description="My technical expertise and professional qualifications"
      />
      <div className="mt-8 space-y-8">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-2xl gradient-text">Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {skillsData.map((skillSet, index) => (
                <Skills key={index} title={skillSet.category} skills={skillSet.skills} />
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-2xl gradient-text">Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              {certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

