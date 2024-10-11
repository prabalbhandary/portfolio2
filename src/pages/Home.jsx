import React from "react";
import me from "../assets/me.jpg";

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center px-4 py-10 w-full bg-gray-100">
      <div className="flex-1 text-center sm:text-left mb-6 sm:mb-0">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Hi, I am Prabal Bhandary. <br />
          Welcome to my portfolio. <br />I am passionate about web development.
        </h1>
      </div>
      <div className="flex justify-center mb-6 sm:mb-0">
        <img
          src={me}
          alt="Prabal Bhandary"
          className="w-40 h-40 sm:w-48 sm:h-48 shadow-lg rounded-full border-4 border-blue-500 transition-transform transform hover:scale-105"
        />
      </div>
      <div className="flex-1 text-center sm:text-left mt-6 sm:mt-0">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">About Me</h2>
        <p className="text-lg text-gray-600">
          Hello! I'm Prabal Bhandary, a passionate web development enthusiast
          currently pursuing my undergraduate degree in Computer Science. I love
          transforming ideas into beautiful, functional websites and
          applications. From an early age, I was fascinated by technology and
          how it shapes our lives. This curiosity led me to explore various
          programming languages and frameworks, enabling me to create innovative
          solutions. I thrive on challenges and constantly seek opportunities to
          learn and grow. When I'm not coding, you can find me exploring the
          latest tech trends, working on personal projects, or enjoying a good
          book. I'm excited about the future and look forward to collaborating
          with like-minded individuals who share my passion for technology.
          Let's connect and create something amazing together!
        </p>
      </div>
    </div>
  );
};

export default Home;
