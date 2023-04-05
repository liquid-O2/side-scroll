import React, { useEffect } from "react"
import Seo from "../components/seo"
import "../sass/site.scss"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// the styles for these sections are in the page.scss
// p.s. feel free to change the class and variable names since these are temporary

const IndexPage = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    let gsapContext

    const pageWrapper = document.querySelector(".page-wrapper")
    gsapContext = gsap.context(() => {
      // -- Only run animations on the specified breakpoint
      const mm = gsap.matchMedia()
      mm.add("(min-width: 918px)", () => {
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
              start: "30% bottom",
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

        const timelineThree = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".fourth-section",
              start: "40% bottom",
              end: "bottom bottom",
              scrub: 1,
            },
          })
          .fromTo(".form-panel", { xPercent: 100 }, { xPercent: 0 })

        const timelineFour = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".fifth-section",
              start: "30% bottom",
              end: "bottom bottom",
              scrub: 1,
            },
          })
          .fromTo(".last-panel", { yPercent: 100 }, { yPercent: 0 })
      })
      window.addEventListener("resize", () => gsap.matchMediaRefresh())
    }, pageWrapper)

    return () => {
      gsapContext.revert()
    }
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
      <section className="fourth-section">
        <div className="form-panel" />
      </section>
      <section className="fifth-section">
        <div className="last-panel" />
      </section>
    </div>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
