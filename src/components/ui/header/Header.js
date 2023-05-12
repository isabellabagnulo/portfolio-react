import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

import SCREENS from "../../../route/router"

import "./header.scss"

function Header() {
  const [state, setState] = useState({
    route: "/",
    open: false,
    expanded: false
  })

  const location = useLocation()
  console.log("location", location)

  useEffect(() => {
    setState({
      ...state,
      route: location.pathname,
    })
  }, [location.pathname])

  function setOpen() {
    setState({
      ...state,
      open: !state.open,
      expanded: !state.expanded
    })
  }
  return (
    <header>
      {console.log("route", state.route === "/about")}
      <Link to={SCREENS.home}>
        <p
          style={
            state.route === SCREENS.about
              ? { color: "#171717" }
              : { color: "#DAD2C8" }
          }
          className="logo"
        >
          ISABELLA
          <br />
          BAGNULO'S
          <br />
          PORTFOLIO
        </p>
      </Link>
      {state.route === "/" ? (
        <></>
      ) : (
        <nav className={`${state.open && "open "} ${state.route === SCREENS.about ? "dark " : ""}`}>
          <div className="burger" onClick={setOpen}>
            <div className="menu--text">
              <span data-hover className="menu-text">
                Menu
              </span>
              <span data-close className="menu-close">
                Close
              </span>
            </div>
          </div>
          <div className={`nav ${state.expanded && "expanded"}`}>
            <div className="nav__content">
              <ul className="nav__list">
                <li className="nav__list-item" onClick={setOpen}>
                  <Link to={SCREENS.about}>ABOUT</Link>
                </li>
                <li className="nav__list-item" onClick={setOpen}>
                  <Link to={SCREENS.works}>WORKS</Link>
                </li>
              </ul>
              <ul className="menu-social">
                <li>
                  <a
                    target="blank"
                    href="https://www.linkedin.com/in/isabella-bagnulo-492698199/"
                  >
                    <span className="fab fa-linkedin-in"></span>
                  </a>
                </li>
                <li>
                  <a target="blank" href="https://github.com/isabellabagnulo">
                    <span className="fab fa-github"></span>
                  </a>
                </li>
                <li>
                  <a
                    target="blank"
                    href="https://www.behance.net/isabellabagnulo1"
                  >
                    <span className="fab fa-behance"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
