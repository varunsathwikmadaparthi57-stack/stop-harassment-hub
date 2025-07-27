import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, ExternalLink, AlertTriangle, Heart, Shield, FileText } from "lucide-react";

const Emergency = () => {
  const emergencyContacts = [
    {
      name: "National Cybercrime Helpline",
      number: "1930",
      description: "24/7 helpline for reporting cybercrime and digital harassment",
      type: "Government"
    },
    {
      name: "Women Helpline",
      number: "181",
      description: "Support for women facing harassment or violence",
      type: "Government"
    },
    {
      name: "National Emergency Number",
      number: "112",
      description: "All-in-one emergency number for police, fire, and medical services",
      type: "Emergency"
    },
    {
      name: "Suicide Prevention Helpline",
      number: "139",
      description: "Mental health support and suicide prevention",
      type: "Mental Health"
    },
    {
      name: "Stop Harassment Emergency",
      number: "+91 98765 43200",
      description: "Our dedicated emergency support line for immediate assistance",
      type: "Organization"
    }
  ];

  const emailSupports = [
    {
      title: "Cybercrime Reporting",
      email: "cybercrime@stopharassment.org",
      description: "Report cybercrime and digital harassment incidents"
    },
    {
      title: "Legal Support",
      email: "legal@stopharassment.org", 
      description: "Get legal advice and support for harassment cases"
    },
    {
      title: "Counseling Support",
      email: "counseling@stopharassment.org",
      description: "Mental health support and counseling services"
    },
    {
      title: "General Help",
      email: "help@stopharassment.org",
      description: "General inquiries and support requests"
    }
  ];

  const reportingSteps = [
    {
      step: 1,
      title: "Immediate Safety",
      description: "Ensure your immediate safety and preserve evidence",
      actions: [
        "Stop using the problematic app immediately",
        "Take screenshots of harassment messages",
        "Save all communication records",
        "Don't delete any evidence"
      ]
    },
    {
      step: 2,
      title: "Report to Authorities", 
      description: "File official complaints with relevant authorities",
      actions: [
        "Call cybercrime helpline (1930)",
        "File complaint at local police station",
        "Report to RBI if it's a financial app",
        "Submit complaint to app store"
      ]
    },
    {
      step: 3,
      title: "Seek Support",
      description: "Get professional help and support during this time",
      actions: [
        "Contact mental health helpline if needed",
        "Seek legal advice for serious cases", 
        "Inform trusted family members or friends",
        "Document all interactions with authorities"
      ]
    },
    {
      step: 4,
      title: "Follow Up",
      description: "Monitor progress and take additional action if needed",
      actions: [
        "Follow up on filed complaints regularly",
        "Keep records of all case numbers",
        "Seek media attention for serious cases",
        "Help others by sharing your experience"
      ]
    }
  ];

  const mentalHealthResources = [
    {
      name: "Vandrevala Foundation",
      contact: "9999 666 555",
      website: "https://www.vandrevalafoundation.com",
      description: "24/7 crisis helpline and mental health support"
    },
    {
      name: "AASRA",
      contact: "91-22-27546669",
      website: "http://www.aasra.info",
      description: "Suicide prevention and mental health support"
    },
    {
      name: "Sneha Foundation",
      contact: "91-44-24640050",
      website: "https://snehaindia.org",
      description: "Emotional support and suicide prevention"
    },
    {
      name: "iCall",
      contact: "9152987821",
      website: "https://icallhelpline.org",
      description: "Psychosocial helpline for mental health support"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Emergency":
        return "bg-red-100 text-red-800 border-red-200";
      case "Government":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Mental Health":
        return "bg-green-100 text-green-800 border-green-200";
      case "Organization":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="h-12 w-12 text-red-600 mr-3" />
            <h1 className="text-4xl font-bold text-foreground">Emergency Help & Support</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            If you're facing harassment or need immediate help, don't hesitate to reach out. 
            Help is available 24/7.
          </p>
        </div>

        {/* Critical Warning */}
        <Card className="mb-8 border-red-300 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-8 w-8 text-red-600 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-red-800 mb-2">If You're in Immediate Danger</h3>
                <p className="text-red-700 text-lg mb-4">
                  Call <strong>112</strong> (National Emergency Number) or <strong>1930</strong> (Cybercrime Helpline) immediately.
                  Your safety is the top priority.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="emergency" asChild>
                    <a href="tel:112">Call 112 - Emergency</a>
                  </Button>
                  <Button variant="emergency" asChild>
                    <a href="tel:1930">Call 1930 - Cybercrime</a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contacts */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Phone className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold text-foreground">Emergency Helplines</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {emergencyContacts.map((contact, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{contact.name}</CardTitle>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(contact.type)}`}>
                      {contact.type}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{contact.description}</p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={`tel:${contact.number}`}>
                      <Phone className="h-4 w-4 mr-2" />
                      Call {contact.number}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Email Support */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Mail className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold text-foreground">Email Support</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {emailSupports.map((support, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{support.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{support.description}</p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={`mailto:${support.email}`}>
                      <Mail className="h-4 w-4 mr-2" />
                      Email {support.email}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Reporting Steps */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <FileText className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold text-foreground">How to Report Harassment</h2>
          </div>
          
          <div className="grid gap-6">
            {reportingSteps.map((step, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">
                      {step.step}
                    </span>
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.actions.map((action, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mental Health Resources */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Heart className="h-8 w-8 text-pink-600 mr-3" />
            <h2 className="text-3xl font-bold text-foreground">Mental Health Support</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {mentalHealthResources.map((resource, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{resource.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{resource.description}</p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full" asChild>
                      <a href={`tel:${resource.contact}`}>
                        <Phone className="h-4 w-4 mr-2" />
                        Call {resource.contact}
                      </a>
                    </Button>
                    <Button variant="ghost" className="w-full" asChild>
                      <a href={resource.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit Website
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Important Information */}
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-800 flex items-center">
              <Shield className="h-6 w-6 mr-2" />
              Important Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">Remember:</h4>
                <ul className="space-y-2 text-blue-700">
                  <li>• You are not alone in this</li>
                  <li>• Harassment is not your fault</li>
                  <li>• Help is available 24/7</li>
                  <li>• Keep all evidence safe</li>
                  <li>• Report every incident</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">For Family & Friends:</h4>
                <ul className="space-y-2 text-blue-700">
                  <li>• Listen without judgment</li>
                  <li>• Encourage professional help</li>
                  <li>• Help them report incidents</li>
                  <li>• Provide emotional support</li>
                  <li>• Monitor their wellbeing</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Emergency;