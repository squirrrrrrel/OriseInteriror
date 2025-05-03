import React, { useState } from "react";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="navigation-wrapper">
            <div className="navigation">
              <div className="navigation-left">
                <a
                  href="/#projects"
                  className="navigation-link no-margin w-inline-block"
                >
                  <div className="link-text cc-1">Projects</div>
                </a>
                <a
                  href="/#services"
                  className="navigation-link no-margin w-inline-block"
                >
                  <div className="link-text cc-1">Services</div>
                </a>
                <a
                  href="/#about"
                  className="navigation-link no-margin w-inline-block"
                >
                  <div className="link-text cc-1">About</div>
                </a>
                <a
                  href="/#open"
                  className="navigation-link no-margin w-inline-block"
                >
                  <div className="link-text cc-1">Career</div>
                </a>
              </div>
              <div className="navigation-middle">
                <h1 className="heading h3 no-margin ">Orise Interior</h1>
              </div>
              <div className="navigation-right">
                <nav className="navigation-menu">
                  <a
                    href="/#faq"
                    className="navigation-link no-margin w-inline-block"
                  >
                    <div className="link-text cc-1">FAQ</div>
                  </a>
                  <a
                    href="/#testimonials"
                    className="navigation-link no-margin w-inline-block"
                  >
                    <div className="link-text cc-1">Testimonials</div>
                  </a>
                  <a
                    href="/#clients"
                    className="navigation-link no-margin w-inline-block"
                  >
                    <div className="link-text cc-1">Clients</div>
                  </a>
                  <a
                    href="#contact"
                    className="button w-variant-5c5ca264-bc00-e5df-468d-3a60436ff007 w-inline-block"
                  >
                    <div className="arrow-btn-text w-variant-5c5ca264-bc00-e5df-468d-3a60436ff007">
                      CONTACT
                    </div>
                    <div className="arrow-wrap right">
                      <img
                        alt="erroe"
                        src="https://cdn.prod.website-files.com/5e22878bdaefb83255480164/5e22878bdaefb880d6480186_chevron%20right.svg"
                        className="arrow-icon inverted w-variant-5c5ca264-bc00-e5df-468d-3a60436ff007"
                      />
                      <div className="arrow-extension right w-variant-5c5ca264-bc00-e5df-468d-3a60436ff007"></div>
                    </div>
                  </a>
                </nav>
                <div className="mobile-menu-toggle">
                  <div className="burger-menu">
                    <div className="bar-1"></div>
                    <div className="bar-2"></div>
                    <div className="bar-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-menu">
            <div className="mobile-menu-w">
              <div className="mobile-menu-navigation">
                <div className="grid">
                  <div className="left-side">
                    <a
                      href="#projects"
                      className="mobile-menu-link heading h2 w-inline-block"
                    >
                      <div className="text-block">Projects</div>
                    </a>
                    <a
                      href="#services"
                      className="mobile-menu-link heading h2 w-inline-block"
                    >
                      <div>Services</div>
                    </a>
                    <a
                      href="#about"
                      className="mobile-menu-link heading h2 w-inline-block"
                    >
                      <div>About</div>
                    </a>
                    <a
                      href="#pricing"
                      className="mobile-menu-link heading h2 w-inline-block"
                    >
                      <div>Pricing</div>
                    </a>
                  </div>
                  <div className="right-side">
                    <a
                      href="#faq"
                      className="mobile-menu-link heading h2 w-inline-block"
                    >
                      <div>FAQ</div>
                    </a>
                    <a
                      href="#testimonials"
                      className="mobile-menu-link heading h2 w-inline-block"
                    >
                      <div>Testimonials</div>
                    </a>
                    <a
                      href="#clients"
                      className="mobile-menu-link heading h2 w-inline-block"
                    >
                      <div>Clients</div>
                    </a>
                    <div className="contact-button-wrap">
                      <a
                        href="#"
                        className="button w-variant-92cfbcfe-75be-fb31-402c-ab8cb15294a3 w-inline-block"
                      >
                        <div className="arrow-btn-text w-variant-92cfbcfe-75be-fb31-402c-ab8cb15294a3">
                          Contact
                        </div>
                        <div className="arrow-wrap right w-variant-92cfbcfe-75be-fb31-402c-ab8cb15294a3">
                          <img
                            alt="error"
                            src="https://cdn.prod.website-files.com/5e22878bdaefb83255480164/5e22878bdaefb880d6480186_chevron%20right.svg"
                            className="arrow-icon inverted"
                          />
                          <div className="arrow-extension right w-variant-92cfbcfe-75be-fb31-402c-ab8cb15294a3"></div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
