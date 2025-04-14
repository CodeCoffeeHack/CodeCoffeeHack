
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    
    toast({
      title: "Newsletter Subscription",
      description: `Thanks for subscribing with ${email}! We'll keep you updated.`,
    });
    
    e.currentTarget.reset();
  };

  return (
    <footer className="bg-darkGray-dark text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/lovable-uploads/cd9d62b9-96d3-486f-b37b-d07b0dd62b2b.png"
                alt="Code Coffee Hack"
                className="h-12 w-auto"
              />
              <span className="font-bold text-xl">CCH</span>
            </div>
            <p className="text-gray-300 mb-4">
              A fun, inclusive tech community where developers collaborate, learn, and build together.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/codecoffeehack"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-teal transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://twitter.com/codecoffeehack"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-teal transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com/codecoffeehack"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-teal transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com/company/codecoffeehack"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-teal transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-teal transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-teal transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-gray-300 hover:text-teal transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-300 hover:text-teal transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="text-gray-300 hover:text-teal transition-colors"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://discord.gg/codecoffeehack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-teal transition-colors"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/codecoffeehack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-teal transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://codecoffeehack.notion.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-teal transition-colors"
                >
                  Notion Wiki
                </a>
              </li>
              <li>
                <Link
                  to="/join"
                  className="text-gray-300 hover:text-teal transition-colors"
                >
                  Join Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-teal transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Stay updated with our latest events and resources.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-darkGray text-white"
                  required
                />
                <Button type="submit" className="bg-teal hover:bg-teal-dark">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Code Coffee Hack. All rights
            reserved.
          </p>
          <p className="mt-2 text-sm">
            <Link to="/privacy" className="hover:text-teal">
              Privacy Policy
            </Link>{" "}
            &bull;{" "}
            <Link to="/terms" className="hover:text-teal">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
