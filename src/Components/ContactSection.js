import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../assets/image/673c93506d1c39f1e358562f_placeholder-3.jpg";
import "../assets/ContactSection.css";

const ContactSection = () => {
  return (
    <>
      <div id="clients">
        <div className="container wide">
          <div>
            <div className="eyebrow w-variant-4fca7595-da52-a65e-31bc-5185e76f6e93">
              <img
                src="https://cdn.prod.website-files.com/672c8290592e2a4498864818/6731be9a3827701c853e3320_star-four-fill.svg"
                loading="lazy"
                alt="error"
                className="eyebrow-icon"
              />
              <div className="eyebrow-text">PAST CLIENTS</div>
            </div>
          </div>
          <div className="spacer _4r"></div>

          <div className="container wide">
            <Marquee direction="left" speed={100} className="dk">
              <img src={img1} alt="" />
              <img src={img1} alt="" />
              <img src={img1} alt="" />
              <img src={img1} alt="" />
              <img src={img1} alt="" />
              <img src={img1} alt="" />
              <img src={img1} alt="" />
            </Marquee>
          </div>
        </div>
      </div>
      <div className="section" id="contact">
        <div className="container wide gray">
          <div className="spacer _4r"></div>
          <div className="container">
            <div className="w-layout-grid _1-2-grid extra-gap">
              <div className="contact-details-wrap">
                <div className="eyebrow-wrap">
                  <div data-wf--eyebrow--variant="base" className="eyebrow">
                    <img
                      src="https://cdn.prod.website-files.com/672c8290592e2a4498864818/6731be9a3827701c853e3320_star-four-fill.svg"
                      loading="lazy"
                      alt="error"
                      className="eyebrow-icon"
                    />
                    <div className="eyebrow-text">CONTACT</div>
                  </div>
                </div>
                <div className="text-box s">
                  <div className="overlay-hidden">
                    <h1 className="heading h2">
                      Ready to transform your space?
                    </h1>
                  </div>
                  <div className="spacer _1r"></div>
                  <p className="paragraph large">
                    Whether you’re ready to start your design project or just
                    have a few questions, our team is here to help.{" "}
                  </p>
                </div>
              </div>
              <div className="contact-form">
                <form>
                  <label className="field-label light">Name</label>
                  <input className="form-text-field w-input" type="text" />
                  <label htmlFor="email-2" className="field-label light">
                    Email Address
                  </label>
                  <input
                    className="form-text-field w-input"
                    maxlength="256"
                    type="email"
                  />
                  <label className="field-label light">Message</label>
                  <input
                    className="form-text-field w-input"
                    maxlength="256"
                    type="text"
                  />
                  <div className="spacer _1r"></div>
                  <input
                    type="submit"
                    className="button light w-button"
                    value="Submit"
                  />
                </form>
              </div>
            </div>
          </div>
          <div className="spacer _4r"></div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
