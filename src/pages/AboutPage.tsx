
import { Coffee, Code, Users, Heart, Target, Shield } from "lucide-react";

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 bg-secondary/50 dark:bg-darkGray-light/20">
        <div className="container max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Learn more about our community, our mission, and the values that drive Code Coffee Hack.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-teal">Story</span>
              </h2>
              <p className="text-lg mb-4 text-muted-foreground">
                Code Coffee Hack began in 2023 when a group of developers realized they were all struggling with the same issue: finding a supportive community to grow with.
              </p>
              <p className="text-lg mb-4 text-muted-foreground">
                What started as casual coffee meetups to discuss code and share ideas quickly grew into a vibrant community. Our founders noticed how the combination of coffee and coding created a relaxed atmosphere that fostered creativity and collaboration.
              </p>
              <p className="text-lg mb-4 text-muted-foreground">
                Today, Code Coffee Hack has evolved into a global community of developers at all stages of their journeys, connected by a shared love for code, coffee, and community.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-square bg-coffee/10 rounded-xl overflow-hidden relative">
                <div className="grid grid-cols-2 gap-4 p-4 absolute inset-0">
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=500&auto=format&fit=crop"
                      alt="Team collaboration"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden row-span-2 col-start-2">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-secondary/50 dark:bg-darkGray-light/20 px-4">
        <div className="container max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="text-teal">Mission</span>
          </h2>
          <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-4xl mx-auto">
            To create an inclusive and supportive environment where developers of all skill levels can connect, collaborate, and grow together through the shared enjoyment of code and coffee.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 shadow-md flex flex-col items-center card-hover">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                <Coffee className="text-teal h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Connect</h3>
              <p className="text-muted-foreground">
                Bringing developers together in a relaxed, coffee-shop atmosphere to foster meaningful connections and friendships.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-md flex flex-col items-center card-hover">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                <Code className="text-teal h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Collaborate</h3>
              <p className="text-muted-foreground">
                Facilitating collaborative projects and hackathons that encourage teamwork and the exchange of ideas.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-md flex flex-col items-center card-hover">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                <Users className="text-teal h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Grow</h3>
              <p className="text-muted-foreground">
                Providing resources, mentorship, and learning opportunities to help members advance their skills and careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our <span className="text-teal">Values</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="mt-1">
                <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center">
                  <Heart className="text-teal h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Inclusivity</h3>
                <p className="text-muted-foreground">
                  We welcome developers of all backgrounds, skill levels, and perspectives. Our community thrives on diversity and makes everyone feel valued and respected.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="mt-1">
                <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center">
                  <Users className="text-teal h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                <p className="text-muted-foreground">
                  We believe that the best ideas emerge when people work together. We encourage knowledge sharing and teamwork in all our activities.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="mt-1">
                <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center">
                  <Target className="text-teal h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
                <p className="text-muted-foreground">
                  We embrace a growth mindset and are committed to lifelong learning. We provide resources and support for members to expand their knowledge and skills.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="mt-1">
                <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center">
                  <Shield className="text-teal h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Quality & Ethics</h3>
                <p className="text-muted-foreground">
                  We promote best practices in coding and ethical considerations in tech. We believe in building technology that makes a positive impact on society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-secondary/50 dark:bg-darkGray-light/20 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Meet Our <span className="text-teal">Team</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card rounded-xl overflow-hidden shadow-md text-center card-hover">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop"
                  alt="Sarah Johnson"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Maya Singh</h3>
                <p className="text-teal mb-3">Co-Founder, Community Lead</p>
                <p className="text-muted-foreground text-sm">
                  Full-stack developer passionate about community building and mentorship.
                </p>
              </div>
            </div>
            
            <div className="bg-card rounded-xl overflow-hidden shadow-md text-center card-hover">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop"
                  alt="David Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Devesh Raj</h3>
                <p className="text-teal mb-3">Co-Founder, Technical Lead</p>
                <p className="text-muted-foreground text-sm">
                  Software architect with a passion for open source and developer education.
                </p>
              </div>
            </div>
            
            <div className="bg-card rounded-xl overflow-hidden shadow-md text-center card-hover">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=500&auto=format&fit=crop"
                  alt="Maya Rodriguez"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Suyash Sinha</h3>
                <p className="text-teal mb-3">Events Coordinator</p>
                <p className="text-muted-foreground text-sm">
                  Frontend developer and UX enthusiast who loves organizing hackathons.
                </p>
              </div>
            </div>
            
            <div className="bg-card rounded-xl overflow-hidden shadow-md text-center card-hover">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=500&auto=format&fit=crop"
                  alt="James Wilson"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Arpan Mondal</h3>
                <p className="text-teal mb-3">Content & Resources</p>
                <p className="text-muted-foreground text-sm">
                  Backend developer focused on creating learning resources and tutorials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
