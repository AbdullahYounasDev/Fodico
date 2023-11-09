import React from "react";
import Group81 from "../Images/Group 81.png";
import pngwing3 from "../Images/pngwing 3.png";

const SecondSec = () => {
  return (
    <div className="contianer-fluid py-5 mt-5 position-relative d-flex flex-column">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12 pt-5 d-none d-lg-block">
            <img
              className="mt-4  z-n1 img-fluid sec-img"
              src={Group81}
              alt=""
            ></img>
          </div>
          <div className="col-lg-7 col-md-12  d-flex d-lg-block justify-content-center align-items-center flex-column">
            <h2 className="itim text-white text-center text-lg-start">
              We provide a <span className="text-orange">Delicious Pizza</span>
            </h2>
            <p className="p-fs24 my-5 text-white text-center text-lg-start">
              We are pssionate about serving the delicious pizza and nutritious
              food. our commitment to your well being drives us to carefully.
            </p>
            <button className="itim fw-4 text-white py-2 px-4 border-0 rounded-pill">
              View menu
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5 mb-5 position-relative w-50 align-self-end">
        <img
          className="second-sec-last-img position-absolute end-0 z-n1 w-25"
          src={pngwing3}
          alt=""
        ></img>
      </div>
    </div>
  );
};

export default SecondSec;
