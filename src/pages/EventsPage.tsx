
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Clock, Users, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import EventRegistrationForm from "@/components/EventRegistrationForm";

const EventsPage = () => {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isRegisterDialogOpen, setIsRegisterDialogOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<{id: number, title: string} | null>(null);

  const upcomingEvents = [
    {
      id: 1,
      title: "Weekly Coffee Chat",
      date: "May 15, 2025",
      time: "7:00 PM EST",
      location: "Virtual",
      type: "coffee-chat",
      description: "Join us for our weekly virtual coffee chat to discuss the latest in tech and connect with fellow developers.",
      image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Workshop: React Hooks Deep Dive",
      date: "May 22, 2025",
      time: "6:00 PM EST",
      location: "Virtual",
      type: "workshop",
      description: "An in-depth workshop on advanced React hooks patterns with practical examples and exercises.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Summer Hackathon 2025",
      date: "June 10-12, 2025",
      time: "Multiple Times",
      location: "Hybrid",
      type: "hackathon",
      description: "Our quarterly hackathon with the theme 'Sustainable Tech'. Join teams and build innovative solutions.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Code Review Session",
      date: "May 28, 2025",
      time: "5:00 PM EST",
      location: "Virtual",
      type: "workshop",
      description: "Get feedback on your code from experienced developers in a supportive environment.",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "In-Person Coffee Meetup - NYC",
      date: "June 5, 2025",
      time: "10:00 AM EST",
      location: "New York, NY",
      type: "coffee-chat",
      description: "Join fellow developers in NYC for coffee, coding talks, and networking.",
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Tech Talk: The Future of AI",
      date: "June 18, 2025",
      time: "7:00 PM EST",
      location: "Virtual",
      type: "talk",
      description: "An insightful talk on the current state and future of AI by industry experts.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=500&auto=format&fit=crop"
    }
  ];

  const pastEvents = [
    {
      id: 7,
      title: "Spring Hackathon 2025",
      date: "March 15-17, 2025",
      location: "Virtual",
      type: "hackathon",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=500&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=500&auto=format&fit=crop"
      ]
    },
    {
      id: 8,
      title: "Workshop: Introduction to TypeScript",
      date: "April 10, 2025",
      location: "Virtual",
      type: "workshop",
      image: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=500&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500&auto=format&fit=crop"
      ]
    },
    {
      id: 9,
      title: "In-Person Coffee Meetup - SF",
      date: "April 25, 2025",
      location: "San Francisco, CA",
      type: "coffee-chat",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?q=80&w=500&auto=format&fit=crop"
      ]
    }
  ];

  const filteredUpcomingEvents = upcomingEvents.filter(event => {
    const matchesFilter = filter === "all" || event.type === filter;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleRegisterClick = (event: {id: number, title: string}) => {
    setSelectedEvent(event);
    setIsRegisterDialogOpen(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 bg-secondary/50 dark:bg-darkGray-light/20">
        <div className="container max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Events</h1>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Connect with our community through coffee chats, workshops, hackathons, and more.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events Gallery</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                <div className="flex items-center space-x-2">
                  <Filter className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">Filter by:</span>
                  <Button 
                    variant={filter === "all" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilter("all")}
                    className={filter === "all" ? "bg-teal hover:bg-teal-dark" : ""}
                  >
                    All
                  </Button>
                  <Button 
                    variant={filter === "coffee-chat" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilter("coffee-chat")}
                    className={filter === "coffee-chat" ? "bg-teal hover:bg-teal-dark" : ""}
                  >
                    Coffee Chats
                  </Button>
                  <Button 
                    variant={filter === "workshop" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilter("workshop")}
                    className={filter === "workshop" ? "bg-teal hover:bg-teal-dark" : ""}
                  >
                    Workshops
                  </Button>
                  <Button 
                    variant={filter === "hackathon" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilter("hackathon")}
                    className={filter === "hackathon" ? "bg-teal hover:bg-teal-dark" : ""}
                  >
                    Hackathons
                  </Button>
                </div>
                <div className="relative max-w-xs w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search events..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredUpcomingEvents.length > 0 ? (
                  filteredUpcomingEvents.map((event) => (
                    <div key={event.id} className="bg-card rounded-xl overflow-hidden shadow-md card-hover">
                      <div className="h-48 overflow-hidden relative">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-teal text-white text-sm font-semibold px-3 py-1 rounded-full">
                          {event.date}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                        <p className="text-muted-foreground mb-4">
                          {event.description}
                        </p>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <Button 
                          className="w-full bg-teal hover:bg-teal-dark"
                          onClick={() => handleRegisterClick(event)}
                        >
                          Register Now
                        </Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-lg text-muted-foreground">No events found matching your criteria.</p>
                    <Button 
                      variant="link" 
                      onClick={() => {
                        setFilter("all");
                        setSearchQuery("");
                      }}
                      className="text-teal mt-2"
                    >
                      Clear filters
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="past">
              <h2 className="text-2xl font-bold mb-8 text-center">
                Event <span className="text-teal">Highlights</span>
              </h2>
              
              <div className="space-y-16">
                {pastEvents.map((event) => (
                  <div key={event.id} className="bg-card rounded-xl overflow-hidden shadow-md p-6">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/3">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <h3 className="text-xl font-bold mt-4 mb-2">{event.title}</h3>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Users className="h-4 w-4 mr-2" />
                            <span>120+ Participants</span>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h4 className="text-lg font-semibold mb-4">Photo Gallery</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {event.gallery.map((img, idx) => (
                            <div key={idx} className="rounded-lg overflow-hidden h-40">
                              <img
                                src={img}
                                alt={`${event.title} photo ${idx + 1}`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-secondary/50 dark:bg-darkGray-light/20">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Want to host an event?</h2>
          <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
            We welcome community-led events! If you have an idea for a workshop, talk, or any other event, we'd love to help you make it happen.
          </p>
          <Button size="lg" className="bg-teal hover:bg-teal-dark">
            Propose an Event
          </Button>
        </div>
      </section>

      {/* Registration Dialog */}
      <Dialog open={isRegisterDialogOpen} onOpenChange={setIsRegisterDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl">
              Register for {selectedEvent?.title}
            </DialogTitle>
            <DialogDescription>
              Complete the form below to secure your spot.
            </DialogDescription>
          </DialogHeader>
          
          {selectedEvent && (
            <EventRegistrationForm 
              eventId={selectedEvent.id}
              eventTitle={selectedEvent.title}
              onSubmitSuccess={() => setIsRegisterDialogOpen(false)}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EventsPage;
