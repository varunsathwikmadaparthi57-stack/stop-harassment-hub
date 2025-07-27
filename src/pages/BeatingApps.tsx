import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Skull, Users, TrendingUp, Shield } from "lucide-react";

const BeatingApps = () => {
  const beatingApps = [
    {
      name: "Blue Whale Challenge",
      description: "A deadly social media phenomenon that manipulates vulnerable individuals into performing self-harm tasks over 50 days, culminating in suicide.",
      deaths: "130+ confirmed deaths globally",
      incidents: "Multiple cases in India, Russia, and other countries",
      harmLevel: "Extremely High",
      warning: "This app has been banned in multiple countries due to its direct link to teen suicides."
    },
    {
      name: "Momo Challenge",
      description: "Uses a disturbing image to contact children through WhatsApp and other platforms, giving them violent and harmful challenges.",
      deaths: "Several reported deaths",
      incidents: "Thousands of reports worldwide",
      harmLevel: "High",
      warning: "Targets children specifically and uses psychological manipulation to cause harm."
    },
    {
      name: "48-Hour Challenge",
      description: "Encourages participants to disappear for 48 hours without telling anyone, causing panic and potentially dangerous situations.",
      deaths: "3+ confirmed cases",
      incidents: "Hundreds of missing person reports",
      harmLevel: "High",
      warning: "Has led to actual disappearances and deaths of young people."
    },
    {
      name: "Fire Challenge",
      description: "Participants set themselves on fire and film it for social media, causing severe burns and permanent damage.",
      deaths: "5+ deaths reported", 
      incidents: "Dozens of severe injury cases",
      harmLevel: "Extremely High",
      warning: "Results in life-threatening burns and has caused multiple deaths."
    },
    {
      name: "Blackout Challenge",
      description: "Also known as the choking challenge, participants hold their breath or choke themselves until they lose consciousness.",
      deaths: "20+ deaths reported",
      incidents: "Hundreds of hospitalization cases",
      harmLevel: "Extremely High",
      warning: "Can cause brain damage, seizures, and death within minutes."
    },
    {
      name: "Benadryl Challenge",
      description: "Encourages taking dangerous amounts of allergy medication to hallucinate, leading to overdoses and heart problems.",
      deaths: "3+ confirmed deaths",
      incidents: "Multiple emergency room visits",
      harmLevel: "High",
      warning: "Can cause seizures, heart problems, coma, and death."
    }
  ];

  const getHarmLevelColor = (level: string) => {
    switch (level) {
      case "Extremely High":
        return "bg-red-600 text-white";
      case "High":
        return "bg-orange-500 text-white";
      default:
        return "bg-yellow-500 text-black";
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
            <h1 className="text-4xl font-bold text-foreground">Dangerous "Beating Apps"</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These harmful applications and online challenges have been responsible for numerous deaths 
            and injuries worldwide. Learn to recognize and avoid them.
          </p>
        </div>

        {/* Warning Notice */}
        <Card className="mb-8 border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <Skull className="h-6 w-6 text-red-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-red-800 mb-2">Critical Warning</h3>
                <p className="text-red-700">
                  If you or someone you know is participating in any of these challenges or using these apps, 
                  please seek immediate help. Contact emergency services or our helpline immediately.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Apps List */}
        <div className="grid gap-6">
          {beatingApps.map((app, index) => (
            <Card key={index} className="border-l-4 border-l-red-500">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-2xl text-foreground">{app.name}</CardTitle>
                  <Badge className={getHarmLevelColor(app.harmLevel)}>
                    {app.harmLevel} Risk
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4 text-muted-foreground">{app.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Skull className="h-5 w-5 text-red-600" />
                    <span className="font-semibold">Deaths:</span>
                    <span className="text-red-600">{app.deaths}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-orange-600" />
                    <span className="font-semibold">Incidents:</span>
                    <span className="text-orange-600">{app.incidents}</span>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-1">Warning:</h4>
                      <p className="text-yellow-700">{app.warning}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Prevention Tips */}
        <Card className="mt-12 bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-800 flex items-center">
              <Shield className="h-6 w-6 mr-2" />
              How to Protect Yourself and Others
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-blue-700">
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Never participate in online challenges that involve self-harm or dangerous activities</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Report any dangerous content you encounter on social media platforms</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Talk to friends and family about the dangers of these challenges</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>If you see someone participating, intervene immediately and seek help</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Contact local authorities or our emergency helpline for immediate assistance</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default BeatingApps;