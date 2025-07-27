import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Calendar, MapPin, Users, GraduationCap } from "lucide-react";

const BookSlot = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    city: "",
    place: "",
    fullAddress: "",
    collegeName: "",
    eventName: "",
    preferredDate: "",
    audienceSize: "",
    sessionType: "",
    additionalInfo: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.state || !formData.city) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields marked with *",
        variant: "destructive"
      });
      return;
    }

    // Phone number validation
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit Indian mobile number",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Booking Request Submitted!",
      description: "We'll contact you within 24 hours to confirm your awareness session.",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      state: "",
      city: "",
      place: "",
      fullAddress: "",
      collegeName: "",
      eventName: "",
      preferredDate: "",
      audienceSize: "",
      sessionType: "",
      additionalInfo: ""
    });
  };

  const sessionTypes = [
    "School/College Awareness Session",
    "Corporate Workshop",
    "Community Event",
    "Government Institution Session",
    "NGO Collaboration",
    "Online Webinar",
    "Parent-Teacher Session",
    "Youth Group Session"
  ];

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Delhi", "Jammu and Kashmir", "Ladakh", "Puducherry", "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep", "Andaman and Nicobar Islands"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="h-12 w-12 text-primary mr-3" />
            <h1 className="text-4xl font-bold text-foreground">Book Awareness Session</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Schedule a digital safety awareness session for your institution, organization, or community. 
            Our experts will educate about fake apps and digital harassment prevention.
          </p>
        </div>

        {/* Information Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Group Sessions</h3>
              <p className="text-sm text-muted-foreground">
                Interactive workshops for schools, colleges, and organizations
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <GraduationCap className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Expert Trainers</h3>
              <p className="text-sm text-muted-foreground">
                Certified cybersecurity and legal experts conduct sessions
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Pan-India Coverage</h3>
              <p className="text-sm text-muted-foreground">
                Available across all states and union territories
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Booking Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Session Booking Form</CardTitle>
            <p className="text-muted-foreground">
              Fill in the details below and we'll get back to you within 24 hours to confirm your session.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Location Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="state">State *</Label>
                  <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  >
                    <option value="">Select State</option>
                    {indianStates.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Enter your city"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="place">Venue/Place</Label>
                <Input
                  id="place"
                  name="place"
                  value={formData.place}
                  onChange={handleInputChange}
                  placeholder="Specific venue or landmark"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fullAddress">Full Address</Label>
                <Textarea
                  id="fullAddress"
                  name="fullAddress"
                  value={formData.fullAddress}
                  onChange={handleInputChange}
                  placeholder="Complete address with pincode"
                  rows={3}
                />
              </div>

              {/* Event Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="collegeName">Institution/Organization Name</Label>
                  <Input
                    id="collegeName"
                    name="collegeName"
                    value={formData.collegeName}
                    onChange={handleInputChange}
                    placeholder="School/College/Company name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="eventName">Event/Session Name</Label>
                  <Input
                    id="eventName"
                    name="eventName"
                    value={formData.eventName}
                    onChange={handleInputChange}
                    placeholder="Name of the awareness program"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="preferredDate">Preferred Date</Label>
                  <Input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="audienceSize">Expected Audience Size</Label>
                  <Input
                    id="audienceSize"
                    name="audienceSize"
                    type="number"
                    value={formData.audienceSize}
                    onChange={handleInputChange}
                    placeholder="Number of attendees"
                    min="1"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="sessionType">Session Type</Label>
                  <select
                    id="sessionType"
                    name="sessionType"
                    value={formData.sessionType}
                    onChange={handleInputChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select Session Type</option>
                    {sessionTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additionalInfo">Additional Information</Label>
                <Textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  placeholder="Any specific requirements, topics to cover, or additional details"
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Submit Booking Request
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mt-8 bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Need Help with Booking?</h3>
            <div className="grid md:grid-cols-2 gap-4 text-blue-700">
              <div>
                <p className="font-medium">Call us directly:</p>
                <p>+91 98765 43210 (Mon-Sat, 9 AM - 6 PM)</p>
              </div>
              <div>
                <p className="font-medium">Email us:</p>
                <p>bookings@stopharassment.org</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default BookSlot;