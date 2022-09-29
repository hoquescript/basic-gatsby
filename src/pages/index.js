import React from "react";
import {
  Intro,
  LoveToDo,
  Portfolio,
  About,
  Skill,
  Contact,
} from "../components"
import { Layout, SEO } from "../components/common"
import Modals from '../components/common/modal'

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Suvashini Daliya" />
      <Intro />
      <About />
      <Skill />
      <LoveToDo />
      <Portfolio />
      <Contact />
    </Layout>
  </>
)

export default IndexPage
