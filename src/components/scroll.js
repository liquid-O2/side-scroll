import React, { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
const ScrollWrapper = ({ children }) => {
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    const wrapper = document.querySelector(".section-wrapper")
    let gsapContext = gsap.context(() => {
      const mainTl = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".section-height",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        })
        .to(".track", {
          xPercent: -100,
          ease: "none",
        })
    }, wrapper)

    function adjustSectionHeight() {
      const sectionHeights = document.querySelectorAll(".section-height")
      sectionHeights.forEach(function (element, index) {
        let trackWidth = element.querySelector(".track").offsetWidth
        element.style.height = trackWidth + "px"
      })
    }
    adjustSectionHeight()
    window.addEventListener("resize", () => adjustSectionHeight())

    return () => {
      gsapContext.revert()
      window.removeEventListener("resize", () => adjustSectionHeight())
    }
  }, [])
  return (
    <div className="section-wrapper">
      <div className="section-height">
        <div className="sticky-element">
          <div className="track">
            <div className="track-flex">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScrollWrapper
