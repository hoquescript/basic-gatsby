import React from "react"
import {
  Intro,
  LoveToDo,
  Portfolio,
  About,
  Skill,
  Contact,
} from "../components"
import { Layout, SEO } from "../components/common"
import Modals from "../components/common/modal"
import Process from "../components/Process"
import Projects from "../components/Projects"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Suvashini Daliya" />
      <Modals />
      <Intro />
      <About />
      <Process />
      <Projects />
      {/* <Skill />
      <LoveToDo /> */}
      {/* <Portfolio /> */}
      <Contact />
    </Layout>
  </>
)

export default IndexPage
