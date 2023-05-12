import React from "react"
import { Link } from "react-router-dom"

import SCREENS from "../../../route/router"

import "./buttonBack.scss"

function ButtonBack() {
  return (
    <div className="container-arrow">
      <Link className="animated-arrow" to={SCREENS.works}>
        <span className="main">
          <span className="the-arrow -right">
            <span className="shaft"></span>
          </span>
          <span className="text">Back to works</span>
        </span>
        <span className="the-arrow -left">
          <span className="shaft"></span>
        </span>
      </Link>
    </div>
  )
}

export default ButtonBack
