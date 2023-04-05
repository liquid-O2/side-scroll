import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ScrollWrapper from "../components/scroll"

const IndexPage = () => (
  <Layout>
    <section className="section-block one"> Section One</section>
    <ScrollWrapper>
      <div className="scroll-item one"> Scroll Item One</div>
      <div className="scroll-item two">Scroll Item Two</div>
      <div className="scroll-item three">Scroll Item Three</div>
      <div className="scroll-item one"> Scroll Item One</div>
    </ScrollWrapper>
    <section className="section-block two">Last Section</section>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
