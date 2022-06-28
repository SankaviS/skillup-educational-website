import React from "react";
import "./courses.css";
import { useHistory } from "react-router-dom";
import { coursesCard } from "../../dummydata";

const CoursesCard = () => {
  const history = useHistory();
  const handleAbout = () => history.push("/pricing");
  return (
    <>
      <section className="coursesCard">
        <div className="container grid2">
          {coursesCard.map((val) => (
            <div className="items">
              <div className="content flex">
                <div className="left"></div>
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
                          <div className="para">
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                        <span>
                          <label htmlFor="">(5.0)</label> - {details.totalTime}
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
      </section>
    </>
  );
};

export default CoursesCard;
