import { motion } from "framer-motion";

const HeroText = () => {
  return (
   <>
      <h1 className="text-5xl md:text-6xl text-gray-100 font-bold drop-shadow-lg">
        Automobile Club
      </h1>
      <p className="text-xl md:text-2xl text-gray-100 mt-2 drop-shadow-lg italic font-medium animate-fadeIn">
        Driven by Passion, United by Wheels
      </p>
   </>
   
  );
};

export default HeroText;
