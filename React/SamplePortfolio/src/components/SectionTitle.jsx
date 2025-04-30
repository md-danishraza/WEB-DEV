import React from "react";

function SectionTitle({ children }) {
  return (
    <div className="border-b border-grey-200 pb-4 ">
      <h2 className="text-3xl font-medium tracking-wider">{children}</h2>
    </div>
  );
}

export default SectionTitle;
