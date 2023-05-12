import React from "react"
import { Link } from "react-router-dom"

import "./preFooter.scss"

function PreFooter(props) {
  return (
    <section className="pre-footer">
      <p className="text" style={{maxWidth: props.textWidth}}>{props.text}</p>

      <div className="circle">
        <a href={props.buttonLink} target="blank">
          <p>{props.buttonText}</p>
        </a>
      </div>
    </section>
  )
}

export default PreFooter
