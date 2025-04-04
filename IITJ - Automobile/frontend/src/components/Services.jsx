import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      image:
        "https://imgs.search.brave.com/caia-b7fssK_SyoB51P4kDSqs-nH-hpvugTdd_WBNPc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdXBl/cmhhbmR5dXMuY29t/L2Nkbi9zaG9wL2Zp/bGVzL3N1cGVyaGFu/ZHktZWxlY3RyaWMt/d2hlZWxjaGFpci1w/bHVzLXVwZ3JhZGVk/LTQ4di0yYWgtYmF0/dGVyeS0zMzBsYnMt/bWF4LXdlaWdodC1n/dXQxNjYtZmJhLTQ0/NTc5NzM1NDcwMzU4/LmpwZz92PTE3MTUy/NzY4Njkmd2lkdGg9/MjAwMA",
      title: "Electric Wheel Chair ",
      description:
        "we are developing a low-cost Electric Wheelchair designed to provide affordable, efficient, and reliable mobility for individuals with physical disabilities.Our goal is to make mobility accessible to everyone by combining engineering excellence with cost-effective innovation.",
    },
    {
      image:
        "https://imgs.search.brave.com/caia-b7fssK_SyoB51P4kDSqs-nH-hpvugTdd_WBNPc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdXBl/cmhhbmR5dXMuY29t/L2Nkbi9zaG9wL2Zp/bGVzL3N1cGVyaGFu/ZHktZWxlY3RyaWMt/d2hlZWxjaGFpci1w/bHVzLXVwZ3JhZGVk/LTQ4di0yYWgtYmF0/dGVyeS0zMzBsYnMt/bWF4LXdlaWdodC1n/dXQxNjYtZmJhLTQ0/NTc5NzM1NDcwMzU4/LmpwZz92PTE3MTUy/NzY4Njkmd2lkdGg9/MjAwMA",
      title: "Electric Wheel Chair ",
      description:
        "we are developing a low-cost Electric Wheelchair designed to provide affordable, efficient, and reliable mobility for individuals with physical disabilities.Our goal is to make mobility accessible to everyone by combining engineering excellence with cost-effective innovation.",
    },
    {
      image:
        "https://imgs.search.brave.com/caia-b7fssK_SyoB51P4kDSqs-nH-hpvugTdd_WBNPc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdXBl/cmhhbmR5dXMuY29t/L2Nkbi9zaG9wL2Zp/bGVzL3N1cGVyaGFu/ZHktZWxlY3RyaWMt/d2hlZWxjaGFpci1w/bHVzLXVwZ3JhZGVk/LTQ4di0yYWgtYmF0/dGVyeS0zMzBsYnMt/bWF4LXdlaWdodC1n/dXQxNjYtZmJhLTQ0/NTc5NzM1NDcwMzU4/LmpwZz92PTE3MTUy/NzY4Njkmd2lkdGg9/MjAwMA",
      title: "Electric Wheel Chair ",
      description:
        "we are developing a low-cost Electric Wheelchair designed to provide affordable, efficient, and reliable mobility for individuals with physical disabilities.Our goal is to make mobility accessible to everyone by combining engineering excellence with cost-effective innovation.",
    },
    {
      image:
        "https://imgs.search.brave.com/caia-b7fssK_SyoB51P4kDSqs-nH-hpvugTdd_WBNPc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdXBl/cmhhbmR5dXMuY29t/L2Nkbi9zaG9wL2Zp/bGVzL3N1cGVyaGFu/ZHktZWxlY3RyaWMt/d2hlZWxjaGFpci1w/bHVzLXVwZ3JhZGVk/LTQ4di0yYWgtYmF0/dGVyeS0zMzBsYnMt/bWF4LXdlaWdodC1n/dXQxNjYtZmJhLTQ0/NTc5NzM1NDcwMzU4/LmpwZz92PTE3MTUy/NzY4Njkmd2lkdGg9/MjAwMA",
      title: "Electric Wheel Chair ",
      description:
        "we are developing a low-cost Electric Wheelchair designed to provide affordable, efficient, and reliable mobility for individuals with physical disabilities.Our goal is to make mobility accessible to everyone by combining engineering excellence with cost-effective innovation.",
    },
    {
      image:
        "https://imgs.search.brave.com/caia-b7fssK_SyoB51P4kDSqs-nH-hpvugTdd_WBNPc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdXBl/cmhhbmR5dXMuY29t/L2Nkbi9zaG9wL2Zp/bGVzL3N1cGVyaGFu/ZHktZWxlY3RyaWMt/d2hlZWxjaGFpci1w/bHVzLXVwZ3JhZGVk/LTQ4di0yYWgtYmF0/dGVyeS0zMzBsYnMt/bWF4LXdlaWdodC1n/dXQxNjYtZmJhLTQ0/NTc5NzM1NDcwMzU4/LmpwZz92PTE3MTUy/NzY4Njkmd2lkdGg9/MjAwMA",
      title: "Electric Wheel Chair ",
      description:
        "we are developing a low-cost Electric Wheelchair designed to provide affordable, efficient, and reliable mobility for individuals with physical disabilities.Our goal is to make mobility accessible to everyone by combining engineering excellence with cost-effective innovation.",
    },
    {
      image:
        "https://imgs.search.brave.com/caia-b7fssK_SyoB51P4kDSqs-nH-hpvugTdd_WBNPc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdXBl/cmhhbmR5dXMuY29t/L2Nkbi9zaG9wL2Zp/bGVzL3N1cGVyaGFu/ZHktZWxlY3RyaWMt/d2hlZWxjaGFpci1w/bHVzLXVwZ3JhZGVk/LTQ4di0yYWgtYmF0/dGVyeS0zMzBsYnMt/bWF4LXdlaWdodC1n/dXQxNjYtZmJhLTQ0/NTc5NzM1NDcwMzU4/LmpwZz92PTE3MTUy/NzY4Njkmd2lkdGg9/MjAwMA",
      title: "Electric Wheel Chair ",
      description:
        "we are developing a low-cost Electric Wheelchair designed to provide affordable, efficient, and reliable mobility for individuals with physical disabilities.Our goal is to make mobility accessible to everyone by combining engineering excellence with cost-effective innovation.",
    },
  ];

  return (
    <section className="py-10" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Our Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
              isSpecial={service.isSpecial}
              showMore={service.showMore}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
