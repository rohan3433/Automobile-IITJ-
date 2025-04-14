import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-100" id="aboutus">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              About Us
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
            The Boldheads are a dynamic and passionate group of students at IIT Jodhpur,
            united by our love for automobiles and engineering. We're more than just a club; 
            we're a community of innovators, builders, and problem-solvers. Our mission is to 
            provide a platform for students to explore their interests in automotive technology, 
            gain hands-on experience, and contribute to the future of mobility. We believe in 
            learning by doing. Our members come from diverse academic backgrounds, bringing 
            a wide range of skills and perspectives to the table. Whether it's designing and 
            building electric vehicles for competitions, organizing workshops and seminars, 
            or simply sharing our knowledge with the community, we're always pushing the boundaries of what's possible.
            At Boldheads, we're not just building cars; we're building the future of transportation. 
            We're committed to promoting sustainable and innovative solutions that address the challenges 
            of tomorrow. Join us on this exciting journey as we drive towards a better, more mobile world.
            </p>
          </div>
          <div className="mt-12 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
              alt="About Us Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
