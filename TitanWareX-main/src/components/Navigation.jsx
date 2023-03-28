import React from "react";
import { NavLink } from "react-router-dom";



function Navigation() {
  return (

        <div className="navigation">
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container">
              <NavLink className="navbar-brand" to="/">
                TitanWareX
              </NavLink>
              <div>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      Home
                      <span className="sr-only">(current)</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/support">
                      Support
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/webide">
                      WebIDE
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/sandbox">
                      Sandbox
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/lib">
                      Library
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      Login
                    </NavLink>
                    </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
  )
}
export default Navigation;