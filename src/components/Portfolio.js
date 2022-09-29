import React, { useState } from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

import { Container } from "./common"

import { portfolios } from "../data"

import "./portfolio.css"
import PortfolioAction from "./PortfolioAction"

const Portfolio = () => {
  const portfoliosName = Object.keys(portfolios)
  const [selectedPortfolio, setSelectedPortfolio] = useState(portfoliosName[0])
  const selectedFeaturedPortfolios = portfolios[selectedPortfolio].filter(
    portfolio => portfolio.type === "featured"
  )
  const selectedPortfolios = portfolios[selectedPortfolio].filter(
    portfolio => portfolio.type === "regular"
  )
  return (
    <div id="portfolio" className="portfolio-area">
      <Container>
        <div className="title left" style={{ height: "160px" }}>
          <p>Portfolio</p>
        </div>
        <div className="portfolios">
          <ul className="portfolio-nav">
            {portfoliosName.map(name => (
              <li
                onClick={() => setSelectedPortfolio(name)}
                className={name === selectedPortfolio ? "active" : ""}
                key={name}
              >
                {name}
              </li>
            ))}
          </ul>
          <div className="portfolio-items portfolios-featured">
            {selectedFeaturedPortfolios.map((portfolio, index) => (
              <div key={index} className="portfolio">
                <div className="">
                  <a href={portfolio.image} target="_blank">
                    <img alt={"suvashini"} src={portfolio.image} />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="portfolio-items portfolios-regular"></div>
          {/* <PortfolioAction /> */}
        </div>
      </Container>
    </div>
  )
}

export { Portfolio }
