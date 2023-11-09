import React from "react";
import pngwing11 from "../Images/pngwing 11.png";
import pngwing12 from "../Images/pngwing 12.png";

const FifthSec = () => {
  return (
    <>
      <div className="container p-5 mt-5 fifth-sec rounded-5 bg-black">
        <div className="container text-center fifth-sub-sec d-flex justify-content-center align-items-center flex-column gap-3">
          <h2 className="itim text-white">
            Ready to try our <span className="text-orange">Gigantic Pizza</span>
          </h2>
          <p className="p-fs24 poppins text-white my-lg-4">
            We are pssionate about serving the delicious pizza and
            <br className="d-none d-lg-block"></br>
            nutritious food. our commitment to your well being drives
            <br className="d-none d-lg-block"></br>
            us to carefully.
          </p>
          <button className="itim fw-4 text-white py-2 px-4 border-0 rounded-pill">
            Order Now
          </button>
          <div className="position-relative container-fluid">
            <img
              className="fifth-sec-first-img position-absolute d-none d-lg-block z-1 w-25"
              src={pngwing11}
              alt=""
            ></img>
            <img
              className="fifth-sec-second-img position-absolute d-none d-lg-block z-1 w-25"
              src={pngwing12}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default FifthSec;
