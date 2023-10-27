import React from "react"
import "./process.css"
import { PROCESS } from "../data/process"

const Process = () => {
  return (
    <div className="container">
      <div className="process">
        {PROCESS.map((item, idx) => (
          <Step key={idx} serial={idx + 1} {...item} />
        ))}
      </div>
    </div>
  )
}

const Step = ({ serial, title, description, link }) => {
  return (
    <div className="step">
      <h3>
        <span>0{serial}.</span> {title}
      </h3>
      <p>{description}</p>
      <a href={link}>See Past Work</a>
    </div>
  )
}

export default Process
