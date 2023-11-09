import { useState } from "react";
import "./App.css";
import "./responsive.css";
import Nabar from "./component/Navbar/Nabar";
import HeroSec from "./component/HeroSec/HeroSec";
import SecondSec from "./component/SecondSec/SecondSec";
import ThirdSec from "./component/ThirdSec/ThirdSec";
import FourthSec from "./component/FourthSec.jsx/FourthSec";
import FifthSec from "./component/FifthSec/FifthSec";
import FooterSec from "./component/FooterSec/FooterSec";

function App() {
  return (
    <>
      <div className="container-fluid p-0 overflow-hidden bg-dark">
        <Nabar />
        <HeroSec />
        <SecondSec />
        <ThirdSec />
        <FourthSec />
        <FifthSec />
        <FooterSec />
      </div>
    </>
  );
}

export default App;
