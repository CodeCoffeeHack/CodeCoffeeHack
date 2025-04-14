
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Search, Filter, Star, GitFork, Users } from "lucide-react";

const ProjectsPage = () => {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const projects = [
    {
      id: 1,
      title: "DevCoffee",
      description: "A VS Code extension that helps developers track their coding time and coffee consumption. Perfect for finding your optimal caffeine-to-code ratio!",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500&auto=format&fit=crop",
      tags: ["TypeScript", "VS Code API", "React"],
      stars: 342,
      forks: 86,
      contributors: 12,
      category: "tool",
      github: "https://github.com/codecoffeehack/devcoffee",
      demo: "https://marketplace.visualstudio.com/items?itemName=CodeCoffeeHack.DevCoffee"
    },
    {
      id: 2,
      title: "Community Portal",
      description: "The open-source code for our community website. Feel free to contribute and help us improve the platform!",
      image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=500&auto=format&fit=crop",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      stars: 187,
      forks: 54,
      contributors: 24,
      category: "website",
      github: "https://github.com/codecoffeehack/community-portal",
      demo: "https://codecoffeehack.com"
    },
    {
      id: 3,
      title: "CoffeeQL",
      description: "A beginner-friendly GraphQL API for coffee shops, helping developers learn GraphQL while finding great coffee spots worldwide.",
      image: "https://images.unsplash.com/photo-1505364578412-2557c0c58436?q=80&w=500&auto=format&fit=crop",
      tags: ["GraphQL", "Node.js", "MongoDB"],
      stars: 256,
      forks: 72,
      contributors: 8,
      category: "api",
      github: "https://github.com/codecoffeehack/coffeeql",
      demo: "https://coffeeql.codecoffeehack.com"
    },
    {
      id: 4,
      title: "Code Beans",
      description: "An open-source collection of coding challenges for different skill levels, perfect for practicing during coffee breaks.",
      image: "https://images.unsplash.com/photo-1525373698358-041e3a460346?q=80&w=500&auto=format&fit=crop",
      tags: ["JavaScript", "Python", "Java", "Challenges"],
      stars: 423,
      forks: 124,
      contributors: 36,
      category: "education",
      github: "https://github.com/codecoffeehack/code-beans",
      demo: "https://code-beans.codecoffeehack.com"
    },
    {
      id: 5,
      title: "Barista CI/CD",
      description: "A simplified CI/CD pipeline for small projects, designed to be as easy to set up as ordering a coffee.",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=500&auto=format&fit=crop",
      tags: ["Docker", "GitHub Actions", "Bash"],
      stars: 178,
      forks: 43,
      contributors: 7,
      category: "tool",
      github: "https://github.com/codecoffeehack/barista-cicd",
      demo: "https://barista-cicd.codecoffeehack.com"
    },
    {
      id: 6,
      title: "Dev Café UI",
      description: "A beautiful, coffee-themed UI component library for React applications.",
      image: "https://images.unsplash.com/photo-1616628188502-0054a2f97cbe?q=80&w=500&auto=format&fit=crop",
      tags: ["React", "Styled Components", "TypeScript"],
      stars: 312,
      forks: 78,
      contributors: 15,
      category: "library",
      github: "https://github.com/codecoffeehack/devcafe-ui",
      demo: "https://devcafe-ui.codecoffeehack.com"
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === "all" || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 bg-secondary/50 dark:bg-darkGray-light/20">
        <div className="container max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Explore our open-source projects and join us in building amazing tools for the developer community.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-4">
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 sm:pb-0">
              <Filter className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              <span className="text-muted-foreground whitespace-nowrap">Filter by:</span>
              <Button 
                variant={filter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("all")}
                className={filter === "all" ? "bg-teal hover:bg-teal-dark whitespace-nowrap" : "whitespace-nowrap"}
              >
                All Projects
              </Button>
              <Button 
                variant={filter === "tool" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("tool")}
                className={filter === "tool" ? "bg-teal hover:bg-teal-dark whitespace-nowrap" : "whitespace-nowrap"}
              >
                Tools
              </Button>
              <Button 
                variant={filter === "website" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("website")}
                className={filter === "website" ? "bg-teal hover:bg-teal-dark whitespace-nowrap" : "whitespace-nowrap"}
              >
                Websites
              </Button>
              <Button 
                variant={filter === "api" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("api")}
                className={filter === "api" ? "bg-teal hover:bg-teal-dark whitespace-nowrap" : "whitespace-nowrap"}
              >
                APIs
              </Button>
              <Button 
                variant={filter === "library" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("library")}
                className={filter === "library" ? "bg-teal hover:bg-teal-dark whitespace-nowrap" : "whitespace-nowrap"}
              >
                Libraries
              </Button>
              <Button 
                variant={filter === "education" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("education")}
                className={filter === "education" ? "bg-teal hover:bg-teal-dark whitespace-nowrap" : "whitespace-nowrap"}
              >
                Education
              </Button>
            </div>
            <div className="relative max-w-xs w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search projects..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <div key={project.id} className="bg-card rounded-xl overflow-hidden shadow-md flex flex-col card-hover">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-teal/10 text-teal-dark dark:text-teal-light">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1" />
                        <span>{project.stars}</span>
                      </div>
                      <div className="flex items-center">
                        <GitFork className="h-4 w-4 mr-1" />
                        <span>{project.forks}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{project.contributors}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 pt-0 mt-auto">
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" /> Code
                        </a>
                      </Button>
                      <Button className="flex-1 bg-teal hover:bg-teal-dark" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" /> Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-lg text-muted-foreground">No projects found matching your criteria.</p>
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
        </div>
      </section>

      {/* Contribute Section */}
      <section className="py-16 px-4 bg-secondary/50 dark:bg-darkGray-light/20">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">How to Contribute</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We welcome contributions from developers of all skill levels. Here's how you can get involved with our open-source projects:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 shadow-md text-center flex flex-col items-center card-hover">
              <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-teal text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Find a Project</h3>
              <p className="text-muted-foreground">
                Browse our projects and find one that interests you or matches your skill set.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-md text-center flex flex-col items-center card-hover">
              <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-teal text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Check Issues</h3>
              <p className="text-muted-foreground">
                Look for open issues labeled "good first issue" or "help wanted" to start with.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-md text-center flex flex-col items-center card-hover">
              <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-teal text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Submit PR</h3>
              <p className="text-muted-foreground">
                Fork the repo, make your changes, and submit a pull request. We'll review it promptly!
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-teal hover:bg-teal-dark" asChild>
              <a href="https://github.com/codecoffeehack" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" /> Visit Our GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
