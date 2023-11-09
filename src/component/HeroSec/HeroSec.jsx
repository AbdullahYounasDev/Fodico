import React from "react";
import call from "../Images/call.png";
import pngwing4 from "../Images/pngwing 4.png";

const HeroSec = () => {
  return (
    <>
      <div className="container hero-cont my-lg-5 py-lg-5 ">
        <div className="row">
          <div className="col-lg-6 col-md-12 d-flex d-lg-block justify-content-center align-items-center flex-column">
            <h1 className="itim text-white text-center text-lg-start">
              Pizza is not a trend
              <span className="text-orange">, it's a way of life</span>
            </h1>
            <div>
              <button className="itim fw-4 text-white py-2 px-4 border-0 rounded-pill my-5 me-3">
                Order Now
              </button>
              <button className="itim fw-3 text-white py-2 px-4 border-0 rounded-pill my-5 ">
                <img src={call} alt=""></img>
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 ">
            <img
              className="mx-auto d-block img-fluid"
              src={pngwing4}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSec;
