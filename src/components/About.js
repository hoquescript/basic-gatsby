import React from "react"

import { Container, Title, Button } from "./common"

import profile from "../assets/image/profile.jpg"

import "./about.css"

const About = () => {
  return (
    <div id="about" className="about-area">
      <Container>
        <Title side="right" title="About Me" />
        <div className="about">
          <div className="about-details">
            <p>
              Hello! I'm Suvashini Daliya, a passionate Graphics Designer &
              Digital Marketer. My core skill is based on Adobe products and I
              got a good grab on Microsoft Office products also. I got my
              bachelor's degree in Botany from Titumir College which is a
              Institute of Dhaka University. <br /> I am currently enrolled in a
              UI/UX designing Bootcamp on the leading IT Training Center called
              Creative IT. I am available for any kind of job opportunity that
              suits my interests.
            </p>
            <div className="about-action">
              <Button
                link="https://github.com/WahidHoquee/basic-gatsby/blob/main/src/data/file/MyResume.pdf?raw=true"
                target="_blank"
                bgColor="#00cf5d"
                title="Get Resume"
              />
              <Button clickEvent link="#skill" ml="15px" title="My Skills" />
            </div>
          </div>
          <div className="about-image">
            <div className="image">
              <img alt="profile" src={profile} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { About }
