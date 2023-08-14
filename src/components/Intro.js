import React from "react"

import { Container, Title, Button } from "./common"

import "./intro.css"

const Intro = () => {
  return (
    <div className="intro-area">
      <Title title="Follow Me" social height="320px" />
      <Container>
        <div className="intro">
          <div className="intro-text">
            <p>Hello! I am</p>
            <h1>
              Jannatul Ferdous
              <br /> Suvashini
            </h1>
            <h3>UI UX Designer</h3>
            <div className="action">
              <Button
                link="https://drive.google.com/file/d/1Cr2RJatrsuGQccYyEJ1qutnRET6f9Ko3/view?usp=drivesdk"
                target="__blank"
                bgColor="#6d9bea"
                title="Get Resume"
              />
              <Button clickEvent link="#about" ml="15px" title="About Me" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Intro }
