import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, MessageCircle, Music, Film, Trees, Heart, Gamepad2, Code } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const personalityCards = [
    {
      id: "communicator",
      icon: MessageCircle,
      title: "Communicator",
      desc: "Strong verbal and written communication with the ability to explain complex concepts clearly",
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400",
      image: "https://images.unsplash.com/photo-1759844197486-5b3612c7d534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pY2F0aW9uJTIwdGVhbXdvcmt8ZW58MXx8fHwxNzY1NzQ2OTg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      span: "md:col-span-1",
    },
    {
      id: "analytical",
      icon: Brain,
      title: "Analytical Thinker",
      desc: "Logical reasoning and problem-solving to tackle challenges systematically",
      gradient: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400",
      image: "https://images.unsplash.com/photo-1758685848478-b57d7aff2a9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMHRoaW5raW5nJTIwYW5hbHl0aWNhbHxlbnwxfHx8fDE3NjU3NDY5OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      span: "md:col-span-2",
    },
    {
      id: "music",
      icon: Music,
      title: "Music Enthusiast",
      desc: "Deep appreciation for music across all genres",
      gradient: "from-pink-500/20 to-rose-500/20",
      iconColor: "text-pink-400",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGhlYWRwaG9uZXN8ZW58MXx8fHwxNzY1Njk1NDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      span: "md:col-span-2",
    },
    {
      id: "cinema",
      icon: Film,
      title: "Cinema Lover",
      desc: "Passionate about storytelling and cinematography",
      gradient: "from-indigo-500/20 to-purple-500/20",
      iconColor: "text-indigo-400",
      image: "https://images.unsplash.com/photo-1739433437912-cca661ba902f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBtb3ZpZXxlbnwxfHx8fDE3NjU3NDY5OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      span: "md:col-span-1",
    },
    {
      id: "nature",
      icon: Trees,
      title: "Nature Explorer",
      desc: "Finding inspiration in mountains and forests",
      gradient: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400",
      image: "https://images.unsplash.com/photo-1666633613714-91e056e7ba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBtb3VudGFpbiUyMG5hdHVyZXxlbnwxfHx8fDE3NjU3NDY5OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      span: "md:col-span-1",
    },
    {
      id: "animals",
      icon: Heart,
      title: "Animal Advocate",
      desc: "Compassionate towards all creatures",
      gradient: "from-red-500/20 to-orange-500/20",
      iconColor: "text-red-400",
      image: "https://images.unsplash.com/photo-1599456671475-da8c5b91e52c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYWxzJTIwd2lsZGxpZmV8ZW58MXx8fHwxNzY1NjUxNDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      span: "md:col-span-2",
    },
    {
      id: "gamer",
      icon: Gamepad2,
      title: "Gamer & Designer",
      desc: "Understanding player psychology and engagement",
      gradient: "from-violet-500/20 to-purple-500/20",
      iconColor: "text-violet-400",
      image: "https://images.unsplash.com/photo-1611138290962-2c550ffd4002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb250cm9sbGVyfGVufDF8fHx8MTc2NTcxNDc2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      span: "md:col-span-1",
    },
    {
      id: "gamelogic",
      icon: Code,
      title: "Game Logic Builder",
      desc: "Crafting mechanics that create compelling experiences",
      gradient: "from-cyan-500/20 to-blue-500/20",
      iconColor: "text-cyan-400",
      image: "https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzY1NjkxNzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      span: "md:col-span-2",
    }
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen bg-[#0a0a0a] py-32 px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Centered About Text at Top */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 space-y-8"
        >
          <h2
            className="text-6xl text-white tracking-tight"
            style={{ fontWeight: 700 }}
          >
            About me
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-4xl mx-auto space-y-6 text-gray-300 text-xl"
            style={{ lineHeight: 1.8 }}
          >
            <p>
              I'm Vedanth, a creative developer and designer who blends technology with imagination to build thoughtful digital experiences.
              I enjoy breaking down complex problems, designing interfaces, debugging code, and collaborating at the center of ideas.
              Driven by curiosity, I draw inspiration from music, movies, and exploring the "why" behind concepts.
            </p>
          </motion.div>
        </motion.div>

        {/* Masonry Grid - Wider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personalityCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{
                    opacity: [0, 1, 1, 1, 1, 0],
                    y: [60, 0, 0, 0, 0, -20],
                  }}
                  transition={{
                    duration: 8,
                    delay: index * 0.2,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                  }}
                  className={`${card.span} glass-panel rounded-3xl overflow-hidden group hover:shadow-2xl transition-shadow duration-300 h-fit relative`}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
                    />
                    {/* Dark overlay for better text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
                  </div>

                  <div className="relative z-10 p-6 flex flex-col space-y-4">
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none`} />
                    
                    {/* Content */}
                    <div className="relative z-10 space-y-3">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className={`w-7 h-7 ${card.iconColor}`} />
                      </div>
                      
                      <h3 className="text-2xl text-white drop-shadow-lg" style={{ fontWeight: 600 }}>
                        {card.title}
                      </h3>
                      
                      <p className="text-gray-200 leading-relaxed text-sm drop-shadow-md">
                        {card.desc}
                      </p>
                    </div>

                    {/* Bottom decorative element */}
                    <div className="relative z-10 flex items-center justify-end">
                      <div className={`w-2 h-2 rounded-full ${card.iconColor} opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300 shadow-lg`} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Tagline at Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-3xl text-gradient glow-text" style={{ fontWeight: 600, fontStyle: "italic" }}>
            Always learning. Always creating. Always curious.
          </p>
        </motion.div>
      </div>
    </section>
  );
}