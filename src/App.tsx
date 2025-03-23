import React, { useEffect, useState } from "react";
import { Menu, X, Github, Instagram, Linkedin, Facebook } from "lucide-react";
import logo from "./assets/1-removebg-preview.png";
import NavLink from "./components/NavLink";
import Section from "./components/Section";
import TeamCard from "./components/TeamCard";
import EventCard from "./components/EventCard";
import GalleryImage from "./components/GalleryImage";
import ScrollContainer from "./components/ScrollContainer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = document.querySelectorAll(".section-fade-in");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.1 }
      );

      sections.forEach((section) => observer.observe(section));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#team", label: "Team" },
    { href: "#events", label: "Events" },
    { href: "#magazine", label: "E-Magazine" },
    { href: "#gallery", label: "Gallery" },
  ];

  const teamMembers = [
    {
      name: "Sovit Pratim",
      role: "President",
      image: "/team/sovit.jpg",
    },
    {
      name: "Prabal Choudhury",
      role: "Vice President",
      image: "/team/prabal.jpg",
    },
    {
      name: "Jitu Saha",
      role: "Secretary",
      image: "/team/jitu.jpg",
    },
    {
      name: "Dimple Medhi",
      role: "Joint Secretary",
      image: "/team/dimple.jpg",
    },
    {
      name: "Dhritiman Sarma",
      role: "Treasurer",
      image: "/team/dhritiman.jpg",
    },
    {
      name: "Bastab Bora",
      role: "Event Management",
      image: "/team/bastab.jpg",
    },
    {
      name: "Manalisha Bora",
      role: "Event Management",
      image: "/team/manalisha.jpg",
    },
    {
      name: "Neehar Kakaty",
      role: "Video Editor",
      image: "/team/neehar.jpg",
    },
    {
      name: "Aman Seal",
      role: "Technical Team",
      image: "/team/aman.jpg",
    },
    {
      name: "Jahnu Patowary",
      role: "Technical Team",
      image: "/team/jahnu.jpg",
    },
    {
      name: "Sumanta Das",
      role: "Technical Team",
      image: "/team/sumanta.jpg",
    },
    {
      name: "Kapil Sarmah",
      role: "Technology Team",
      image: "/team/kapil.jpg",
    },
    {
      name: "Nishant Rabha",
      role: "Technology Team",
      image: "/team/nishant.jpg",
    },
    {
      name: "Pratiksha Borkakoty",
      role: "Media & Publicity",
      image: "/team/pratiksha.jpg",
    },
    {
      name: "Riyan Rishav Deka",
      role: "Media & Publicity",
      image: "/team/riyan.jpg",
    },
    {
      name: "Sneha Choudhury",
      role: "Media & Publicity",
      image: "/team/sneha.jpg",
    },
    {
      name: "Abhispa Dutta",
      role: "Graphics Team",
      image: "/team/abhipsa.jpg",
    },
    {
      name: "Hridayan Nath",
      role: "Graphics Team",
      image: "/team/hridayan.jpg",
    },
    {
      name: "Mandisha Shivam",
      role: "Graphics Team",
      image: "/team/mandisha.jpg",
    },
    {
      name: "Dikshita Dutta",
      role: "Astronomy Team",
      image: "/team/dikshita.jpg",
    },
    {
      name: "Kristina Deka",
      role: "E-magazine Team",
      image: "/team/kristina.jpg",
    },
    {
      name: "Prakash Kalita",
      role: "E-magazine Team",
      image: "/team/prakash.jpg",
    },
  ];

  // const magazines = [
  //   {
  //     title: "Beyond the Stars",
  //     issue: "Latest Issue",
  //     description:
  //       "Explore our latest collection of articles about space technology.",
  //     image:
  //       "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&q=80&w=1200",
  //   },
  //   {
  //     title: "Mars Colonization",
  //     issue: "Special Edition",
  //     description: "In-depth analysis of Mars colonization technologies.",
  //     image:
  //       "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
  //   },
  //   {
  //     title: "Space Startups",
  //     issue: "Innovation Issue",
  //     description: "Meet the companies shaping the future of space travel.",
  //     image:
  //       "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&q=80&w=1200",
  //   },
  // ];

  const events = [
    {
      title: "Space Quiz",
      date: "Oct 2, 2024",
      description:
        "The Space Technology Students' Society of IIT Kharagpur and the Space Technology Club of AEC joined forces for an unprecedented collaboration that brought together space enthusiasts from across Assam. This highly anticipated event, which brought together the expertise and passion of both institutions, was designed to foster knowledge-sharing, excitement, and a deeper understanding and appreciation of space technology through quizzes and presentations resulting in a highly enriching and engaging event.",
      image: "/events/space-quiz.png",
    },
    {
      title: "Astro-Photography",
      date: "Jan 26 - Feb 18, 2025",
      description:
        "A photography competition, focused on capturing the beauty of the night sky – stars and planets – drew students from across the region. A secluded plateau, chosen for its minimal light pollution, became the venue. As dusk fell, tripods and telescopes were set up, ready to record the celestial display. Students aimed to capture the Milky Way, nebulae, and planetary movements.",
      image: "/events/astro-photography.jpeg",
    },
    {
      title: "CosmoThink",
      date: "Sept 13, 2024",
      description:
        "The Space Technology Club of our college organized a captivating event titled Cosmothink exclusively for the freshers of the 2024 batch. This event was designed to ignite creativity, test knowledge, and encourage teamwork among the participants, while also introducing them to the wonders of space technology in an engaging and enjoyable manner.",
      image: "/events/cosmothink.jpeg",
    },
    {
      title: "Beyond The Lab",
      date: "Feb 26, 2025",
      description:
        "Beyond the Lab is the most awaited mega event from Space Technology Club which is held under Udbhavanam and Pyrokinesis. The Beyond the lab 3.0 was organized on 26 February, 2025 which was the first day of our cultural cum technical fest of our college. The event was based on an open themed science exhibition competition which consisted both software and hardware based projects. The students who participated came from different parts of Assam",
      image: "/events/beyond-the-lab.jpeg",
    },
  ];

  const galleryImages = [
    "/gallery/1.jpg",
    "/gallery/2.jpg",
    "/gallery/6.jpg",
    "/gallery/7.jpg",
    "/gallery/4.jpg",
    "/gallery/5.jpg",
    "/gallery/3.jpg",
    "/gallery/10.jpg",
    "/gallery/8.jpg",
    "/gallery/9.jpg",
  ];

  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Stars Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black"></div>
        <div id="stars" className="absolute inset-0"></div>
        <div id="stars2" className="absolute inset-0"></div>
        <div id="stars3" className="absolute inset-0"></div>
      </div>

      {/* Navbar
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrollY > 50 ? "bg-black/80 backdrop-blur-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img src={logo} alt="Logo" className="h-10 w-auto" />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <NavLink key={link.href} {...link} />
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        Mobile menu
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-md">
              {navLinks.map((link) => (
                <NavLink key={link.href} {...link} mobile />
              ))}
            </div>
          </div>
        )}
      </nav> */}

      {/* Navbar */}
      {/* <nav

      
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrollY > 50 ? "bg-black/80 backdrop-blur-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            Logo on the Left
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img src={logo} alt="Logo" className="h-10 w-auto" />
              </div>
            </div>

            Centered Navigation Links
            <div className="hidden md:flex flex-1 justify-center">
              <div className="flex space-x-6">
                {navLinks.map((link) => (
                  <NavLink key={link.href} {...link} />
                ))}
              </div>
            </div>

            Mobile Menu Button on the Right
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        Mobile menu
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-md">
              {navLinks.map((link) => (
                <NavLink key={link.href} {...link} mobile />
              ))}
            </div>
          </div>
        )}
      </nav> */}

      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrollY > 50 ? "bg-black/80 backdrop-blur-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 px-12">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img src={logo} alt="Logo" className="h-12 w-auto" />
              </div>
            </div>
            {/* <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-7">
                {navLinks.map((link) => (
                  <NavLink key={link.href} {...link} />
                ))}
              </div>
            </div> */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-10">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    {...link}
                    className="transition-transform duration-300 transform hover:scale-110"
                  />
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-md">
              {navLinks.map((link) => (
                <NavLink key={link.href} {...link} mobile />
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Section
          id="home"
          className="relative min-h-screen flex items-center justify-center text-white"
        >
          {/* Background Animation (Ensure it's implemented in your CSS) */}
          {/* <div className="absolute inset-0 z-0">
            <div className="stars"></div>
            <div className="twinkling"></div>
          </div> */}

          {/* Content Container (Transparent) */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 md:px-12">
            {/* Left: Text Content */}
            <div className="space-y-6 text-center md:text-left bg-transparent p-6 rounded-xl backdrop-blur-md">
              <div className="space-y-8 animate-float">
                <h1 className="text-5xl md:text-7xl font-bold animate-glow">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                    Explore the Future with STC
                  </span>
                </h1>
                <p className="text-lg text-gray-300">
                  The Assam Engineering College Space Technology Club (STC),
                  founded in 2021, fosters space technology and astronomy
                  through hands-on projects and research.{" "}
                  {isExpanded &&
                    "STC bridges academia with real-world applications via workshops, competitions, and industry collaborations. Projects like the Lachit MK-1 rocket and research into satellite communication and AI-driven space systems showcase their innovation. They engage in telescope observations, astrophotography, and publish the Noikhotro e-magazine, sharing space technology and astronomy breakthroughs. STC aims to inspire future space pioneers and actively participates in national and international competitions."}
                </p>

                {/* Toggle Button */}
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="px-6 py-2 bg-purple-600 rounded-full hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative animate-float flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
                alt="Space Technology"
                className="rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
              />
            </div>
          </div>
        </Section>

        {/* Team Section */}
        <Section id="team" title="Our Team">
          <ScrollContainer>
            <div className="flex space-x-6 px-4">
              {teamMembers.map((member) => (
                <div key={member.name} className="w-72 flex-shrink-0">
                  <TeamCard {...member} />
                </div>
              ))}
            </div>
          </ScrollContainer>
        </Section>
        {/* E-Magazine Section */}
        {/* <Section id="magazine" title="E-Magazine">
          <ScrollContainer>
            <div className="flex space-x-6 px-4">
              {magazines.map((magazine) => (
                <div key={magazine.title} className="w-96 flex-shrink-0">
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/10 hover:scale-105">
                    <img
                      src={magazine.image}
                      alt={magazine.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2 animate-glow">
                        {magazine.title}
                      </h3>
                      <p className="text-purple-400 mb-2">{magazine.issue}</p>
                      <p className="text-gray-300 mb-4">
                        {magazine.description}
                      </p>
                      <button className="px-6 py-2 bg-purple-600 rounded-full hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30">
                        Read Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollContainer>
        </Section> */}

        {/* Events Section */}
        <Section id="events" title="Events">
          <ScrollContainer>
            <div className="flex space-x-6 px-4">
              {events.map((event) => (
                <div key={event.title} className="w-96 flex-shrink-0">
                  <EventCard {...event} />
                </div>
              ))}
            </div>
          </ScrollContainer>
        </Section>

        {/* E-magazine */}
        <Section id="magazine" title="E-Magazine">
          <div className="flex items-center justify-center h-64 bg-white/5 backdrop-blur-lg rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-300">Coming Soon...</h2>
          </div>
        </Section>

        {/* Gallery Section */}
        <Section id="gallery" title="Gallery">
          <ScrollContainer>
            <div className="flex space-x-4 px-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="w-80 flex-shrink-0">
                  <GalleryImage src={image} />
                </div>
              ))}
            </div>
          </ScrollContainer>
        </Section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-black/50 backdrop-blur-md py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-6">
              {[
                // { icon: Facebook, href: "#" },
                // { icon: Instagram, href: "#" },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/space_technology_club_aec?igsh=b29jazl3MjN3NzUz",
                },
                // { icon: Github, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-6"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Space Technology Club. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
