import React from "react";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

function ProjectCard({ img, url, github, title, text }) {
  return (
    <article className="bg-white rounded shadow-md hover:shadow-lg">
      <img src={img} className="h-64 w-full rouded-t-lg object-cover" />

      <div className="p-8 capitalize">
        <h2 className="text-xl font-medium tracking-wide">{title}</h2>
        <p className="mt-4 text-slate-700 leading-loose">{text}</p>

        <div className="mt-4 flex gap-x-4">
          <a href={url} target="_blank">
            <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
          <a href={github} target="_blank">
            <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
