import React, { Component } from "react";

import logo from "../../assets/logo.png";

import "./Navigation.scss";
class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = { isMobileNav: false };
    this.mobileNavLinkRef = React.createRef();

    this.mobileNav = (
      <nav className="nav-mobile">
        <ul className="nav__list nav__list--mobile">
          <li className="nav__item nav__item--mobile">
            <a className="nav__link nav__link--mobile nav__link--current-page" href="#self" ref={this.mobileNavLinkRef}>
              Upcoming show
            </a>
          </li>
          <li className="nav__item nav__item--mobile">
            <a className="nav__link nav__link--mobile" href="#self" onClick={this.toggleMobileNav}>
              Media
            </a>
          </li>
          <li className="nav__item nav__item--mobile">
            <a className="nav__link nav__link--mobile" href="#self" onClick={this.toggleMobileNav}>
              Songs
            </a>
          </li>
          <li className="nav__item nav__item--mobile">
            <a className="nav__link nav__link--mobile" href="#self" onClick={this.toggleMobileNav}>
              Merchandise
            </a>
          </li>
        </ul>
      </nav>
    );
  }

  componentDidUpdate() {
    if (!this.state.isMobileNav) return;

    this.mobileNavLinkRef.current.focus();
  }

  toggleMobileNav = () => {
    this.setState(state => {
      return {
        isMobileNav: !state.isMobileNav,
      };
    });
  };

  render() {
    return (
      <>
        {this.state.isMobileNav && this.mobileNav}
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item nav__item--logo">
              <a className="nav__link nav__link--logo" href="#self">
                <img className="nav__logo" src={logo} alt="logo" />
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link nav__link--current-page" href="#self">
                Upcoming show
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#self">
                Media
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#self">
                Songs
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#self">
                Merchandise
              </a>
            </li>

            <li className="nav__item nav__item--burger">
              <a className="nav__burger" href="#self" onClick={this.toggleMobileNav}>
                <div className="nav__burger-line"></div>
                <div className="nav__burger-line nav__burger-line--small"></div>
              </a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navigation;
