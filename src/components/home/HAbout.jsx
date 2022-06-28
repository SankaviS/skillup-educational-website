import React from "react";
import OnlineCourses from "../allcourses/OnlineCourses";
import Heading from "../common/heading/Heading";
import "../allcourses/courses.css";
import { coursesCard } from "../../dummydata";
import { useHistory } from "react-router-dom";

const HAbout = () => {
  const history = useHistory();
  const handleAbout = () => history.push("/courses");
  return (
    <>
      <section className="homeAbout">
        <div className="container">
          <Heading
            subtitle="our courses"
            title="explore our popular online courses"
          />

          <div className="coursesCard">
            {/* copy code form  coursesCard */}
            <div className="grid2">
              {coursesCard.slice(0, 3).map((val) => (
                <div className="items">
                  <div className="content flex">
                    <div className="left">
                      <div className="img">
                        <img src={val.cover} alt="" />
                      </div>
                    </div>
                    <div className="text">
                      <h1>{val.coursesName}</h1>
                      <div className="rate">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="details">
                        {val.courTeacher.map((details) => (
                          <>
                            <div className="box">
                              <div className="para"></div>
                            </div>
                            <span>
                              {" "}
                              <label htmlFor="">(5.0)</label> -{" "}
                              {details.totalTime}
                            </span>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="price">
                    <h3>
                      {val.priceAll} / {val.pricePer}
                    </h3>
                  </div>
                  <button className="outline-btn" onClick={handleAbout}>
                    ENROLL NOW !
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <OnlineCourses />
      </section>
    </>
  );
};

export default HAbout;
