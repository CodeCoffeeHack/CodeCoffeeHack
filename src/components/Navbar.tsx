
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/lovable-uploads/cd9d62b9-96d3-486f-b37b-d07b0dd62b2b.png"
            alt="Code Coffee Hack"
            className="h-10 w-auto"
          />
          <span className="font-bold text-xl hidden sm:inline-block">
            Code Coffee Hack
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="font-medium hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="font-medium hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            to="/events"
            className="font-medium hover:text-primary transition-colors"
          >
            Events
          </Link>
          <Link
            to="/projects"
            className="font-medium hover:text-primary transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/resources"
            className="font-medium hover:text-primary transition-colors"
          >
            Resources
          </Link>
          <Link
            to="/join"
            className="font-medium hover:text-primary transition-colors"
          >
            Join Us
          </Link>
          <Link
            to="/contact"
            className="font-medium hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          <Button
            variant="default"
            size="sm"
            className="hidden md:inline-flex bg-teal hover:bg-teal-dark"
            asChild
          >
            <Link to="/join">Join Community</Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md p-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/events"
              className="font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Events
            </Link>
            <Link
              to="/projects"
              className="font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              to="/resources"
              className="font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Resources
            </Link>
            <Link
              to="/join"
              className="font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Join Us
            </Link>
            <Link
              to="/contact"
              className="font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
