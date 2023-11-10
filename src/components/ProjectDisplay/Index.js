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
            <b>Link:</b> <Link to={project.url}>{project.url}</Link> 
        </p>
        <p>
          <b>Description:</b> {project.description}
        </p>
    </div>
  );
}

export default ProjectDisplay;