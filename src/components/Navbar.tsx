import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Book Slot", path: "/book-slot" },
    { label: "Help", path: "/help" },
    { label: "About", path: "/about" },
    { label: "News", path: "/news" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">Stop the Harassment</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  className="font-medium"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <Link to="/emergency">
              <Button variant="emergency" className="ml-4 bg-emergency text-emergency-foreground hover:bg-emergency/90">
                Emergency Help
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant={isActive(item.path) ? "default" : "ghost"}
                    className="w-full justify-start font-medium"
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
              <Link to="/emergency" onClick={() => setIsOpen(false)}>
                <Button 
                  variant="emergency" 
                  className="w-full justify-start bg-emergency text-emergency-foreground hover:bg-emergency/90"
                >
                  Emergency Help
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;