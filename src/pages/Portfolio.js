import React from "react";
import Projects from "../components/Projects";
import projectsList from "../projects.json";

function Portfolio() {
  return (
    <section
      className="container-fluid"
      id="background"
      style={{ paddingLeft: "20px", paddingRight: "20px" }}
    >
      <article
        className="container"
        style={{
          padding: "20px",
          opacity: ".9",
        }}
      >
        <div className="row">
          <div className="col-md-12">
            <h5>
              <p
                style={{
                  color: "black",
                }}
              >
                Portfolio of work performed. The top 5 projects are shown below.{" "}
              </p>
            </h5>
          </div>
        </div>
      </article>
      <Projects projects={projectsList} />
    </section>
  );
}
export default Portfolio;
