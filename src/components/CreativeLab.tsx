import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Ballpit from "./Ballpit";
import Group from "../imports/Group1";

export function CreativeLab() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="lab"
      ref={ref}
      className="relative min-h-screen bg-[#0a0a0a] py-32 px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2
            className="text-6xl text-white tracking-tight mb-4"
            style={{ fontWeight: 700 }}
          >
            Creative Lab
          </h2>
          <p className="text-gray-400 text-xl">
            A fun interactive ball pit experiment - Move your cursor to interact!
          </p>
        </motion.div>

        {/* Ballpit Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative w-full rounded-3xl overflow-hidden glass-panel"
          style={{ minHeight: '600px', maxHeight: '600px' }}
        >
          {/* Astronaut sticker - positioned at top-right of ballpit */}
          <div className="absolute top-4 right-4 w-16 h-auto z-10 pointer-events-none opacity-90">
            <Group />
          </div>
          
          <Ballpit
            count={80}
            gravity={0.008}
            friction={0.997}
            wallBounce={0.75}
            followCursor={true}
            maxVelocity={0.25}
            minSize={0.65}
            maxSize={0.85}
            colors={[0x8b5cf6, 0x3b82f6, 0x06b6d4]}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-gray-500 text-center mt-8"
        >
          Drag your cursor around to play with the balls
        </motion.p>
      </div>
    </section>
  );
}