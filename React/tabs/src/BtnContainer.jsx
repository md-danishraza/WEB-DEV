import React, { useEffect, useState } from "react";

function BtnContainer({ data, setCurrent }) {
  const [companies, setCompany] = useState(null);
  useEffect(() => {
    //   console.log(data);
    const company = [];
    data.map((jobs) => {
      company.push({ company: jobs.company, show: false });
    });
    // setting initial show for 0 index
    company[0].show = true;
    setCompany(company);
  }, []);
  //   console.log(companies);
  const update = (jobname) => {
    const nextJob = data.filter((job) => {
      return job.company == jobname;
    });
    // console.log(nextJob[0]);
    // update the current job info
    setCurrent(nextJob[0]);

    // update the show for current job company
    setCompany((current) => {
      return current.map((job) => {
        if (job.company == jobname) {
          job.show = true;
          return job;
        } else {
          job.show = false;
          return job;
        }
      });
    });
  };
  return (
    <div className="btnContainer">
      {companies &&
        companies.map((job, i) => {
          return (
            <button
              key={i}
              onClick={() => update(job.company)}
              className={job.show ? "show" : ""}
            >
              {job.company}
            </button>
          );
        })}
    </div>
  );
}

export default BtnContainer;
