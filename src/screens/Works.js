import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import SCREENS from "../route/router"

import { getWorks } from "../services/api/worksApi"

import "./works.scss"

function Works() {
  const [works, setWorks] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    let worksResult = await getWorks()
    console.log(worksResult)
    setWorks(worksResult.data.works)
  }

  const goToWork = (work) => () => {
    navigate(`${SCREENS.work}/${work.id}`, {
      state: {work: work}
    })
  }

  return (
    <div className="works">
      <h1>WORKS</h1>

      {works && works.length > 0 && (
        <div className="work-container">
          {works.reverse().map((work) => {
            return (
              // <Link to={`${SCREENS.work}/${work.id}`} >
                <div className="work-card" key={work.id} onClick={goToWork(work)}>
                  <img
                    className="work-arrow"
                    src={require("../assets/images/arrow.png")}
                    alt="arrow"
                  />
                  <h2>{work.name}</h2>
                  <div className="work-type">
                    <div>
                      {work.role &&
                        work.role.length > 0 &&
                        work.role.map((el, index) => {
                          return <p key={index}>{el}</p>
                        })}
                    </div>
                    <p className="dash-2"> - </p>
                    <p>2022</p>
                  </div>
                </div>
              // </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Works
