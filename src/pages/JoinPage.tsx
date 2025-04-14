
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Coffee, Code, Users, MessageSquare, Github, ExternalLink, FileText, HelpCircle } from "lucide-react";

const JoinPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 bg-secondary/50 dark:bg-darkGray-light/20">
        <div className="container max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Community</h1>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Connect with fellow developers, collaborate on projects, and grow your skills with Code Coffee Hack.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-teal hover:bg-teal-dark" asChild>
              <a href="https://discord.gg/rZutZYqsQY" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 h-5 w-5" /> Join Discord
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/codecoffeehack" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" /> GitHub Organization
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Join Options Section */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Ways to <span className="text-teal">Get Involved</span>
          </h2>
          
          <Tabs defaultValue="community" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="community">Community</TabsTrigger>
              <TabsTrigger value="contribute">Contribute</TabsTrigger>
              <TabsTrigger value="events">Attend Events</TabsTrigger>
            </TabsList>
            
            <TabsContent value="community">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-card rounded-xl p-6 shadow-md flex flex-col items-center text-center card-hover">
                  <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                    <MessageSquare className="text-teal h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Discord Community</h3>
                  <p className="text-muted-foreground mb-6">
                    Join our active Discord server for discussions, help, and connecting with other developers.
                  </p>
                  <Button className="mt-auto bg-teal hover:bg-teal-dark" asChild>
                    <a href="https://discord.gg/codecoffeehack" target="_blank" rel="noopener noreferrer">
                      Join Discord
                    </a>
                  </Button>
                </div>
                
                <div className="bg-card rounded-xl p-6 shadow-md flex flex-col items-center text-center card-hover">
                  <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                    <FileText className="text-teal h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Notion Wiki</h3>
                  <p className="text-muted-foreground mb-6">
                    Access our community wiki with guides, documentation, and resources for members.
                  </p>
                  <Button className="mt-auto bg-teal hover:bg-teal-dark" asChild>
                    <a href="https://codecoffeehack.notion.site" target="_blank" rel="noopener noreferrer">
                      Access Wiki
                    </a>
                  </Button>
                </div>
                
                <div className="bg-card rounded-xl p-6 shadow-md flex flex-col items-center text-center card-hover">
                  <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                    <Coffee className="text-teal h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Virtual Coffee Chats</h3>
                  <p className="text-muted-foreground mb-6">
                    Join our weekly virtual coffee chats to discuss code, share ideas, and make connections.
                  </p>
                  <Button className="mt-auto bg-teal hover:bg-teal-dark" asChild>
                    <Link to="/events">
                      Find Next Chat
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="contribute">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-card rounded-xl p-6 shadow-md flex flex-col items-center text-center card-hover">
                  <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                    <Github className="text-teal h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">GitHub Projects</h3>
                  <p className="text-muted-foreground mb-6">
                    Contribute to our open-source projects on GitHub and build your portfolio.
                  </p>
                  <Button className="mt-auto bg-teal hover:bg-teal-dark" asChild>
                    <a href="https://github.com/codecoffeehack" target="_blank" rel="noopener noreferrer">
                      Browse Projects
                    </a>
                  </Button>
                </div>
                
                <div className="bg-card rounded-xl p-6 shadow-md flex flex-col items-center text-center card-hover">
                  <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                    <FileText className="text-teal h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Create Content</h3>
                  <p className="text-muted-foreground mb-6">
                    Write blog posts, create tutorials, or produce videos to share your knowledge.
                  </p>
                  <Button className="mt-auto bg-teal hover:bg-teal-dark" asChild>
                    <a href="https://codecoffeehack.notion.site/content-creation" target="_blank" rel="noopener noreferrer">
                      Content Guidelines
                    </a>
                  </Button>
                </div>
                
                <div className="bg-card rounded-xl p-6 shadow-md flex flex-col items-center text-center card-hover">
                  <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="text-teal h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Mentorship</h3>
                  <p className="text-muted-foreground mb-6">
                    Offer mentorship to newer developers or find a mentor to help you grow.
                  </p>
                  <Button className="mt-auto bg-teal hover:bg-teal-dark" asChild>
                    <a href="https://codecoffeehack.notion.site/mentorship" target="_blank" rel="noopener noreferrer">
                      Mentorship Program
                    </a>
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="events">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-card rounded-xl p-6 shadow-md flex flex-col items-center text-center card-hover">
                  <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                    <Coffee className="text-teal h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Coffee Chats</h3>
                  <p className="text-muted-foreground mb-6">
                    Weekly virtual coffee sessions for casual discussions and networking.
                  </p>
                  <Button className="mt-auto bg-teal hover:bg-teal-dark" asChild>
                    <Link to="/events">
                      View Schedule
                    </Link>
                  </Button>
                </div>
                
                <div className="bg-card rounded-xl p-6 shadow-md flex flex-col items-center text-center card-hover">
                  <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                    <Code className="text-teal h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Hackathons</h3>
                  <p className="text-muted-foreground mb-6">
                    Quarterly hackathons where you can build projects and compete for prizes.
                  </p>
                  <Button className="mt-auto bg-teal hover:bg-teal-dark" asChild>
                    <Link to="/events">
                      Next Hackathon
                    </Link>
                  </Button>
                </div>
                
                <div className="bg-card rounded-xl p-6 shadow-md flex flex-col items-center text-center card-hover">
                  <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="text-teal h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Workshops</h3>
                  <p className="text-muted-foreground mb-6">
                    Educational workshops on various technologies and development practices.
                  </p>
                  <Button className="mt-auto bg-teal hover:bg-teal-dark" asChild>
                    <Link to="/events">
                      Workshop Calendar
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-16 px-4 bg-secondary/50 dark:bg-darkGray-light/20">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Community Guidelines</h2>
            <p className="text-lg text-muted-foreground">
              We're committed to creating a positive and inclusive environment for everyone. Please review our guidelines:
            </p>
          </div>
          
          <div className="bg-card rounded-xl p-8 shadow-md">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="mt-1 bg-teal/10 p-1 rounded flex-shrink-0">
                  <Users className="h-5 w-5 text-teal" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Be Respectful & Inclusive</h3>
                  <p className="text-muted-foreground">
                    Treat all members with respect regardless of their background, experience level, or perspectives.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="mt-1 bg-teal/10 p-1 rounded flex-shrink-0">
                  <MessageSquare className="h-5 w-5 text-teal" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Constructive Communication</h3>
                  <p className="text-muted-foreground">
                    Keep discussions constructive and focused on helping each other grow as developers.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="mt-1 bg-teal/10 p-1 rounded flex-shrink-0">
                  <Code className="h-5 w-5 text-teal" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Share Knowledge</h3>
                  <p className="text-muted-foreground">
                    Share your knowledge freely and help others learn. We grow stronger as a community when we learn together.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="mt-1 bg-teal/10 p-1 rounded flex-shrink-0">
                  <Coffee className="h-5 w-5 text-teal" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Have Fun</h3>
                  <p className="text-muted-foreground">
                    Remember to have fun and enjoy the community! Coding is better with coffee and friends.
                  </p>
                </div>
              </li>
            </ul>
            
            <div className="mt-8 text-center">
              <Button className="bg-teal hover:bg-teal-dark" asChild>
                <a href="https://codecoffeehack.notion.site/code-of-conduct" target="_blank" rel="noopener noreferrer">
                  Full Code of Conduct <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Have questions about joining our community? Find answers to common questions below.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="bg-card rounded-xl p-6 shadow-md">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center">
                  <HelpCircle className="h-5 w-5 mr-2 text-teal" />
                  <span>Is this community only for experienced developers?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground pl-7">
                  Not at all! Code Coffee Hack welcomes developers of all skill levels, from beginners to seniors. We believe in learning together and supporting each other's growth journey.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="flex items-center">
                  <HelpCircle className="h-5 w-5 mr-2 text-teal" />
                  <span>Is there a membership fee?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground pl-7">
                  No, joining our community is completely free. We believe in open access to learning and collaboration opportunities for everyone.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="flex items-center">
                  <HelpCircle className="h-5 w-5 mr-2 text-teal" />
                  <span>How can I contribute to the community?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground pl-7">
                  There are many ways to contribute! You can join discussions on Discord, contribute to our open-source projects on GitHub, create learning resources, mentor others, or help organize events. Every contribution, big or small, is valued!
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <div className="flex items-center">
                  <HelpCircle className="h-5 w-5 mr-2 text-teal" />
                  <span>Do I need to be active in all community spaces?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground pl-7">
                  Not at all! You can engage with our community in whatever way works best for you. Some members are active on Discord, others primarily contribute to GitHub projects, while others mainly attend events. Participate in the ways that align with your interests and availability.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>
                <div className="flex items-center">
                  <HelpCircle className="h-5 w-5 mr-2 text-teal" />
                  <span>How often do you organize events?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground pl-7">
                  We host weekly virtual coffee chats, monthly workshops or tech talks, and quarterly hackathons. Check our Events page for the current schedule and upcoming activities.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger>
                <div className="flex items-center">
                  <HelpCircle className="h-5 w-5 mr-2 text-teal" />
                  <span>Can I suggest or host my own event?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground pl-7">
                  Absolutely! We encourage community-led initiatives. If you have an idea for an event, workshop, or content, reach out to our community managers on Discord, and they'll help you organize it.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button asChild>
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinPage;
