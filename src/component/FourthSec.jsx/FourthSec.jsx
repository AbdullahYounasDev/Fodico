import React from "react";
import pngwing7 from "../Images/pngwing 7.png";
import pngwing1 from "../Images/pngwing-1.png";
import pngwing from "../Images/pngwing.png";
import star from "../Images/star.png";

const FourthSec = () => {
  return (
    <>
      <div className="container  mt-5 py-3 d-flex justify-content-center align-items-center flex-column position-relative">
        <img
          className="fourth-sec-img position-absolute d-none d-lg-block w-25"
          src={pngwing7}
          alt=""
        ></img>
        <h2 className="text-white itim text-center">
          Try Our Best.<br className="d-none d-lg-block"></br>{" "}
          <span className="text-orange itim text-center mb-5">
            Pizza and more
          </span>
        </h2>
        <h2 className="text-orange itim text-center mb-5"></h2>
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-4 col-md-6 p-4">
              <div className="container-fluid border border-2 border-white rounded-4 pt-4 ps-3 ">
                <div>
                  <img
                    className="img-fluid mx-auto d-block"
                    src={pngwing1}
                    alt=""
                  ></img>
                </div>
                <div>
                  <h3 className="itim text-white ">Couch Tomato Pizza</h3>
                  <p className="itim p-fs20  text-white">
                    tomato, chicken, cheese,<br></br>
                    Red cavier
                  </p>
                  <div className="row">
                    <div className="col-6">
                      <p className="p-fs32 text-white itim">$ 14.2</p>
                    </div>
                    <div className=" col-6 d-flex justify-content-center align-items-center">
                      <img className="star-img" src={star} alt=""></img>
                      <p className="p-fs20 itim text-white text-center">5.0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 p-4 pt-lg-5">
              <div className="container-fluid border border-2 border-white rounded-4 pt-4 ps-3 mt-lg-5 ">
                <div>
                  <img
                    className="img-fluid mx-auto d-block"
                    src={pngwing}
                    alt=""
                  ></img>
                </div>
                <div>
                  <h3 className="itim text-white ">Pizza Capri</h3>
                  <p className="itim p-fs20  text-white">
                    chicken, corn, cheese,<br></br>
                    tomato
                  </p>
                  <div className="row">
                    <div className="col-6">
                      <p className="p-fs32 text-white itim">$ 14.2</p>
                    </div>
                    <div className=" col-6 d-flex justify-content-center align-items-center">
                      <img className="star-img" src={star} alt=""></img>
                      <p className="p-fs20 itim text-white text-center">5.0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 p-4 ">
              <div className="container-fluid border border-2 border-white rounded-4 pt-4 ps-3 ">
                <div>
                  <img
                    className="img-fluid mx-auto d-block"
                    src={pngwing1}
                    alt=""
                  ></img>
                </div>
                <div>
                  <h3 className="itim text-white ">Couch Tomato Pizza</h3>
                  <p className="itim p-fs20  text-white">
                    tomato, chicken, cheese,<br></br>
                    Red cavier
                  </p>
                  <div className="row">
                    <div className="col-6">
                      <p className="p-fs32 text-white itim">$ 14.2</p>
                    </div>
                    <div className=" col-6 d-flex justify-content-center align-items-center">
                      <img className="star-img" src={star} alt=""></img>
                      <p className="p-fs20 itim text-white text-center">5.0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="itim fw-4 text-white py-2 px-4 border-0 rounded-pill my-5">
          Explore full menu
        </button>
      </div>
    </>
  );
};

export default FourthSec;
