
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Bookmark, Search, ExternalLink, BookOpen, Play, ArrowRight, Filter } from "lucide-react";

const ResourcesPage = () => {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const roadmaps = [
    {
      id: 1,
      title: "Frontend Development Roadmap",
      description: "A comprehensive guide to becoming a frontend developer, covering HTML, CSS, JavaScript, and modern frameworks.",
      image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?q=80&w=500&auto=format&fit=crop",
      level: "beginner",
      tags: ["Frontend", "JavaScript", "React", "CSS"],
      url: "/resources/roadmaps/frontend"
    },
    {
      id: 2,
      title: "Backend Development Roadmap",
      description: "Learn the skills needed to become a backend developer, including server-side languages, databases, and API design.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=500&auto=format&fit=crop",
      level: "beginner",
      tags: ["Backend", "Node.js", "Python", "Databases"],
      url: "/resources/roadmaps/backend"
    },
    {
      id: 3,
      title: "Full Stack Development Roadmap",
      description: "A complete guide to becoming a full stack developer, combining frontend and backend skills.",
      image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=500&auto=format&fit=crop",
      level: "intermediate",
      tags: ["Full Stack", "MERN", "DevOps", "Testing"],
      url: "/resources/roadmaps/fullstack"
    },
    {
      id: 4,
      title: "Mobile App Development Roadmap",
      description: "A guide to becoming a mobile app developer using React Native or Flutter.",
      image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=500&auto=format&fit=crop",
      level: "intermediate",
      tags: ["Mobile", "React Native", "Flutter", "iOS", "Android"],
      url: "/resources/roadmaps/mobile"
    },
    {
      id: 5,
      title: "Machine Learning Roadmap",
      description: "A comprehensive guide to entering the field of machine learning and AI.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=500&auto=format&fit=crop",
      level: "advanced",
      tags: ["ML", "AI", "Python", "TensorFlow", "Data Science"],
      url: "/resources/roadmaps/machine-learning"
    },
    {
      id: 6,
      title: "Cloud & DevOps Roadmap",
      description: "Learn the skills needed for cloud computing and DevOps engineering.",
      image: "https://images.unsplash.com/photo-1539269071019-8bc6d57b0205?q=80&w=500&auto=format&fit=crop",
      level: "advanced",
      tags: ["DevOps", "AWS", "Docker", "Kubernetes", "CI/CD"],
      url: "/resources/roadmaps/devops"
    }
  ];

  const blogs = [
    {
      id: 1,
      title: "Getting Started with TypeScript: A Beginner's Guide",
      excerpt: "Learn the basics of TypeScript and how it can improve your JavaScript development experience.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=500&auto=format&fit=crop",
      author: "Sarah Johnson",
      date: "April 10, 2025",
      tags: ["TypeScript", "JavaScript", "Web Development"],
      url: "/blog/getting-started-with-typescript"
    },
    {
      id: 2,
      title: "Building a REST API with Node.js and Express",
      excerpt: "A step-by-step tutorial on how to create a RESTful API using Node.js and Express.",
      image: "https://images.unsplash.com/photo-1617839671444-79de34842465?q=80&w=500&auto=format&fit=crop",
      author: "David Chen",
      date: "March 25, 2025",
      tags: ["Node.js", "Express", "API", "Backend"],
      url: "/blog/building-rest-api-nodejs-express"
    },
    {
      id: 3,
      title: "Understanding React Hooks: useEffect Explained",
      excerpt: "Deep dive into React's useEffect hook and how to use it effectively in your applications.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=500&auto=format&fit=crop",
      author: "Maya Rodriguez",
      date: "March 18, 2025",
      tags: ["React", "Hooks", "JavaScript", "Frontend"],
      url: "/blog/understanding-react-hooks-useeffect"
    },
    {
      id: 4,
      title: "Introduction to Docker for Developers",
      excerpt: "Learn how Docker can simplify your development workflow and improve deployment consistency.",
      image: "https://images.unsplash.com/photo-1605745341040-85c2221f5942?q=80&w=500&auto=format&fit=crop",
      author: "James Wilson",
      date: "March 5, 2025",
      tags: ["Docker", "DevOps", "Containers"],
      url: "/blog/introduction-to-docker-developers"
    },
    {
      id: 5,
      title: "Optimizing Website Performance: Tips and Tricks",
      excerpt: "Practical strategies to improve your website's loading speed and overall performance.",
      image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=500&auto=format&fit=crop",
      author: "Sarah Johnson",
      date: "February 28, 2025",
      tags: ["Performance", "Web Development", "Optimization"],
      url: "/blog/optimizing-website-performance"
    },
    {
      id: 6,
      title: "Getting Started with GraphQL",
      excerpt: "An introduction to GraphQL and how it differs from traditional REST APIs.",
      image: "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?q=80&w=500&auto=format&fit=crop",
      author: "David Chen",
      date: "February 15, 2025",
      tags: ["GraphQL", "API", "Web Development"],
      url: "/blog/getting-started-with-graphql"
    }
  ];

  const playlists = [
    {
      id: 1,
      title: "Modern JavaScript Fundamentals",
      description: "A comprehensive playlist covering modern JavaScript features and best practices.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=500&auto=format&fit=crop",
      videos: 12,
      duration: "3 hours",
      level: "beginner",
      url: "https://youtube.com/playlist?list=example1"
    },
    {
      id: 2,
      title: "React Hooks Deep Dive",
      description: "Master React Hooks with this in-depth playlist covering all the built-in hooks and custom hook patterns.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=500&auto=format&fit=crop",
      videos: 8,
      duration: "2.5 hours",
      level: "intermediate",
      url: "https://youtube.com/playlist?list=example2"
    },
    {
      id: 3,
      title: "Building a Full Stack App with MERN",
      description: "Follow along as we build a complete web application using MongoDB, Express, React, and Node.js.",
      image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=500&auto=format&fit=crop",
      videos: 15,
      duration: "5 hours",
      level: "intermediate",
      url: "https://youtube.com/playlist?list=example3"
    },
    {
      id: 4,
      title: "TypeScript for React Developers",
      description: "Learn how to use TypeScript with React to build type-safe applications.",
      image: "https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?q=80&w=500&auto=format&fit=crop",
      videos: 10,
      duration: "3.5 hours",
      level: "intermediate",
      url: "https://youtube.com/playlist?list=example4"
    },
    {
      id: 5,
      title: "Advanced CSS Techniques",
      description: "Master advanced CSS concepts like Grid, Flexbox, Custom Properties, and CSS animations.",
      image: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?q=80&w=500&auto=format&fit=crop",
      videos: 14,
      duration: "4 hours",
      level: "advanced",
      url: "https://youtube.com/playlist?list=example5"
    },
    {
      id: 6,
      title: "Microservices Architecture",
      description: "A deep dive into building and deploying microservices-based applications.",
      image: "https://images.unsplash.com/photo-1539269071019-8bc6d57b0205?q=80&w=500&auto=format&fit=crop",
      videos: 18,
      duration: "6 hours",
      level: "advanced",
      url: "https://youtube.com/playlist?list=example6"
    }
  ];

  const filterRoadmaps = () => {
    return roadmaps.filter(roadmap => {
      const matchesFilter = filter === "all" || roadmap.level === filter;
      const matchesSearch = roadmap.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           roadmap.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           roadmap.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  };

  const filterBlogs = () => {
    return blogs.filter(blog => {
      const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesSearch;
    });
  };

  const filterPlaylists = () => {
    return playlists.filter(playlist => {
      const matchesFilter = filter === "all" || playlist.level === filter;
      const matchesSearch = playlist.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           playlist.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 bg-secondary/50 dark:bg-darkGray-light/20">
        <div className="container max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources</h1>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Explore our curated learning resources, including roadmaps, blog posts, and video playlists.
          </p>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="text-muted-foreground">Filter by level:</span>
              <Button 
                variant={filter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("all")}
                className={filter === "all" ? "bg-teal hover:bg-teal-dark" : ""}
              >
                All Levels
              </Button>
              <Button 
                variant={filter === "beginner" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("beginner")}
                className={filter === "beginner" ? "bg-teal hover:bg-teal-dark" : ""}
              >
                Beginner
              </Button>
              <Button 
                variant={filter === "intermediate" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("intermediate")}
                className={filter === "intermediate" ? "bg-teal hover:bg-teal-dark" : ""}
              >
                Intermediate
              </Button>
              <Button 
                variant={filter === "advanced" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("advanced")}
                className={filter === "advanced" ? "bg-teal hover:bg-teal-dark" : ""}
              >
                Advanced
              </Button>
            </div>
            <div className="relative max-w-xs w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search resources..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <Tabs defaultValue="roadmaps" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="roadmaps">Learning Roadmaps</TabsTrigger>
              <TabsTrigger value="blogs">Blog Posts</TabsTrigger>
              <TabsTrigger value="playlists">Video Playlists</TabsTrigger>
            </TabsList>
            
            <TabsContent value="roadmaps">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filterRoadmaps().length > 0 ? (
                  filterRoadmaps().map((roadmap) => (
                    <div key={roadmap.id} className="bg-card rounded-xl overflow-hidden shadow-md flex flex-col card-hover">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={roadmap.image}
                          alt={roadmap.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 flex-grow">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold">{roadmap.title}</h3>
                          <Badge className={`
                            ${roadmap.level === "beginner" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100" : ""}
                            ${roadmap.level === "intermediate" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100" : ""}
                            ${roadmap.level === "advanced" ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100" : ""}
                          `}>
                            {roadmap.level.charAt(0).toUpperCase() + roadmap.level.slice(1)}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-4">
                          {roadmap.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {roadmap.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="bg-teal/10 text-teal-dark dark:text-teal-light">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="p-6 pt-0 mt-auto">
                        <Button className="w-full bg-teal hover:bg-teal-dark" asChild>
                          <a href={roadmap.url}>
                            <BookOpen className="h-4 w-4 mr-2" /> View Roadmap
                          </a>
                        </Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-lg text-muted-foreground">No roadmaps found matching your criteria.</p>
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
            
            <TabsContent value="blogs">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filterBlogs().length > 0 ? (
                  filterBlogs().map((blog) => (
                    <div key={blog.id} className="bg-card rounded-xl overflow-hidden shadow-md flex flex-col card-hover">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 flex-grow">
                        <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                        <p className="text-muted-foreground mb-4">
                          {blog.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {blog.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="bg-teal/10 text-teal-dark dark:text-teal-light">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex justify-between text-sm text-muted-foreground mb-4">
                          <span>{blog.author}</span>
                          <span>{blog.date}</span>
                        </div>
                      </div>
                      <div className="p-6 pt-0 mt-auto">
                        <Button className="w-full bg-teal hover:bg-teal-dark" asChild>
                          <a href={blog.url}>
                            <Bookmark className="h-4 w-4 mr-2" /> Read Article
                          </a>
                        </Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-lg text-muted-foreground">No blog posts found matching your criteria.</p>
                    <Button 
                      variant="link" 
                      onClick={() => {
                        setSearchQuery("");
                      }}
                      className="text-teal mt-2"
                    >
                      Clear search
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="playlists">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filterPlaylists().length > 0 ? (
                  filterPlaylists().map((playlist) => (
                    <div key={playlist.id} className="bg-card rounded-xl overflow-hidden shadow-md flex flex-col card-hover">
                      <div className="h-48 overflow-hidden relative">
                        <img
                          src={playlist.image}
                          alt={playlist.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <Play className="h-16 w-16 text-white opacity-80" />
                        </div>
                      </div>
                      <div className="p-6 flex-grow">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold">{playlist.title}</h3>
                          <Badge className={`
                            ${playlist.level === "beginner" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100" : ""}
                            ${playlist.level === "intermediate" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100" : ""}
                            ${playlist.level === "advanced" ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100" : ""}
                          `}>
                            {playlist.level.charAt(0).toUpperCase() + playlist.level.slice(1)}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-4">
                          {playlist.description}
                        </p>
                        <div className="flex justify-between text-sm text-muted-foreground mb-4">
                          <span>{playlist.videos} videos</span>
                          <span>{playlist.duration}</span>
                        </div>
                      </div>
                      <div className="p-6 pt-0 mt-auto">
                        <Button className="w-full bg-teal hover:bg-teal-dark" asChild>
                          <a href={playlist.url} target="_blank" rel="noopener noreferrer">
                            <Play className="h-4 w-4 mr-2" /> Watch Playlist
                          </a>
                        </Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-lg text-muted-foreground">No playlists found matching your criteria.</p>
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
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-secondary/50 dark:bg-darkGray-light/20">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Want to contribute?</h2>
          <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
            Have a great resource, blog post, or tutorial you'd like to share with our community? We welcome contributions!
          </p>
          <Button size="lg" className="bg-teal hover:bg-teal-dark" asChild>
            <a href="https://github.com/codecoffeehack/resources" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-5 w-5 mr-2" /> Submit a Resource
            </a>
          </Button>
        </div>
      </section>
      
      {/* Additional Resources */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            More <span className="text-teal">Resources</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a 
              href="https://discord.gg/codecoffeehack"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-xl p-6 shadow-md flex gap-4 card-hover"
            >
              <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-teal" fill="currentColor">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.198.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Join Our Discord</h3>
                <p className="text-muted-foreground mb-2">
                  Connect with other developers, get help with coding problems, and share resources.
                </p>
                <div className="flex items-center text-teal text-sm font-medium">
                  Join Now <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </a>
            
            <a 
              href="https://codecoffeehack.notion.site"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-xl p-6 shadow-md flex gap-4 card-hover"
            >
              <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-teal" fill="currentColor">
                  <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zm-1.868 3.314c0 .8.374 1.107 1.541 1.107v-2.213c-1.167 0-1.541.28-1.541 1.106zm-11.689-.186v7.232c0 .373-.374.6-.747.513l-.841-.186V9.667l.841-.7c.42-.046.747.186.747.56z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Notion Wiki</h3>
                <p className="text-muted-foreground mb-2">
                  Explore our comprehensive wiki with guides, templates, and documentation.
                </p>
                <div className="flex items-center text-teal text-sm font-medium">
                  View Wiki <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </a>
            
            <a 
              href="https://github.com/codecoffeehack"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-xl p-6 shadow-md flex gap-4 card-hover"
            >
              <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-teal" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">GitHub Projects</h3>
                <p className="text-muted-foreground mb-2">
                  Check out our open-source projects and contribute to the community.
                </p>
                <div className="flex items-center text-teal text-sm font-medium">
                  Browse GitHub <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </a>
            
            <a 
              href="/events"
              className="bg-card rounded-xl p-6 shadow-md flex gap-4 card-hover"
            >
              <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-teal" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Workshops & Events</h3>
                <p className="text-muted-foreground mb-2">
                  Join our workshops, hackathons, and community events to learn and network.
                </p>
                <div className="flex items-center text-teal text-sm font-medium">
                  View Events <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResourcesPage;
