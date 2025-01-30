import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/PageHeader"

export const metadata = {
  title: "About Me",
  description: "Learn more about Emmanuel Kipkurui Ronoh and his educational background.",
}

export default function About() {
  return (
    <div className="section-container">
      <PageHeader title="About Me" description="Passionate about technology and its potential to drive innovation" />
      <div className="mt-8 space-y-8">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-2xl gradient-text">Personal Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed">
              As a motivated and detail-oriented Network and IT professional, I bring a robust educational background in
              Information Technology, complemented by strong certifications in networking and cloud computing. My
              expertise lies in planning, implementing, and maintaining complex LAN/WAN infrastructures, with a keen
              focus on security, reliability, and business continuity. I pride myself on my extensive experience in
              system analysis, network design, and troubleshooting, driven by a passion for leveraging cutting-edge
              technology to propel organizational success.
            </p>
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-2xl gradient-text">Education</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-6">
              <li>
                <h3 className="text-xl font-semibold text-primary">Bachelor of Science in Information Technology</h3>
                <p className="text-muted-foreground">Dedan Kimathi University of Technology (2017–2021)</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><b>Relevant Coursework:</b> Networking, System Analysis, Cloud Computing, Database Systems</li>
<li><b>Capstone Project:</b> Designed a Task Management Mobile App to streamline project workflows.</li>
<li><b>Network Optimization for Search Services:</b> Developed a backend service using Node.js and AWS Lambda, enhancing search accuracy and system efficiency by 25%.</li>
<li><b>Web-Based Inventory Management System:</b> Designed a secure, scalable system with MySQL, optimizing database performance by 30%.</li>
<li><b>LAN/WAN Security Implementation:</b> Conducted security audits and implemented firewall policies for a mid-sized enterprise, ensuring compliance with industry standards.</li>
<li><b>Task Management App:</b> Created an iOS app using Swift, integrating push notifications to improve team collaboration.</li>


                </ul>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-primary">KCSE Certificate</h3>
                <p className="text-muted-foreground">Kericho High School (2013–2016) – Grade: B (Plain)</p>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-primary">KCPE Certificate</h3>
                <p className="text-muted-foreground">Chebigen Primary School (2005–2012) – Marks: 365</p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

