import { motion } from "framer-motion";
import "@fontsource/lastica"; 

const HeroText = () => {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl text-orange-900 font-bold drop-shadow-lg"
      >
        BOLTHEADS
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-4 text-xl md:text-2xl text-orange-500 font-medium drop-shadow-lg"
        style={{ fontFamily: "'Lastica', cursive" }}
      >
        Driven by Passion, United by Wheels
      </motion.p>
    </>
  );
};

export default HeroText;
