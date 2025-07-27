import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ImageCarousel from "@/components/ImageCarousel";
import Navbar from "@/components/Navbar";
import { AlertTriangle, Phone, FileText, Shield, PhoneCall, Mail } from "lucide-react";

const Home = () => {
  const actionButtons = [
    {
      title: "Beating Apps",
      description: "Learn about dangerous apps used for harassment",
      icon: AlertTriangle,
      path: "/beating-apps",
      variant: "warning" as const
    },
    {
      title: "Fake Loan Apps", 
      description: "Identify and avoid fraudulent loan applications",
      icon: Shield,
      path: "/fake-loan-apps",
      variant: "destructive" as const
    },
    {
      title: "Loan Apps",
      description: "Safe lending practices and genuine apps",
      icon: FileText,
      path: "/loan-apps", 
      variant: "success" as const
    },
    {
      title: "Emergency",
      description: "Get immediate help and support",
      icon: Phone,
      path: "/emergency",
      variant: "emergency" as const
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Cybersecurity Expert",
      contact: "rajesh@stopharassment.org",
      phone: "+91 98765 43210"
    },
    {
      name: "Ms. Priya Sharma", 
      role: "Digital Rights Advocate",
      contact: "priya@stopharassment.org",
      phone: "+91 98765 43211"
    },
    {
      name: "Mr. Arjun Patel",
      role: "Legal Advisor",
      contact: "arjun@stopharassment.org", 
      phone: "+91 98765 43212"
    },
    {
      name: "Ms. Kavya Singh",
      role: "Counselor & Support",
      contact: "kavya@stopharassment.org",
      phone: "+91 98765 43213"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Carousel */}
        <section className="py-8">
          <ImageCarousel />
        </section>

        {/* Action Buttons */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Take Action Against Digital Harassment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {actionButtons.map((button, index) => {
              const Icon = button.icon;
              return (
                <Link key={index} to={button.path}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <h3 className="text-xl font-semibold mb-2">{button.title}</h3>
                      <p className="text-muted-foreground mb-4">{button.description}</p>
                      <Button variant={button.variant} className="w-full">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 bg-secondary rounded-lg">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              Our Team
            </h2>
            <p className="text-lg text-center mb-8 text-muted-foreground">
              We are a dedicated team of experts working to combat digital harassment 
              and protect individuals from fake apps and online fraud.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <a 
                          href={`mailto:${member.contact}`}
                          className="text-sm text-muted-foreground hover:text-primary"
                        >
                          {member.contact}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <PhoneCall className="h-4 w-4 text-muted-foreground" />
                        <a 
                          href={`tel:${member.phone}`}
                          className="text-sm text-muted-foreground hover:text-primary"
                        >
                          {member.phone}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;