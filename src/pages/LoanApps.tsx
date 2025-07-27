import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, CheckCircle, AlertTriangle, Eye, Lock, FileText, CreditCard } from "lucide-react";

const LoanApps = () => {
  const safetyTips = [
    {
      icon: Shield,
      title: "Verify RBI Registration",
      description: "Always check if the lending company is registered with the Reserve Bank of India (RBI). Only RBI-registered NBFCs can legally provide loans.",
      details: [
        "Visit RBI website to verify registration",
        "Check for NBFC license number",
        "Avoid unregistered entities"
      ]
    },
    {
      icon: Eye,
      title: "Read Terms Carefully",
      description: "Genuine loan apps provide clear, transparent terms and conditions. Read everything before agreeing.",
      details: [
        "Interest rates should be clearly mentioned",
        "No hidden charges or fees",
        "Transparent repayment schedule",
        "Clear penalty structure"
      ]
    },
    {
      icon: Lock,
      title: "Protect Your Privacy",
      description: "Be cautious about the permissions you grant to loan apps. Legitimate apps don't need excessive access.",
      details: [
        "Don't allow access to all contacts",
        "Avoid apps requesting camera access unnecessarily",
        "Check app permissions before installing",
        "Never share personal photos"
      ]
    },
    {
      icon: CreditCard,
      title: "Understand Interest Rates",
      description: "Legitimate loans have reasonable interest rates. Be wary of extremely high or unrealistic rates.",
      details: [
        "Compare rates across multiple lenders",
        "Understand APR (Annual Percentage Rate)",
        "Be aware of processing fees",
        "Calculate total repayment amount"
      ]
    }
  ];

  const identificationGuide = [
    {
      category: "Genuine Loan App",
      color: "green",
      characteristics: [
        "RBI registered NBFC",
        "Clear contact information and physical address",
        "Transparent interest rates and fees",
        "Professional customer support",
        "Proper verification process",
        "Secure data handling practices",
        "Good reviews and ratings",
        "Clear loan agreement documents"
      ]
    },
    {
      category: "Fake/Predatory App",
      color: "red", 
      characteristics: [
        "Not RBI registered",
        "Requests excessive permissions",
        "Hidden charges and fees",
        "Instant approval without verification",
        "Extremely high interest rates (>100% annually)",
        "Threats and harassment for collection",
        "No proper customer support",
        "Shares personal data with third parties"
      ]
    }
  ];

  const financialLiteracyTips = [
    {
      title: "Budget Planning",
      description: "Create a monthly budget to understand your income, expenses, and borrowing capacity.",
      tips: [
        "Track all income sources",
        "List fixed and variable expenses",
        "Identify unnecessary spending",
        "Set aside emergency funds"
      ]
    },
    {
      title: "Credit Score Management",
      description: "Maintain a good credit score to access better loan terms and interest rates.",
      tips: [
        "Pay bills and EMIs on time",
        "Keep credit utilization below 30%",
        "Don't close old credit accounts",
        "Monitor credit report regularly"
      ]
    },
    {
      title: "Loan Evaluation",
      description: "Always evaluate the need for a loan and explore alternatives before borrowing.",
      tips: [
        "Consider if the expense is necessary",
        "Explore savings or family help first",
        "Compare multiple lenders",
        "Calculate total cost of borrowing"
      ]
    },
    {
      title: "Repayment Planning",
      description: "Have a clear repayment plan before taking any loan to avoid financial stress.",
      tips: [
        "Ensure EMI is within 40% of income",
        "Plan for potential income changes",
        "Set up automatic payments",
        "Keep buffer for emergencies"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-12 w-12 text-green-600 mr-3" />
            <h1 className="text-4xl font-bold text-foreground">Safe Lending Practices</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn how to identify legitimate loan apps, protect yourself from fraud, and make informed financial decisions.
          </p>
        </div>

        {/* Safety Tips Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Essential Safety Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {safetyTips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Icon className="h-6 w-6 text-primary mr-2" />
                      {tip.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{tip.description}</p>
                    <ul className="space-y-2">
                      {tip.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Identification Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">How to Identify Legitimate vs Fake Apps</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {identificationGuide.map((guide, index) => (
              <Card key={index} className={`border-l-4 ${guide.color === 'green' ? 'border-l-green-500 bg-green-50' : 'border-l-red-500 bg-red-50'}`}>
                <CardHeader>
                  <CardTitle className={`text-xl ${guide.color === 'green' ? 'text-green-800' : 'text-red-800'}`}>
                    {guide.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {guide.characteristics.map((char, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        {guide.color === 'green' ? (
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        ) : (
                          <AlertTriangle className="h-4 w-4 text-red-600 mt-1 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${guide.color === 'green' ? 'text-green-700' : 'text-red-700'}`}>
                          {char}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Financial Literacy Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <FileText className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-foreground">Financial Literacy Tips</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {financialLiteracyTips.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{section.description}</p>
                  <ul className="space-y-2">
                    {section.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span className="text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Emergency Resources */}
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-800">Quick Reference Guide</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Before Applying</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Check RBI registration</li>
                  <li>• Read all terms</li>
                  <li>• Compare interest rates</li>
                  <li>• Verify app permissions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">During Process</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Keep documents safe</li>
                  <li>• Don't share OTPs</li>
                  <li>• Read loan agreement</li>
                  <li>• Save all communications</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">After Approval</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Set up auto-pay</li>
                  <li>• Monitor your credit</li>
                  <li>• Report any harassment</li>
                  <li>• Keep repayment records</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default LoanApps;