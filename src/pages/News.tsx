import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Clock, AlertTriangle } from "lucide-react";

const News = () => {
  const newsArticles = [
    {
      title: "RBI Warns Against Unregulated Lending Apps After 60 Suicides",
      summary: "Reserve Bank of India issues advisory against illegal lending apps following surge in harassment-related deaths",
      date: "2024-01-15",
      category: "Regulatory Action",
      source: "Economic Times",
      readTime: "3 min read",
      isUrgent: true
    },
    {
      title: "Delhi Police Arrest 12 in Fake Loan App Harassment Case",
      summary: "Special cybercrime unit arrests operators of fraudulent lending platform that harassed thousands",
      date: "2024-01-10",
      category: "Law Enforcement",
      source: "India Today",
      readTime: "4 min read",
      isUrgent: false
    },
    {
      title: "Blue Whale Challenge Claims Another Life in Mumbai",
      summary: "17-year-old student found dead after participating in deadly online challenge",
      date: "2024-01-08",
      category: "Suicide Cases",
      source: "Times of India",
      readTime: "2 min read",
      isUrgent: true
    },
    {
      title: "Government Launches Awareness Campaign Against Digital Harassment",
      summary: "Ministry of Electronics launches nationwide campaign to educate about fake apps",
      date: "2024-01-05",
      category: "Government Action",
      source: "PIB",
      readTime: "3 min read",
      isUrgent: false
    },
    {
      title: "Fake Loan Apps Steal Data of 5 Million Indians",
      summary: "Cybersecurity report reveals massive data breach by unregulated lending platforms",
      date: "2024-01-03",
      category: "Data Breach",
      source: "Business Standard",
      readTime: "5 min read",
      isUrgent: true
    },
    {
      title: "Supreme Court Directs States to Monitor Digital Harassment",
      summary: "Apex court asks state governments to set up special units for cybercrime monitoring",
      date: "2024-01-01",
      category: "Legal Development",
      source: "The Hindu",
      readTime: "4 min read",
      isUrgent: false
    },
    {
      title: "Momo Challenge Resurfaces on Social Media Platforms",
      summary: "Parents warned as dangerous challenge targeting children reappears online",
      date: "2023-12-28",
      category: "Online Challenges",
      source: "NDTV",
      readTime: "3 min read",
      isUrgent: true
    },
    {
      title: "Chennai Techie Ends Life Due to Loan App Harassment",
      summary: "Software engineer commits suicide after persistent threatening calls from recovery agents",
      date: "2023-12-25",
      category: "Suicide Cases",
      source: "The New Indian Express",
      readTime: "3 min read",
      isUrgent: true
    },
    {
      title: "Google Removes 2,000+ Fraudulent Loan Apps from Play Store",
      summary: "Tech giant takes action against predatory lending applications following government pressure",
      date: "2023-12-20",
      category: "Platform Action",
      source: "Reuters",
      readTime: "2 min read",
      isUrgent: false
    },
    {
      title: "New Guidelines for Lending Apps Announced by RBI",
      summary: "Central bank introduces stricter norms for digital lending platforms",
      date: "2023-12-18",
      category: "Regulatory Action",
      source: "Mint",
      readTime: "6 min read",
      isUrgent: false
    },
    {
      title: "Blackout Challenge Videos Removed from TikTok",
      summary: "Social media platform removes dangerous content after multiple fatalities",
      date: "2023-12-15",
      category: "Platform Action",
      source: "CNN",
      readTime: "3 min read",
      isUrgent: true
    },
    {
      title: "Hyderabad Police Bust Illegal Call Center Harassing Loan Defaulters",
      summary: "Cybercrime unit shuts down fake recovery center operating under fake loan app",
      date: "2023-12-12",
      category: "Law Enforcement",
      source: "Telangana Today",
      readTime: "4 min read",
      isUrgent: false
    },
    {
      title: "Study Reveals 70% of Young Adults Face Digital Harassment",
      summary: "Research by NCRB shows alarming rise in online harassment cases",
      date: "2023-12-10",
      category: "Research",
      source: "Indian Express",
      readTime: "5 min read",
      isUrgent: false
    },
    {
      title: "Benadryl Challenge Leads to Teen's Hospitalization in Pune",
      summary: "16-year-old critical after overdose from viral social media challenge",
      date: "2023-12-08",
      category: "Online Challenges", 
      source: "Pune Mirror",
      readTime: "2 min read",
      isUrgent: true
    },
    {
      title: "Fake Loan App Operators Extradited from Dubai",
      summary: "International cooperation leads to arrest of masterminds behind harassment racket",
      date: "2023-12-05",
      category: "Law Enforcement",
      source: "Times Now",
      readTime: "4 min read",
      isUrgent: false
    },
    {
      title: "Mental Health Helplines See 300% Increase in Calls",
      summary: "Counselors report surge in distress calls related to digital harassment",
      date: "2023-12-03",
      category: "Mental Health",
      source: "Deccan Herald",
      readTime: "3 min read",
      isUrgent: false
    },
    {
      title: "AI Tools Being Used to Create Morphed Images for Harassment",
      summary: "Cybercriminals using artificial intelligence to blackmail loan app victims",
      date: "2023-12-01",
      category: "Technology Misuse",
      source: "Tech2",
      readTime: "4 min read",
      isUrgent: true
    },
    {
      title: "Parents File PIL Against Social Media Giants",
      summary: "Supreme Court petition seeks stricter content moderation for harmful challenges",
      date: "2023-11-28",
      category: "Legal Development",
      source: "Bar & Bench",
      readTime: "5 min read",
      isUrgent: false
    },
    {
      title: "Digital Lending Guidelines Come into Effect",
      summary: "New RBI rules mandate stricter verification and data protection for lenders",
      date: "2023-11-25",
      category: "Regulatory Action",
      source: "Financial Express",
      readTime: "6 min read",
      isUrgent: false
    },
    {
      title: "Fire Challenge Claims Life of Bangalore Student",
      summary: "College student succumbs to burns after attempting viral social media challenge",
      date: "2023-11-22",
      category: "Suicide Cases",
      source: "Karnataka Today",
      readTime: "3 min read",
      isUrgent: true
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Suicide Cases":
        return "bg-red-100 text-red-800 border-red-300";
      case "Online Challenges":
        return "bg-orange-100 text-orange-800 border-orange-300";
      case "Law Enforcement":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "Regulatory Action":
        return "bg-green-100 text-green-800 border-green-300";
      case "Government Action":
        return "bg-purple-100 text-purple-800 border-purple-300";
      case "Mental Health":
        return "bg-pink-100 text-pink-800 border-pink-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Latest News & Updates</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed about the latest developments in digital harassment, fake apps, 
            and government actions to protect citizens.
          </p>
        </div>

        {/* Urgent News Alert */}
        <Card className="mb-8 border-red-200 bg-red-50">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <span className="font-semibold text-red-800">Breaking:</span>
              <span className="text-red-700">
                Multiple urgent cases reported. Please check the latest updates below.
              </span>
            </div>
          </CardContent>
        </Card>

        {/* News Grid */}
        <div className="grid gap-6">
          {newsArticles.map((article, index) => (
            <Card key={index} className={`${article.isUrgent ? 'border-l-4 border-l-red-500' : ''}`}>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl leading-tight pr-4">
                    {article.title}
                  </CardTitle>
                  {article.isUrgent && (
                    <Badge variant="destructive" className="text-xs">
                      URGENT
                    </Badge>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime}</span>
                  </div>
                  <span className="text-muted-foreground">|</span>
                  <span className="font-medium">{article.source}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {article.summary}
                </p>
                
                <div className="flex justify-between items-center">
                  <Badge variant="outline" className={getCategoryColor(article.category)}>
                    {article.category}
                  </Badge>
                  <Button variant="outline" size="sm">
                    Read Full Article
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* News Categories Legend */}
        <Card className="mt-12 bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-xl text-blue-800">News Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-red-100 border border-red-300 rounded"></div>
                <span className="text-sm">Suicide Cases</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-orange-100 border border-orange-300 rounded"></div>
                <span className="text-sm">Online Challenges</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-100 border border-blue-300 rounded"></div>
                <span className="text-sm">Law Enforcement</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-100 border border-green-300 rounded"></div>
                <span className="text-sm">Regulatory Action</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-purple-100 border border-purple-300 rounded"></div>
                <span className="text-sm">Government Action</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-pink-100 border border-pink-300 rounded"></div>
                <span className="text-sm">Mental Health</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-100 border border-gray-300 rounded"></div>
                <span className="text-sm">Other</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default News;