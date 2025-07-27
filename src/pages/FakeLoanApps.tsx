import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, ExternalLink, CheckCircle, XCircle, Shield, Phone } from "lucide-react";

const FakeLoanApps = () => {
  const fakeLoanApps = [
    {
      name: "Quick Loan India",
      description: "Promises instant loans but harvests personal data and harasses contacts with abusive calls and messages.",
      incidents: "500+ harassment complaints",
      harmfulPractices: ["Accessing all contacts", "Sharing morphed photos", "Threatening calls", "High interest rates"],
      status: "Banned by RBI"
    },
    {
      name: "Cash Advance Pro",
      description: "Fake lending app that charges hidden fees and threatens users with legal action for non-payment.",
      incidents: "200+ reported cases",
      harmfulPractices: ["Hidden charges", "Fake legal threats", "Data misuse", "No license"],
      status: "Under investigation"
    },
    {
      name: "Instant Cash Now",
      description: "Fraudulent app that promises quick approval but never disburses loans while collecting personal information.",
      incidents: "300+ fraud reports",
      harmfulPractices: ["No loan disbursement", "Data theft", "Fake documents", "Identity theft"],
      status: "Removed from stores"
    },
    {
      name: "Easy Money Lender",
      description: "Predatory lending app with extremely high interest rates and aggressive recovery methods.",
      incidents: "150+ complaints",
      harmfulPractices: ["1000%+ interest rates", "Public shaming", "Fake recovery agents", "Privacy violations"],
      status: "Legal action pending"
    },
    {
      name: "Fast Rupee",
      description: "Illegal lending platform that uses intimidation tactics and shares private information publicly.",
      incidents: "400+ harassment cases",
      harmfulPractices: ["Public data sharing", "Morphed images", "Threatening messages", "Fake legal notices"],
      status: "Banned"
    }
  ];

  const genuineLoanApps = [
    {
      name: "PaySense",
      description: "RBI-registered NBFC offering personal loans with transparent terms",
      website: "https://www.paysense.in",
      features: ["RBI registered", "Transparent pricing", "No hidden charges", "Secure data handling"]
    },
    {
      name: "MoneyTap",
      description: "Licensed credit line provider with flexible repayment options",
      website: "https://www.moneytap.com",
      features: ["NBFC license", "Credit line facility", "Regulated by RBI", "Professional support"]
    },
    {
      name: "CASHe",
      description: "AI-powered lending platform for salaried professionals",
      website: "https://www.cashe.co.in",
      features: ["AI-based approval", "Quick processing", "RBI compliant", "Data protection"]
    },
    {
      name: "KreditBee",
      description: "Personal loan app with instant approval for eligible customers",
      website: "https://www.kreditbee.in",
      features: ["Instant approval", "Flexible tenure", "Licensed NBFC", "Customer support"]
    },
    {
      name: "EarlySalary",
      description: "Salary advance platform for working professionals",
      website: "https://www.earlysalary.com",
      features: ["Salary advance", "No collateral", "RBI registered", "Transparent terms"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <XCircle className="h-12 w-12 text-red-600 mr-3" />
            <h1 className="text-4xl font-bold text-foreground">Fake Loan Apps Alert</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Identify and avoid fraudulent loan applications that harass users and steal personal data.
          </p>
        </div>

        {/* Warning Section */}
        <Card className="mb-8 border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-red-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-red-800 mb-2">Immediate Action Required</h3>
                <p className="text-red-700 mb-2">
                  If you're being harassed by any fake loan app, don't suffer in silence. Report immediately:
                </p>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span className="font-semibold">Cybercrime Helpline: 1930</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Fake Apps Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Known Fake Loan Apps - Avoid These!
          </h2>
          
          <div className="grid gap-6">
            {fakeLoanApps.map((app, index) => (
              <Card key={index} className="border-l-4 border-l-red-500">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-foreground">{app.name}</CardTitle>
                    <Badge variant="destructive">{app.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{app.description}</p>
                  
                  <div className="mb-4">
                    <span className="font-semibold text-orange-600">Reported Incidents: </span>
                    <span className="text-orange-600">{app.incidents}</span>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Harmful Practices:</h4>
                    <div className="flex flex-wrap gap-2">
                      {app.harmfulPractices.map((practice, idx) => (
                        <Badge key={idx} variant="outline" className="border-red-300 text-red-700">
                          {practice}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Genuine Apps Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-foreground">Genuine Loan Apps - Safe Options</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {genuineLoanApps.map((app, index) => (
              <Card key={index} className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{app.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{app.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-foreground">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {app.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="border-green-300 text-green-700">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button asChild className="w-full">
                    <a href={app.website} target="_blank" rel="noopener noreferrer">
                      Visit Official Website
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Safety Tips */}
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-800 flex items-center">
              <Shield className="h-6 w-6 mr-2" />
              How to Identify Fake Loan Apps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">Red Flags to Watch:</h4>
                <ul className="space-y-2 text-blue-700">
                  <li>• Instant approval without proper verification</li>
                  <li>• Requests access to all phone contacts</li>
                  <li>• No clear terms and conditions</li>
                  <li>• Extremely high interest rates</li>
                  <li>• Asks for upfront fees or deposits</li>
                  <li>• No customer support contact</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">Safety Checklist:</h4>
                <ul className="space-y-2 text-blue-700">
                  <li>• Verify RBI registration</li>
                  <li>• Check app store ratings and reviews</li>
                  <li>• Read terms and conditions carefully</li>
                  <li>• Never share personal documents via chat</li>
                  <li>• Report suspicious behavior immediately</li>
                  <li>• Use only well-known, licensed lenders</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default FakeLoanApps;