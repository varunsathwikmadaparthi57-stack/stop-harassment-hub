import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Target, Eye, Heart, Mail, Phone, LinkedinIcon, Award, Users, BookOpen } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Founder & Cybersecurity Expert",
      experience: "15+ years",
      expertise: ["Cybersecurity", "Digital Forensics", "Policy Making"],
      email: "rajesh@stopharassment.org",
      phone: "+91 98765 43210",
      bio: "Former Additional Director at National Cyber Security Coordinator, Dr. Kumar has been instrumental in shaping India's cybersecurity policies.",
      achievements: [
        "PhD in Computer Science from IIT Delhi",
        "Former CERT-In Advisory Board Member",
        "Author of 'Digital Safety for All'"
      ]
    },
    {
      name: "Ms. Priya Sharma",
      role: "Digital Rights Advocate & Legal Expert",
      experience: "12+ years",
      expertise: ["Digital Rights", "Cyber Law", "Consumer Protection"],
      email: "priya@stopharassment.org",
      phone: "+91 98765 43211",
      bio: "Senior advocate practicing in Supreme Court of India, specializing in cyber crimes and digital rights protection.",
      achievements: [
        "LLM in Cyber Law from National Law School",
        "Legal consultant to Ministry of Electronics",
        "Represented 500+ cybercrime victims"
      ]
    },
    {
      name: "Mr. Arjun Patel",
      role: "Technology & Research Head", 
      experience: "10+ years",
      expertise: ["App Security", "Data Analysis", "Research"],
      email: "arjun@stopharassment.org",
      phone: "+91 98765 43212",
      bio: "Former Principal Security Engineer at major tech companies, now dedicated to researching and exposing harmful applications.",
      achievements: [
        "M.Tech from IIT Bombay",
        "Discovered 50+ fake loan apps",
        "Speaker at international security conferences"
      ]
    },
    {
      name: "Ms. Kavya Singh",
      role: "Counselor & Mental Health Support Lead",
      experience: "8+ years",
      expertise: ["Clinical Psychology", "Crisis Intervention", "Trauma Counseling"],
      email: "kavya@stopharassment.org",
      phone: "+91 98765 43213",
      bio: "Licensed clinical psychologist specializing in digital harassment trauma and suicide prevention.",
      achievements: [
        "PhD in Clinical Psychology",
        "Certified Crisis Intervention Specialist",
        "Helped 1000+ harassment victims"
      ]
    },
    {
      name: "Mr. Vikram Reddy",
      role: "Community Outreach & Education Director",
      experience: "6+ years",
      expertise: ["Public Speaking", "Curriculum Development", "Social Media"],
      email: "vikram@stopharassment.org", 
      phone: "+91 98765 43214",
      bio: "Former educator turned digital safety advocate, focusing on creating awareness programs for schools and communities.",
      achievements: [
        "M.Ed from Jamia Millia Islamia",
        "Trained 10,000+ students across India",
        "Developed national digital safety curriculum"
      ]
    },
    {
      name: "Ms. Anita Gupta",
      role: "Operations & Support Manager",
      experience: "7+ years", 
      expertise: ["Project Management", "Victim Support", "NGO Operations"],
      email: "anita@stopharassment.org",
      phone: "+91 98765 43215",
      bio: "Experienced in managing large-scale social impact projects and coordinating support services for victims.",
      achievements: [
        "MBA in Social Entrepreneurship",
        "Managed 20+ awareness campaigns",
        "Coordinated with 100+ partner organizations"
      ]
    }
  ];

  const organizationStats = [
    { label: "Cases Handled", value: "5,000+", icon: Users },
    { label: "Awareness Sessions", value: "500+", icon: BookOpen },
    { label: "Lives Saved", value: "200+", icon: Heart },
    { label: "Partner Organizations", value: "150+", icon: Award }
  ];

  const milestones = [
    { year: "2019", event: "Organization founded after Blue Whale Challenge incidents" },
    { year: "2020", event: "First national awareness campaign launched" },
    { year: "2021", event: "Partnered with government agencies for policy input" },
    { year: "2022", event: "Launched 24/7 helpline service" },
    { year: "2023", event: "Expanded to cover fake loan app harassment" },
    { year: "2024", event: "Reached 1 million people through digital campaigns" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-12 w-12 text-primary mr-3" />
            <h1 className="text-4xl font-bold text-foreground">About Stop the Harassment</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A dedicated team of experts working tirelessly to combat digital harassment 
            and protect individuals from harmful apps and online exploitation.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <section className="mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Target className="h-6 w-6 text-primary mr-2" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To protect individuals from digital harassment, fake applications, and online exploitation 
                  through education, support, and advocacy while building a safer digital ecosystem for all.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Eye className="h-6 w-6 text-primary mr-2" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A world where everyone can safely navigate the digital space without fear of harassment, 
                  exploitation, or harm from malicious applications and online predators.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Heart className="h-6 w-6 text-primary mr-2" />
                  Our Values
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Compassion for victims</li>
                  <li>• Transparency in actions</li>
                  <li>• Evidence-based approach</li>
                  <li>• Collaborative solutions</li>
                  <li>• Continuous learning</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Organization Stats */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {organizationStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Meet Our Team</h2>
          <div className="grid gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">{member.name}</CardTitle>
                      <p className="text-primary font-semibold text-lg">{member.role}</p>
                      <p className="text-muted-foreground">{member.experience} experience</p>
                    </div>
                    <Badge variant="outline">{member.experience}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{member.bio}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.expertise.map((skill, idx) => (
                          <Badge key={idx} variant="secondary">{skill}</Badge>
                        ))}
                      </div>
                      
                      <h4 className="font-semibold mb-2">Key Achievements:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {member.achievements.map((achievement, idx) => (
                          <li key={idx}>• {achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Contact:</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <a 
                            href={`mailto:${member.email}`}
                            className="text-sm text-primary hover:underline"
                          >
                            {member.email}
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <a 
                            href={`tel:${member.phone}`}
                            className="text-sm text-muted-foreground hover:text-primary"
                          >
                            {member.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Organization Journey */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Our Journey</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold">
                      {milestone.year}
                    </div>
                    <div className="flex-1 pt-3">
                      <p className="text-muted-foreground">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Information */}
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-800 text-center">Get in Touch</CardTitle>
            <p className="text-center text-blue-700">
              We're here to help and answer any questions you might have
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Phone className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-blue-800 mb-1">Main Office</h4>
                <p className="text-blue-700">+91 98765 43200</p>
              </div>
              <div>
                <Mail className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-blue-800 mb-1">General Inquiries</h4>
                <p className="text-blue-700">info@stopharassment.org</p>
              </div>
              <div>
                <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-blue-800 mb-1">Emergency Help</h4>
                <p className="text-blue-700">help@stopharassment.org</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default About;