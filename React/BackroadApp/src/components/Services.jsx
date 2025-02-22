import React from "react";
import Title from "./Title";
import { servicesData } from "./data";

function Services() {
  return (
    <section className="section services" id="services">
      <Title title="Our" subtitle="Services" />
      <div className="section-center services-center">
        {
        servicesData.map((service) => {
        return (<article className="service" key={service.id}>
          <span className="service-icon">
            <i className={service.icon}></i>
          </span>
          <div className="service-info">
            <h4 className="service-title">{service.title}</h4>
            <p className="service-text">
              {service.text}
            </p>
          </div>
        </article>)
        })
        }
      </div>
    </section>
  );
}

export default Services;
