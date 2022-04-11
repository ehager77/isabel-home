import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header
        className="navbar navbar-sticky navbar-expand-lg navbar-dark"
        style={{paddingLeft: "0rem", paddingRight: "1.8rem"}}
      >
        <div className="container-fluid position-relative">
          <a className="navbar-brand" href="/theme-two" style={{paddingTop: "0px", paddingBottom: "0px", paddingLeft: "5%", top:-1}}>
            <img
              className="navbar-brand-regular"
              style={{ maxWidth: "33%"}}
              src={this.props.imageData}
              alt="brand-logo"
            />
            <img
              className="navbar-brand-sticky"
              style={{ maxWidth: "33%" }}
              src={this.props.imageData}
              alt="sticky brand-logo"
            />
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="navbarToggler"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-inner">
            {/*  Mobile Menu Toggler */}
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="navbarToggler"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <nav style={{paddingTop: "6%"}}>
              <ul className="navbar-nav" id="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link scroll" href="#about">
                    Our Approach
                  </a>
                </li>
                <li className="nav-item">
                <a className="nav-link scroll" href="#screenshots">
                  What We Grow
                </a>
              </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    FarmKit
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="/">
                        Greenhouses
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/theme-two">
                        Mobile App
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/theme-three">
                        Advisory, Offtake & Fulfillment
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link scroll" href="#features">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                <a className="nav-link scroll" href="#screenshots">
                  Contact
                </a>
              </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
