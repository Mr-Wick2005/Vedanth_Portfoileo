import { motion, useMotionValue, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import profileImage from "figma:asset/88539f34f138e744f285460d5290ceda15057a31.png";
import TextType from "./TextType";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const parallaxX = useTransform(mouseX, [0, window.innerWidth], [-20, 20]);
  const parallaxY = useTransform(mouseY, [0, window.innerHeight], [-20, 20]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0a0a0a]">
      {/* Navbar */}
      <Navbar />

      {/* Animated gradient blurs */}
      <motion.div
        className="gradient-blur absolute w-96 h-96 bg-purple-600"
        style={{
          top: "20%",
          left: "10%",
          x: parallaxX,
          y: parallaxY,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="gradient-blur absolute w-80 h-80 bg-blue-500"
        style={{
          bottom: "15%",
          right: "15%",
          x: useTransform(parallaxX, (v) => -v),
          y: useTransform(parallaxY, (v) => -v),
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
          {/* Left: Identity & Message */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-2"
            >
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-gray-400 tracking-wider uppercase text-sm"
              >
                Creative Developer
              </motion.p>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight"
                style={{ fontWeight: 700 }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="block text-white"
                >
                  <TextType
                    text={["Vedanth"]}
                    typingSpeed={120}
                    pauseDuration={4000}
                    deletingSpeed={60}
                    loop={true}
                    showCursor={false}
                    initialDelay={600}
                  />
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="block text-white"
                >
                  <TextType
                    text={["Muralidhar"]}
                    typingSpeed={120}
                    pauseDuration={4000}
                    deletingSpeed={60}
                    loop={true}
                    showCursor={false}
                    initialDelay={1400}
                  />
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="block text-gradient glow-text"
                >
                  <TextType
                    text={["GALI"]}
                    typingSpeed={120}
                    pauseDuration={4000}
                    deletingSpeed={60}
                    loop={true}
                    showCursor={true}
                    cursorCharacter="|"
                    cursorClassName="text-purple-400 text-6xl ml-2"
                    initialDelay={2600}
                  />
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-gray-400 text-xl max-w-lg"
              style={{ fontWeight: 400, lineHeight: 1.6 }}
            >
              Computer Engineering Student
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-white text-2xl max-w-xl"
              style={{ fontWeight: 500, lineHeight: 1.5 }}
            >
              I design and build immersive digital experiences where code meets
              creativity.
            </motion.p>
          </div>

          {/* Right: 3D Placeholder Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="relative h-[600px] hidden lg:flex items-center justify-center"
          >
            {/* Profile Image with B&W to Color Effect */}
            <motion.div
              className="relative w-full max-w-md h-full group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              {/* Glass border frame */}
              <div className="absolute inset-0 glass-panel rounded-3xl" />

              {/* Image container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden">
                {/* Black and white image (default) */}
                <img
                  src={profileImage}
                  alt="Vedanth Muralidhar GALI"
                  className="absolute inset-0 w-full h-full object-cover object-top grayscale group-hover:opacity-0 transition-opacity duration-500"
                />

                {/* Colored image (on hover) - NO BLUR */}
                <img
                  src={profileImage}
                  alt="Vedanth Muralidhar GALI"
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Animated border glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    boxShadow:
                      "0 0 40px rgba(139, 92, 246, 0.6), inset 0 0 40px rgba(139, 92, 246, 0.2)",
                  }}
                />
              </div>

              {/* Corner indicators */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-purple-500/70 group-hover:border-purple-400 transition-colors duration-300" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-purple-500/70 group-hover:border-purple-400 transition-colors duration-300" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-purple-500/70 group-hover:border-purple-400 transition-colors duration-300" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-purple-500/70 group-hover:border-purple-400 transition-colors duration-300" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-gray-500 text-sm uppercase tracking-wider">
            Scroll
          </span>
          <ChevronDown className="w-6 h-6 text-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}