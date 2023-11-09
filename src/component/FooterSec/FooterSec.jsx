import React from "react";
import Group15 from "../Images/Group 15.png";
import Group14 from "../Images/Group 14.png";
import Group4 from "../Images/Mask group4.png";
import Group3 from "../Images/Mask group3.png";
import Group1 from "../Images/Mask group1.png";
const FooterSec = () => {
  return (
    <>
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-4 text-center d-flex justify-content-start align-items-center flex-column mt-3">
            <h5 className="itim text-white mt-2">Location</h5>
            <p className="poppins p-fs24 text-orange mt-4 mb-0">
              3 run lech walese
            </p>
            <p className="poppins p-fs24 text-orange">
              94257 le kermlin-Bicetre
            </p>
          </div>
          <div className="col-lg-4 text-center d-flex justify-content-start align-items-center flex-column mt-3">
            <h5 className="itim text-white mt-2">Application</h5>
            <div>
              <button className="bg-transparent border-0 shadow-none mt-4">
                <img src={Group15} alt=""></img>
              </button>
              <button className="bg-transparent border-0 shadow-none mt-4">
                <img src={Group14} alt=""></img>
              </button>
            </div>
          </div>
          <div className="col-lg-4 d-flex justify-content-center align-items-center flex-row mt-4">
            <button className="bg-transparent border-0 shadow-none">
              <img src={Group4} alt=""></img>
            </button>
            <button className="bg-transparent border-0 shadow-none">
              <img src={Group1} alt=""></img>
            </button>
            <button className="bg-transparent border-0 shadow-none">
              <img src={Group4} alt=""></img>
            </button>
          </div>
        </div>
        <div className="container-fluid bg-white rounded-pill p-1"></div>
        <div className="container-fluid py-3">
          <p className="p-fs20 text-orange text-center">
            &copy; 2023 - 2024 PINZA. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default FooterSec;
