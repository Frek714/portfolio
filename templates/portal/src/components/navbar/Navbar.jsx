import React, { Component, Fragment } from "react";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className="custom-navbar">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="d-flex justify-content-between">
              <div>
                <a className="navbar-brand" href="#">
                  Navbar
                </a>
              </div>
              <div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <div
                className="collapse navbar-collapse custom-navs-itmes"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  {this.props.navlinks &&
                    this.props.navlinks.map((navlink, index) => {
                      return (
                        <Fragment key={index}>
                          <li className="nav-item">
                            <a
                              className={`nav-link ${
                                index === 0 ? "active" : ""
                              }`}
                              aria-current="page"
                              href={navlink.link}
                            >
                              {navlink.label}
                            </a>
                          </li>
                        </Fragment>
                      );
                    })}
                </ul>
                <div className="d-flex justify-content-end">
                  <button type="button" className="btn btn-outline-danger">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </Fragment>
    );
  }
}
