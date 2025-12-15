import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Code2,
  Palette,
  Terminal,
  Layers,
  Sparkles,
  Database,
  Workflow,
  GitBranch,
} from "lucide-react";
import LogoLoop from "./LogoLoop";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFirebase,
  SiSupabase,
  SiVercel,
  SiFramer,
  SiWebgl,
  SiThreedotjs,
  SiGreensock
} from "react-icons/si";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const techLogos = [
    { node: <SiReact className="text-[#61DAFB]" />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs className="text-white" />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript className="text-[#3178C6]" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiJavascript className="text-[#F7DF1E]" />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <SiTailwindcss className="text-[#06B6D4]" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiHtml5 className="text-[#E34F26]" />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { node: <SiCss3 className="text-[#1572B6]" />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { node: <SiPython className="text-[#3776AB]" />, title: "Python", href: "https://www.python.org" },
    { node: <SiCplusplus className="text-[#00599C]" />, title: "C++", href: "https://isocpp.org" },
    { node: <SiNodedotjs className="text-[#339933]" />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiFramer className="text-[#0055FF]" />, title: "Motion", href: "https://motion.dev" },
    { node: <SiThreedotjs className="text-white" />, title: "Three.js", href: "https://threejs.org" },
    { node: <SiWebgl className="text-[#990000]" />, title: "WebGL", href: "https://www.khronos.org/webgl/" },
    { node: <SiGreensock className="text-[#88CE02]" />, title: "GSAP", href: "https://greensock.com/gsap/" },
    { node: <SiGit className="text-[#F05032]" />, title: "Git", href: "https://git-scm.com" },
    { node: <SiGithub className="text-white" />, title: "GitHub", href: "https://github.com" },
    { node: <SiFigma className="text-[#F24E1E]" />, title: "Figma", href: "https://www.figma.com" },
    { node: <SiAdobephotoshop className="text-[#31A8FF]" />, title: "Photoshop", href: "https://www.adobe.com/products/photoshop.html" },
    { node: <SiAdobeillustrator className="text-[#FF9A00]" />, title: "Illustrator", href: "https://www.adobe.com/products/illustrator.html" },
    { node: <SiFirebase className="text-[#FFCA28]" />, title: "Firebase", href: "https://firebase.google.com" },
    { node: <SiSupabase className="text-[#3ECF8E]" />, title: "Supabase", href: "https://supabase.com" },
    { node: <SiVercel className="text-white" />, title: "Vercel", href: "https://vercel.com" },
  ];

  const skills = [
    {
      category: "Frontend & Web",
      icon: Code2,
      items: [
        { name: "React / Next.js", context: "Production projects" },
        { name: "TypeScript", context: "Primary language" },
        { name: "Tailwind CSS", context: "Design systems" },
        { name: "Motion / Framer", context: "Animations" },
      ],
    },
    {
      category: "Programming & Logic",
      icon: Terminal,
      items: [
        { name: "JavaScript / Python", context: "Multi-paradigm" },
        { name: "C++", context: "Data structures" },
        { name: "Problem Solving", context: "Algorithms" },
      ],
    },
    {
      category: "Design & Creative",
      icon: Palette,
      items: [
        { name: "Figma", context: "UI/UX design" },
        { name: "Canva", context: "Graphic design" },
        { name: "FL Studio", context: "Music production" },
      ],
    },
    {
      category: "Workflow & Platforms",
      icon: Workflow,
      items: [
        { name: "Git / GitHub", context: "Version control" },
        { name: "VS Code", context: "Code editor" },
        { name: "Anaconda", context: "Python distribution" },
        { name: "Jupyter Notebook", context: "Data science" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="relative min-h-screen bg-[#0f0f0f] py-32 px-8"
    >
      {/* Background accent */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600 rounded-full blur-[120px] opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2
            className="text-6xl text-white tracking-tight mb-4"
            style={{ fontWeight: 700 }}
          >
            Skills
          </h2>
          <p className="text-gray-400 text-xl">
            Tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Broken Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto mb-20">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: groupIndex * 0.15, duration: 0.6 }}
              className={`glass-panel p-6 rounded-2xl ${
                groupIndex === 0 ? "md:col-span-2 lg:col-span-1" : ""
              } ${groupIndex === 2 ? "lg:col-start-3" : ""}`}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-600/20 to-blue-600/20">
                  <skillGroup.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3
                  className="text-white text-xl"
                  style={{ fontWeight: 600 }}
                >
                  {skillGroup.category}
                </h3>
              </div>

              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <SkillChip
                    key={skillIndex}
                    name={skill.name}
                    context={skill.context}
                    delay={groupIndex * 0.15 + skillIndex * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Logo Loop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 w-full overflow-hidden"
        >
          <div className="h-96 py-12 overflow-hidden w-full">
            <LogoLoop
              logos={techLogos}
              speed={60}
              direction="left"
              logoHeight={120}
              gap={100}
              hoverSpeed={20}
              scaleOnHover
              fadeOut
              fadeOutColor="#0f0f0f"
              ariaLabel="Technology stack"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillChip({
  name,
  context,
  delay,
}: {
  name: string;
  context: string;
  delay: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      <div className="flex items-center gap-2 py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
        <Sparkles className="w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="text-gray-300">{name}</span>
      </div>

      {/* Hover context */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
        className="absolute top-full left-0 mt-2 px-3 py-1 bg-black/90 rounded-lg text-xs text-gray-400 whitespace-nowrap pointer-events-none z-10"
      >
        {context}
      </motion.div>
    </motion.div>
  );
}