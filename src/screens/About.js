import React, { useEffect, useState } from "react"
import PreFooter from "../components/ui/preFooter/PreFooter"
import { getAbout } from "../services/api/aboutApi"

import "./about.scss"

function About() {
  const [about, setAbout] = useState({})

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    let aboutResult = await getAbout()
    setAbout(aboutResult.data.about)
  }

  return (
    <div className="about">
      <section>
        <h1>EDUCATION</h1>
        <div className="education">
          <div className="ed-card">
            <h3>2020-2022</h3>
            <h4>Web & Digital Media</h4>
            <p className="lh-100">Scuola Mohole</p>
            <p>MILANO</p>
          </div>
          <div className="ed-card">
            <h3>2016-2020</h3>
            <h4>
              Laurea Triennale in Comunicazione, Innovazione & Multimedialità
            </h4>
            <p>Università degli studi di Pavia</p>
            <p>PAVIA</p>
          </div>
          <div className="ed-card">
            <h3>2011-2016</h3>
            <h4>Diploma Liceo Artistico</h4>
            <p>Liceo Artistico di Brera</p>
            <p>MILANO</p>
          </div>
        </div>
      </section>

      {about.skills && about.skills.length > 0 && (
        <section>
          <h1>SKILLS</h1>
          <div className="skills-container">
            {about.skills.map((skill, index) => {
              return (
                <div key={index} className="single-skill">
                  <img
                    src={require(`../assets/images/skills/${skill.icon}`)}
                    alt={skill.name}
                  />
                  <p className="skill-name">{skill.name}</p>
                </div>
              )
            })}
          </div>
        </section>
      )}

      {about.software && about.software.length > 0 && (
        <section>
          <h1>SOFTWARE</h1>
          <div className="skills-container">
            {about.software.map((skill, index) => {
              return (
                <div key={index} className="single-skill">
                  <img
                    src={require(`../assets/images/skills/${skill.icon}`)}
                    alt={skill.name}
                  />
                  <p className="skill-name">{skill.name}</p>
                </div>
              )
            })}
          </div>
        </section>
      )}

      <PreFooter
        text="Let's work togheter"
        textWidth={200}
        buttonText="contact me"
        buttonLink="mailto:isa.bagnulo@gmail.com"
      />
    </div>
  )
}

export default About
