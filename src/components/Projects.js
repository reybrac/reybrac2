import React from "react";

function List(props) {
  return (
    <div>
      {props.projects.map((project) => (
        <article className="container-fluid" key={project.name}>
          <div
            className="row"
            style={{
              color: "black",
              padding: "20px",
              backgroundImage:
                "linear-gradient(to bottom right, black, silver)",
            }}
          >
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <a href={project.url}>
                <img
                  src={project.image}
                  alt={project.name}
                  className="img-thumbnail"
                  style={{ height: "100%", width: "100%" }}
                />
              </a>
            </div>
            <div className="row">
              <div className="col-md-2"></div>

              <div className="col-md" style={{ padding: "10px" }}>
                <h2>{project.title}</h2>
                <p>
                  {project.description}
                  <ul>
                    <li>
                      Link to the live site{" "}
                      <a href={project.deployedSite}>here</a>
                    </li>
                    <li>
                      Link to the Github repository{" "}
                      <a href={project.githubRepo}>here</a>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default List;
