import { motion } from "framer-motion";

const HeroText = () => {
  return (
   <>
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-white font-extrabold text-5xl md:text-6xl leading-tight drop-shadow-2xl tracking-widest">
        Automobile Club
      </h1>
      <p className="text-xl md:text-2xl text-gray-100 mt-2 drop-shadow-lg italic font-medium animate-fadeIn">
        Driven by Passion, United by Wheels
      </p>
   </>
   
  );
};

export default HeroText;
