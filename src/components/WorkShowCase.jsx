import WorkCard from './WorkCard';
import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import { useState } from 'react';

const projects = [
  { image: project1, link: "" },
  { image: project2, link: "" },
  { image: project3, link: "" },
];

const WorkShowcase = () => {
  const [current, setCurrent] = useState(1);

  const handleClick = (index) => {
    console.log(index)
    setCurrent(index);

  };

  const getCardStyles = (index) => {
    return index === current ? "opacity-100 z-30" : "scale-75 opacity-60 z-10 cursor-pointer";
  };

  return (
    <section className="relative w-full h-full bg-[#f9fafe] py-16 overflow-hidden">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-12 z-40 relative">
        Check our Work
      </h2>

      {/* Centered slider container */}
      <div className="relative mb-10 flex justify-center items-center overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform:
              window.innerWidth >= 768
                ? `translateX(calc(50% - ${(current + 0.5) * 71}vw))`
                : `translateX(calc(50% - ${(current + 0.5) * 80}vw))`, // Disable translateX on mobile
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex-shrink-0 transition-all duration-500 ease-in-out ${getCardStyles(index)}`}
              onClick={() => handleClick(index)}
              style={{
                width: "80vw",
                height: "45vw",
                maxHeight: "80vh",
                maxWidth: "142.22vh",
              }}
            >
              <WorkCard image={project.image} />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-6 z-50">
        <button
          onClick={() => setCurrent((prev) => Math.max(prev - 1, 0))}
          className="text-4xl text-gray-400 hover:text-gray-800"
        >
          ←
        </button>
        <button
          onClick={() => setCurrent((prev) => Math.min(prev + 1, projects.length - 1))}
          className="text-4xl text-gray-400 hover:text-gray-800"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default WorkShowcase;
