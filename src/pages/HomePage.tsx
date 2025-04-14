
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Coffee, Code, Users, Calendar, BookOpen } from "lucide-react";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                <span className="text-teal">Brew Code.</span><br />
                <span className="text-coffee">Build Ideas.</span><br />
                <span>Break Limits.</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-xl mx-auto md:mx-0">
                A fun, inclusive tech community where developers collaborate, learn, and build together—powered by code and coffee.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" className="bg-teal hover:bg-teal-dark" asChild>
                  <Link to="/join">Join Community</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/events">Explore Events</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 md:flex-none md:w-2/5">
              <div className="relative">
                <img
                  src="/lovable-uploads/cd9d62b9-96d3-486f-b37b-d07b0dd62b2b.png"
                  alt="Code Coffee Hack"
                  className="w-full max-w-md mx-auto animate-float"
                />
                <div className="absolute -z-10 w-full h-full top-0 rounded-full blur-3xl bg-teal/20 dark:bg-teal/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/50 dark:bg-darkGray-light/20">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What We <span className="text-teal">Offer</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card rounded-xl p-6 shadow-md card-hover">
              <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-4">
                <Coffee className="text-teal h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Coffee Chats</h3>
              <p className="text-muted-foreground">
                Weekly virtual coffee sessions to discuss tech, projects, and ideas in a casual setting.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-md card-hover">
              <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-teal h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Coding Projects</h3>
              <p className="text-muted-foreground">
                Collaborative open-source projects to build your portfolio and skills with peers.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-md card-hover">
              <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="text-teal h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Hackathons</h3>
              <p className="text-muted-foreground">
                Quarterly hackathons with themes, prizes, and mentorship from industry professionals.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-md card-hover">
              <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="text-teal h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Learning Resources</h3>
              <p className="text-muted-foreground">
                Curated learning paths, tutorials, and workshops for all skill levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="aspect-video bg-coffee/10 rounded-xl overflow-hidden relative">
                <div className="grid grid-cols-2 gap-4 p-4 absolute inset-0">
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=500&auto=format&fit=crop"
                      alt="Community coding"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=500&auto=format&fit=crop"
                      alt="Coffee chat"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=500&auto=format&fit=crop"
                      alt="Learning together"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=500&auto=format&fit=crop"
                      alt="Hackathon"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Our <span className="text-teal">Growing</span> Community
              </h2>
              <p className="text-lg mb-4 text-muted-foreground">
                Code Coffee Hack is more than just events and projects—it's a thriving community of developers supporting each other.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-teal/10 p-1 rounded">
                    <Users className="h-5 w-5 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Inclusive Environment</h3>
                    <p className="text-muted-foreground">Welcoming to developers of all skill levels and backgrounds.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-teal/10 p-1 rounded">
                    <Users className="h-5 w-5 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Peer Learning</h3>
                    <p className="text-muted-foreground">Learn from others and share your knowledge in a supportive space.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-teal/10 p-1 rounded">
                    <Users className="h-5 w-5 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Networking</h3>
                    <p className="text-muted-foreground">Connect with like-minded developers and build lasting relationships.</p>
                  </div>
                </li>
              </ul>
              <Button className="bg-teal hover:bg-teal-dark" asChild>
                <Link to="/join">
                  Join Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-16 bg-secondary/50 dark:bg-darkGray-light/20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Upcoming <span className="text-teal">Events</span>
            </h2>
            <Button variant="outline" asChild>
              <Link to="/events">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl overflow-hidden shadow-md card-hover">
              <div className="h-48 bg-coffee/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Calendar className="h-20 w-20 text-coffee opacity-20" />
                </div>
                <div className="absolute top-4 left-4 bg-teal text-white text-sm font-semibold px-3 py-1 rounded-full">
                  May 15, 2025
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Weekly Coffee Chat</h3>
                <p className="text-muted-foreground mb-4">
                  Join us for our weekly virtual coffee chat to discuss the latest in tech and connect with fellow developers.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Virtual • 7:00 PM EST</span>
                  <Button variant="ghost" size="sm" className="text-teal" asChild>
                    <Link to="/events">Details</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl overflow-hidden shadow-md card-hover">
              <div className="h-48 bg-coffee/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Calendar className="h-20 w-20 text-coffee opacity-20" />
                </div>
                <div className="absolute top-4 left-4 bg-teal text-white text-sm font-semibold px-3 py-1 rounded-full">
                  May 22, 2025
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Workshop: React Hooks Deep Dive</h3>
                <p className="text-muted-foreground mb-4">
                  An in-depth workshop on advanced React hooks patterns with practical examples and exercises.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Virtual • 6:00 PM EST</span>
                  <Button variant="ghost" size="sm" className="text-teal" asChild>
                    <Link to="/events">Details</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl overflow-hidden shadow-md card-hover">
              <div className="h-48 bg-coffee/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Calendar className="h-20 w-20 text-coffee opacity-20" />
                </div>
                <div className="absolute top-4 left-4 bg-teal text-white text-sm font-semibold px-3 py-1 rounded-full">
                  June 10-12, 2025
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Summer Hackathon 2025</h3>
                <p className="text-muted-foreground mb-4">
                  Our quarterly hackathon with the theme "Sustainable Tech". Join teams and build innovative solutions.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Hybrid • Multiple Times</span>
                  <Button variant="ghost" size="sm" className="text-teal" asChild>
                    <Link to="/events">Details</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-teal/90 to-teal-dark text-white">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to join our community?</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Connect with fellow developers, collaborate on projects, learn new skills, and enjoy the perfect blend of code and coffee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/join">Join Community</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white hover:bg-white/10" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
