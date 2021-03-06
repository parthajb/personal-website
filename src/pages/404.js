import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="hero">
	    <div className="container">
	      <div className="columns align-items-center">
	        <div className="column is-12">
	         	<h1>NOT FOUND</h1>
				<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
	        </div>
	      </div>
	    </div>
    </section>
    
  </Layout>
)

export default NotFoundPage
