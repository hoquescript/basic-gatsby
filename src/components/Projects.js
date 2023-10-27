import React from "react"
import "./project.css"

import project from "../assets/projects/Movers.png"

const Projects = () => {
  return (
    <div className="container">
      <h2 className="project__title">Work_</h2>
      <Project />
    </div>
  )
}

const Project = () => {
  return (
    <div className="project">
      <h3>Medic App</h3>
      <img className="project__image" src={project} alt="Medic App" />
      <div className="project__caption">
        <span>UX Case Study</span>
        <span>Date: 06/12/2022</span>
      </div>
    </div>
  )
}

export default Projects
