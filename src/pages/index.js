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
              <p>I am a full-stack digital product designer 
              and developer helping brands and businesses to 
              communicate their mission through design.</p>
            </div>
          </div>
        </div>

      </section>
      
    </Layout>
    )
}


export default IndexPage
