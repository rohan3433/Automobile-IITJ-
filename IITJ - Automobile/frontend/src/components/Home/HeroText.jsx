import { motion } from "framer-motion";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-5xl md:text-6xl text-orange-700 font-bold drop-shadow-lg">
        BOLTHEADS
      </h1>
      <p className="text-lg md:text-xl text-gray-300 font-semibold drop-shadow-md">
        Driven by Passion, United by Wheels
      </p>
    </div>
  );
};

export default HeroText;
