import React from "react"
import { Link, useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {


  const data = useStaticQuery(graphql`
    query {
      portfolio: file(relativePath: { eq: "partha-jyoti-borah.png" }) {
        childImageSharp {
          fluid(maxWidth: 512, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return(
    <Layout>
      <SEO title="Digital Product Designer & Developer" description="I am a full-stack digital product designer and developer helping brands and businesses to communicate their mission through design."/>
      <section className="hero">
        <div className="container">
          <div className="columns align-items-center">
            <div className="column is-4 is-med-2">
              <Img fluid={data.portfolio.childImageSharp.fluid} fadeIn className="profile-image" alt="Partha Jyoti Borah" draggable="false" />
            </div>
            <div className="column is-4 is-med-2">
              <h1>Hello!</h1>
              <p>I’m a product manager with over 1.5 years of experience in product management and an overall industry experience of 7+ years.</p>
              <p>My prior experience with product design and development allows me to understand a product from all aspects at different stages of its lifecycle.</p>
              <p>My key competencies include:</p>
              <p>Digital Product Management| Product Strategy & Roadmap| Product Documentation| Product Architecture| Scrum| Requirement Analysis| Design Thinking| Wireframing| 
              UI/UX| Information Architecture| Product Architecture| Technology Architecture| MySQL| User Acceptance Testing| Functional Testing</p>
            </div>
          </div>
        </div>

      </section>
      
    </Layout>
    )
}


export default IndexPage
