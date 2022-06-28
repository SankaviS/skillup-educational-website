import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <br />
            <button style={{ margin: "2px" }}>SUBMIT</button>
          </div>
        </div>
      </section>
      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>ACADEMIA</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>
              Shop 100,000+ High-Quality On-Demand Online Courses! Find the
              right instructor for you. Choose From 183,000 Online Video Courses
              With New Additions Published Every Month. Download To Your Phone.
              Over 50,000 Instructors. Courses in 60+ Languages. .
            </p>

            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-instagram icon"></i>
          </div>
          <div className="box link">
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>

              <li>Courses</li>

              <li>Contact us</li>
            </ul>
          </div>
          <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>

          <div className="box last">
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li>+2 392 3929 210</li>
              <li>info@yourdomain.com</li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>
          Copyright ©2022 All rights reserved | SkillUp.{" "}
          <i className="fa fa-heart"></i>
        </p>
      </div>
    </>
  );
};

export default Footer;
