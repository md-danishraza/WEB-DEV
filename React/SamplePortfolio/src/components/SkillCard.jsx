import React from "react";

function SkillCard({ title, icon, text }) {
  return (
    <article>
      <span>{icon}</span>
      <h4 className="mt-6 font-bold">{title}</h4>
      <p className="mt-4 text-slate-500">{text}</p>
    </article>
  );
}

export default SkillCard;
