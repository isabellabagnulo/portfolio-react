import React, { useState } from "react"
import { useParams, useLocation } from "react-router-dom"
import ButtonBack from "../components/ui/buttonBack/ButtonBack"
import PreFooter from "../components/ui/preFooter/PreFooter"

import "./work.scss"

function Work() {
  const location = useLocation()
  const [work, setWork] = useState(location.state.work)
  console.log("work", work)
  return (
    <div className="single">

      <section>
        <h1>{work.name}</h1>

        <div className="work-header">
          <div className="work-info">
            <div>
              <div className="single-info">
                <h4>YEAR</h4>
                <p>{work.year}</p>
              </div>

              {work.role && work.role.length > 0 &&
                <div className="single-info">
                  <h4>ROLE</h4>
                  {work.role.map((el, index) => {
                    return(
                      <p key={index}>{el}</p>
                    )
                  })}
                </div>
              }
              
              {work.members && work.members.length > 0 &&
                <div className="single-info">
                  <h4>TEAM MEMBERS</h4>
                  {work.members.map((el, index) => {
                    return(
                      <p key={index}>{el.name}</p>
                    )
                  })}
                </div>
              }
            </div>

            {work.tools && work.tools.length > 0 &&
                <div className="single-info">
                  <h4>TOOLS</h4>
                  {work.tools.map((el, index) => {
                    return(
                      <p key={index}>{el}</p>
                    )
                  })}
                </div>
              }
          </div>

          <img className="cover" src={require(`../assets/images/${(work.name).toLowerCase()}/${work.cover}`)}/>
        </div>
      </section>

      {work.description && work.description.length > 0 &&
        <section className="work-description">

          {work.description.map((el, index) => {
            return(
              <p key={index}>{el}</p>
            )
          })}

        </section>
      }

      <PreFooter text="Check it out" textWidth={120} buttonText="view the project" buttonLink={work.link}></PreFooter>

      <div className="container-buttons">
        <ButtonBack></ButtonBack>
      </div>
    </div>
  )
}

export default Work
