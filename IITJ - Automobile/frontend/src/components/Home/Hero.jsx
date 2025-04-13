import React from "react";
import HeroText from "./HeroText"

const Hero = () => {
  return (
    <div className="relative w-full h-[320px] md:h-[400px]" id="home">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black/40">
        <img
          src="https://imgs.search.brave.com/BfOCvVnw4bEGUw5eHHJxtGB9ujMhDQViURCDu2xdPiU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI1/NjUzMDA4OS9waG90/by9tYWNoaW5lLWdl/YXJzLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1FazRPLV9B/Q0FBWU93T2tzREFH/ZS1zNHVURTZwbzNT/Vi16WVN2Ym5YeXFF/PQ"
          alt="Background"
          className="object-cover object-center w-full h-full"
        />
      </div>

     
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 md:px-16">
       <HeroText></HeroText>
      </div>
    </div>
  );
};

export default Hero;
