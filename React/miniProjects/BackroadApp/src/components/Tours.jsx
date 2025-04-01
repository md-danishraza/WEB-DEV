import React from "react";
import Title from "./Title";
import { toursData } from "./data";

function Tours() {
  return (
    <section className="section" id="tours">
      <Title title="Featured" subtitle="Tours" />

      <div className="section-center featured-center">
        {
          toursData.map((tour) => (
            <article key={tour.id} className="tour-card">
              <div className="tour-img-container">
                <img src={tour.image} className="tour-img" alt="" />
                <p className="tour-date">{tour.date}</p>
              </div>
              <div className="tour-info">
                <h4>{tour.title}</h4>
                <p>{tour.info}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {tour.location}
                  </p>
                  <p>{tour.duration} days</p>
                  <p>from ${tour.cost}</p>
                </div>
              </div>
            </article>
          ))
        }

        
      </div>
    </section>
  );
}

export default Tours;
