import React from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-reveal";
import { style } from "glamor";

function DegreeCard1() {

  const card_body = style({
    width: "900px",
    margin: "20px",
    marginLeft: "345px",
    marginRight: "290px",
    height : "0.001px",
  });

  return (
    <div className="degree-card">
      <Flip left duration={2000}>
      </Flip>
      <Fade right duration={2000} distance="1px">
        <div {...card_body}>
        </div>
      </Fade>
      
    </div>
  );
}

export default DegreeCard1;
