import React from "react";
import Header1 from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import EducationImg from "./EducationImg";
import "./EducationComponent.css";
import { Fade } from "react-reveal";
import DegreeCard1 from "../../components/degreeCard/DegreeCard1.js";

function Education(props) {
  const theme = props.theme;
  return (
    <div className="education-main">
      <Header1 theme={props.theme} setTheme={props.setTheme} />
      <div className="basic-education">
        <DegreeCard1  />
        <Educations theme={props.theme} />
        <Certifications theme={props.theme} />
      </div>
      <Footer theme={props.theme} />
    </div>
  );
}

export default Education;
