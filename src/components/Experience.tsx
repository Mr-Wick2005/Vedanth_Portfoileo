import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { GraduationCap, Briefcase, Award, ChevronRight } from "lucide-react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const timeline = [
    {
      year: "Present",
      title: "B.E. Computer Engineering",
      organization: "Mumbai University",
      type: "education",
      icon: GraduationCap,
      details: [
        "Focus on Software Engineering and AI/ML",
        "Relevant coursework in Data Structures, Algorithms, Web Development",
      ],
    },
    {
      year: "Present",
      title: "Head of Technical in CESA & CSI",
      organization: "Computer Engineering Students' Association & Computer Society of India",
      type: "leadership",
      icon: Award,
      details: [
        "Leading technical events and workshops for 200+ students",
        "Organized hackathons and coding competitions",
        "Mentored junior students in web development",
      ],
    },
    {
      year: "Present",
      title: "Freelance Developer",
      organization: "Independent",
      type: "work",
      icon: Briefcase,
      details: [
        "Building custom web applications for startups and small businesses",
        "Specializing in React, Next.js, and interactive UI/UX",
        "Delivering studio-grade digital experiences",
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="relative min-h-screen bg-[#0f0f0f] py-32 px-8"
    >
      {/* Background decoration */}
      <motion.div
        className="absolute left-0 top-1/3 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-4"
            style={{ fontWeight: 700 }}
          >
            Education and Extra-curricular
          </h2>
          <p className="text-gray-400 text-xl">
            Academic background, leadership roles, and professional journey
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-purple-600 via-blue-600 to-purple-600"
          />

          <div className="space-y-16">
            {timeline.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  item,
  index,
  isInView,
}: {
  item: any;
  index: number;
  isInView: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className={`relative flex ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } items-center gap-8`}
    >
      {/* Content */}
      <div
        className={`flex-1 ${isLeft ? "md:text-right md:pr-8" : "md:pl-8"} ml-20 md:ml-0`}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="glass-panel p-6 rounded-2xl cursor-pointer"
        >
          <div className="flex items-start gap-4 mb-4">
            <div
              className={`p-3 rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 ${
                isLeft ? "md:order-last" : ""
              }`}
            >
              <item.icon className="w-6 h-6 text-purple-400" />
            </div>
            <div className={`flex-1 ${isLeft ? "md:text-right" : ""}`}>
              <p className="text-purple-400 text-sm mb-1">{item.year}</p>
              <h3
                className="text-2xl text-white mb-1"
                style={{ fontWeight: 600 }}
              >
                {item.title}
              </h3>
              <p className="text-gray-400">{item.organization}</p>
            </div>
          </div>

          {/* Expandable details */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ul className={`space-y-2 mt-4 ${isLeft ? "md:text-right" : ""}`}>
              {item.details.map((detail: string, i: number) => (
                <li key={i} className="text-gray-400 flex items-start gap-2">
                  <ChevronRight
                    className={`w-4 h-4 text-purple-400 mt-1 flex-shrink-0 ${
                      isLeft ? "md:order-last" : ""
                    }`}
                  />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Expand indicator */}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            className={`flex ${
              isLeft ? "md:justify-start" : "md:justify-end"
            } mt-3`}
          >
            <ChevronRight className="w-5 h-5 text-gray-500 rotate-90" />
          </motion.div>
        </motion.div>
      </div>

      {/* Center node */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
        className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-purple-600 border-4 border-[#0f0f0f] z-10"
      >
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full bg-purple-600"
        />
      </motion.div>
    </motion.div>
  );
}