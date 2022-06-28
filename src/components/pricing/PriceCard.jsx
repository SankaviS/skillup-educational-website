import React from "react";
import { price } from "../../dummydata";
import { useHistory } from "react-router-dom";
const PriceCard = () => {
  const history = useHistory();
  const handleAbout = () => history.push("/courses");
  return (
    <>
      {price.map((val) => (
        <div className="items shadow">
          <h4>{val.name}</h4>
          <h1>
            <span>₹</span>
            {val.price}
          </h1>
          <p>{val.desc}</p>
          <button className="outline-btn" onClick={handleAbout}>
            GET STARTED
          </button>
        </div>
      ))}
    </>
  );
};

export default PriceCard;
