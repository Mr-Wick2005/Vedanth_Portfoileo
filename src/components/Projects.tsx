import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import Stack from "./Stack";
import collegebuzzImage from "../assets/collegebuzz project.png?url";
import escapeImage from "../assets/escape project.png?url";
import wingsImage from "../assets/wings project.png?url";
import hotelImage from "../assets/hotel project img.jpg?url";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects = [
    {
      title: "College Buzz",
      description: "A web platform for students to discover and explore college events, fests, workshops, and activities. Built using HTML, CSS, JavaScript, Node.js, and MySQL, it includes separate login/registration for students and colleges, an admin panel for event poster uploads (saved in the database or Cloudinary), and a clean, professional UI.",
      role: "Full-Stack Developer (Frontend + Backend)",
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL", "Cloudinary"],
      color: "from-purple-600 to-blue-600",
      image: collegebuzzImage,
      link: "https://cb-react-1.onrender.com", // Add your project link here
    },
    {
      title: "Escape Placement Cell (EPC)",
      description: "A gamified web platform that simulates the entire campus placement process through an interactive 3D escape room experience. It features three levels — Aptitude Test, Coding Challenge, and an AI-powered Interview — all integrated into one engaging system. Built using React, JavaScript, Python (FastAPI), MongoDB, and Three.js, EPC automatically evaluates code, analyzes interview responses using AI, and generates instant personalized performance summaries.",
      role: "Full-Stack Developer & Game Logic Designer",
      tech: ["React", "JavaScript", "Python", "FastAPI", "MongoDB", "Three.js", "AI"],
      color: "from-pink-600 to-orange-600",
      image: escapeImage,
      link: "https://github.com/Mr-Wick2005/escaperoomveda", // Add your project link here
    },
    {
      title: "Wings Studios India Website",
      description: "A professional, black-themed website developed for a film production house client specializing in filmmaking, editing, dubbing, VFX, and green room services. Built using a modern React-based tech stack with Tailwind CSS for styling and optimized for SEO and Google publishing. Designed to reflect a cinematic and premium brand identity, the website delivers smooth navigation, dynamic visuals, and high performance.",
      role: "Frontend Developer & UI/UX Designer",
      tech: ["React", "Tailwind CSS", "JavaScript", "SEO"],
      color: "from-cyan-600 to-blue-600",
      image: wingsImage,
      link: "https://www.wingsstudiosindia.net/", // Add your project link here
    },
    {
      title: "Hotel Management System",
      description: "A mini project developed using React, designed to manage hotel operations such as room bookings, customer details, and service records efficiently. It focuses on a simple and clean user interface for easy management.",
      role: "Frontend Developer",
      tech: ["React", "JavaScript"],
      color: "from-violet-600 to-purple-600",
      image: hotelImage,
      link: "https://github.com/krrishmahar/veda-app.git", // Add your project link here
    },
    // {
    //   title: "Three Bowl Shuffle Game",
    //   description: "A GUI-based mini-game built using Python and Pygame, where the player guesses the position of a hidden ball after shuffling bowls.",
    //   role: "Game Developer",
    //   tech: ["Python", "Pygame"],
    //   color: "from-green-600 to-teal-600",
    //   image: hotelImage,
    //   link: "#", // Add your project link here
    // },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="relative min-h-screen bg-[#0a0a0a] py-32 px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2
            className="text-6xl text-white tracking-tight mb-4"
            style={{ fontWeight: 700 }}
          >
            My Work
          </h2>
          <p className="text-gray-400 text-xl">
            Drag or click cards to explore projects
          </p>
        </motion.div>

        {/* Single Stack with All Projects */}
        <div className="w-full" style={{ height: '800px' }}>
          <Stack
            randomRotation={true}
            sensitivity={150}
            sendToBackOnClick={true}
            pauseOnHover={true}
            cards={projects.map((project, index) => (
              <div
                key={index}
                className="glass-panel p-8 md:p-12 rounded-3xl overflow-hidden w-full h-full"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
              >
                {/* Content */}
                <div className="relative z-10 mb-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                    <div className="flex-1">
                      <h3
                        className="text-4xl md:text-5xl text-white mb-4 tracking-tight"
                        style={{ fontWeight: 700 }}
                      >
                        {project.title}
                      </h3>
                      <p className="text-gray-200 text-base mb-4" style={{ lineHeight: 1.7 }}>
                        {project.description}
                      </p>
                      <p className="text-purple-400 text-sm italic" style={{ lineHeight: 1.6 }}>
                        {project.role}
                      </p>
                    </div>

                    {/* Live Button - Top Right */}
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white flex items-center gap-2 transition-all border border-purple-400/30 shadow-lg shadow-purple-500/20"
                    >
                      <span className="font-medium">Live</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((tech: string, techIndex: number) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-purple-300 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Preview Image */}
                <div
                  className={`relative h-96 rounded-2xl bg-gradient-to-br ${project.color} p-1 overflow-hidden`}
                >
                  <div className="w-full h-full rounded-2xl overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5`}
                />
              </div>
            ))}
          />
        </div>
      </div>
    </section>
  );
}