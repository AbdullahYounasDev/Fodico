import React from "react";
import Group82 from "../Images/Group 82.png";

const ThirdSec = () => {
  return (
    <>
      <div className="container-fluid third-sec pt-1 pb-5 bg-black">
        <div className="container text-lg-center third-sub-sec ">
          <h2 className="itim text-white my-4 text-center">
            Our <span className="text-orange">ingredients</span>
          </h2>
          <div className="row">
            <div className="col-lg-4 d-flex justify-content-around align-items-center flex-column">
              <h2 className="h2-fs60 pb-3 position-relative itim text-white my-3">
                Cheese <span className="text-orange">Pizza</span>
              </h2>
              <h2 className="h2-fs60 pb-3 position-relative itim text-white my-3">
                Pepperoni <span className="text-orange">Pizza</span>
              </h2>
            </div>
            <div className="col-lg-4 d-flex justify-content-center align-items-center">
              <img className="my-3 img-fluid" src={Group82} alt=""></img>
            </div>
            <div className="col-lg-4 d-flex justify-content-around align-items-center flex-column">
              <h2 className="h2-fs60 pb-3 position-relative itim text-white my-3">
                Hawaiian <span className="text-orange">Pizza</span>
              </h2>
              <h2 className="h2-fs60 pb-3 position-relative itim text-white my-3">
                Veggie <span className="text-orange">Pizza</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdSec;
