import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import ProfilePhoto from "../../containers/ProfilePhoto/ProfilePhoto";
import RotatingCube from "../../containers/skills/RotatingCube";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import { useHistory } from "react-router-dom";
import { style } from "glamor";

export default function Greeting(props) {
  const theme = props.theme;
  const history = useHistory();

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">{greeting.title}</h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                  
                <span>I am </span>
                <span style={{ color: theme.accentColor }}>
                  {greeting.full_name}{", "}
                </span>
                {greeting.subTitle}
              </p>
              <div>
           
              <div>

    
              <SocialMedia />
              <div className="portfolio-repo-btn-div">
                <button
                  {...styles}
                  className="button"
                  onClick={() => {
                    history.push("/contact");
                  }}
                >
                  Contact Me
                </button>
                </div>
              </div>
              </div>
            </div>
          </div>
          
          <div className="greeting-image-div">
          <div className="contact-heading-img-div">
          <ProfilePhoto imageUrl={require(`../../assests/images/profile_photo.jpeg`)} />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
