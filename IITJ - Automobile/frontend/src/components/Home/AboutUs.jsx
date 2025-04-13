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
              At Indian Institute of Technology Jodhpur Automobile Club  we are a passionate team of
              innovators, engineers, and automobile enthusiasts dedicated to
              designing and developing cost-effective mobility solutions. Our
              mission is to make transportation more accessible, sustainable,
              and inclusive through cutting-edge engineering and practical
              innovations. What We Do 🚗 Automobile Innovations – Developing and
              refining vehicle designs for efficiency and sustainability. ♿
              Affordable Mobility Solutions – Currently working on a low-cost
              Electric Wheelchair to empower individuals with disabilities. 🔧
              Technical Research & Development – Exploring new technologies to
              improve mobility for all. 🤝 Community Impact – Bridging the gap
              between innovation and real-world needs. We believe that mobility
              is a right, not a privilege, and we are committed to creating
              affordable and efficient solutions for a better future.
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
