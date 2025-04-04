import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = [
        "home",
        "cars",
        "team",
        "competitions",
        "achievements",
        "contactus",
      ];
      const sectionElements = sections.map((id) => document.getElementById(id));

      const currentPosition = window.scrollY + 100;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= currentPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Projects", id: "projects" },
    { name: "Team", id: "team" },
    { name: "Competitions", id: "competitions" },
    { name: "Achievements", id: "achievements" },
    { name: "Contact Us", id: "contactus" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-green-300 backdrop-blur-md shadow-md text-gray-800"
          : "bg-gradient-to-r from-red-600 to-blue-800 text-white"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold flex items-center">
          IITJ AutoMobile Club
        </div>

        <div className="flex md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md">
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? "text-[#c8a876] font-medium"
                  : "hover:text-blue-500"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-white p-4`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`block w-full text-left py-2 transition-colors ${
              activeSection === item.id
                ? "text-[#c8a876] font-medium"
                : "hover:text-blue-500"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
