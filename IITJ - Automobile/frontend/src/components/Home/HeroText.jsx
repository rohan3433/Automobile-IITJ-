import { motion } from "framer-motion";

const HeroText = () => {
  return (
    <motion.div
      className="absolute top-20 left-10 z-10 md:w-1/2"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
    >
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-white font-extrabold text-5xl md:text-6xl leading-tight drop-shadow-2xl tracking-widest animate-pulse">
        Automobile Club
      </h1>
      <p className="text-xl md:text-2xl text-gray-100 mt-2 drop-shadow-lg italic font-medium animate-fadeIn">
        Driven by Passion, United by Wheels
      </p>
    </motion.div>
  );
};

export default HeroText;
