import React from "react";
import SectionTitle from "./SectionTitle";
import { skills } from "../data";
import SkillCard from "./SkillCard";
function Skills() {
  return (
    <section className="py-20 align-element" id="skills">
      <SectionTitle>Skills</SectionTitle>
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard key={skill.id} {...skill} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
