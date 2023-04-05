import React, { useEffect } from "react"
import Seo from "../components/seo"
import "../sass/site.scss"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const IndexPage = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const pageWrapper = document.querySelector(".page-wrapper")
    let gsapContext = gsap.context(() => {
      const timelineOne = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".second-section",
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1,
          },
        })
        .fromTo(
          ".coming-soon-message",
          {
            xPercent: -100,
            yPercent: 100,
          },
          { xPercent: 0, yPercent: 0 }
        )

      const timelineTwo = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".third-section",
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1,
          },
        })
        .fromTo(".scroll-image", { xPercent: -100 }, { xPercent: 0 })
        .fromTo(
          ".pink-div",
          { xPercent: 100, yPercent: 50 },
          { xPercent: 0, yPercent: 0 }
        )
    }, pageWrapper)

    return () => gsapContext.revert()
  }, [])

  return (
    <div className="page-wrapper">
      <div className="background-image" />
      <section className="hero-section" />
      <section className="second-section">
        <div className="coming-soon-message" />
      </section>
      <section className="third-section">
        <div className="scroll-image" />
        <div className="pink-div" />
      </section>
    </div>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
