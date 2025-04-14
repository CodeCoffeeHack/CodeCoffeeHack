
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, MessageSquare, Instagram, Twitter, Linkedin, Github } from "lucide-react";

const ContactPage = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thanks for reaching out! We'll get back to you shortly.",
      });
      
      // Reset form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 bg-secondary/50 dark:bg-darkGray-light/20">
        <div className="container max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Have questions, suggestions, or just want to say hello? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Get in <span className="text-teal">Touch</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Whether you have a question about our community, want to collaborate, or just want to say hi, we're here to help!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-teal/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-muted-foreground">hello@codecoffeehack.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-teal/10 p-3 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Discord</h3>
                    <p className="text-muted-foreground">
                      <a 
                        href="https://discord.gg/rZutZYqsQY" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-teal hover:underline"
                      >
                        discord.gg/codecoffeehack
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-teal/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p className="text-muted-foreground">Primarily virtual, with occasional meetups in major tech hubs</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-semibold text-lg mb-4">Find us on social media</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://twitter.com/codecoffeehack"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card p-3 rounded-full hover:bg-secondary transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5 text-foreground" />
                  </a>
                  <a
                    href="https://instagram.com/codecoffeehack"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card p-3 rounded-full hover:bg-secondary transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5 text-foreground" />
                  </a>
                  <a
                    href="https://linkedin.com/company/codecoffeehack"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card p-3 rounded-full hover:bg-secondary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-foreground" />
                  </a>
                  <a
                    href="https://github.com/codecoffeehack"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card p-3 rounded-full hover:bg-secondary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5 text-foreground" />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-card rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="Message subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-teal hover:bg-teal-dark"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-secondary/50 dark:bg-darkGray-light/20">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-lg mb-12 text-muted-foreground">
            Can't find what you're looking for? Feel free to reach out to us directly.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-card rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2">How quickly do you respond to inquiries?</h3>
              <p className="text-muted-foreground">
                We aim to respond to all messages within 24-48 hours during business days. For urgent matters, please reach out on Discord for faster assistance.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2">Can I propose a collaboration?</h3>
              <p className="text-muted-foreground">
                Absolutely! We're open to collaborations with other communities, companies, or individuals. Please provide details in your message.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2">Do you offer sponsorship opportunities?</h3>
              <p className="text-muted-foreground">
                Yes, we have various sponsorship opportunities for events, hackathons, and community initiatives. Contact us for more information.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2">How can I become a community moderator?</h3>
              <p className="text-muted-foreground">
                Active community members who consistently demonstrate our values may be invited to join our moderation team. Express your interest in your message!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
