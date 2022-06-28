import React from "react";
import { useHistory } from "react-router-dom";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  const navigate = useHistory();
  const go = () => {
    navigate.push("/pricing");
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO SkillUp"
              title="Best Online Education Expertise"
            />
            <p>
              Shop 100,000+ High-Quality On-Demand Online Courses! Find the
              right instructor for you. Choose From 183,000 Online Video Courses
              With New Additions Published Every Month. Download To Your Phone.
              Over 50,000 Instructors. Courses in 60+ Languages.
            </p>
            <button type="button" onClick={go}>
              Get Started Now
            </button>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
