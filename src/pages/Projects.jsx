import React from 'react';
import pro from '../assets/pro.png';
import pro2 from '../assets/pro2.png';
import pro3 from '../assets/pro3.png';
import pro4 from '../assets/pro4.png';
import pro5 from '../assets/pro5.png';
import pro6 from '../assets/pro6.png';
import pro7 from '../assets/pro7.png';
import pro8 from '../assets/pro8.png';
import pro9 from '../assets/pro9.png';
import pro10 from '../assets/pro10.png';
import pro11 from '../assets/pro11.png';

const projectsData = [
  { id: 1, title: 'Kantipur Ride', description: 'https://kantipur-ride-iota.vercel.app/', image: { src: pro, alt: 'Kantipur Ride' } },
  { id: 2, title: 'Intuji', description: 'https://intuji-puce.vercel.app/', image: { src: pro2, alt: 'Intuji' } },
  { id: 3, title: 'Browse AI', description: 'https://myproject-ivory-kappa.vercel.app/', image: { src: pro3, alt: 'Browse AI' } },
  { id: 4, title: 'Maitri Dental Care', description: 'https://maitridentalcare.netlify.app', image: { src: pro4, alt: 'Maitri Dental Care' } },
  { id: 5, title: 'Prabal Hours', description: 'https://prabalhours.netlify.app/', image: { src: pro5, alt: 'Prabal Hours' } },
  { id: 6, title: 'Prabal Mahadev', description: 'https://prabal-mahadev.netlify.app/', image: { src: pro6, alt: 'Prabal Mahadev' } },
  { id: 7, title: 'Prabal Portfolio', description: 'https://portfolioprabal.netlify.app/', image: { src: pro7, alt: 'Prabal Portfolio' } },
  { id: 8, title: 'Prabal Store', description: 'https://prabalstore.netlify.app/', image: { src: pro8, alt: 'Prabal Store' } },
  { id: 9, title: 'Prabal Music', description: 'https://prabalbhandary.netlify.app/', image: { src: pro9, alt: 'Prabal Music' } },
  { id: 10, title: 'Prabal Shop', description: 'https://prabalshop.netlify.app/', image: { src: pro10, alt: 'Prabal Shop' } },
  { id: 11, title: 'Prabal Quiz App', description: 'https://prabalquizapp.netlify.app/', image: { src: pro11, alt: 'Prabal Quiz App' } },
];

const Projects = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-6">
      {projectsData.map(project => (
        <div
          key={project.id}
          className="bg-white border border-gray-300 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105"
        >
          <img
            src={project.image.src}
            alt={project.image.alt}
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-800 mt-2">{project.title}</h3>
            <a
              href={project.description}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mt-1 block"
            >
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
