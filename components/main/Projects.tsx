import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 mx-5 md:mx-5 lg:mx-10 xl:mx-10" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pt-20 pb-5">My Projects</h1>
      
      <div className="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        <ProjectCard
          src="/lambda.png"
          title="Lambda Resturent Website"
          description="If you’ve been to one of our restaurants, you’ve seen – and tasted – what keeps our customers coming back for more. Perfect materials and freshly baked food."
        />
        <ProjectCard
          src="/programming-hero.png"
          title="Programming-Hero"
          description="Personalized, fun, and interactive learning process. Enjoy our gamified courses to master python, Web development, cyber security, C, C++ course and more."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Modern Next.js Portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <ProjectCard
          src="/tinyone.png"
          title="Tinyone Agency Website"
          description="Learn Programming and learn coding in a fun. Beginners and advanced tutorial for absolute beginners. Learn everything you need to get hired."
        />
        <ProjectCard
          src="/panda-commarce.png"
          title="Panda Commarce"
          description="E-commerce in Bangladesh refers to the electronic commerce sector of Bangladesh business."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Hot Gadgets"
          description="Gadgets are also known as gizmos or gears. The name means a small smart tool that serves a unique function."
        />
      </div>
    </div>
  );
};

export default Projects;
