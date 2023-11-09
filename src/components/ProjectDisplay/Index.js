import React from "react";
import { Link, useParams } from "react-router-dom";
import { ProjectList } from "../ProjectList/ProjectList";
import "../ProjectDisplay/index.scss";


function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
        <h1> {project.name}</h1>
        <img src={project.image} alt="Projects" />
        <p>
            <b>Skills:</b> {project.skills}
        </p>
        <p>
          <b>Link:</b> <Link>{project.url}</Link> 
        </p>
    </div>
  );
}

export default ProjectDisplay;