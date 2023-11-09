import React from "react";
import Group from "../Images/Group 80.png";
import Group1 from "../Images/Group 1.png";
import MaskGroup1 from "../Images/Mask group-1.png";
import MaskGroup2 from "../Images/Mask group-2.png";

const Nabar = () => {
  return (
    <div className="container-fluid bg-white shadow p-0">
      <nav className="navbar">
        <div className="container">
          <a className="navbar-brand w-25" href="#">
            <img className="img-fluid" src={Group} alt=""></img>
          </a>
          <div className="d-flex justify-content-center align-items-center">
            <button className="bg-transparent border-0 shadow-none d-flex">
              <img src={MaskGroup1} alt=""></img>
            </button>
            <button className="bg-transparent border-0 shadow-none d-flex">
              <img src={MaskGroup2} alt=""></img>
            </button>
            <button
              className="navbar-toggler border-0 shadow-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className=" navbar-toggler-icon color-black border-0 shadow-none"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <a className="navbar-brand" href="#">
                  <img className="w-50" src={Group} alt=""></img>
                </a>
                <button
                  type="button"
                  className="btn-close border-0 shadow-none w-25"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <div className="d-flex justify-content-center align-items-center">
                  <button className="itim fw-4 text-white py-1 px-3 border-0 rounded-pill my-5 me-3 fs-5 ">
                    Log In
                  </button>
                  <button className="itim fw-4 text-white py-1 px-3 border-0 rounded-pill my-5 me-3 fs-5">
                    Sign Up
                  </button>
                </div>
                <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a
                      className="nav-link active itim text-black fs-5"
                      aria-current="page"
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active itim text-black fs-5"
                      aria-current="page"
                      href="#"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active itim text-black fs-5"
                      aria-current="page"
                      href="#"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nabar;
